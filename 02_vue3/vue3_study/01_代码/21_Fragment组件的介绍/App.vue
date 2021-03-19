<template>
  <!-- vue2 需要根标签 -->
  <!-- <div>
    <h2>测试</h2>
    <h2>测试</h2>
  </div> -->
  <!-- vue3中可以没有根标签 内部会将多个标签包含在一个Fragment虚拟元素中(减少标签层级 减少内存占用) -->
  <h2>测试</h2>
  <h2>测试</h2>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
});
</script>
<style  scoped>
</style>