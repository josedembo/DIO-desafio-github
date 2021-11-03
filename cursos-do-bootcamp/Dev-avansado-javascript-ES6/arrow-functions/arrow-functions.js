let object = {

    showContext: function () {
        this.log("Execute the function log");
        var _this = this;

        console.log("function normal", this);

        setTimeout(() => {
            this.log("execute ofter 1000ms");
        }, 1000);
    },

    log: function (value) {
        console.log(value);
    }
}

const testing = _ => console.log("hello");

const obj = {
    showContext: function () {
        this.log("runing into the showContext object function");
    },

    log: function (value) {
        console.log(value);
    }

}

const date = {
    showDate: function () {
        setInterval(function () {
            let date = new Date().toLocaleString();
            console.log(date);
        }, 1000)
    }
}

function multiply(a = 1, b = 2) {
    // b = (typeof b === undefined) ? 1 : b;
    return a * b;
}

// object.showContext();
// obj.showContext();

// date.showDate();
// console.log(multiply(5))
testing();
