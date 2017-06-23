// 对象扩展 Object
// 1.简介表示法
// 2.属性表达式
// 3.扩展运算符
// 4.Object新增方法

{
    //简介表示法
    let o = 1
    let k = 2
    let es5 = {
        o: o,
        k: k
    }
    let es6 = {
        o,
        k
    }
    console.log(es5,es6)

    let es5_method = {
        hello: function () {
            console.log('hello')
        }
    }
    let es6_method = {
        hello () {
            console.log('hello')
        }
    }
    console.log(es5_method,es6_method)
}

{
    // 属性表达式
    let a = 'b'
    let es5_obj = { //key值是固定的
        a: 'c'
    }
    let es6_obj = { //key值可以是变量
        [a]: 'c'
    }
    console.log(es5_obj, es6_obj)
}

{
    // 新增API
    // Object.is 的功能和 === 是一样的
    console.log('字符串', Object.is('abc', 'abc'))
    console.log('数组', Object.is([], []))    //数组也是引用类型

    console.log('拷贝合并', Object.assign({a: 'a'},{b: 'b'})) //这个方法是浅拷贝
    console.log('拷贝合并', {...{a: 'a'}, ...{b: 'b'}})

    let test = {k: '123', o: '456'}
    for (let [key,value] of Object.entries(test)) {
        console.log([key,value])
    }
}

{
    // 扩展运算符
    // let {a, b, ...c} = {a: 'test', b: 'kill', c: 'ddd', d: 'ccc'}
}