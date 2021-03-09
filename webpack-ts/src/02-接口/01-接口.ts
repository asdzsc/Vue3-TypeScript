// 接口是对象的状态(属性)和行为(方法)的抽象(描述)
// 接口:是一种类型、一种规范、一种规则、一种能力、一种约束
(() => {
    // 需求：创建人的对象，需要对人的属性进行一定的约束
    // id是number类型，必须有 只读的
    // name是string类型，必须有
    // age是number类型，必须有
    // sex是string类型，可没有

    // 定义一个接口 该接口作为person对象的类型使用，限定或者约束对象中的属性数据
    interface IPerson {
        // readonly 代表 id是只读的，是number类型 const 只能用来修饰可读变量，无法修饰可读属性
        readonly id: number,
        name: string,
        age: string,
        // ? 代表可有可无的
        sex?: string
    }
    // 定义一个对象 该对象的类型是定义的接口IPerson
    const person: IPerson = {
        id: 1,
        name: "Tom",
        age: '18',
    }
    console.log(person);
    // person.id = 100 无法分配到 "id" ，因为它是只读属性
    person.sex = "男"
    console.log(person);

})()