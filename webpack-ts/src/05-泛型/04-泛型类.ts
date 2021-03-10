// 泛型类
(() => {
    // 定义一个类 类中的属性值的类型是不确定的 方法中的参数及返回值的类型也不确定
    // 定义一个泛型类
    class GenericNumber<T>{
        defaultValue: T | undefined
        add: ((x: T, y: T) => T) | undefined
    }
    const g1: GenericNumber<number> = new GenericNumber<number>()
    g1.defaultValue = 100
    g1.add = function (x, y) {
        return x + y
    }
    console.log(g1.add(10, 20));
    console.log(g1.add(g1.defaultValue, 20));

    class GenericString<T>{
        defaultValue: T | undefined
        add: ((x: T, y: T) => T) | undefined
    }
    const g2: GenericString<string> = new GenericString<string>()
    g2.defaultValue = '哈哈'
    g2.add = function (x, y) {
        return x + y
    }
    console.log(g2.add('hello', '你好'));
    console.log(g2.add(g2.defaultValue, '你好'));

})()