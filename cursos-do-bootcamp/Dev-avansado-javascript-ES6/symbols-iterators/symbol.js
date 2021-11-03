// Symbols

const uniqueId = Symbol("Hello");
// const uniqueId2 = Symbol("Hello")

// const obj = {
//     [uniqueId]: "José"
// }

const arr = [1, 2, 4, 5];

// const it = arr[Symbol.iterator]();
// while (true) {
//     const { value, done } = it.next();
//     if (done) {
//         break;
//     }
//     console.log(value);
// }

// for (let value of arr) {
//     console.log(value);
// }

const obj = {
    values: [
        {
            name: "José",
            fullName: "José Pedro Daniel Dembo",
            age: 22
        },
        {
            name: "Mateus",
            fullName: "José Pedro Daniel Dembo",
            age: 22
        }
    ],
    [Symbol.iterator]() {
        let i = 0;
        return {
            next: () => {
                i++
                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
}

const it = obj[Symbol.iterator]();

// for (let value of obj) {
//     console.log(value);
// }
const arr2 = [...obj];

// console.log(arr2)

// generators => São funções com  pausa 

function* sayHello() {
    console.log("Hello");
    yield 1;
    console.log("From");
    const value = yield 2;
    console.log(value);

}

const iterator = sayHello()

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next("autsid"));

function* naturalNumbers() {
    let number = 1;
    while (true) {
        yield number;
        number++;
    }
}

const numbers = naturalNumbers();

console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());
console.log(numbers.next());

const obj2 = {
    values: [
        {
            name: "José",
            fullName: "José Pedro Daniel Dembo",
            age: 22
        },
        {
            name: "Mateus",
            fullName: "José Pedro Daniel Dembo",
            age: 22
        }
    ],
    *[Symbol.iterator]() {
        for (let i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }
    }
}

for (let value of obj2) {
    console.log(value);
}