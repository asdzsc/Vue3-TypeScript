<template>
  <h1>Child组件</h1>
  <hr />
  <GrandSon />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GrandSon from "./GrandSon.vue";
export default defineComponent({
  name: "Child",
  components: {
    GrandSon,
  },
});
</script>
<style  scoped>
</style>