// generic types

function adicionaUmALista<T>(array: T[], value: T) {
    return array.map(() => value);
}

const newArray = adicionaUmALista(["1", "3", "4", "5"], "6");

console.log(newArray);