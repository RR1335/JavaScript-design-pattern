class Car {
    constructor(num) {
        this.num = num
    }
}

class Camera {
    shot(car) {
        return {
            num:car.num,
            inTime:Date.now()
        }
    }
}

class Screen {
    show(car,inTime) {
        console.log('车牌号', car.num)
        console.log('停车时长', Date.now() - inTime)
    }
}

class Park {
    constructor(floors) {
        this.floors = floors || []
        this.camera = new Camera()
        this.screen = new Screen()
        this.carList = {} // 拍摄返回的车辆信息
    }
    in(car) {
        const info = this.camera.shot(car)

        const i = parseInt(Math.random() * 100 % 100)
        const place = this.floors[0].places[i]

        place.in()
        info.place = place

        this.carList[car.num] = info
    }
    out(car) {
        const info = this.carList[car.num]

        const place = info.place
        place.out()
        this.screen.show(car,info.inTime)

        delete this.carList[car.num]
    }
    emptyNum() {
        return this.floors.map(floor => {
            return `${floor.index} 层，有 ${floor.emptyPlaceNum()} 个空闲车位`
        }).join('\n')
    }
}

class Floor {
    constructor(index,places) {
        this.index = index
        this.places = places || []
    }
    emptyPlaceNum() {
        let num = 0
        this.places.forEach(p  => {
            if (p.empty) {
                num = num +1 
            }
        })
        return num 
    }
}



class Place {
    constructor() {
        this.empty = true
    }
    in() {
        this.empty = false
    }
    out() {
        this.empty = true
    }
}


// 模拟
const floors = []
for (let i = 0; i<3 ; i++) {
    const places = []
    for (let j=0; j<100; j++) {
        places[j] = new Place()
    }
    floors[i] = new  Floor(i + 1 , places)
}
const park = new Park(floors) 

const car1 = new Car(100)
const car2 = new Car(200)
const car3 = new Car(300)



console.log('第一辆车进入')
console.log(park.emptyNum())
park.in(car1)
console.log(park.emptyNum())

console.log('第一辆车离开')
park.out(car1)
console.log(park.emptyNum())


console.log('第二辆车进入')
console.log(park.emptyNum())
park.in(car2)

console.log('第三辆车进入')
console.log(park.emptyNum())
park.in(car3)

console.log('第二辆车离开')
park.out(car2)