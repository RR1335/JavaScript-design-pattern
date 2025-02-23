class People {
    constructor(name,age) {
        this.name = name,
        this.age = age
    }

    eat () {
        console.log(`${this.name}` ,'eat something')

    }

    speak() {
        console.log(`My name is ${this.name},age ${this.age}`)
    }
}

class Student extends People {
    constructor (name,age,number){
        super(name,age)
        this.number = number
    }

    study() {
        console.log(`${this.name} study`)
    }
}

let ming = new Student('xiao',15,31)

ming.study()
console.log(ming.number)
ming.speak()

