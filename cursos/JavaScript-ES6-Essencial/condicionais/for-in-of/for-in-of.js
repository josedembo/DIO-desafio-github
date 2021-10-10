const numbers = [3, 7, 4];
numbers.one = "novo"

for (let i in numbers) {
    console.log(i);
}

console.log("\n\n")
for (let elment of numbers) {
    console.log(elment);
}