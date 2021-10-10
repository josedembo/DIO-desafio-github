class Animal {
    constructor(name) {
        this.name = name;
    }
    moveimentar(passos) {
        console.log(`Andou ${passos} passos`)
    }
}

class Cachorro extends Animal {
    constructor(name, raca) {
        super(name);
        this.raca = raca;
    }
}
const a1 = new Animal("Pato");
console.log(a1.name);
a1.moveimentar(22);

const c1 = new Cachorro("Bobi", "pitbul");

console.log(c1.name, `raca: ${c1.raca}`);
c1.moveimentar(76);