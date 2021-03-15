<template>
  <h1>reactive的使用</h1>
  <h2>姓名：{{ user.name }}</h2>
  <h2 v-if="user.age ? user.age : ''">年龄：{{ user.age }}</h2>
  <h2>性别：{{ user.gender }}</h2>
  <h2>wife：</h2>
  <div v-for="item in user.wife" :key="item.age">
    <h3>wife名字：{{ item.name }}</h3>
    <h3>wife年龄：{{ item.age }}</h3>
  </div>
  <button @click="handleUpdate">更新数据</button>
</template>

<script lang="ts">

import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: "App",
  // 需求：显示用户信息 点击按钮 更新用户相关信息

  /*
    reactive
    作用：定义多个数据的响应式
    const proxy = reactive(obj) 接收一个普通对象然后返回该普通对象的响应式代理对象
    响应式转换是"深层的"：会影响对象内部所有嵌套的属性
  */
  setup() {
    // 把数据变成响应式的
    // const obj: any = {
    const obj = {
      name: "Tom",
      age: 20,
      wife: [
        {
          name: "小甜甜",
          age: 18,
        },
        {
          name: "大甜甜",
          age: 19,
        },
      ],
    };
    const user = reactive<any>(obj);
    // console.log(user);
    // 方法
    // function handleUpdate(){}
    const handleUpdate = () => {
      // obj.name = "lucy"; 直接使用目标对象的方式来更新对象中的成员的值 是不可行的 只能使用代理的方式更新数据(响应式数据)
      // user.name = "Leo";
      // user.age = 21;
      // user.wife[0].name = "小情人";
      // user.wife[1].name = "大情人";
      // user-->代理对象  obj-->目标对象
      // user对象或者obj对象添加一个新的属性 哪一种方式会影响界面的更新
      // obj.gender = "男"; // 操作目标对象这种方式 界面不会渲染 但是数据添加到obj对象和user对象上了
      user.gender = "男"; // 操作代理对象这种方式 界面可以渲染 数据添加到obj对象和user对象上了
      // user对象或者obj对象移除一个已经存在的属性 哪一种方式会影响界面的更新
      // delete obj.age; //操作目标对象这种方式 界面没有更新渲染 obj对象和user对象也都删除了age这个属性
      delete user.age; //操作代理对象这种方式 界面更新渲染 obj对象和user对象也都删除了age这个属性
      // 总结：如果操作代理对象 目标对象随之改变 但是不会渲染页面 所以想要同时操作数据又更新页面 就要操作代理对象


      // 通过代理对象找到目标对象中的某个属性，更改该属性的某个数组的数据
      user.wife[0].age = 17;
      // 通过代理对象找到目标对象中的某个属性，给某个数组数据添加新的属性
      user.wife.push(
        {
          name: "小红红",
          age: 18,
        },
        {
          name: "大红红",
          age: 20,
        }
      );
    };
    return { user, handleUpdate };
  },
});
</script>
