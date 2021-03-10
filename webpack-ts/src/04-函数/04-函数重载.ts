// 函数重载 函数名字相同 函数的参数和个数不同

(() => {
    // 定义一个函数
    // 需求:我们有一个add函数 他可以接收2个string类型的参数进行拼接 或 2个number类型的参数进行相加

    // 函数重载声明
    function add(x: string, y: string): string
    function add(x: number, y: number): number

    // 函数声明
    function add(x: string | number, y: string | number): string | number | undefined {
        if (typeof x === 'string' && typeof y === 'string') {
            return x + y //字符串拼接
        } else if (typeof x === 'number' && typeof y === 'number') {
            return x + y //数字相加
        }
    }
    // 两个字符串
    console.log(add('10', '20'));
    // 两个数字
    console.log(add(10, 20));
    // 一个数字一个字符串 或 // 一个字符串一个数字
    // 非法数据ts应该提示错误信息内容 此时需要用的函数重载
    // console.log(add(10, '20'));
    // console.log(add('20', 10));

})()
