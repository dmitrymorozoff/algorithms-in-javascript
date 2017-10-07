class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
        this.size = 0;
    }
    add(data) {
        const newNode = new Node(data);
        if (this.root === null) {
            this.root = newNode;
            this.size++;
        }
        let current = this.root;
        while (true) {
            if (data < current.data) {
                if (current.left === null) {
                    current.left = newNode;
                    this.size++;
                    break;
                } else {
                    current = current.left;
                }
            } else if (data > current.data) {
                if (current.right === null) {
                    current.right = newNode;
                    this.size++;
                    break;
                } else {
                    current = current.right;
                }
            } else {
                break;
            }
        }
    }
    /**
     * Максимальный узел в дереве
     * @memberof BinaryTree
     */
    getMax() {
        let current = this.root;
        while (current.right !== null) {
            current = current.right;
        }
        return current.data;
    }
    /**
     * Минимальный узел в дереве
     * @memberof BinaryTree
     */
    getMin() {
        let current = this.root;
        while (current.left !== null) {
            current = current.left;
        }
        return current.data;
    }
    /**
     * Количество узлов в дереве
     * @memberof BinaryTree
     */
    size() {
        return this.size;
    }
    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if (data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if (current === null) {
                return false;
            }
        }
        return true;
    }
    /**
     * Прямой обход дерева
     * @param {any} node 
     * @memberof BinaryTree
     */
    preOrder(node) {
        if (node === null) {
            return;
        }
        console.log(node.data);
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
    /**
     * Симметричный обход дерева
     * @param {any} node 
     * @memberof BinaryTree
     */
    inOrder(node) {
        if (node === null) {
            return;
        }
        this.inOrder(node);
        console.log(node.data);
        this.inOrder(node);
    }
    /**
     * Обратный обход дерева
     * @param {any} node 
     * @memberof BinaryTree
     */
    postOrder(node) {
        if (node === null) {
            return;
        }
        this.inOrder(node);
        this.inOrder(node);
        console.log(node.data);
    }
    /**
     * Обход дерева в ширину
     * @param {any} node 
     * @memberof BinaryTree
     */
    bfs(node) {
        let queue = [];
        let values = [];
        queue.push(node);
        while (queue.length > 0) {
            let current = queue.shift();
            values.push(current.data);
            if (current.left) {
                queue.push(current.left);
            }
            if (current.right) {
                queue.push(current.right);
            }
        }
        return values;
    }
    remove(data) {
        const removeNode = function(node, data) {
            if (node == null) {
                return null;
            }
            if (data == node.data) {
                // У узла нет детей
                if (node.left === null && node.right === null) {
                    return null;
                }
                // У узла только правый ребенок
                if (node.left === null) {
                    return node.right;
                }
                // У узла только левый ребенок
                if (node.right === null) {
                    return node.left;
                }
                // У узла двое детей
                var current = node.right;
                while (current.left !== null) {
                    current = current.left;
                }
                node.data = current.data;
                node.right = removeNode(node.right, current.data);
                return node;
            } else if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else {
                node.right = removeNode(node.right, data);
                return node;
            }
        };
        this.root = removeNode(this.root, data);
    }
}
