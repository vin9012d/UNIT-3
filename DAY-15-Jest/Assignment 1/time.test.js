
//   import { exportAllDeclaration } from "@babel/types";
// import TestRunner from "jest-runner";
// import sum from "./sum.js";

  import time from "./time.js"
  

  test("testing the function",()=>{
    //set our expectation after runnig sum()
    expect(time(5200)).toBe(`5 seconds`);
    // expect(time(60000)).toBe(`1 minutes 0 seconds`);
    // expect(time(180000)).toBe(`3 minutes 0 seconds`);
    // expect(time(200000)).toBe(`3 minutes 20 seconds`);
});
  test("testing the function",()=>{
    //set our expectation after runnig sum()
    // expect(time(5200)).toBe(`5 seconds`);
    expect(time(60000)).toBe(`1 minutes 0 seconds`);
    // expect(time(180000)).toBe(`3 minutes 0 seconds`);
    // expect(time(200000)).toBe(`3 minutes 20 seconds`);
});
  test("testing the function",()=>{
    //set our expectation after runnig sum()
    // expect(time(5200)).toBe(`5 seconds`);
    // expect(time(60000)).toBe(`1 minutes 0 seconds`);
    expect(time(180000)).toBe(`3 minutes 0 seconds`);
    // expect(time(200000)).toBe(`3 minutes 20 seconds`);
});
  test("testing the function",()=>{
    //set our expectation after runnig sum()
    // expect(time(5200)).toBe(`5 seconds`);
    // expect(time(60000)).toBe(`1 minutes 0 seconds`);
    // expect(time(180000)).toBe(`3 minutes 0 seconds`);
    expect(time(200000)).toBe(`3 minutes 20 seconds`);
});  