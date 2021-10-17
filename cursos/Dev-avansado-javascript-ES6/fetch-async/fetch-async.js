//Fetch
// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
// };

fetch('https://calculador-imc.herokuapp.com/imc?peso=""&altura=1.8')
    .then(responseStream => {
        // console.log(responseStream)
        // console.log(responseStream.statusText)
        if (responseStream.status === 200) {
            return responseStream.json()
        } else {
            console.log(responseStream.statusText)
            throw new Error("request error")
        }
    })
    .then(data => console.log(data.imc))
    .catch(error => console.log(error));

// var requestOptions = {
//     method: 'GET',
//     redirect: 'follow'
// };

// fetch("https://calculador-imc.herokuapp.com/imc?peso=80&altura=1.7", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));

// Async/ Await

const asyncFunc = () => new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve([1, 2, 3, 4]);
    }, 5000);
})

const test = async () => {

    const parale = await Promise.all([asyncFunc(), fetch("https://calculador-imc.herokuapp.com/imc?peso=80&altura=1.7")
        .then(response => response.json())])

    const data = await asyncFunc();
    // console.log(data)
    const jsonData = await fetch("https://calculador-imc.herokuapp.com/imc?peso=80&altura=1.7")
    return parale;
}

test()
    .then(data => console.log(data))
    .catch(error => console.log(error))
