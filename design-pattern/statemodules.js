class State{
    constructor(color) {
        this.color = color
    }
    handle(context) {
        console.log(`turn to ${this.color} right`)
        context.setState(this)
    }

}

class Context {
    constructor() {
        this.state = null
    }
    getState() {
        return this.state
    }

    setState(state) {
        this.state = state
    }

}