export default function sieveOfEratosthenes(n) {
    let primes = [];
    for (let i = 2; i <= n; i++) {
        primes[i] = true;
    }
    let p = 2;
    let finished = false;
    do {
        for (let i = 2 * p; i <= n; i += p) {
            primes[i] = false;
        }
        for (let i = p; i <= n; i++) {
            if (primes[i] && i > p) {
                p = i;
                break;
            }
        }
    } while (p * p < n);
    const primesValues = [];
    for (let i = 2; i <= n; i++) {
        if (primes[i]) {
            primesValues.push(i);
        }
    }
    return primesValues;
}