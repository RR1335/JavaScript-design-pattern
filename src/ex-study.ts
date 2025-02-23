class MyPeople {
    public name:string
    public age:number
    protected weight
    constructor(name,age) {
        this.name = name,
        this.age = age,
        this.weight = 155
    }

    eat () {
        console.log(`${this.name}` ,'eat something')

    }

    speak() {
        console.log(`My name is ${this.name},age ${this.age}`)
    }
}

class MyStudent extends MyPeople {
    public number:string
    private girlfriend
    constructor (name,age,number){
        super(name,age)
        this.number = number,
        this.girlfriend = 'MingYue'
    }

    study() {
        console.log(`${this.name} study`)
    }

    getweight() {
        console.log(`${this.name} , is ${this.weight}`)
    }
}


let Xming = new MyStudent('MingMing',18,'A12')
Xming.getweight()

