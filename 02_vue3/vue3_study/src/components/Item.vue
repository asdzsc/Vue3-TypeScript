<template>
  <li
    @mouseenter="handleMouseenter(true)"
    @mouseleave="handleMouseenter(flase)"
    :style="{ backgroundColor: bgColor, color: myColor }"
  >
    <label>
      <input type="checkbox" v-model="isCheck" />
      <span>{{ todo.title }} </span>
    </label>
    <button class="btn btn-danger" v-show="isShow" @click="handleDel">
      删除
    </button>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { Todo } from "../types/todo";
export default defineComponent({
  name: "Item",
  props: {
    todo: {
      type: Object as () => Todo, //返回类型是Todo类型
      required: true, //必须有
    },
    delState: {
      type: Function,
      required: true, //必须有
    },
    index: {
      type: Number,
      required: true,
    },
    updateIscheck: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    // 背景色
    const bgColor = ref("white");
    // 文字色
    const myColor = ref("black");
    // 显示按钮
    const isShow = ref(false);
    // 鼠标进入离开的事件函数
    const handleMouseenter = (flag: boolean) => {
      if (flag) {
        // 鼠标进入
        bgColor.value = "pink";
        myColor.value = "green";
        isShow.value = true;
      } else {
        // 鼠标离开
        bgColor.value = "white";
        myColor.value = "black";
        isShow.value = false;
      }
    };
    //删除事件
    // const handleDel = inject("delState");
    const handleDel = () => {
      if (window.confirm("确认要删除吗？")) {
        props.delState(props.index);
        // console.log(props);
        // const delState = props.delState;
        // const index = props.index;
        // delState(index);
      }
    };
    // 计算属性的方式----来让当前的复选框选中/不选中
    const isCheck = computed({
      get() {
        return props.todo.isCheck;
      },
      set(val) {
        // console.log();
        props.updateIscheck(props.todo, val);
      },
    });
    return {
      handleMouseenter,
      bgColor,
      myColor,
      isShow,
      handleDel,
      isCheck,
    };
  },
});
</script>

<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  /* display: none; */
  margin-top: 3px;
}
li::before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
</style>
