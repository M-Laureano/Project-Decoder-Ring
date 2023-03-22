// Write your tests here!
const expect = require("chai").expect;
const {substitution} = require("../src/substitution.js");

describe("Checking if input is valid", () => {
  it("should return false if alphabet is missing", () => {
    let input = "bhsdfibailfbpabfal" 
    let alphabet = ''
  const actual = substitution(input, alphabet, encode = true);
  expect(actual).to.be.false;
    });
  });
describe("Checking if input is valid", () => {
  it("should return false if alphabet is less than 26 characters", () => {
    let input = "bhsdfibailfbpabfal" 
    let alphabet = '12345678' 
  const actual = substitution(input, alphabet, encode = true);
  expect(actual).to.be.false;
    });
  });
describe("Checking if input is valid", () => {
  it("should return false if alphabet dose not contain unique characters", () => {
    let input = "bhsdfibailfbpabfalqqqqqqqq" 
    let alphabet = '12345678912345678912345678' 
  const actual = substitution(input, alphabet, encode = true);
  expect(actual).to.be.false;
    });
  });