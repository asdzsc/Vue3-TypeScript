// readonly修饰符:首先是一个关键字 对类中的属性成员进行修饰 修饰后该属性成员就不能在外部随意修改了
// 构造函数中可以对只读属性成员的数据进行修改
// 如果构造函数中没有任何参数 类中的属性成员此时已经使用了readonly进行修饰 那么外部也是无法对这个属性进行修改的
// 构造函数中的参数可以使用readonly进行修饰 一旦修饰了 那么该类就有了只读的成员属性了 外部可以访问 但无法修改
// 构造函数中的参数可以使用 public private protected进行修饰 无论哪种修饰 该类中都会自动添加这么一个成员属性
(() => {
    /*
    readonly 修饰类中的成员的属性操作
    // 定义一个类
    class Person {
        // 属性
        // readonly name: string = '大甜甜'//初始值
        readonly name: string
        // 构造函数
        constructor(name: string = '大甜甜') {
            this.name = name
        }
        sayHi() {
            console.log(`你好，${this.name}`);
            // 类中的普通方法也是无法进行修改 readonly修饰的属性
            // this.name = "Tom"
        }
    }
    // 实例对象
    const per = new Person('小甜甜')
    per.sayHi()
    console.log(per);
    console.log(per.name);
    // "name" 它是只读属性
    // per.name = '大甜甜'
    // per.sayHi()
    // console.log(per);
    // console.log(per.name);
    */

    //  readonly 修饰类中的构造函数的参数(参数属性)
    // 定义一个类
    class Person {
        // 构造函数
        // 构造函数中的name参数，一旦使用readonly 进行修饰后 那么该属性参数就可以叫参数属性
        // 构造函数中的name参数，一旦使用readonly 进行修饰后 那么Person中就有了一个name的属性成员
        // 构造函数中的name参数，一旦使用readonly 进行修饰后 外部也是无法修改类中的name的属性成员值的
        // constructor(readonly name: string = '大甜甜') {
        //     this.name = name
        // }
        // 构造函数中的name参数 一旦使用 public 进行修饰后 那么Person类中就有了一个公共的name属性成员
        // constructor(public name: string = '大甜甜') {
        //     this.name = name
        // }

        // 构造函数中的name参数 一旦使用 private 进行修饰后 那么Person类中就有了一个私有的name属性成员
        // constructor(private name: string = '大甜甜') {
        //     this.name = name
        // }

        // 构造函数中的name参数 一旦使用 protected 进行修饰后 那么Person类中就有了一个受保护的name属性成员(只能在本类和子类中访问)
        constructor(protected name: string = '大甜甜') {
            this.name = name
        }
    }
    // 实例对象
    console.log(Person.name);

    const per = new Person()
    console.log(per);
})()