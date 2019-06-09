describe("My fizzBuzz Function", function() {
    describe("Functionality Tests", function() {
        it("should return FizzBuzz", function() {
            expect(fizzBuzz(15)).toBe("FizzBuzz");
        });
        it("should return fizz", function() {
            expect(fizzBuzz(3)).toBe("Fizz");
        });
        it("should return Buzz", function() {
            expect(fizzBuzz(5)).toBe("Buzz");
        });
        it("should return the number variable", function() {
            expect(fizzBuzz(2)).toBe(2);
        });
        it("should return Invalid input", function() {
            expect(fizzBuzz("Hello")).toBe("Invalid Input");
        });
    });
});