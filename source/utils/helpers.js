/**
 * Функция для обмена двух элементов массива
 * 
 * @param {any} array Массив с элементами
 * @param {any} a Индекс первого элемента
 * @param {any} b Индекс второго элемента
 */
export function swap(array, a, b) {
    const tmp = array[a];
    array[a] = array[b];
    array[b] = tmp;
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