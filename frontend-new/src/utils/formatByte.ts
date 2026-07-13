/**
 * Converts a number of bytes into a human-readable format (e.g., KB, MB, GB).
 *
 * @param The number of bytes to format.
 * @param The base value for the unit conversion (e.g., 1000 for decimal, 1024 for binary).
 * @param The number of decimal places to include in the formatted output.
 * @returns The formatted string with the appropriate size unit.
 * @throws If the input is not a valid number or is negative.
 */


export function formatBytes(
  bytes: number,
  base: number = 1000,
  precision: number = 2
): string {
  if (typeof bytes !== "number" || isNaN(bytes) || bytes < 0) {
    throw new Error("ورودی باید یک عدد غیر منفی باشد.");
  }
  if (typeof base !== "number" || base <= 0) {
    throw new Error("پایه باید یک عدد مثبت باشد.");
  }
  if (typeof precision !== "number" || precision < 0) {
    throw new Error("تعداد اعشار باید یک عدد غیر منفی باشد.");
  }

  if (bytes === 0) return "۰ بایت";

  const sizes = ["بایت", "کیلوبایت", "مگابایت", "گیگابایت", "ترابایت", "پتابایت"];
  const i = Math.floor(Math.log(bytes) / Math.log(base));

  // تبدیل اعداد به فارسی
  function toPersianDigits(str: string) {
    return str.replace(/\d/g, (d) =>
      "۰۱۲۳۴۵۶۷۸۹"[parseInt(d, 10)]
    );
  }

  const value = (bytes / Math.pow(base, i)).toFixed(precision);
  return `${toPersianDigits(value)} ${sizes[i]}`;
}
