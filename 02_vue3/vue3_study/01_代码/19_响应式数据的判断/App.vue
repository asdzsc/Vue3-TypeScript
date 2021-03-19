<template>
  <h1>响应式数据的判断</h1>
  <h2>isRef、isReactive、isReadonly、isProxy</h2>
  <p>
    isRef：检查值是否为一个 ref 对象 <br />
    isReactive：检查对象是否是由 reactive 创建的响应式代理对象<br />
    isReadonly： 检查对象是否是由 readonly 创建的只读代理对象<br />
    isProxy：检查对象是否是由 reactive 或 readonly 创建的 proxy 对象
  </p>
</template>

<script lang="ts">
import {
  defineComponent,
  isProxy,
  isReactive,
  isReadonly,
  isRef,
  reactive,
  readonly,
  ref,
} from "vue";
export default defineComponent({
  name: "App",
  setup() {
    // isRef：检查值是否为一个 ref 对象
    console.log(isRef(ref({})));
    // isReactive：检查对象是否是由 reactive 创建的响应式代理
    console.log(isReactive(reactive({})));
    // isReadonly： 检查对象是否是由 readonly 创建的只读代理对象
    console.log(isReadonly(readonly<any>({})));
    // isProxy：检查对象是否是由 reactive 或 readonly 创建的 proxy 对象
    console.log(isProxy(reactive({})));
    console.log(isProxy(readonly({})));

    return {};
  },
});
</script>
<style  scoped>
</style> 