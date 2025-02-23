class myPeople {
    name:string
    house: string
    constructor(name,house) {
        this.name = name
        this.house = house
    }

    SaySomething() {

    }
}

class A  extends myPeople {
    constructor(name,house) {
        super(name,house)
    }

    SaySomething(): void {
        console.log(' AAAAA ')
    }
}

class B  extends myPeople {
    constructor(name,house) {
        super(name,house)
    }

    SaySomething(): void {
        console.log(' BBBBB ')
    }
}

let aHouse = new House('beijing')
let  a = new A('a',aHouse)
a.SaySomething()
let b = new B ('b')
b.SaySomething()