class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

export default class DoublyList {
    constructor(data) {
        this.head = null;
        this.size = 0;
    }
    addFirst(data) {
        const newNode = new Node(data);
        if (this.head === null && this.size < 1) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }
    addLast(data) {
        const newNode = new Node(data);
        if (this.head === null && this.size < 1) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next.next !== null) {
                current = current.next;
            }
            current.next.next = newNode;
            newNode.prev = current.next;
        }
        this.size++;
    }
    insert(data, index) {
        const newNode = new Node(data);
        if (index < 0) {
            return;
        } else if (index === 0) {
            this.addFirst(newNode.data);
        } else if (index >= this.size) {
            this.addLast(newNode.data);
        } else {
            let iterator = 0;
            let current = this.head;
            while (iterator !== index - 1) {
                current = current.next;
                iterator++;
            }
            newNode.next = current.next;
            newNode.prev = current;
            current.next.prev = newNode;
            current.next = newNode;
            this.size++;
        }
    }
    searchNodeAt(index) {
        if (index < 0 || index > this.size) {
            return;
        } else if (index === 0) {
            return this.head;
        } else {
            let current = this.head;
            let iterator = 0;
            while (current.next !== null) {
                if (iterator === index) {
                    return current;
                }
                current = current.next;
                iterator++;
            }
        }
    }
    remove(index) {
        if (index < 0 || index >= this.size || this.size <= 0) {
            return;
        } else if (index === 0) {
            this.size--;
            if (this.size === 0) {
                this.head = null;
            } else {
                const temp = this.head.next;
                temp.prev = null;
                this.head = temp;
            }
            return;
        } else {
            let current = this.head;
            let iterator = 0;
            while (iterator !== index - 1) {
                current = current.next;
                iterator++;
            }
            if (current.next.next === null) {
                current.next = null;
            } else {
                current.next = current.next.next;
                current.next.prev = current;
            }
        }
        this.size--;
    }
    length() {
        return this.size;
    }
    print() {
        let iterator = this.head;
        while (iterator !== null) {
            console.log(iterator.data);
            iterator = iterator.next;
        }
    }
}
