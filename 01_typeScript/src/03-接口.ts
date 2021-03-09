// 接口是一种能力，一种约束
(() => {
    // 定义一个接口
    interface Inter {
        firstName: string//姓氏
        lastName: string//名字
    }
    // 输出名字
    function showFullName(person: Inter) {
        return person.firstName + '_' + person.lastName
    }
    // 定义一个对象
    const Person = {
        firstName: "东方",
        lastName: "不败"
    }
    console.log(showFullName(Person));

})()