//promise
/**
 Uma promise pode ter três estados: 
 - pendding => em execução
 - fulfilled => terminou de executar
 - rejected => quando acontece algum erro
 */
let doSomethingPromise = () => new Promise((resolve, reject) => {
    // throw new Error("Sorry sominthig went wrong");
    setTimeout(function () {
        resolve("doing Something promise");
    }, 1500);
})

let doOtherThingPromise = () => new Promise((resolve, reject) => {
    // throw new Error("Deu errooo");
    setTimeout(function () {
        resolve("Doing Other thing promise");
    }, 1000);
})

doSomethingPromise().then((data) => {
    let processingData = data.split("");
    console.log(processingData);
}).catch((error) => console.log(error));

// Rodando as promises de forma paralela
Promise.all([doSomethingPromise(), doOtherThingPromise()])
    .then(data => console.log(data[0].split(""), data[1].split("")))
    .catch(error => console.log(error));

// A promise que for executada primeiro, é a que será retornada

Promise.race([doSomethingPromise(), doOtherThingPromise()])
    .then(data => console.log(data))
    .catch(error => console.log(error));

// rondando as promises de forma sequencial
doSomethingPromise()
    .then(data => { console.log(data.split("")); return doOtherThingPromise() })
    .then(data2 => console.log(data2.split("")))
    .catch(error => console.log(error));

// callBacks
function dosomething(callBack) {
    setTimeout(function () {
        //do somthing
        callBack("doing something");
    }, 1000);
}

function doOtherthing(callBack) {
    setTimeout(function () {
        //do somthing
        callBack("doing Other thing");
    }, 1000);
}


function log(msg) {
    console.log(msg);
}

// dosomething(function (data) {
//     let newData = data;
//     console.log(newData);
// });

// doOtherthing(log)

function doAll() {
    try {
        dosomething(function (data) {
            let dataProessing = data.split("");

            try {
                doOtherthing(function (data2) {
                    let dataProcessing2 = data2.split("");

                    try {
                        setTimeout(function () {
                            console.log(dataProessing, dataProcessing2)
                        }, 1000);
                    } catch (error) {
                        // Handle error
                    }
                })
            } catch (error) {
                // handle error
            }
        });
    } catch (error) {
        //handle error
    }
}

// doAll();