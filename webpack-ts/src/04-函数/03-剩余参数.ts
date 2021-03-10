// 剩余参数(rest参数)
// 剩余参数是放在函数声明的时候所有参数的最后

(() => {
    // ...args: string[]---->表示剩余的参数 放在了一个字符串数组中 args里面
    function showMsg(str: string, str1: string, ...args: string[]) {
        console.log(str);
        console.log(str1);
        console.log(args);
    }
    showMsg("a", 'b', 'c', 'd', 'e')
})()