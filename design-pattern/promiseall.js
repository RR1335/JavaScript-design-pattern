Promise.myAll = function(proms) {
    let res,rej
    const p = new Promise((resolve,reject) => {

    })
    let i = 0
    const result = []
    for ( const item of proms) {
        const index = i
        i++ 
        Promise.resolve(item).then((data) => {
            // 成功结果保存到数据
            result[index] = data
            //判断是不是所有的 promise 都已经成功
            i--
            if (i === 0) {
                res(result)
            }
        }, rej)
    }
    if (i === 0) {
        res([])
    }
    return p
}

Promise.myAll([])