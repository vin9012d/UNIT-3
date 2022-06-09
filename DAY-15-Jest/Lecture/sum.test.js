import { exportAllDeclaration } from "@babel/types";
import TestRunner from "jest-runner";
import sum from "./sum.js";

//run a function
//set the expectation -3
//sum()?

//via jest
test("testing the function",()=>{
    //set our expectation after runnig sum()
    expect(sum(1,2)).toBe(3);
});