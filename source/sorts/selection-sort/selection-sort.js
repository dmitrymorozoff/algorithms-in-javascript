import { swap } from "../../utils/helpers.js";

export default function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = array[i];
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (min > array[j]) {
                min = array[j];
                minIndex = j;
            }
        }
        swap(array, i, minIndex);
    }
    return array;
}
