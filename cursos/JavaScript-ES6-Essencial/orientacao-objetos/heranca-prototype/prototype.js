function Animal() {
    this.name = "Pessoa"
    Animal.prototype.name = "Pitbul";
    this.andar = (passos) => {
        console.log(`Andou ${passos} passos`);
    }
}

function Cachorro() {
    Animal.call(this);
    Cachorro.prototype.movimentar = function (passos) {
        return `Andou ${passos} passos`;
    }
    Cachorro.prototype.raca;
}

const a1 = new Animal();
console.log(a1.__proto__ === Animal.prototype);
console.log(a1.name);
a1.andar(3);

const c1 = new Cachorro();

console.log(c1.movimentar(5));
console.log(c1.name);