const ceasarModule = require("../src/caesar");
const expect = require("chai").expect;

describe("ceaserModule", () => {
    it("should perform a Caesar shift while ignoring caps & spaces", () => {
        const actual = ceasarModule.caesar("a message", 3, encode = true);
        const expected = 'd phvvdjh';
        expect(actual).to.equal(expected);
    })
})