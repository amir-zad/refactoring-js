import statement from "./statement";
import rstatement from "./rStatement";
import { invoices, plays } from "./data";

describe("Statement", () => {
  it("prints statement for BigCo", () => {
    const params = [invoices[0], plays];
    expect(statement(...params)).toBe(rstatement(...params));
  });
});
