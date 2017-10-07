export default class LinearHashing {
    constructor(size) {
        this.size = size;
        this.table = [];
    }
    hashKey(key) {
        let hash = 0;
        hash = Math.floor(key % this.size);
        return hash;
    }
    get(key) {
        const address = this.hashKey(key);
        if (this.table[address] !== undefined) {
            const linkedList = this.table[address];
            for (let node of linkedList) {
                if (node.key === key) {
                    return node;
                }
            }
        }
    }
    set(key, value) {
        const address = this.hashKey(key);
        if (this.table[address] === undefined) {
            this.table[address] = [];
            this.table[address].push({ key: key, value: value });
        } else {
            this.table[address].push({ key: key, value: value });
        }
    }
    remove(key) {
        const address = this.hashKey(key);
        if (this.table[address] !== undefined) {
            var linkedList = this.table[address];
            for (let index = 0; index < linkedList.length; index++) {
                if (linkedList[index].key === key) {
                    linkedList.splice(index, 1);
                    return true;
                }
            }
        }
        return undefined;
    }
    print() {
        let list = "";
        for (var i = 0; i < this.size; i++) {
            if (!!this.table[i]) {
                for (let j = 0; j < this.table[i].length; j++) {
                    list = list + " " + this.table[i][j].value;
                }
                console.log(list);
                list = "";
            }
        }
    }
}
