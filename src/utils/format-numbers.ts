/**
 * Format angka menjadi format yang mudah dibaca
 * @param num - Angka yang akan diformat
 * @returns String angka yang sudah diformat
 */
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

/**
 * Format angka dengan separator ribuan
 * @param num - Angka yang akan diformat
 * @returns String angka dengan separator ribuan
 */
export function formatWithSeparator(num: number): string {
  return num.toLocaleString('en-US')
}
