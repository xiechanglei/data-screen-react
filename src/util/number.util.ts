/**
 * Pads a number with leading zeros
 * @param size
 */
export const padNumber = (size: number) => (num: number) => num.toString().padStart(size, "0")

/**
 * Pads a time number with leading zeros
 */
export const padTimeNumber = padNumber(2)