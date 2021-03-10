// 抽象类:包含抽象方法(抽象方法一般没有任何的具体内容的实现)，也可以包含实例方法
//        抽象类不能实例化 只是为了让子类进行实例化实现内部的抽象方法
//        抽象类的目的/作用:最终是为子类服务的
(() => {
    // abstract关键字 定义一个抽象类 
    abstract class Animal {
        // 抽象属性
        // abstract name: string
        // abstract 关键字 定义一个抽象方法
        abstract eat(): any
        // abstract eat() {} 方法“eat”不能具有实现，因为它标记为抽象
        // 实例方法
        sayHi() {
            console.log('你好啊！');
        }
    }
    // 定义一个子类(派生类)Dog
    class Dog extends Animal {
        // name: string = '小黄'
        // 非抽象类“Dog”不会实现继承自“Animal”类的抽象成员“eat”
        // 重新实现抽象类中的方法 此时这个方法就是当前Dog类的实例方法
        eat() {
            console.log("趴着吃");
        }
    }
    // 实例化Dog的对象
    const dog: Dog = new Dog()
    // Dog类的实例方法
    dog.eat()
    // 抽象类中的实例方法
    dog.sayHi()
    // console.log(dog.name);
    // 不能实例化抽象类的对象
    // const ani: Animal = new Animal()
})()