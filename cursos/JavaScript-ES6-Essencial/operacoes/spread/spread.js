const fruts = ["Banana", "Manga", "Maçã"];

const moreFruts = ["Pêssigo", "Uva", ...fruts];
console.log(moreFruts);

const fn = (x, y, z) => {
    return x + y + z
}

const numbers = [4, 7, 1];

console.log(fn(...numbers));