// 泛型约束 如果我们直接对一个泛型参数取length属性 会报错 因为这个泛型根本不知道它有这个属性
(() => {

    // 定义一个接口 用来约束将来的某个类型中必须要有length这个属性
    interface ILength {
        // 接口中有一个属性length
        length: number
    }

    function getLength<T extends ILength>(x: T): number {
        return x.length
    }

    console.log(getLength('hello'));
    console.log(getLength([123, 123, 456]));
    // console.log(getLength(456)); 类型“number”的参数不能赋给类型“ILength”的参数。

})()