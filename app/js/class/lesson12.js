// 类的概念
// 1.基本语法
// 2.类的继承
// 3.静态方法
// 4.静态属性
// 5.getter
// 6.setter

{
    // 基本定义和生成实例
    class Parent {
        constructor (name="hehe") {
            this.name = name
        }
    }

    let v_parent = new Parent('v')
    console.log('构造函数和实例', v_parent)
}

{
    // 继承
    class Parent {
        constructor (name="hehe") {
            this.name = name
        }
    }

    class Child extends Parent {

    }

    console.log('继承', new Child())
}

{
    // 继承传递参数
    class Parent {
        constructor (name="hehe") {
            this.name = name
        }
    }

    class Child extends Parent {
        constructor (name = 'child') {
            super(name)     // 一定要放在第一行
            this.type = 'man'
        }
    }

    console.log('继承', new Child('hello'))
}

{
   // getter setter
    class Parent {
        constructor (name="hehe") {
            this.name = name
        }

        get longName(){     // 这里是属性
            return 'mk' + this.name
        }

        set longName(value) {
            this.name = value
        }
    } 

    let v = new Parent()
    console.log(v.longName)
    v.longName = 'hello'
    console.log(v.longName, v)
}

{
    // 静态方法(通过类去调用而不是通过类的实例去调用)
    class Parent {
        constructor (name="hehe") {
            this.name = name
        }

        static tell() {     // 
            console.log('tell')
        }
    }

    Parent.tell()
}

{
    // 静态属性
    class Parent {
        constructor (name="hehe") {
            this.name = name
        }

        static tell() {
            console.log('tell')
        }
    }

    Parent.type = 'test'

    console.log('静态属性', Parent.type)
}