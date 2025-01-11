//LAB 2
//Bài 1
type ValidInput = String | Number | boolean | null | undefined

function describeValue(input: ValidInput): string {
    if (input === null) {
        return "Giá trị null"
    }
    if (typeof input === "string") {
        return "Giá trị string"
    }
    if (typeof input === "number") {
        return "Giá trị number"
    }
    if (typeof input === "boolean") {
        return "Giá trị Boolean"
    }
    if (typeof input === "undefined") {
        return "Giá trị undefined"
    }
    throw new Error("Dữ liệu không hợp lệ")
}

console.log(describeValue("Hello"))
console.log(describeValue(123))
console.log(describeValue(true))
console.log(describeValue(null))
console.log(describeValue(undefined))


//Bài 2
function processUnknownData(input: unknown): unknown {
    if (typeof input === "string") {
        return input.length
    }
    if (Array.isArray(input)) {
        if (input.length === 0) {
            return "Mảng trống"
        }
        if (typeof input === "number") {
            return (input as number[]).reduce((a, b) => a + b, 0)
        }
    }
    if (typeof input === "object" && input !== null) {
        if (Object.keys(input).length === 0) {
            return "Đối tượng trống"
        }
        return "Danh sách các keys: " + Object.keys(input)
    }
    throw new Error("Dữ liệu không hợp lệ")
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
