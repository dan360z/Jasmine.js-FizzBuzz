describe("What Can I Drink Game", function() {
    
    describe("Checks Age", function() {
        
        it("should return Sorry. I can’t tell what drink because that age is incorrect!", function() {
            expect(whatCanIDrink(-1)).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
        it("should return Drink Toddy", function() {
            expect(whatCanIDrink(10)).toBe("Drink Toddy");
        });
        it("should return Drink Coke", function() {
            expect(whatCanIDrink(16)).toBe("Drink Coke");
        });
        it("should return Drink Beer", function() {
            expect(whatCanIDrink(20)).toBe("Drink Beer");
        });
        it("should return Drink Whiskey", function() {
            expect(whatCanIDrink(50)).toBe("Drink Whiskey");
        });
        it("should return Sorry. I can’t tell what drink because that age is incorrect!", function() {
            expect(whatCanIDrink("string")).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
        });
    });
});