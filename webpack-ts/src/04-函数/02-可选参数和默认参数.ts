//可选参数 函数在声明的时候 内部参数使用?进行修饰 那么该参数就表示可传入可不传入 叫可选参数
//默认参数 函数在声明的时候 内部参数有自己的默认值 此时该参数叫做默认参数
(() => {
    //定义一个函数:传入姓氏和名字 可以得到姓名(姓氏+名字=姓名)
    // 需求 如果不传入任何内容就返回默认的姓氏
    // 需求 如果只传入姓氏 那么就返回姓氏
    // 需求 如果传入姓氏和名字 那么就返回姓名

    const getFullName = function (firstName: string = "东方", lastName?: string): string {
        // 判断名字是否传入了
        if (lastName) {
            return firstName + '-' + lastName
        } else {
            return firstName
        }
    }
    // 如果不传入任何内容就返回默认的姓氏
    console.log(getFullName());
    // 如果只传入姓氏 那么就返回姓氏
    console.log(getFullName("诸葛"));
    //  如果传入姓氏和名字 那么就返回姓名
    console.log(getFullName("诸葛", '孔明'));


    // 函数调用
})()