class Person {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
}

let p = new Person('RR1335')

alert(p.getName())