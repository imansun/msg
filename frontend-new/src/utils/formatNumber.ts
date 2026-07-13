/**
 * Formats a number into a human-readable format with suffixes (e.g., "k", "M", "B", "T").
 *
 * @param The number to format.
 * @param The number of decimal places to include in the formatted output.
 * @returns The formatted number with the appropriate suffix.
 * @throws If `num` is not a number or `precision` is not a valid non-negative number.
 */
export function formatNumber(num: number, precision: number = 2): string {
  if (typeof num !== "number" || isNaN(num)) {
    throw new Error("ورودی باید یک عدد معتبر باشد.");
  }
  if (typeof precision !== "number" || precision < 0) {
    throw new Error("Precision باید یک عدد غیر منفی باشد.");
  }

  const map: { suffix: string; threshold: number }[] = [
    { suffix: "تریلیون", threshold: 1e12 },  // T → تریلیون
    { suffix: "میلیارد", threshold: 1e9 },   // B → میلیارد
    { suffix: "میلیون", threshold: 1e6 },    // M → میلیون
    { suffix: "هزار", threshold: 1e3 },      // k → هزار
    { suffix: "", threshold: 1 },             // عدد کمتر از هزار بدون پسوند
  ];

  // Find the appropriate suffix for the given number
  const found = map.find((x) => Math.abs(num) >= x.threshold);
  if (found) {
    // Format the number with the chosen suffix, remove trailing zeros if needed
    const formattedValue = (num / found.threshold).toFixed(precision);
    return `${parseFloat(formattedValue)}${found.suffix}`;
  }

  // Return the number as-is if it's less than 1,000
  return num.toString();
}
