class Math {
    sum(value1, value2, callback) {

        setTimeout(() => {
            callback(value1 + value2);
        }, 2500);
    }
    multiply(value1, value2) {
        return value1 * value2;
    }

    printSum(request, respose, a, b) {
        console.log(respose.load("index", a + b));
    }
}

module.exports = Math;