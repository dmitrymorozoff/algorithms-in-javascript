class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.last = null;
    }
}

export default class Stack {
    constructor(data) {
        this.head = null;
        this.last = null;
        this.size = 0;
    }
    push(data) {
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
        this.last = newNode;
        this.size++;
    }
    pop() {
        if (this.size === 0) {
            return;
        }
        if (this.size === 1) {
            return this.head;
        }

        let current = this.head;
        while (current.next.next !== null) {
            current = current.next;
        }
        this.last = current;
        let popElement = current.next;
        current.next = null;
        this.size--;
        return popElement;
    }
    peek() {
        return this.last;
    }
    print() {
        let iterator = this.head;
        while (iterator !== null) {
            console.log(iterator.data);
            iterator = iterator.next;
        }
    }
}
