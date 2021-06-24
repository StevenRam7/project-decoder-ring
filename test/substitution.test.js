const substitutionModule = require("../src/substitution");
const expect = require("chai").expect;

describe("substitutionModule", () => {
  it("should encode or decode the given message based on the given alphabet", () => {
    const actual = substitutionModule.substitution('yp ysii.rs', '.waeszrdxtfcygvuhbijnokmpl', encode = false);
    const expected = 'my message';
    expect(actual).to.equal(expected);
  })
})