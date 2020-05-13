import statement from "./statement";
import rstatement from "./rStatement";
import data from "./data";

describe("Statement", () => {
  it("prints statement for BigCo", () => {
    const { invoices, plays } = data;
    expect(statement(invoices[0], plays)).toBe(rstatement(invoices[0], plays));
  });
});
