// 静态成员：在类中通过static修饰的属性或方法，那么就是静态的属性 或静态的方法 也称之为 静态成员
// 静态成员在使用的时候是通过类名的这种语法调用的
(() => {
    class Person {
        // 类中 默认有一个内置的name属性 
        // static 静态属性
        static name1: string = '小甜甜'
        // “static”修饰符不能出现在构造函数声明中
        constructor() {
            // 此时的this是实例对象，name1是静态属性 不能通过实例对象来直接调用静态属性使用
            // this.name1 = name
        }
        // static 静态方法
        static sayHi() {
            console.log("hello 你好啊");
        }
    }
    // 实例对象
    const person = new Person()
    //通过实例对象调用属性(实例属性)
    // console.log(person.name1);
    //通过实例对象调用方法(实例方法)
    // person.sayHi()
    // 通过类名，静态属性的方式来访问该成员的数据
    console.log(Person.name1);
    Person.name1 = '大甜甜'
    console.log(Person.name1);
    // 通过类名，静态方法的方式来调用内部的方法
    Person.sayHi();



})()