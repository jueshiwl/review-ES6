// Promise

{
    let ajax = function (callback) {
        console.log('执行')
        setTimeout(function() {
            callback && callback.call()
        }, 1000)
    }

    ajax(function() {
        console.log('timeout1')
    })
}

{
    let ajax = function() {
        console.log('执行2')
        return new Promise(function(resolve, reject){
            setTimeout(function() {
                resolve()
            }, 1000);
        })
    }

    ajax().then(function() {
        console.log('promise')
    })
}

{
    let ajax = function() {
        console.log('执行3')
        return new Promise(function(resolve, reject){
            setTimeout(function() {
                resolve()
            }, 1000);
        })
    }

    ajax().then(function() {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                resolve()
            }, 2000);
        })
    }).then(function() {
        console.log('timeout3')
    })
}

{
    function loadImg(src) {
        return new Promise((resolve, reject) => {
            let img = document.createElement('img')
            img.src = src
            img.onload = function() {
                resolve(img)
            }
            img.onerror = function (err) {
                reject(err)
            }
        })
    }

    function showImgs(imgs) {
        console.log(imgs)
        imgs.forEach(function(img) {
            document.body.appendChild(img)
        });
    }

    Promise.all([
        loadImg('http://imgsrc.baidu.com/imgad/pic/item/caef76094b36acaf0accebde76d98d1001e99ce7.jpg'),
        loadImg('http://imgsrc.baidu.com/imgad/pic/item/caef76094b36acaf0accebde76d98d1001e99ce7.jpg'),
        loadImg('http://imgsrc.baidu.com/imgad/pic/item/caef76094b36acaf0accebde76d98d1001e99ce7.jpg')
    ]).then(showImgs)
}