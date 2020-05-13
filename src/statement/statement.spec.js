import statement from "./statement";
import rstatement from "./rStatement";
import { invoices, plays } from "./data";

describe("Statement", () => {
  it("should be idential to the refactored one", () => {
    const params = [invoices[0], plays];
    expect(statement(...params)).toBe(rstatement(...params));
  });
});
