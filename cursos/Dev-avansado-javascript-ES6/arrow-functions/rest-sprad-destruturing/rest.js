// rest operaitor
function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}


console.log(sum(3, 5, 6, 12, 847, 34))

function restSum(...args) {
    let sum = 0;

    for (number of args) {
        sum += number;
    }
    return sum;

}

console.log(restSum(2, 5, 5))