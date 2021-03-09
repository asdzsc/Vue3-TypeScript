// 类 类型：类的类型，类的类型可以通过接口来实现
(() => {
    // 定义一个接口
    interface IFly {
        // 该方法中没有任何实现(方法中什么都没有)
        fly(): any
    }
    //定义一个类 类的类型是上面定义的接口(可理解为 IFly接口约束了当前Person这个类)
    class Person1 implements IFly {
        // 实现接口的方法
        fly() {
            console.log('超人不会飞1︿(￣︶￣)︿');
        }
    }
    // 实例化对象
    const person1 = new Person1()
    person1.fly()

    console.log("🚀 ------------------------------------分隔符 ");
    // 定义一个接口
    interface ISwim {
        // 该方法中没有任何实现(方法中什么都没有)
        swim(): any
    }
    //定义一个类 类的类型是IFly, ISwim(当前这个类可以实现多个接口，一个类可以被多个接口进行约束)
    class Person2 implements IFly, ISwim {
        // 实现接口的方法
        fly() {
            console.log('超人不会飞2︿(￣︶￣)︿');
        }
        swim() {
            console.log('超人不会游泳2︿(￣︶￣)︿');
        }
    }
    const petson2 = new Person2()
    petson2.fly()
    petson2.swim()
    console.log("🚀 ------------------------------------分隔符 ");
    //总结  类可以通过接口的方式来定义当前这个类的类型
    // 类可以实现一个接口，也可实现多个接口 接口中的内容都有真正的实现

    // 定义一个接口 继承其他多个接口
    interface myInter extends IFly, ISwim { }
    class Person3 implements myInter {
        fly() {
            console.log('超人不会飞3︿(￣︶￣)︿');
        }
        swim() {
            console.log('超人不会游泳3︿(￣︶￣)︿');
        }
    }
    const person3 = new Person3()
    person3.fly()
    person3.swim()
    // 总结 接口和接口之间叫做继承(使用extends关键字)  类和接口之间叫做实现(使用implements关键字)
})()