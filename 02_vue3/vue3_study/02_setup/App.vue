<template>
  <div>
    我有变帅了
    <!-- <h1>{{ number }}</h1> -->
  </div>
</template>

<script lang="ts">
// 这里可以使用ts代码

// defineComponent 函数 目的是定义一个组件 内部可以传入一个配置对象
import { defineComponent } from "vue";
// 引入一个子级组件

//暴露出去一个定义好的组件
export default defineComponent({
  // 当前组件名字 是App
  name: "App",
  /*
    setup 所有的组合api函数都在这里调用 只在初始化的时候执行一次
    函数如果返回的是对象 对象中的属性和方法 模板中可以直接使用
  */

  // setup() {
  //   const number = 10;
  //   return {
  //     number,
  //   };
  // },
});
</script>
