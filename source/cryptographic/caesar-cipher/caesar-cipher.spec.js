import CaesarCipher from "./caesar-cipher";
describe("caesar-cipher", () => {
    test("should return khoor zruog after encrypt", () => {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const characters = "/*  ";
        const c = new CaesarCipher(alphabet, characters, 3);
        expect(c.encrypt("hello world")).toBe("khoor zruog");
    });
    test("should return hello world after decrypt", () => {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const characters = "/*  ";
        const c = new CaesarCipher(alphabet, characters, 3);
        expect(c.decrypt("khoor zruog")).toBe("hello world");
    });
});
