<template>
  <div class="todo-footer">
    <label>
      <input v-model="isCheckAll" type="checkbox" />
    </label>
    <span
      ><span>已完成{{ count }}</span> / 全部 {{ todos.length }}</span
    >
    <button class="btn btn-danger" @click="delAll">清楚已完成任务</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { Todo } from "../types/todo";
export default defineComponent({
  name: "Footer",
  props: {
    todos: {
      type: Array as () => Todo[],
      required: true,
    },
    checkAll: {
      type: Function,
      required: true,
    },
    delAll: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    const count = computed(() => {
      // console.log(props.todos);
      // total 默认值0  计算结束后的返回值
      return props.todos.reduce(
        (total, todo) => total + (todo.isCheck ? 1 : 0), //0 传递给函数的初始值
        0
      );
    });
    // 全选全不选的计算属性
    const isCheckAll = computed({
      get() {
        // console.log(count.value);
        // console.log(props.todos.length);
        return count.value > 0 && props.todos.length === count.value;
      },
      set(val) {
        // console.log(val);
        props.checkAll(val);
      },
    });
    return {
      count,
      isCheckAll,
    };
  },
});
</script>
<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>