import radixSort from "./radix-sort";

describe("radix-sort", () => {
    test("should return [1, 22, 44, 45, 56, 76, 123, 5525, 54446785] if sort", () => {
        const testArray = [22, 123, 45, 44, 76, 1, 54446785, 5525, 56];
        expect(radixSort(testArray, 8, 10)).toEqual([
            1,
            22,
            44,
            45,
            56,
            76,
            123,
            5525,
            54446785
        ]);
    });
});
