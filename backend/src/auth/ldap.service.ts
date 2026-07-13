import * as ldap from 'ldapjs';

const AD_URL = 'ldap://172.25.0.20:389';
const AD_BASE_DN = 'DC=grandmaghsoud,DC=ir';
const AD_BIND_DN = 'ldap_reader@grandmaghsoud.ir';
const AD_BIND_PASSWORD = 'zxc97531372';

export type AdUserInfo = {
  username: string;
  displayName: string | null;
  mail: string | null;
};

function createClient(): ldap.Client {
  return ldap.createClient({ url: AD_URL });
}

function bind(client: ldap.Client, dn: string, password: string): Promise<void> {
  return new Promise((resolve, reject) => {
    client.bind(dn, password, (err) => (err ? reject(err) : resolve()));
  });
}

function parseEntry(entry: any): Record<string, string> {
  const attrs: Record<string, string> = {};
  const pojo = entry.pojo ?? entry;
  const list = pojo?.attributes ?? [];
  for (const a of list) {
    attrs[a.type] = Array.isArray(a.values) ? a.values[0] ?? '' : String(a.values ?? '');
  }
  return attrs;
}

function searchOne(
  client: ldap.Client,
  baseDn: string,
  opts: ldap.SearchOptions,
): Promise<Record<string, string> | null> {
  return new Promise((resolve, reject) => {
    client.search(baseDn, opts, (err, res) => {
      if (err) return reject(err);
      let found: Record<string, string> | null = null;
      res.on('searchEntry', (entry) => {
        if (found) return;
        found = parseEntry(entry);
      });
      res.on('error', reject);
      res.on('end', () => resolve(found));
    });
  });
}

function searchAll(
  client: ldap.Client,
  baseDn: string,
  opts: ldap.SearchOptions,
): Promise<Record<string, string>[]> {
  return new Promise((resolve) => {
    client.search(baseDn, opts, (err, res) => {
      if (err) return resolve([]);
      const results: Record<string, string>[] = [];
      res.on('searchEntry', (entry) => {
        results.push(parseEntry(entry));
      });
      res.on('error', () => resolve(results));
      res.on('end', () => resolve(results));
    });
  });
}

export async function lookupAdUser(username: string): Promise<AdUserInfo | null> {
  const client = createClient();
  try {
    await bind(client, AD_BIND_DN, AD_BIND_PASSWORD);
    const entry = await searchOne(client, AD_BASE_DN, {
      scope: 'sub',
      filter: `(sAMAccountName=${username})`,
      attributes: ['displayName', 'mail', 'sAMAccountName'],
      sizeLimit: 1,
    });
    if (!entry) return null;
    return {
      username: entry.sAMAccountName ?? username,
      displayName: entry.displayName || null,
      mail: entry.mail || null,
    };
  } catch {
    return null;
  } finally {
    client.unbind();
  }
}

export async function searchAdUsers(query: string): Promise<AdUserInfo[]> {
  const client = createClient();
  try {
    await bind(client, AD_BIND_DN, AD_BIND_PASSWORD);
    const filter = query
      ? `(&(objectCategory=person)(objectClass=user)(|(sAMAccountName=*${query}*)(displayName=*${query}*)))`
      : '(&(objectCategory=person)(objectClass=user))';
    const entries = await searchAll(client, AD_BASE_DN, {
      scope: 'sub',
      filter,
      attributes: ['displayName', 'mail', 'sAMAccountName'],
      sizeLimit: 50,
    });
    return entries.map((e) => ({
      username: e.sAMAccountName ?? '',
      displayName: e.displayName || null,
      mail: e.mail || null,
    }));
  } catch {
    return [];
  } finally {
    client.unbind();
  }
}
