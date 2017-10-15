import { swap } from "../../utils/helpers.js";

export default function gnomeSort(array) {
    let counter = 1;
    while (counter < array.length) {
        if (counter === 0) {
            counter = 1;
        }
        if (array[counter - 1] <= array[counter]) {
            counter++;
        } else {
            swap(array, counter, counter - 1);
            counter--;
        }
    }
    return array;
}
