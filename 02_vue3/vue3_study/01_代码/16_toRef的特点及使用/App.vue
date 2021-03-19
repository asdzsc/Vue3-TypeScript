<template>
  <h1>toRef的特点及使用</h1>
  <h2>state:{{ state }}</h2>
  <h2>age:{{ age }}</h2>
  <h2>money:{{ money }}</h2>
  <hr />
  <Child :age="age" />
  <button @click="handleUpdate">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRef } from "vue";
import Child from "./components/Child.vue";
export default defineComponent({
  name: "App",
  components: {
    Child,
  },
  setup() {
    const state = reactive({ age: 5, money: 100 });
    // 把响应式数据state对象中的某个属性age变成ref对象
    const age = toRef(state, "age");
    console.log(age);
    // 把响应式对象中的某个属性使用ref进行包装 变成一个ref对象
    const money = ref(state.money);
    console.log(money);

    const handleUpdate = () => {
      // console.log("aa");
      // 更新数据
      state.age += 10;
      // age.value += 3;
      // money.value += 10;
    };
    return {
      state,
      money,
      age,
      handleUpdate,
    };
  },
});
</script>
<style  scoped>
</style>