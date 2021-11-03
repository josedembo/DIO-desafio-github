/*
  todas as funções que retornam um objeto  sem a necessidadae de chamalos com o new
    são chamados de factory(fábrica)
 */

function FakeUser(custumPorperties) {
    return {
        name: "Dembo",
        age: 23,
        ...custumPorperties,
    }
}

const user = FakeUser({ fullname: "José Dembo", lastName: "José" });

console.log(user);