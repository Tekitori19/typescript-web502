//  Typescript:
// Tìm sub-array có độ dài lớn nhất với tổng các phần tử cho trước.
// Ví dụ:
// nums[] = { 5, 6, -5, 5, 3, 5, 3, -2, 0 }
// target = 8  
// sub-array có tổng = 8 bao gồm:
//  { -5, 5, 3, 5 }{ 3, 5 }{ 5, 3 } 
// => sub-array dài nhất là: { -5, 5, 3, 5 } có length = 4
function longestSubArrayWithSum(nums: number[], target: number): number[] {
    let maxLength = 0;
    let maxSubArray: number[] = [];
    let currentSum = 0;
    let sumMap = new Map<number, number>();

    sumMap.set(0, -1);

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i];

        if (sumMap.has(currentSum - target)) {
            const startIdx = sumMap.get(currentSum - target)! + 1;
            const subArray = nums.slice(startIdx, i + 1);
            if (subArray.length > maxLength) {
                maxLength = subArray.length;
                maxSubArray = subArray;
            }
        }

        if (!sumMap.has(currentSum)) {
            sumMap.set(currentSum, i);
        }
    }

    return maxSubArray;
}

// Ví dụ sử dụng
const nums = [5, 6, -5, 5, 3, 5, 3, -2, 0];
const target = 8;
const result = longestSubArrayWithSum(nums, target);
console.log(result); // Output: [ -5, 5, 3, 5 ]
