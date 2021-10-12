// rest operaitor
function sum() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

// uma forma
function restSum(...args) {
    let sum = 0;

    for (number of args) {
        sum += number;
    }
    return sum;
}

//  usando reduce
function restSumReduce(...args) {

    return args.reduce((sum, value) => sum + value, 0);
}

// usando spread operator
const multiply = (...args) => {

    return args.reduce((acc, arg) => acc * arg, 1);
}

// console.log(restSumReduce(2, 5, 5))
// console.log(sum(3, 5, 6, 12, 847, 34))
// console.log(multiply(2, 3, 2));

const spread = (...args) => {
    console.log(multiply(...args));
}

spread(2, 3, 2);
