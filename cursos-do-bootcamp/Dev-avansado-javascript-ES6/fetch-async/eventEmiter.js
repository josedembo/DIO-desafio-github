const EventEmitter = require('events');

// const event = new EventEmitter();

// event.on("User logged", data => {
//     console.log(data);
// })

// event.emit("User logged", { name: "José Pedro Daniel Dembo" })

// classe extendo o EventEmitter

class Users extends EventEmitter {

    userLogged(data) {
        this.emit("User logged", data)
    }
}


const users = new Users();

users.on("User logged", data => {
    console.log(data);
})

users.userLogged({ name: "José Pedro Daniel Dembo" });