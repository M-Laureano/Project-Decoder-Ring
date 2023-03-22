const expect = require("chai").expect;
const { polybius } = require("../src/polybius.js");

//When encoding, it translates the letters i and j to 42.

//When decoding, it translates 42 to (i/j).

//It ignores capital letters. (For example, the results of A Message and a message should be the same.)

//It maintains spaces in the message, before and after encoding or decoding.

describe("Checking if input is valid", () => {
  it("should encode a message by translating each letter to number pairs", () => {
    const message = "My message"
    const actual = polybius(message);
    expect(actual).to.equal("2345 23513434112251");
  });
});

describe("Checking if input is valid", () => {
  it("should translate both 'i' & 'j' to 42", () => {
    const message = "jiggle"
    const actual = polybius(message);
    expect(actual).to.equal("424222221351");
  });
});

describe("Checking if input is valid", () => {
  it("should translate both 'i' & 'j' to 42", () => {
    const message = "424222221351"
    const actual = polybius(message);
    expect(actual).to.equal("(i/j)(i/j)ggle");
  });
});

describe("Checking if input is valid", () => {
  it("should decode a message by translating each pair of numbers into a letter", () => {
    const message = '23513434112251'
    const actual = polybius(message);
    expect(actual).to.equal("message");
  });
});

describe("Checking if input is valid", () => {
  it("should leave spaces as is", () => {
    const message = '2345 23513434112251'
    const actual = polybius(message);
    expect(actual).to.equal("my message");
  });
});