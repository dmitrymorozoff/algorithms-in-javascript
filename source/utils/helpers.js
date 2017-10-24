/**
 * Функция для обмена двух элементов массива
 * @param {any} array Массив с элементами
 * @param {any} firstIndex Индекс первого элемента
 * @param {any} secondIndex Индекс второго элемента
 */
export function swap(array, firstIndex, secondIndex) {
    const tmp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = tmp;
}

/**
 * Функция для возврата случайного числа
 * в заданном диапазоне
 * @param {any} min Минимальное значение диапазона
 * @param {any} max Максимальное значение диапазона
 * @returns 
 */
export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Повторение первой строки до длины второй строки
 * @param {any} firstString Строка для повторения
 * @param {any} secondString Строка до длины которой необходимо повторить первую строку
 * @returns Строка после повторения
 */
export function repeatString(firstString, secondString) {
    let resultString = "";
    // Длина финальной строки
    let firstStringLength = firstString.length;
    let it = 0;
    for (let i = 0; i < secondString.length; i++) {
        if (i % firstStringLength === 0) {
            it = 0;
        }
        resultString += firstString[it];
        it++;
    }
    return resultString;
}

/**
 * Вставка нулей в начало строки до определенной длины
 * @param {any} num Число
 * @param {any} size Размер финальной строки
 */
export function pad(num, size) {
    var string = num.toString();
    while (string.length < size) {
        string = "0" + string;
    }
    return string;
}
