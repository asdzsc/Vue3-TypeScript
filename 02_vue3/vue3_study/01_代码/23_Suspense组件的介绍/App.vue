<template>
  <h1>App父级组件 Suspense</h1>
  <Suspense>
    <template #default>
      <!-- 异步组件 -->
      <!-- <AsyncComponent /> -->
      <AsyncAddress />
    </template>
    <template v-slot:fallback>
      <!-- loading内容 -->
      <h2>加载中....</h2>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
// 引入组件：静态引入和动态引入
// import AsyncComponent from "./AsyncComponent.vue";
// Vue2中的动态引入组件的写法
//  AsyncComponent: () => import("./AsyncComponent.vue"),
// Vu3中的动态引入组件的写法
// AsyncComponent: defineAsyncComponent(() => import("./AsyncComponent.vue"))
export default defineComponent({
  name: "App",
  components: {
    // AsyncComponent: defineAsyncComponent(() => import("./AsyncComponent.vue")),
    AsyncAddress: defineAsyncComponent(() => import("./AsyncAddress.vue")),
  },
});
</script>
<style  scoped>
</style>