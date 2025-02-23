class Person {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
}

let p = new Person('RR1335')

console.log(p.getName())