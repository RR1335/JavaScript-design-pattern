class jQuery {
    constructor(seletor) {
        let slice = Array.prototype.slice
        let dom = slice.call(document.querySelectorAll(seletor))
        let len = dom ? dom.length : 0
        for (let i = 0 ; i < len ; i++ ) {
            this[i] = dom[i]
        }
        this.length = len
        this.seletor = seletor || ''
    }

    append(node) {

    }

    addClass(name) {

    }

    html(data) {

    }

}

window.$ = function(seletor) {
    // 工厂模式
    return new jQuery(seletor)
}

