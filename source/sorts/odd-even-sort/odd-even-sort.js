import { swap } from "../../utils/helpers.js";

export default function oddEvenSort(array) {
    let flag = false;
    while (!flag) {
        flag = true;
        for (let i = 0; i < array.length; i += 2) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                flag = false;
            }
        }

        for (let i = 1; i < array.length; i += 2) {
            if (array[i] > array[i + 1]) {
                swap(array, i, i + 1);
                flag = false;
            }
        }
    }
    return array;
}