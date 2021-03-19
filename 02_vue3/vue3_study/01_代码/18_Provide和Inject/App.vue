<template>
  <h1>Provide和Inject</h1>
  <p>Provide和Inject提供依赖注入 实现跨层级组件(祖孙)间通信</p>
  <h2>color:{{ color }}</h2>
  <button @click="color = 'red'">red</button>
  <button @click="color = 'yellow'">yellow</button>
  <button @click="color = 'green'">green</button>
  <hr />
  <Son />
</template>

<script lang="ts">
import { defineComponent, provide, ref } from "vue";
import Son from "./components/Child.vue";
export default defineComponent({
  name: "App",
  components: {
    Son,
  },
  setup() {
    // 响应式数据
    const color = ref("color");
    // 提供数据
    provide("color", color);
    return {
      color,
    };
  },
});
</script>
<style  scoped>
</style>