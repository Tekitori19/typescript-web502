function ptbac1(x: number, y: number): string {
    if (x === 0) {
        if (y === 0) {
            return "Vô số nghiệm";
        } else {
            return "Vô nghiệm";
        }
    } else {
        const ketqua = -y / x;
        return `Nghiệm của phương trình là: ${ketqua}`;
    }
}

console.log(ptbac1(0, 0));
console.log(ptbac1(2, -4));
console.log(ptbac1(0, 5));
