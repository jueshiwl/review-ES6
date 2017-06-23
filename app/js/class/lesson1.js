// es6默认开启了严格模式
function test() {
    // for(let i = 0; i<3; i++) {
    //     console.log(i)
    // }
    // console.log(i)

    //使用let不能重复定义
    let a = 1;
    // let a = 2;
}

function last() {
    //const申明的时候必须赋值，且不能修改
    const PI = 3.1415926;
    // PI = 8;

    //定义为对象时，对象是引用类型，返回的是对象的指针，是可以更改对象里的值
    const k = {
        a: 1
    }
    k.b = 3;
    k.a = 3;
    console.log(k)
}

last();