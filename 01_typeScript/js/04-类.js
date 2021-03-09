"use strict";
//ts中书写js中的类，演示效果
(() => {
    //定义一个类
    class Person {
        constructor(firstName, lastName) {
            // 更新属性数据
            this.firstName = firstName;
            this.lastName = lastName;
            // 全名
            this.fullName = this.firstName + this.lastName;
        }
    }
    // 定义一个输出名字的函数
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    // 实例化对象
    const person = new Person("诸葛", '孔明');
    console.log(showFullName(person));
})();
