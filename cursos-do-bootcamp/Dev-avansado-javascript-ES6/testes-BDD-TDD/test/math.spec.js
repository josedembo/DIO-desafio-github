const assert = require("assert");
const Math = require("../src/math.js");
const { expect } = require("chai");
const sinon = require("sinon");

/***hooks => antes de cada função it, faz alguma coisa antes
 * before
 * beforeEach
 * after
 * afterEach
*/
let value = 0;
beforeEach(function () {
    value = 5;
});

describe("Math class", function () {
    it("sum two numbers", function (done) {
        const math = new Math();
        this.timeout(3000);
        math.sum(value, 5, (value) => {
            // assert.equal(value, 10)
            expect(value).to.equal(10);
            done();

        })

    });

    it("multiply two numbers", function (done) {
        const math = new Math();
        const result = math.multiply(5, 5)
        // assert.equal(math.multiply(value, 5), 25);
        expect(result).to.equal(25);
        done();
    })

    it("verify object if have a property name", function () {
        const obj = {
            name: "José Dembo"
        }
        const obj2 = {
            name: "José Dembo"
        }
        //verifica se o objeto contém a propiedade  'name' com o valor "Jośe Dembo"
        // expect(obj).to.have.property("name").equal("José Dembo"); 

        //verifica se o objeto contém a propiedade  'name' 
        // expect(obj).to.have.property("name");

        // verifica se os objetos são iguais, não emtermos de referencia da memoria
        expect(obj).to.deep.equal(obj2);
    });

    it.only("calls request with sum and index value", function () {
        const request = {};
        const response = {
            // load: sinon.spy()
            //sinon.spy()  => serve para expionar um método ou argumento

            load: function load() {
                console.log("Called");
            }
        };

        // sinon.spy(response, "load");
        sinon.stub(response, "load").returns("the funtion was called");

        const math = new Math();

        math.printSum(request, response, 5, 5);

        // verifica se o método load foi chamado ao menos um vez
        // expect(response.load.calledOnce).to.be.true;

        expect(response.load.args[0][1]).to.equal(10);
        expect(response.load.args[0][0]).to.equal("index");

    });
});

/**
 * metodos => it.<metodo>
 * only : roda apenas um teste
 * skip : deixa de executar o teste com esse método
 */