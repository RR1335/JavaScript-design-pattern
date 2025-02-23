class myPeople {
    name:string
    constructor(name) {
        this.name = name
    }

    SaySomething() {

    }
}

class A  extends myPeople {
    constructor(name) {
        super(name)
    }

    SaySomething(): void {
        console.log(' AAAAA ')
    }
}

class B  extends myPeople {
    constructor(name) {
        super(name)
    }

    SaySomething(): void {
        console.log(' BBBBB ')
    }
}

let  a = new A('a')
a.SaySomething()
let b = new B ('b')
b.SaySomething()