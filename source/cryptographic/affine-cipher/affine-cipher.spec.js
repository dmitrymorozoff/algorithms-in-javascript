import AffineCipher from "./affine-cipher";
describe("affine-cipher", () => {
    test("should return zqllusudln after encrypt", () => {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const a = new AffineCipher(alphabet, 3, 4);
        expect(a.encrypt("helloworld")).toBe("zqllusudln");
    });
    test("should return HELLOWORLD after decrypt", () => {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const a = new AffineCipher(alphabet, 3, 4);
        expect(a.decrypt("zqllusudln")).toBe("helloworld");
    });
});
