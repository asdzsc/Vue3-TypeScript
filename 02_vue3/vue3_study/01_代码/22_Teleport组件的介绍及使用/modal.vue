<template>
  <button @click="openModal = true">打开对话框</button>
  <teleport to="body">
    <div v-if="openModal" class="modal">
      <div>对话框<button @click="openModal = false">关闭对话框</button></div>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const openModal = ref("false");
    return {
      openModal,
    };
  },
});
</script>
<style  scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.modal div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  width: 300px;
  height: 300px;
  padding: 5px;
}
</style>