import binarySearch from "./binary-search";
describe("binary-search", () => {
    test("should return true if found", () => {
        const testArray = [1, 3, 5, 7, 8];
        expect(binarySearch(testArray, 1)).toBe(true);
        expect(binarySearch(testArray, 3)).toBe(true);
        expect(binarySearch(testArray, 5)).toBe(true);
        expect(binarySearch(testArray, 7)).toBe(true);
        expect(binarySearch(testArray, 8)).toBe(true);
    });

    test("should return false if not found", () => {
        const testArray = [1, 3, 5, 7, 8];
        expect(binarySearch(testArray, 10)).toBe(false);
    });
});
