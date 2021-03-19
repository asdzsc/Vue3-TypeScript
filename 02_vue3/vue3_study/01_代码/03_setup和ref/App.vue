<template>
  <h1>setup和ref的基本使用</h1>
  <h2>{{ count }}</h2>
  <button @click="handleUpdate">更新</button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "App",
  // 需求 页面打开后可以直接看到一个数据 点击按钮后 该数据可以发生变化
  // Vue2 实现方式
  /*
  data() {
    return {
      count: 0, //属性
    };
  },
  methods: {
    // 方法
    handleUpdate() {
      this.count++;
    },
  },
  */
  // Vue3 实现方式
  // setup 是组合api的入口函数
  setup() {
    // let count = 0 这个时候数据不是响应式的(响应式数据:数据变化 页面跟着渲染变化)
    // ref是一个函数 作用：定义一个响应式的数据返回一个Ref对象 对象中有一个value属性 如果需要对数据进行操作
    // 需要使用Ref 对象调用value属性的方式进行数据的操作 html模板中不需要使用 .value属性的方法
    // 定义变量

    // ref：一般是来定义一个基本类型的响应式数据  count是Ref类型
    const count = ref(0);
    // 方法
    function handleUpdate() {
      // 报错原因 count是一个Ref对象 对象是不能进行++的操作
      // const++
      count.value++;
      // console.log(count);
    }
    // 返回的是一个对象
    return {
      count, //属性
      handleUpdate, //方法
    };
  },
});
</script>
