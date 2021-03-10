// 类 可以理解为模板 通过模板可以实例化对象
//面向对象的编程思想
(() => {
    // ts中类的定义和使用
    class Person {
        name: string
        age: number
        gender: string
        constructor(name: string = '小甜甜', age: number = 18, gender: string = '女') {
            //更新属性数据
            this.name = name
            this.age = age
            this.gender = gender
        }
        sayHi(str: string) {
            console.log(`我叫${this.name}--今年${this.age}岁--是一个${this.gender}生--${str}`);
        }
    }
    const person = new Person('大甜甜', 20, '女')
    person.sayHi('你叫什么名字啊？')
})()