class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

export default class Queue {
    constructor(data) {
        this.head = null;
        this.size = 0;
    }
    enqueue(data) {
        const newNode = new Node(data);
        if (this.head === null && this.size < 1) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }
    dequeue() {
        if (this.size === 0) {
            return;
        }
        if (this.size === 1) {
            const popElement = this.head;
            this.head = null;
            this.size--;
            return popElement;
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
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        return current;
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
