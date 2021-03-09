(() => {
    // str是string类型的
    function sayHi(str: string) {
        return "Hello" + str
    }
    let text = "大甜甜"
    let str = "小甜甜"
    let name = "甜甜"
    console.log(sayHi(text));
    console.log(sayHi(str));
    console.log(sayHi(name));
    // 总结：ts的文件中如果直接使用js语法代码，在html中直接引入ts文件。在谷歌浏览器中是可以直接使用的
    // 如果ts文件中 有了ts语法代码，那么就需要将ts文件编译成js文件。在html文件中引入js文件来使用
    // ts文件中函数的形参，如果使用了某个类型进行校验的话，在最终编译后的js文件是没有类型的
    // ts文件中变量使用let定义，在不指定编译版本时 编译后的变量会变成var
})()