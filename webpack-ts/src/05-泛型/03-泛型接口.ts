// 泛型接口 在定义接口时 为接口中的属性或方法定义泛型类型 在使用接口时 再指定具体的泛型类型

(() => {
    // 需求 定义一个类 用来储存用户的相关信息(id,名字,年龄)
    // 通过一个类的实例对象调用add的方法 可以实现添加多个用户信息对象 调用 getUserId方法可以根据id获取某个指定用户信息

    // 定义一个泛型接口
    interface IbaseCRUD<T> {
        data: Array<T>
        add: (t: T) => T
        getUserId: (id: number) => T
    }

    // 定义一个用户信息的类
    class User {
        id?: number //用户的id ?代表该属性可有可无
        name: string //用户的名字
        age: number //用户的年龄
        // 构造函数
        constructor(name: string, age: number) {
            this.name = name
            this.age = age
        }
    }

    // 定义一个类 针对用户的信息对象进行增加及查询操作
    // CRUD----> 增加(Create)、检索(Retrieve)、更新(Update)和删除(Delete)
    class UserCRUD implements IbaseCRUD<User> {
        // 用来保存多个user类型的用户信息对象
        data: Array<User> = []
        // 用来储存用户信息对象的
        add(user: User): User {
            //产生id
            user.id = Date.now() + Math.random()
            //把用户信息对象添加到data数组中
            this.data.push(user)
            return user
        }
        // 根据id查询指定的用户信息对象
        getUserId(id: number): User | any {
            return this.data.find(user => user.id === id)
        }
    }

    // 实例化添加用户信息的类UserCRUD
    const userCRUD: UserCRUD = new UserCRUD()
    // 调用添加数据的方法
    userCRUD.add(new User("jack", 18))
    userCRUD.add(new User("Tom", 20))
    const { id } = userCRUD.add(new User("lucy", 21))
    userCRUD.add(new User("leo", 22))
    console.log(userCRUD.data);
    // 根据id查询用户信息对象
    const user = userCRUD.getUserId(id ? id : 0)
    console.log(user);

    
})()