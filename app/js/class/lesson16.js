// decorator类的修饰符
// 1.是一个函数
// 2.是修改类的行为

{
    let readonly = function(target, name, desc) {
        desc.writable = false
        return desc
    }

    class Test {
        @readonly
        time () {
            return '2017-03-11'
        }
    }

    let test = new Test()
    console.log(test.time())
}

{
    // 第三方修饰器js库 core-decorators
}