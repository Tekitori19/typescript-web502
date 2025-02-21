// app.ts
import { sum, product, sortAsc, sortDesc, findDuplicates } from './utils';

// Demo tính tổng
const numbersSum = [1, 2, 3, 4];
console.log(`Tổng của ${numbersSum}: ${sum(numbersSum)}`);

// Demo tính tích
const numbersProduct = [2, 3, 4];
console.log(`Tích của ${numbersProduct}: ${product(numbersProduct)}`);

// Demo sắp xếp tăng dần
const unsortedAsc = [5, 1, 3, 2];
console.log(`Sắp xếp tăng dần ${unsortedAsc}: ${sortAsc(unsortedAsc)}`);

// Demo sắp xếp giảm dần
const unsortedDesc = [5, 1, 3, 2];
console.log(`Sắp xếp giảm dần ${unsortedDesc}: ${sortDesc(unsortedDesc)}`);

// Demo tìm số trùng lặp
const duplicatesArray = [1, 2, 2, 3, 3, 3, 4];
console.log('Số trùng lặp:', findDuplicates(duplicatesArray));
