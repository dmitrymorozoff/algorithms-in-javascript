/**
 * @param {any} arr Входящий массив элементов
 * @param {any} element Искомый элемент
 */
export default function binarySearch(arr, element) {
    let first = 0;
    let last = arr.length - 1;
    let finished = false;
    let iterations = 0;
    while (!finished) {
        iterations++;
        let middle = Math.floor((first + last) / 2);
        if (iterations > arr.length) {
            return false;
        }
        if (element === arr[middle]) {
            return true;
        } else if (element < arr[middle]) {
            last = middle - 1;
        } else if (element > arr[middle]) {
            first = middle + 1;
        }
    }
}
