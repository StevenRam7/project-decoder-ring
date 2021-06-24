const polybiusModule = require("../src/polybius");
const expect = require("chai").expect;

describe("polybiusModule", () => {
  it("should encode or decode the given message based on the polybius grid", () => {
    const actual = polybiusModule.polybius("Hello world", encode = true);
    const expected = '3251131343 2543241341';
    expect(actual).to.equal(expected);
  })
})
