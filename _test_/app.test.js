var hello = require("./app.js").hello;
describe("hello", () => {
    it("should output hello", () => {
        expect(hello()).toBe ("hello");
    });

});

console.log(hello());