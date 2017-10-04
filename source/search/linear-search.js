/**
 * @param {any} arr Входящий массив элементов
 * @param {any} element Искомый элемент
 */
export default function linearSearch(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return true;
        }
    }
    return false;
}
