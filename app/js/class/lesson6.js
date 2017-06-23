// 数组扩展

{
    let arr = Array.of(3,4,7,9,11)
    console.log('arr=', arr)

    let empty = Array.of()
    console.log('empty=', empty)    
}

{
    let p = document.querySelectorAll('p')      //这是一个集合
    let parr = Array.from(p);                   //可以把集合转换为数组
    parr.forEach(item => {
        console.log(item.textContent)
    })

    console.log(Array.from([1,3,5],function(item){
        return item*2
    }))
}

{
    console.log('fill-7',[1,'a',undefined].fill(7)) //全部替换
    console.log('fill,pos', ['a', 'b', 'c'].fill(7,1,3))
}

{
    for(let index of ['1', 'c', 'ks'].keys()){
        console.log('keys', index)
    }
    // 兼容问题，需要polyfill
    // for(let index of ['1', 'c', 'ks'].values()){
    //     console.log('values', index)
    // }
    for(let [index,value] of ['1', 'c', 'ks'].entries()){
        console.log('values', index, value)
    }
}

{
    console.log('number', [1,2,NaN].includes(1))
    console.log('NaN', [1,2,NaN].includes(NaN))
}