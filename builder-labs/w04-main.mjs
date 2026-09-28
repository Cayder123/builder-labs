import { calculateTax, DEFAULT_TAX_RATE } from "./w04-math.mjs";

const amount = 1000000;
const tax = calculateTax(amount);

console.log("Số tiền:", amount);
console.log("Thuế:", DEFAULT_TAX_RATE);
console.log("Tiền thuế trên số tiền:", tax);