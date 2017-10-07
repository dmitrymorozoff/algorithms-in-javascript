import LinearHashing from "./linear-hashing";
describe("linear-hashing", () => {
    test("should return 2", () => {
        const lh = new LinearHashing(10);
        expect(lh.hashKey(32)).toBe(2);
    });
    test("should return object with key 9", () => {
        const lh = new LinearHashing(6);
        lh.set(9, 74);
        lh.set(25, 378);
        expect(lh.get(9)).toEqual({ key: 9, value: 74 });
    });
    test("should return true if remove node", () => {
        const lh = new LinearHashing(6);
        lh.set(9, 74);
        lh.set(25, 378);
        expect(lh.remove(9)).toBe(true);
    });
});
