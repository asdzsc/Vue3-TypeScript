// 泛型 在定义函数、接口、类的时候不能预先确定要使用的数据的类型 而是在使用的函数 接口 类的时候才确定数据的类型
(() => {
    // 需求:定义一个函数 传入两个参数 第一个参数是数据 第二个参数是数量 函数的作用：根据数量产生对应个数的数据 存放到一个数组中

    // 定义一个函数
    function getArr1(value: number, count: number): number[] {
        // 根据数据和数量产生一个数组
        const arr: number[] = []
        for (let i = 0; i < count; i++) {
            arr.push(value)
        }
        return arr
    }
    const arr1 = getArr1(100.123, 3)
    console.log(arr1);
    console.log("🚀 ------------------------------------分隔符 ");
    // 定义一个函数 需求同上 只不过传入的是字符串类型
    function getArr2(value: string, count: number): string[] {
        // 根据数据和数量产生一个数组
        const arr: string[] = []
        for (let i = 0; i < count; i++) {
            arr.push(value)
        }
        return arr
    }
    const arr2 = getArr2('100.123', 3)
    console.log(arr2);
    console.log("🚀 ------------------------------------分隔符 ");
    // 定义一个函数 需求 可以传入任意类型数据 返回的是存储任意数据的数组
    function getArr3(value: any, count: number): any[] {
        // 根据数据和数量产生一个数组
        const arr: any[] = []
        for (let i = 0; i < count; i++) {
            arr.push(value)
        }
        return arr
    }
    const arr3 = getArr3('100.123', 3)
    const arr4 = getArr3(100.123, 3)
    // arr3储存的是数字类型的数据
    console.log(arr3);
    // arr4储存的是字符串类型的数据
    console.log(arr4);
    console.log(arr3[0].split('-'));//没有任何提示信息
    console.log(arr4[0].toFixed(2));//没有任何提示信息
    console.log("🚀 ------------------------------------分隔符 ");

    // 采用泛型的形式
    // 定义一个函数 需求 可以传入任意类型数据 返回的是存储任意数据的数组
    function getArr4<T>(value: T, count: number): T[] {
        // 根据数据和数量产生一个数组
        // const arr: T[] = []
        const arr: Array<T> = []
        for (let i = 0; i < count; i++) {
            arr.push(value)
        }
        return arr
    }
    const arr5 = getArr4<number>(123.123, 5)
    const arr6 = getArr4<string>('abcdefg', 5)
    console.log(arr5);
    console.log(arr6);

    console.log(arr5[0].toFixed(2));

    console.log(arr6[0].toLocaleUpperCase());
    console.log(arr6[0].split(''));


    // arr5储存的是数字类型的数据
    // arr6储存的是字符串类型的数据
    // console.log(arr5[0].split('-'));//没有任何提示信息
    // console.log(arr6[0].toFixed(2));//没有任何提示信息
})()