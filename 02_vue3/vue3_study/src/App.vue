<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header :addState="addState" />
      <!-- <List :todos="state.todos" /> -->
      <List
        :todos="todos"
        :delState="delState"
        :updateIscheck="updateIscheck"
      />
      <Footer :todos="todos" :checkAll="checkAll" :delAll="delAll" />
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineAsyncComponent,
  defineComponent,
  onMounted,
  reactive,
  toRefs,
  watch,
} from "vue";
import { Todo } from "./types/todo";
import { saveTodo, getTodo } from "../utils/localStorage";
export default defineComponent({
  name: "App",
  components: {
    Header: defineAsyncComponent(() => import("./components/Header.vue")),
    List: defineAsyncComponent(() => import("./components/List.vue")),
    Footer: defineAsyncComponent(() => import("./components/Footer.vue")),
  },
  // 数据应该用数组来存储 数组中的每个数据都是一个对象 对象中应该有三个属性(id,title,isCheck)
  // 把数组存在App父级组件中
  setup() {
    // 定义数据
    // const state = reactive<{ todos: Todo[] }>({
    //   todos: [
    //     { id: 1, title: "奔驰", isCheck: false },
    //     { id: 2, title: "宝马", isCheck: false },
    //     { id: 3, title: "奥迪", isCheck: false },
    //   ],
    // });

    const state = reactive<{ todos: Todo[] }>({
      todos: [],
    });
    onMounted(() => {
      setTimeout(() => {
        state.todos = getTodo();
      }, 1000);
    });
    // 添加数据的方法
    const addState = (todo: Todo) => {
      state.todos.unshift(todo);
    };
    // 删除数据的方法
    const delState = (index: number) => {
      state.todos.splice(index, 1);
    };
    // provide("delState", delState);
    // 更新todo的isCheck属性的状态
    const updateIscheck = (todo: Todo, isCheck: boolean) => {
      todo.isCheck = isCheck;
      console.log(todo);
    };

    //全选/全不选
    const checkAll = (isCheck: boolean) => {
      // 遍历数组
      state.todos.forEach((todo) => {
        todo.isCheck = isCheck;
      });
    };

    // 清理所有选中数据
    const delAll = () => {
      state.todos = state.todos.filter((todo) => !todo.isCheck);
    };

    // 监视操作：如果todos数组的数据发生变化 直接存储在浏览器缓存中
    // watch(
    //   () => state.todos,
    //   (value) => { 把数据存储子啊浏览器缓存中
    //     localStorage.setItem("todo_key", JSON.stringify(value));
    //   },
    //   { deep: true }
    // );

    // watch(
    //   () => state.todos,
    //   (value) => {
    //     //把数据存储子啊浏览器缓存中
    //     saveTodo(value);
    //   },
    //   { deep: true }
    // );

    watch(
      () => state.todos,
      //把数据存储子啊浏览器缓存中
      saveTodo,
      { deep: true }
    );
    return {
      ...toRefs(state),
      addState,
      delState,
      updateIscheck,
      checkAll,
      delAll,

      //state,
    };
  },
});
</script>
<style scoped>
.todo-container {
  width: 600px;
  margin: 0 auto;
}

.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
