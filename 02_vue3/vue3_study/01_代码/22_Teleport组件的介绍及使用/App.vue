<template>
  <h1>teleport(瞬移)</h1>
  <hr />
  <Modal />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from "./modal.vue";
export default defineComponent({
  name: "App",
  components: {
    Modal,
  },
});
</script>
<style  scoped>
</style>