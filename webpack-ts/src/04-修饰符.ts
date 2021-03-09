//修饰符(类中的成员的修饰符)：主要是描述类的主要成员(属性，构造函数，方法)的课访问性
// 类中的成员都有自己的默认的访问修饰符，public
//public ---公共的 修饰符 类中默认的修饰符 代表公共的 在任何地方都可以访问
//private ---私有的 修饰符 类中的成员如果使用 private修饰 外部是无法访问这个成员数据的 子类也是无法访问该数据的
//protected ---受保护的 修饰符 类中的成员如果使用 protected修饰 外部是无法访问这个成员数据的 子类可以访问该数据

// 定义一个类
class Person {
    // 属性public修饰了属性成员
    // public name: string 
    // private name: string
    protected name: string
    // 构造函数
    public constructor(name: string) {
        // 更新属性值
        this.name = name
    }
    // 方法
    public eat() {
        console.log(`${this.name}说这块肉真好吃！`);
    }
}
console.log(Person.name);

// 定义一个子类
class Student extends Person {
    constructor(name: string) {
        super(name)
    }
    play() {
        console.log(`${this.name}喜欢玩`);

    }
}
// 子类的实例对象
const student = new Student('小明')
// console.log(student.name);

student.play()
// 实例对象
const person = new Person('Tom')
// 类的外部可以访问类中的属性成员
// console.log(person.name); //属性“name”为私有属性，只能在类“Person”中访问。

person.eat()