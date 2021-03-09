//类型注解是一种轻量级的为函数或者变量添加的约束
// ts提供了静态代码的分析能力，它可以分析代码结构和提供的类型注解
(() => {
    function showMsg(value: string) {
        return '床前明月光' + ',' + value
    }
    let msg = '疑是地上霜'
    // let msg = [1,2,3,4,5]
    console.log(showMsg(msg));
})()