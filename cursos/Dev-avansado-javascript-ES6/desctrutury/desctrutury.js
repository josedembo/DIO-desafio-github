const fruts = ["Mango", "Banana", "Apple", "orange"];
const students = {
    name: "José",
    fullName: "José Pedro Daniel Dembo",
    age: 21,
    grade: 3,
    skils: {
        force: "intelogence",
    }
}

const { grade, fullName: name, skils: { force } } = students;

console.log(` ${name} Grade at unniversity is ${grade}º grade`);
console.log(force);

const sum = ([a, b] = [0, 0]) => {
    return a + b;
}

console.log(sum());