/**
 * @param {any} array  Массив с элементами
 * @param {any} max Максимальный элемент массива
 * @returns 
 */
export default function countingSort(array, max) {
    let countArray = [];
    for (let i = 0; i <= max; i++) {
        countArray.push(0);
    }
    let sortArray = [];
    for (let i = 0; i < array.length; i++) {
        let index = array[i];
        countArray[index]++;
    }
    for (let i = 0; i <= max; i++) {
        while (countArray[i]-- > 0) {
            sortArray.push(i);
        }
    }
    return sortArray;
}
