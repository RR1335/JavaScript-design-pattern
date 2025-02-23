function loadImg(src) {
    let promise = new Promise(function(resolve , reject){
        let img = document.createElement('img')
        img.onload = function() {
            resolve(img)
        }
        img.onerror = function () {
            reject(' img Loading ERROR!')
        }
        img.src = src
    }) 

    return promise
}

let src = 'https://th.bing.com/th/id/R.4122b0bf6b0c36b83a6c624c9e777cdb?rik=vsbFXpq8Cq5rug&riu=http%3a%2f%2fwww.readersdigest.ca%2fwp-content%2fuploads%2f2016%2f05%2fvisit-london-tower-bridge-12.jpg&ehk=B9C2zZ8cj%2fL5xs0j%2bAy9S2sNxKrBnvkBUt7SM3hXJUw%3d&risl=&pid=ImgRaw&r=0'
let result = loadImg(src)

result.then(function(img){
    console.log(`width: ${img.width}`)
    return img
}).then(function(img){
    console.log(`height: ${img.height}`)
}).catch (function(err) {
    console.error(err)
})
