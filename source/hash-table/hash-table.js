class HashTable {
    constructor(size) {
        // размер таблицы
        this.size = size;
        this.table = [];
    }
    hashKey(key) {
        let hash = 0;
        // «Хеш-код» как остаток от деления на число всех возможных «хешей»
        hash = Math.floor(key % this.size);
        return hash;
    }
    get(key) {
        const address = this.hashKey(key);
        return this.table[address].value;
    }
    set(key, value) {
        const address = this.hashKey(key);
        this.table[address] = { key: key, value: value };
    }
    remove(key) {
        const address = this.hashKey(key);
        delete this.table[address];
    }
    print() {
        for (var i = 0; i < this.size; i++) {
            if (!!this.table[i]) {
                console.log(
                    `Key: ${this.table[i].key}, Value: ${this.table[i].value}`
                );
            }
        }
    }
}
