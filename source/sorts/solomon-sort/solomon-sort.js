export default function solomonSort(array) {
    const min = Math.min(...array);
    const max = Math.max(...array);
    const n = array.length - 1;
    const delta = Math.floor((max - min) / n);
    let sortedArray = [];
    let indexArray = [];
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        indexArray[i] = 0;
        newArray[i] = [];
    }
    for (let i = 0; i < array.length; i++) {
        let newIndex = (array[i] - min) / delta + 1;
        newIndex = Math.floor(newIndex);
        indexArray[newIndex - 1]++;
        newArray[newIndex - 1].push(array[i]);
    }
    for (let i = 0; i < array.length; i++) {
        if (!!newArray[i][0]) {
            while (newArray[i].length !== 0) {
                let minValue = Math.min(...newArray[i]);
                let minIndex = newArray[i].indexOf(minValue);
                newArray[i].splice(minIndex, 1);
                sortedArray.push(minValue);
            }
        }
    }
    return sortedArray;
}
