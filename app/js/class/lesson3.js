//正则扩展

{
    let regex = new RegExp('xyz', 'i');
    let regex2 = new RegExp(/xyz/i);
    console.log(regex.test('xyz123'), regex2.test('xyz123'))

    let regex3 = new RegExp(/xyz/ig, 'i');
    console.log(regex3.flags);//flags是用来获取正则的修饰符    
}

// y修饰符
{
    let s = 'bbb_bb_b';
    let a1 = /b+/g;
    let a2 = /b+/y;

    console.log('one', a1.exec(s), a2.exec(s));
    console.log('two', a1.exec(s), a2.exec(s));

    console.log(a1.sticky, a2.sticky);
}

// u修饰符
{
    console.log('u-1', /^\uD83D/.test('\uD83D\uDC2A'));
    console.log('u-1', /^\uD83D/u.test('\uD83D\uDC2A')); 
}