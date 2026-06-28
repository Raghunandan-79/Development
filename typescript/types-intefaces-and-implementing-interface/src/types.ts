type User = {
    fullName: string;
    age: number;
};

function isLegal(user: User): boolean {
    return user.age > 18
};

const user: User = {
    fullName: "Raghunandan Sharma",
    age: 21
};

console.log(isLegal(user))

type Employee = {
    name: string;
    startDate: string;
};

type Manager = {
    name: string;
    department: string;
};

type TeamLead = Employee & Manager;

let e: Employee = {
    name: "Raghunandan Sharma",
    startDate: "28-06-2026"
};

let m: Manager = {
    name: "John Cena",
    department: "HR"
};

let t: TeamLead = {
    name: "Triple H",
    department: "Engineering",
    startDate: "19-05-2025"
};

console.log(e);
console.log(m);

type GoodUser = {
    name: string;
    gift: string;
};

type BadUser = {
    name: string;
    ip: string;
};

type User1 = GoodUser | BadUser;

const user1: User1 = {
    name: "Raghunandan",
    ip: "127.0.0.1"
};

console.log(user1);