export default class CaesarCipher {
    constructor(alphabet, characters, shift) {
        this.alphabet = alphabet.toLowerCase();
        this.characters = characters;
        this.shift = shift;
        this._shiftedAlphabet = "";
    }
    _shiftAlhabet() {
        this._shiftedAlphabet = this.alphabet.slice(this.shift);
        this._shiftedAlphabet += this.alphabet.slice(0, this.shift);
        this._shiftedAlphabet += this.characters;
        this.alphabet += this.characters;
    }
    encrypt(message) {
        let encryptMessage = "";
        this._shiftAlhabet();
        for (let i = 0; i < message.length; i++) {
            let letterPositionInAlphabet = this.alphabet.indexOf(message[i]);
            encryptMessage += this._shiftedAlphabet[letterPositionInAlphabet];
        }
        return encryptMessage;
    }
    decrypt(message) {
        let decryptMessage = "";
        this._shiftAlhabet();
        for (let i = 0; i < message.length; i++) {
            let letterPositionInAlphabet = this._shiftedAlphabet.indexOf(
                message[i]
            );
            decryptMessage += this.alphabet[letterPositionInAlphabet];
        }
        return decryptMessage;
    }
}
