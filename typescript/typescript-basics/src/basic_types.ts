function greet(firstName: string) {
    console.log(`Hello ${firstName}`)
}

function sum(a: number, b: number) {
    return a + b
}

function isLegal(age: number): boolean {
    if (age > 19) {
        return true
    } else {
        return false
    }
}

function delayedCall(fn: () => void) {
    setTimeout(fn, 2000)
}

let subtract = (a: number, b: number): number => {
    return a - b
}

let greet1 = () => console.log("Hello world")

let firstName: string = "Raghu"
greet(firstName)

let a: number = 1, b: number = 5
console.log(sum(a, b))

console.log(isLegal(21) ? "Yes legal" : "Not legal")

delayedCall(() => {
    console.log("Hello")
})

console.log(subtract(10, 5))

greet1()