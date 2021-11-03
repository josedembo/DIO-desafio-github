// lazy avaluation
function generateRandonNumber() {
    const number = Math.random() * 10;
    return Math.round(number);

}

function multiply(a, b = generateRandonNumber()) {

    return a * b;
}

// console.log(multiply(5, 10));

// cria objetos
const creatObj = {
    create: (property, value) => {
        let obj = {
            [property]: value
        };


        return obj;
    },

    add: (obj, property, value) => {

        obj[property] = value;
    }
}

const user = creatObj.create("name", "José Dembo");
creatObj.add(user, "age", 23);
creatObj.add(user, "grade", 9);
console.log(user);
console.log(user.grade);