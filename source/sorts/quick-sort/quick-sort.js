import { swap } from "../../utils/helpers.js";

/**
 * Функция разделения массива
 * @param {any} array Входящий массив
 * @param {any} begin Левая граница
 * @param {any} end Правая граница
 * @returns 
 */
function division(array, begin, end) {
    let left = begin;
    let right = end;
    let pivot = array[Math.floor((left + right) / 2)];
    while (left <= right) {
        // Находим первое число слева больше опорного элемента
        while (array[left] < pivot) {
            left++;
        }
        // Находим первое число справа меньше опорного элемента
        while (array[right] > pivot) {
            right--;
        }
        if (left <= right) {
            // Меняем местами найденные элементы массива
            swap(array, left, right);
            // Продвигаем левый указатель на единицу вправо
            left++;
            // Продвигаем правый указатель на единицу влево
            right--;
        }
        // Повторяем алгоритм
    }
    return left;
}

/**
 * Функция быстрой сортировки
 * @param {any} array Массив который требуется отсортировать
 * @param {any} left Индекс первого элемента массива
 * @param {any} right Индекс последнего элемента массива
 * @returns Отсортированный массив
 */
export default function quickSort(array, left, right) {
    var index;
    if (array.length > 1) {
        index = division(array, left, right);
        if (left < index - 1) {
            quickSort(array, left, index - 1);
        }
        if (index < right) {
            quickSort(array, index, right);
        }
    }
    return array;
}
