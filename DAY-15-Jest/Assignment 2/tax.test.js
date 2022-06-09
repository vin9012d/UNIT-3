import tax from "./tax.js";

test("testing the function",()=>{
    expect(tax(500000)).toBe(25000);
})
