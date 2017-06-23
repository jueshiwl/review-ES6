// 数据结构
// 1.Set的用法
// 2.WeakSet的用法
// 3.Map的用法
// 4.WeakMap的用法

{
    let list = new Set()
    list.add(5)
    list.add(7)

    console.log('size',list.size)
}

{
    let arr = [1,2,3,4,5]
    let list = new Set(arr)

    console.log('size',list.size)
}

{
    // Set里是的值都是唯一的
    let list = new Set()
    list.add(1)
    list.add(2)
    list.add(1)

    console.log('list',list)

    let arr = [1,2,3,1,'2']
    let list2 = new Set(arr)
    console.log(Array.from(list2))
}

{
    let arr = ['add', 'delete', 'clear', 'has'] // Set的方法
    let list =  new Set(arr);

    console.log('has', list.has('add'))
    console.log('delete', list.delete('add'))
    list.clear()
    console.log('clear', list)
}

{
    // Set的遍历
    let arr = ['add', 'delete', 'clear', 'has'] 
    let list =  new Set(arr);

    for (let [key,value] of list.entries()) {
        console.log(key, value)
    }

    list.forEach(item => {
        console.log(item)
    })
}

{
    // WeakSet的元素只能是对象，不会检测值是否被垃圾回收了
    // 没有clear方法，没有size属性，不能遍历
    let weaklist = new WeakSet()

    let arg = {}

    weaklist.add(arg)
    // weaklist.add(2)
}

{
    // map的特性是key可以是任何数据类型
    let map = new Map()
    let arr = ['123']

    map.set(arr,456)
    console.log('map', map)
}

{
    let map = new Map([['a',123],['b',456]])
    console.log(map)
}

{
    'WeakMap和Map的区别和WeakSet和Set的区别是一样的'
}

{
    
}