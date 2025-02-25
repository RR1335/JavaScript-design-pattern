class SingleObject {
    login() {
        console.log('Login ……')
    }
}


SingleObject.getInstance = (function() {
    let instance 
    return function() {
        if (!instance) {
            instance = new SingleObject()
        }
        return instance
    }
})()


let obj1 = SingleObject.getInstance()
obj1.login()
let obj2 = SingleObject.getInstance()
obj2.login()

console.log('obj1 === obj2', obj1 === obj2)

console.log('javascript的原因，无法完全控制的一种情况；但是其结果非单例模式。')
let obj3 = new SingleObject()
obj3.login() // 输出结果是对的，但
console.log('obj1 === obj3', obj1 === obj3)   // 并非一致

