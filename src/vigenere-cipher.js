const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
   
    constructor(data = true) {
        this.data = data;
        this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    encrypt(message, key) {
        if(!message || !key) throw new Error();
        let result = [];
        let count = 0;
        for (let i = 0; i < message.length; i++) {
            const position = this.alphabet.indexOf(message[i].toUpperCase())
            if (position !== -1) {
                const shift = this.alphabet.indexOf(key[count % key.length].toUpperCase());
                count++;
                result.push(this.alphabet[(position + shift) % this.alphabet.length]);
            } else {
                result.push(message[i])
            }  
        }
        return this.data ? result.join('') : result.reverse().join('');
    }

    decrypt(message, key) {
        if(!message || !key) throw new Error();
        let result = [];
        let count = 0;
        for (let i = 0; i < message.length; i++) {
            const position = this.alphabet.indexOf(message[i].toUpperCase())
            if (position !== -1) {
                const shift = this.alphabet.indexOf(key[count % key.length].toUpperCase());
                count++;
                result.push(this.alphabet[(position + this.alphabet.length - shift) % this.alphabet.length]);
            } else {
                result.push(message[i])
            }  
        }
        return this.data ? result.join('') : result.reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
