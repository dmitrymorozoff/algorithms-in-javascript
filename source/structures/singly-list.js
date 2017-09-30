class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

export default class SinglyList {
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
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
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
            current.next = newNode;
        }
        this.size++;
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
        if (index < 0 || index >= this.size) {
            return;
        } else if (index === 0) {
            const temp = this.head.next;
            this.head = temp;
            this.size--;
            return;
        } else {
            let current = this.head;
            let iterator = 0;
            while (iterator !== index - 1) {
                current = current.next;
                iterator++;
            }
            current.next = current.next.next;
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
