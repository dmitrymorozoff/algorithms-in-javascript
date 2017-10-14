export default function bfs(root) {
    let queue = [];
    let values = [];
    queue.push(root);
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
