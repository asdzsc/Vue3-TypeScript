<template>
  <h1>toRaw和markRaw</h1>
  <h3>state:{{ state }}</h3>
  <hr />
  <p>toRaw：把代理对象变成普通对象了 数据发生改变 界面不变化</p>
  <p>markRaw： 标记的对象数据 从此以后都不能再成为代理对象了</p>
  <button @click="handleToRaw">toRaw</button>
  <button @click="handleMarkRaw">markRaw</button>
</template>

<script lang="ts">
import { defineComponent, markRaw, reactive, toRaw } from "vue";

interface UserInfo {
  name: string;
  age: number;
  likes?: string[];
}
export default defineComponent({
  name: "App",
  setup() {
    const state = reactive<UserInfo>({
      name: "Tom",
      age: 18,
    });
    const handleToRaw = () => {
      // 把代理对象变成普通对象了 数据发生改变 界面不变化
      const user = toRaw(state);
      console.log(user);
      user.name += "==";
      console.log(user);
      // console.log("handleToRaw");
    };
    const handleMarkRaw = () => {
      // state.likes = ["吃", "喝"];
      // state.likes[0] += "===";
      // console.log("handleMarkRaw");
      const likes = ["吃", "喝"];
      // markRaw 标记的对象数据 从此以后都不能再成为代理对象了
      state.likes = markRaw(likes);
      setInterval(() => {
        if (state.likes) {
          state.likes[0] += "===";
          console.log("定时器执行了");
        }
      }, 1000);
    };
    return {
      state,
      handleToRaw,
      handleMarkRaw,
    };
  },
});
</script>
<style  scoped>
</style>