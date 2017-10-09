import Vigenere from "./vigenere-cipher";
describe("vigenere-cipher", () => {
    test("should return SIXZBHSDZQ after encrypt", () => {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const v = new Vigenere(alphabet);
        expect(v.encrypt("HELLOWORLD", "LEMON")).toBe("SIXZBHSDZQ");
    });
    test("should return HELLOWORLD after decrypt", () => {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const v = new Vigenere(alphabet);
        expect(v.decrypt("SIXZBHSDZQ", "LEMON")).toBe("HELLOWORLD");
    });
});
