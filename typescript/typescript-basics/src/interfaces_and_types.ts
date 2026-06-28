interface UserType {
    firstName: string,
    lastName: string,
    age: number
}

function greet(user: UserType) {
    console.log(`Hello ${user.firstName} ${user.lastName}, Your age is ${user.age}`)
}

let user: UserType = {
    firstName: "Raghunandan",
    age: 21,
    lastName: "Sharma"
}

greet(user)

type UserType1 = {
    firstName: string,
    lastName: string,
    age: 21
}

let user1: UserType1 = {
    firstName: "Raghunandan",
    lastName: "Sharma",
    age: 21
}

greet(user1)