// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar.js");

describe("Checking if input is valid", () => {
  it("should return false if shift input is 0", () => {
  const actual = caesar("message", 0);
  expect(actual).to.be.false;
    });
  });

describe("Checking if input is valid", () => {
  it("should return false if shift input is less than -25", () => {
  const actual = caesar("message", -26);
  expect(actual).to.be.false;
    });
  });

describe("Checking if input is valid", () => {
  it("should return false if shift input is greater than 25", () => {
  const actual = caesar("message", 26);
  expect(actual).to.be.false;
    });
  });

describe("Checking if input is valid", () => {
  it("should return false if shift input is not present", () => {
  const actual = caesar("message");
  expect(actual).to.be.false;
    });
  });

describe("Checking if Caesar shift works properly", () => {
  it("should return properly encoded message ignoring capital letters", () => {
  const actual = caesar("THINKFUL", 3);
  const expected = "wklqnixo"
  expect(actual).to.eql(expected);
    });
  });

describe("Checking if Caesar shift works properly", () => {
  it("should return properly encoded message that handles shifts that go past the end of the alphabet.", () => {
  const actual = caesar("thinkful", 3);
  const expected = "wklqnixo"
  expect(actual).to.eql(expected);
    });
  });

describe("Checking if Caesar shift works properly", () => {
  it("should return properly decoded/encoded message that maintains spaces and other nonalphabetic symbols.", () => {
  const actual = caesar("This is a secret message!",-3);
  const expected = "qefp fp x pbzobq jbppxdb!"
  expect(actual).to.eql(expected);
    });
  });

describe("Checking if Caesar shift works properly", () => {
  it("should return properly decoded message that maintains spaces and other nonalphabetic symbols.", () => {
  const actual = caesar("BPQA qa I amkzmb umaaiom!", 8, false);
  const expected = "this is a secret message!"
  expect(actual).to.eql(expected);
    });
  });