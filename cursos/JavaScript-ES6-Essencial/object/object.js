const user = {
    name: "José",
    age: 23
}

const fulname = { fulname: "josé Dembo" }

const newUser = Object.assign({}, user, fulname);

console.log("user: ", user, "\nfullname: ", fulname, "\nnewUser: ", newUser);

// previne todas as alterações em um objeto

const fruteList = { name: "banana" }
Object.freeze(fruteList);

fruteList.name = "Pêssogo"

console.log(fruteList.name);