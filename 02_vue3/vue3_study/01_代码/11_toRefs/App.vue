<template>
  <h1>toRefs的使用</h1>
  <p>
    问题 reactive对象取出的所有属性值都是非响应式的<br />
    解决利用toRefs可以将一个响应式的reactive对象转换成响应式的ref属性<br />
    应用场景 当从合成函数返回响应对象的时候 toRefs非常有用
    这样消费组件就可以在不丢失响应式的情况下对返回对象进行分解使用
  </p>
  <h2>name:{{ name }}</h2>
  <h2>age:{{ age }}</h2>

  <h2>name1:{{ name1 }}</h2>
  <h2>age1:{{ age1 }}</h2>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

//问题 reactive对象取出的所有属性值都是非响应式的
//解决 利用toRefs可以将一个响应式的reactive对象转换成响应式的ref属性

// 应用场景 当从合成函数返回响应对象的时候 toRefs非常有用 这样消费组件就可以在不丢失响应式的情况下对返回对象进行分解使用
const useHook = () => {
  const state = reactive({
    name1: "Leo",
    age1: 18,
  });
  return { ...toRefs(state) };
};

export default defineComponent({
  name: "App",
  setup() {
    const state = reactive({
      name: "Tom",
      age: 18,
    });
    // toRefs可以把一个响应式的对象转换成普通对象 该普通对象的每个property 都是一个ref
    // const state2 = toRefs(state);
    const { name, age } = toRefs(state);
    // const state2 = useHook();
    // console.log(state2);

    const { name1, age1 } = useHook();
    // console.log(state2);

    //定时器更新数据  如果数据变了，界面发生变化 肯定是响应数据
    setInterval(() => {
      // state.name += "===";
      // state2.name.value += "===";
      name.value += "===";
      age.value += 1;
      console.log("====");
    }, 1000);
    return {
      // state,
      // ...state, //不是相应数据了--->{name:"Tom",age:18}
      // ...state2, //toRefs返回来的对象
      name,
      age,
      name1,
      age1,
    };
  },
});
</script>
<style  scoped>
</style>