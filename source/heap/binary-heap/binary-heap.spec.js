import BinaryHeap from "./binary-heap";
describe("binary-heap", () => {
    test("should return 12", () => {
        const heap = new BinaryHeap((a, b) => {
            return a > b;
        });
        heap.build([12, 10, 9, 5, 6, 1]);
        expect(heap.getTop()).toBe(12);
    });

    test("should return 1", () => {
        const heap = new BinaryHeap((a, b) => {
            return a < b;
        });
        heap.build([12, 10, 9, 5, 6, 1]);
        expect(heap.getTop()).toBe(1);
    });

    test("should return true", () => {
        const heap = new BinaryHeap((a, b) => {
            return a > b;
        });
        heap.build([12, 10, 9, 5, 6, 1]);
        expect(heap.heap).toEqual([12, 10, 9, 5, 6, 1]);
    });

    test("should return [1,5,6,9,10,12] if sort", () => {
        const heap = new BinaryHeap((a, b) => {
            return a > b;
        });
        expect(heap.heapSort([12, 10, 9, 5, 6, 1])).toEqual([
            1,
            5,
            6,
            9,
            10,
            12
        ]);
    });
});
