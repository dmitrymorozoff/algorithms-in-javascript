import beadSort from "./bead-sort";

describe("bead-sort", () => {
    test("should return [1,2,3,4,5,6] if sort", () => {
        const testArray = [3, 1, 2, 4, 6, 5];
        expect(beadSort(testArray)).toEqual([1, 2, 3, 4, 5, 6]);
    });

    test("should return [12,22,44,45,56,76] if sort", () => {
        const testArray = [22, 12, 45, 44, 76, 56];
        expect(beadSort(testArray)).toEqual([12, 22, 44, 45, 56, 76]);
    });
});
