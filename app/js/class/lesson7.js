// 函数扩展
// 1.参数默认值
// 2.rest参数
// 3.扩展运算符
// 4.箭头函数
// 5.this绑定
// 6.尾调用

{
    function test(x, y = 'es6') {
        console.log('默认值', x,y)
    }
    test('hello')
    test('hello', 'new')
}

{
    let x = 'test'
    function test2(x, y=x) { //先看定义里的作用域有没有
        console.log('作用域', x, y)
    }
    test2('kill')
    test2()
}

{
    // rest参数 就是把所有的参数都转换成一个数组
    function test3(...arg) {
        for(let v of arg) {
            console.log('rest', v)
        }
    }
    test3(1,2,3,4,'a')
}

{
    // 扩展运算符 ...
    console.log(...[1,2,4])
    console.log(...{'a':'1','b':'1'})
}

{
    let arrow = v => v*2
    console.log('arrow', arrow(3))
}

{
    // 尾调用 提升性能
    function tail(x) {
        console.log('tail',x)
    }
    function fx(x) {
        return tail(x)
    }
    fx(3)
}