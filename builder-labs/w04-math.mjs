export const DEFAULT_TAX_RATE = 0.08;

export function calculateTax(amount, rate = DEFAULT_TAX_RATE) { return amount * rate; }