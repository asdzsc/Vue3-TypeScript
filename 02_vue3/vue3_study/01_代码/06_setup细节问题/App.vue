<template>
  <h2>App父级组件</h2>
  <h3>msg：{{ msg }}</h3>
  <button @click="msg += 'I am fine'">更新数据</button>
  <hr />
  <Child :msg="msg" msg2="真香" @handleEmit="handleEmit" />
</template>


<script lang="ts">
import Child from "./components/child.vue";
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "App",
  components: {
    Child,
  },
  setup() {
    const msg = ref("how are you？");
    const handleEmit = (txt: string) => {
      msg.value += txt;
    };
    return {
      msg,
      handleEmit,
    };
  },
});
</script>

<style>
</style>