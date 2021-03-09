// 继承 类与类之间的关系
// 继承后类与类之间的叫法:A继承了B这个类，那么此时A类叫做子类,B类叫做基类
// 子类---派生类
// 基类---超类(父类)
// 一旦发生了继承的关系，就出现了父子类的关系(叫法)
(() => {
    // 定义一个类，作为基类(超类/父类)
    class Person {
        // 定义属性
        name: string
        age: number
        gender: string
        // 定义构造函数
        constructor(name: string = '小甜甜', age: number = 16, gender: string = '女') {
            // 更新属性数据
            this.name = name
            this.age = age
            this.gender = gender
        }
        // 定义实例方法
        sayHi(str: string) {
            console.log(`我的名字是：${this.name},${str}`);
        }
    }
    // 定义一个类继承自Person
    class Student extends Person {
        constructor(name: string, age: number, gender: string) {
            // 调用父类中的构造函数使用super
            super(name, age, gender)
        }
        sayHi() {
            console.log("我是student中的sayHi方法");
            // super.sayHi('哈哈')
        }
    }
    // 实例化Person
    const person = new Person()
    person.sayHi('你叫什么呀？')
    //实例化Student

    const student = new Student('大甜甜', 18, '女')
    student.sayHi()

    // 总结 类和类之间如果有继承关系 需要使用extends关键字
    //  子类中可以调用父类中的构造函数，使用的是super关键字(包括调用父类中的实例方法，也可以使用super)
    // 子类可以重写父类的方法
})()