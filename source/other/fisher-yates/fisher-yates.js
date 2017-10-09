import { getRandomInt, swap } from "../../utils/helpers.js";

export default function fisherYates(array) {
    let randomIndex = getRandomInt(0, array.length - 1);
    for (var i = 0; i < array.length; i++) {
        swap(array, i, randomIndex);
    }
    return array;
}
