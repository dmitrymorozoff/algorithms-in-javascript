import { pad } from "../../utils//helpers.js";

/**
 * Поразрядная сортировка
 * @param {any} array Входящий массив
 * @param {any} length Максимальное количество разрядов в сортируемых величинах
 * @param {any} range Количество возможных значений одного разряда
 * @returns 
 */
export default function radixSort(arr, length, range) {
    let lists = [];
    let numDischarge = length - 1;
    let sortedArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].toString().length < length) {
            arr[i] = pad(arr[i], length);
        }
    }
    while (numDischarge >= 0) {
        sortedArray = [];
        for (let i = 0; i < range; i++) {
            lists[i] = [];
        }
        for (let i = 0; i < arr.length; i++) {
            let indexValue = null;
            let arrayValues = arr[i].toString().split("");
            indexValue = arrayValues[numDischarge];
            lists[indexValue].push(arr[i]);
        }
        for (let i = 0; i < lists.length; i++) {
            if (!!lists[i]) {
                for (let j = 0; j < lists[i].length; j++) {
                    sortedArray.push(lists[i][j]);
                }
            }
        }
        arr = [];
        arr = [...sortedArray];
        numDischarge--;
    }
    for (let i = 0; i < sortedArray.length; i++) {
        if (typeof sortedArray[i] === "string") {
            sortedArray[i] = parseInt(sortedArray[i], 10);
        }
    }
    return sortedArray;
}
