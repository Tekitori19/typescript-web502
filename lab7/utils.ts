// utils.ts

// Tính tổng n số
export function sum(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Tính tích n số
export function product(numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc * curr, 1);
}

// Sắp xếp tăng dần
export function sortAsc(numbers: number[]): number[] {
    return [...numbers].sort((a, b) => a - b);
}

// Sắp xếp giảm dần
export function sortDesc(numbers: number[]): number[] {
    return [...numbers].sort((a, b) => b - a);
}

// Tìm số xuất hiện từ 2 lần trở lên
export function findDuplicates(arr: number[]): Record<number, number> {
    const countMap = arr.reduce((acc: Record<number, number>, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
    }, {});

    const result: Record<number, number> = {};
    for (const num in countMap) {
        if (countMap[num] >= 2) {
            result[Number(num)] = countMap[num];
        }
    }
    return result;
}
