class Adaptee {
    specificRequest() {
        return '美式插头'
    }
}

class Target {
    constructor() {
        this.adaptee = new Adaptee()
    }
    request() {
        let info = this.adaptee.specificRequest()
        return `${info} - 转换器 - 中式插头`
    }
}


let target = new Target()
let res = target.request()
console.log(res)