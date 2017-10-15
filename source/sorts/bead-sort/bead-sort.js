export default function beadSort(array) {
    let beadArray = [];
    let sortedArray = [];
    for (let i = 0; i < array.length; i++) {
        beadArray[i] = [];
    }
    let levelCount = [];
    for (let i = 0; i < Math.max(...array); i++) {
        levelCount[i] = 0;
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i]; j++) {
            beadArray[i].push(0);
        }
    }
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        for (let j = 0; element > 0; j++) {
            beadArray[levelCount[j]++][j] = 1;
            element--;
        }
    }
    for (let i = beadArray.length - 1; i >= 0; i--) {
        let value = 0;
        for (let j = 0; j < beadArray[i].length; j++) {
            if (beadArray[i][j]) {
                value++;
            }
        }
        sortedArray.push(value);
        value = 0;
    }
    return sortedArray;
}
