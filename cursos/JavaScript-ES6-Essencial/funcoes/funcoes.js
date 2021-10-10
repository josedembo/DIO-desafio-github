function getName() {
    return "José Pedro Daniel Dembo";
}

function logFn(fn) {
    console.log(fn())
}

const logFnResult = logFn;

logFnResult(getName);