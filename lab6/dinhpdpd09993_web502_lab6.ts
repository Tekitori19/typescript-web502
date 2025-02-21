// 1. Class Decorator
function logClass(constructor: Function) {
    console.log(`Class ${constructor.name} được định nghĩa`);
}

// 2. Property Decorator
function logProperty(target: any, propertyKey: string) {
    const className = target.constructor.name;
    console.log(`Thuộc tính ${propertyKey} của class ${className}`);
}

// 3. Method Decorator
function logMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log(`Phương thức ${propertyKey} được gọi với đối số: ${JSON.stringify(args)}`);

        const result = originalMethod.apply(this, args);
        console.log(`Kết quả trả về: ${result}`);

        return result;
    };

    return descriptor;
}

// 4. Parameter Decorator
function logParameter(target: any, propertyKey: string, parameterIndex: number) {
    console.log(`Tham số ở vị trí ${parameterIndex} của phương thức ${propertyKey}`);
}

// 5. Áp dụng decorators cho class Calculator
@logClass
class Calculator {
    @logProperty
    public name: string = "Basic Calculator";

    @logMethod
    add(a: number, b: number): number {
        return a + b;
    }

    @logMethod
    subtract(a: number, @logParameter b: number): number {
        return a - b;
    }
}

// Test
const calc = new Calculator();
console.log("---- Gọi phương thức add ----");
calc.add(5, 3);
console.log("\n---- Gọi phương thức subtract ----");
calc.subtract(10, 4);
