<template>
  <div class="todo-header">
    <input
      v-model="title"
      type="text"
      placeholder="请输入你的任务名称, 按回车键确认"
      @keyup.enter="handleAdd"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Header",
  props: {
    addState: {
      type: Function,
      required: true, //必须有
    },
  },
  setup(props) {
    const title = ref("");
    const handleAdd = () => {
      // 获取输入框的值
      const text = title.value;
      if (text) {
        const todo = {
          id: Date.now(),
          title: text,
          isCheck: false,
        };
        props.addState(todo);
        // 清空输入框的值
        title.value = "";
      }
    };
    return {
      handleAdd,
      title,
    };
  },
});
</script>
<style scoped>
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>