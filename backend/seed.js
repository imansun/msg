const bcrypt = require('bcryptjs');
const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '97531372',
  database: 'messenger',
});

(async () => {
  const hash = await bcrypt.hash('admin123', 10);
  await pool.query(
    "INSERT INTO \"user\" (username, password, \"isAdmin\", \"isApproved\") VALUES ('admin', '" + hash + "', true, true) ON CONFLICT (username) DO NOTHING"
  );
  console.log('Admin created - username: admin, password: admin123');
  await pool.end();
})();
