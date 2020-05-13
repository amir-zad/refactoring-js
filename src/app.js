import data from "./statement/data";
import rStatement from "./statement/rStatement";

console.log("This is app.js!");
const { invoices, plays } = data;
console.log("rStatment :>> ", rStatement(invoices[0], plays));
