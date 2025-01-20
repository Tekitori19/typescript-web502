function findSubarraysWithZeroSum(arr: number[]): number[][] {
    const result: number[][] = [];
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum === 0) {
                result.push(arr.slice(i, j + 1));
            }
        }
    }
    return result;
}

const input1 = [3, 4, -7, 3, 1, 3, -2, -1];
console.log(findSubarraysWithZeroSum(input1));


function findPairsWithSum(arr: number[], target: number): number[][] {
    const result: number[][] = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                result.push([arr[i], arr[j]]);
            }
        }
    }
    return result;
}

const input2 = [8, 7, 2, 5, 3, 1];
const target = 10;
console.log(findPairsWithSum(input2, target));
