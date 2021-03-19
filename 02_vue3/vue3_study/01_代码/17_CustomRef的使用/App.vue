<template>
  <h1>CustomRef的使用</h1>
  <hr />
  <input type="text" v-model="value" />
  {{ value }}
</template>

<script lang="ts">
// 自定义hook防抖函数
// value传入的数据将来的数据类型不确定 所有使用泛型 delay防抖间隔时间 默认200毫秒
import { customRef, defineComponent } from "vue";
function useDebounceRef<T>(value: T, delay = 200) {
  // 存储定时器的id变量
  let timeOut: number;
  return customRef((track, trggier) => {
    return {
      // 返回数据的
      get() {
        // 告诉Vue追踪数据
        track();
        return value;
      },
      // 设置数据的
      set(newValue: T) {
        // 清理定时器
        clearTimeout(timeOut);
        // 开启定时器
        timeOut = setTimeout(() => {
          value = newValue;
          // 告诉Vue更新数据
          trggier();
        }, delay);
      },
    };
  });
}
export default defineComponent({
  name: "App",
  setup() {
    // const value = ref("abc");
    const value = useDebounceRef("abc", 500);
    return {
      value,
    };
  },
});
</script>
<style  scoped>
</style>