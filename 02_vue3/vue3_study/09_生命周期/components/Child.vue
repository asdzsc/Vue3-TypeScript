<template>
  <h2>子级组件</h2>
  <h3>msg:{{ msg }}</h3>
  <button @click="handleUpdate">更新数据</button>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";
export default defineComponent({
  name: "Child",

  // vue2中的生命周期函数
  beforeCreate() {
    console.log("2.x中的beforeCreate...");
  },
  created() {
    console.log("2.x中的created...");
  },
  beforeMount() {
    console.log("2.x中的beforeMount...");
  },
  mounted() {
    console.log("2.x中的mounted...");
  },
  beforeUpdate() {
    console.log("2.x中的beforeUpdate...");
  },
  updated() {
    console.log("2.x中的updated...");
  },
  // vue2 中的beforeDestroy和destroyed这两个生命周期在vue3中改名了 所以不能使用了
  /* 
  beforeDestroy() {
    console.log("2.x中的beforeDestroy...");
  },
  destroyed() {
    console.log("2.x中的destroyed...");
  },
  */
  beforeUnmount() {
    console.log("2.x中的beforeUnmount...");
  },
  unmounted() {
    console.log("2.x中的unmounted...");
  },
  setup() {
    const msg = ref("hello");
    const handleUpdate = () => {
      msg.value += "你好";
    };
    console.log("3.0中的setup...");

    onBeforeMount(() => {
      console.log("3.0中的onBeforeMount...");
    });
    onMounted(() => {
      console.log("3.0中的onMounted...");
    });
    onBeforeUpdate(() => {
      console.log("3.0中的onBeforeUpdate...");
    });
    onUpdated(() => {
      console.log("3.0中的onUpdated...");
    });
    onBeforeUnmount(() => {
      console.log("3.0中的onBeforeUnmount...");
    });
    onUnmounted(() => {
      console.log("3.0中的onUnmounted...");
    });
    return {
      msg,
      handleUpdate,
    };
  },
});
</script>
<style  scoped>
</style>