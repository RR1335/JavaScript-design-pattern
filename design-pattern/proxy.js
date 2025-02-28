class ReadImg {
    constructor(filename) {
        this.filename = filename
        this.loadFromDisk()         // 初始化即从硬盘加载（模拟）
    }
    display() {
        console.log('Display ...' + this.filename)
    }
    loadFromDisk() {
        console.log('Loading ...' + this.filename)
    }
}

class ProxyImg {
    constructor(filename) {
        this.realImg = new ReadImg(filename)
    }
    display() {
        this.realImg.display()
    }
}



let proxyImg = new ProxyImg('p.png')
proxyImg.display()