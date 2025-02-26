function minx(...list) {
    return function (target) {
        Object.assign(target.protorype,...list) 
    }
}

const Foo = {
    foo () {
        console.log('foo')
    }
}

@minx(Foo) 
class decClass {

}

let obj = new decClass()

obj.foo()