import linearSearch from "./linear-search";
describe("linear-search", () => {
    test("should return true if found", () => {
        const testArray = [22, 11, 5, 74, 8];
        expect(linearSearch(testArray, 22)).toBe(true);
        expect(linearSearch(testArray, 11)).toBe(true);
        expect(linearSearch(testArray, 5)).toBe(true);
        expect(linearSearch(testArray, 74)).toBe(true);
        expect(linearSearch(testArray, 8)).toBe(true);
    });

    test("should return false if not found", () => {
        const testArray = [22, 11, 5, 74, 8];
        expect(linearSearch(testArray, 10)).toBe(false);
    });
});
