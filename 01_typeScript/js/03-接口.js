"use strict";
// 接口是一种能力，一种约束
(() => {
    // 输出名字
    function showFullName(person) {
        return person.firstName + '_' + person.lastName;
    }
    // 定义一个对象
    const Person = {
        firstName: "东方",
        lastName: "不败"
    };
    console.log(showFullName(Person));
})();
