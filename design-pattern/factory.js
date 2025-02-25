class Product {
    constructor(name) {
        this.name = name
    }

    init () {
        console.log('INIT')
    }
    fun1 () {
        console.log('FUN 1')
    }
    fun2 () {
        console.log('FUN 2')
    }
}

class Creator {
    create(name) {
        return new Product(name)
    }
}


// 测试
let creator = new Creator()
let p = creator.create('p1')

p.init()
p.fun1()

console.log(p)
console.log(p.name)