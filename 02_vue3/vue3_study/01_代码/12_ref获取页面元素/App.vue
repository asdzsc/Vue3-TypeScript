<template>
  <h1>ref获取元素</h1>
  <input type="text" ref="inputRef" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    // const inputRef = ref<HTMLElement | null>(null);

    const inputRef = ref<HTMLElement | null>(null);
    // 页面加载完成 input自动获取焦点
    onMounted(() => {
      console.log(inputRef.value);
      // if (inputRef.value) {
      //   inputRef.value.setAttribute("placeholder", "ref获取元素");
      // }
      inputRef.value &&
        inputRef.value.setAttribute("placeholder", "ref获取元素");
    });
    return {
      inputRef,
    };
  },
});
</script>
<style  scoped>
</style>