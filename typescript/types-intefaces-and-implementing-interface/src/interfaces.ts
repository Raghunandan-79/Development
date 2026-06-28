interface Address {
    city: string,
    country: string,
    pincode: number
}

interface User {
    fullName: string,
    age: number,
    address: Address
}

interface Office {
    address: Address
}

let user: User = {
    fullName: "Raghunandan Sharma",
    age: 21,
    address: {
        city: "Jammu",
        country: "India",
        pincode: 180001
    }
}

function isLegal(user: User): boolean {
    return user.age >= 18;
}

if (isLegal(user)) {
    console.log("Yes you can vote")
} else {
    console.log("No you can't vote")
}

interface Person {
    fullName: string,
    age: number,
    greet: () => void,
    isLegal: (age: number) => boolean;
}

class Manager implements Person {
    fullName: string;
    age: number;
    phrase: string;

    constructor(fullName: string, age: number, phrase: string) {
        this.fullName = fullName;
        this.age = age;
        this.phrase = phrase;
    }

    greet = (): void => {
        console.log(`${this.phrase} ${this.fullName}`)
    }

    isLegal = (age: number): boolean => {
        return age >= 18;
    }
}

let manager: Manager = new Manager("John Cena", 30, "Good Morning");
console.log(manager)
manager.greet()
console.log(manager.isLegal(manager.age))