const user = {
    name: "josé",
    lastName: "Dembo"
}

function getUserWithFullname(user) {
    return {
        ...user,
        fullname: `${user.name} ${user.lastName}`
    }
}


const userWithFullname = getUserWithFullname(user);

console.log(userWithFullname);