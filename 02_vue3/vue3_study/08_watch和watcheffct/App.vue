<template>
  <h1>计算属性和监视</h1>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏：<input
      type="text"
      placeholder="请输入姓氏"
      v-model="user.firstName"
    /><br />
    名字：<input type="text" placeholder="请输入名字" v-model="user.lastName" />
  </fieldset>
  <fieldset>
    <legend>计算属性和监视的演示</legend>
    姓名：<input
      type="text"
      placeholder="请输入姓名"
      v-model="fullName1"
    /><br />
    姓名：<input type="text" placeholder="请输入姓名" v-model="fullName2" />
    <br />
    姓名：<input type="text" placeholder="请输入姓名" v-model="fullName3" />
  </fieldset>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  ref,
  watch,
  watchEffect,
} from "vue";
export default defineComponent({
  name: "App",

  setup() {
    // 定义一个响应式对象
    const user = reactive({
      // 姓氏
      firstName: "东方",
      // 名字
      lastName: "不败",
    });

    // 通过计算属性的方式，实现第一个姓名的显示
    // vue3中的计算属性
    // 计算属性的函数如果只传入一个函数  表示的是get

    // 第一个姓名 返回的是Ref类型的对象
    const fullName1 = computed(() => {
      return user.firstName + "_" + user.lastName;
    });
    // 第二个姓名
    const fullName2 = computed({
      get() {
        return user.firstName + "_" + user.lastName;
      },
      set(v: string) {
        console.log(v);
        const names = v.split("_");
        console.log();
        user.firstName = names[0];
        user.lastName = names[1];
      },
    });
    const fullName3 = ref("");
    // 监视 监视指定的数据
    // watch(
    //   user,
    //   ({ firstName, lastName }) => {
    //     fullName3.value = firstName + "_" + lastName;
    //   },
    //   { immediate: true, deep: true }
    // );
    // immediate默认执行一次 watch deep 深度监视user下属性的属性

    // 监视 不需要配置  immediate 本身默认就会监视(默认执行一次)
    watchEffect(() => {
      fullName3.value = user.firstName + "_" + user.lastName;
    });

    // watch-------监视多个数据
    // watch([user.firstName, user.lastName, fullName3], () => {
    //   // 这里没有执行 fullName3是响应式数据 但是 user.firstName user.lastName 不是响应式的数据
    //   console.log("========");
    // });
    // 当用watch监视多个数据的时候 需要如下写法
    watch([() => user.firstName, () => user.lastName, fullName3], () => {
      // 这里没有执行 fullName3是响应式数据 但是 user.firstName user.lastName 不是响应式的数据
      console.log("========");
    });
    return {
      user,
      fullName1,
      fullName2,
      fullName3,
    };
  },
});
</script>
<style  scoped>
</style>