<template>
  <ul class="todo-main">
    <Item
      v-for="(todo, index) in todos"
      :key="todo.id"
      :delState="delState"
      :todo="todo"
      :index="index"
      :updateIscheck="updateIscheck"
    />
  </ul>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from "vue";
export default defineComponent({
  name: "List",
  components: {
    Item: defineAsyncComponent(() => import("./Item.vue")),
  },
  props: {
    todos: {
      type: Array,
      required: true,
    },
    delState: {
      type: Function,
      required: true,
    },
    updateIscheck: {
      type: Function,
      required: true,
    },
  },
  // props: ["todos"],
});
</script>
<style scoped>
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
