//  O spread operator pode usado em strings, arrays, objetos e objtos iteraveis
// O spread oprator ele quebra um elementos em vários e coloca em alguma estrura de dados
const nome = "Digital Invation One"
const spread = (a, b, c, ...args) => {
    console.log(a, b, c, args);
}

// spread(...nome);


const arr = [1, 3, 4];
const arr2 = [...arr, 5, 67, 3, ...arr];

const students = [
    {
        name: "jose",
        age: 12,
        nationality: "Angolan"
    },
    {
        name: "Bruno",
        age: 15,
        nationality: "Mixican"
    }
]

const replaceName = { name: "Dembo" }
const allStudents = [
    {
        name: "Jose",
        age: 20,
        nationality: "American",
        ...replaceName
    },
    {
        name: "Douglas",
        age: 10,
        nationality: "Brazilian"
    },
    ...students
]
console.log(students, "\n", allStudents);
