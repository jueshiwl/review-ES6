//字符串扩展

import 'babel-polyfill'

{
    console.log('a', `\u0061`)
    console.log('s', `\u20BB7`) //超过了0xFFFF

    console.log('s', `\u{20BB7}`)
}

{
    let a = 'a'
    let s = '𠮷'
    console.log('length', a.length)
    console.log('length', s.length)
    console.log('0', s.charAt(0))
    console.log('1', s.charAt(1))
    console.log('at0', s.charCodeAt(0))
    console.log('at1', s.charCodeAt(1))

    let s1 = '𠮷a'
    console.log('length', s1.length)
    console.log('code0', s1.codePointAt(0))
    console.log('code0', s1.codePointAt(0).toString(16))
    console.log('code1', s1.codePointAt(1))    
    console.log('code3', s1.codePointAt(2))    
}

{
    console.log(String.fromCharCode("0x20bb7"))
    console.log(String.fromCodePoint("0x20bb7"))
}

{
    let str = "string"
    console.log('includes', str.includes("r"))
    console.log('start', str.startsWith("str"))
    console.log('end', str.endsWith("ng"))
}

{
    let str = "abc"
    console.log(str.repeat(2))
}