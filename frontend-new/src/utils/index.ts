export function formatDollarToToman(value: number, showCurrency: boolean = true): string {
    const toman = Math.floor(value * 10000); 
    const formatted = toman.toLocaleString('fa');
    return showCurrency ? formatted + ' تومان' : formatted;
  }

export function getLocalizedField(obj: Record<string, string> | null | undefined, locale: string, fallback = ''): string {
  if (!obj) return fallback;
  if (obj[locale]) return obj[locale];
  if (obj.fa) return obj.fa;
  if (obj.en) return obj.en;
  const first = Object.values(obj)[0];
  return first || fallback;
}