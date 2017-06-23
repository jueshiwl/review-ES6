console.log('------------------------------------');
console.log('数值扩展');
console.log('------------------------------------');

{
    console.log('B', 0B111110111)   //二进制
    console.log(0o767)              //八进制
}

{
    Number.isNaN(NaN)                   //是否是NaN
    Number.isFinite(15)                //是否为无尽数
    console.log(Number.isFinite(15))
    console.log(Number.isFinite(NaN))
    console.log(Number.isFinite('true'/0))
}

{
    // 是不是整数  Number.isInteger()
    console.log(Number.isInteger(25))
    console.log(Number.isInteger(25.0))
    console.log(Number.isInteger(25.1))
    console.log(Number.isInteger('25.1'))
}

// -2^53 和 2^53 js中数字超出这个区间就不准确了