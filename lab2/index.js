"use strict";
function describeValue(input) {
    console.log("Input:", input, "Kiểu dữ liệu:", typeof input);
}
// describeValue("Hello")
// describeValue(123)
// describeValue(true)
// describeValue(null)
// describeValue(undefined)
//Bài 2
function processUnknownData(input) {
    if (typeof input === "string") {
        return input.length;
    }
    if (Array.isArray(input)) {
        if (input.length === 0) {
            return "Mảng trống";
        }
        if (typeof input === "number") {
            return input.reduce((a, b) => a + b, 0);
        }
    }
    if (typeof input === "object" && input !== null) {
        if (Object.keys(input).length === 0) {
            return "Đối tượng trống";
        }
        return "Danh sách các keys: " + Object.keys(input);
    }
    throw new Error("Dữ liệu không hợp lệ");
}
// console.log(processUnknownData("Hello"))
// console.log(processUnknownData([1, 2, 3]))
// console.log(processUnknownData({}))
// console.log(processUnknownData([]))
// console.log(processUnknownData({ name: "John", age: 20 }))
// console.log(processUnknownData(123))
// console.log(processUnknownData(null))
// console.log(processUnknownData(undefined))
// console.log(processUnknownData(true))
