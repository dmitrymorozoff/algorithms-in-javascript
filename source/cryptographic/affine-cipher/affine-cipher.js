export default class AffineCipher {
    constructor(alphabet, a, b) {
        this.alphabet = alphabet.toLowerCase();
        // a: 1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23 и 25
        this.a = a;
        this.b = b;
    }
    encrypt(message) {
        let encryptMessage = "";
        for (let i = 0; i < message.length; i++) {
            // encryptChar = (ax + b) mod alphabet.length
            let encryptChar =
                (this.a * this.alphabet.indexOf(message[i].toLowerCase()) +
                    this.b) %
                this.alphabet.length;

            encryptMessage += this.alphabet[encryptChar];
        }
        return encryptMessage;
    }
    decrypt(message) {
        let decryptMessage = "";
        let aInverse = 0;
        let flag = 0;
        for (let i = 0; i < message.length; i++) {
            flag = (this.a * i) % 26;
            if (flag) {
                aInverse = i;
            }
        }
        for (let i = 0; i < message.length; i++) {
            // decryptChar = a-1 * (y + alphabet.length - b) mod alphabet.length
            let decryptChar =
                (aInverse *
                    (this.alphabet.indexOf(message[i].toLowerCase()) +
                        this.alphabet.length -
                        this.b)) %
                this.alphabet.length;
            decryptMessage += this.alphabet[decryptChar];
        }
        return decryptMessage;
    }
}
