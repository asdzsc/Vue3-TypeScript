// 多个泛型参数的函数：函数中有多个泛型的函数
(() => {
    function getMsg<K, T>(value1: K, value2: T): [K, T] {
        return [value1, value2]
    }
    const arr = getMsg<string, number>("jack", 100.123)
    console.log(arr);
    console.log(arr[0].split(''));
    console.log(arr[1].toFixed(1));

})()