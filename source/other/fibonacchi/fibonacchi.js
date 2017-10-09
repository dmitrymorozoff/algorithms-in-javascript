export default function fibonacchi(n) {
    if (n == 0) {
        return 0;
    }
    if (n === 1) {
        return 0;
    }
    if (n === 2) {
        return 1;
    }
    let one = 1;
    let two = 1;
    let result = 0;
    for (let i = 3; i <= n; i++) {
        result = one + two;
        one = two;
        two = result;
    }
    return result;
}
