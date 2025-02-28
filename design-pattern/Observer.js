class Subject {
    constructor() {
        this.state = 0
        this.observers = []
    }
    getState() {
        return this.state
    }
    setState(state) {
        this.state = state
        this.notifyAllObservers()
    }
    notifyAllObservers() {
        this.observers.forEach(oberver => {
            oberver.update()
        })
    }
    attach(observer) {
        this.observers.push(observer)
    }
}

class observer {
    constructor(name,subject) {
        this.name = name
        this.subject = subject
        this.subject.attach(this)
    }
    update() {
        console.log(`${this.name} update, state: ${this.subject.getState()}`)
    }
}


let  s = new Subject
let  O1 = new observer('O1',s) 
let  O2 = new observer('O2',s) 
let  O3 = new observer('O3',s) 

s.setState(1)
s.setState(2)
s.setState(3)