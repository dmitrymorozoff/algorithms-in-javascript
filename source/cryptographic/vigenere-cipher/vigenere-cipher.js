import { repeatString } from "../../utils/helpers.js";

export default class Vigenere {
    constructor(alphabet) {
        this.alphabet = alphabet;
        this.square = [];
    }
    // Генерируем квадрат Виженера
    generateSquare() {
        for (let i = 0; i < this.alphabet.length; i++) {
            let row = this.alphabet.slice(i);
            row += this.alphabet.slice(0, i);
            this.square.push(row);
        }
    }
    getSquare() {
        return this.square;
    }
    encrypt(message, key) {
        let encryptMessage = "";
        // Дублируем ключ до длины сообщения
        let newKey = repeatString(key, message);
        // Генерируем квадрат Виженера
        this.generateSquare();
        for (let it = 0; it < message.length; it++) {
            // Индекс строки раный символу сообщения
            let i = this.alphabet.indexOf(message[it]);
            // Индекс колонки раный символу ключа
            let j = this.alphabet.indexOf(newKey[it]);
            // Зашифрованный символ равный пересечению индекса строки и колонки
            encryptMessage += this.square[i][j];
        }
        return encryptMessage;
    }
    decrypt(message, key) {
        let decryptMessage = "";
        let newKey = repeatString(key, message);
        this.generateSquare();
        for (let it = 0; it < message.length; it++) {
            // Берем символ ключа и ищем индекс строки с данным символом
            let i = this.alphabet.indexOf(newKey[it]);
            let j = this.square[i].indexOf(message[it]);
            decryptMessage += this.alphabet[j];
        }
        return decryptMessage;
    }
}
