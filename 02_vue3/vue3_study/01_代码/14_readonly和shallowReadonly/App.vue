<template>
  <h1>readonly和shallowReadonly</h1>
  <p>
    readonly：深度只读数据 <br />
    获取一个对象(响应式或纯对象)或ref并返回原始代理的只读代理 <br />
    只读代理是深层的：访问的任何嵌套 property 也是只读的<br />
    shallowReadonly：浅只读数据 <br />
    创建一个代理，使其自身的property为只读 但不执行嵌套对象的深度只读转换 <br />
    应用场景：在某些特定的情况下 我们可能不希望对数据进行更新的操作
    那就可以生成一个只读代理对象来读取数据 而不能修改或删除
  </p>
  <h2>{{ state2 }}</h2>
  <hr />
  <button @click="handleUpdate">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive, readonly, shallowReadonly } from "vue";
export default defineComponent({
  name: "App",
  setup() {
    const state = reactive({
      name: "Tom",
      age: 18,
      wife: {
        name: "小甜甜",
        age: 18,
      },
    });
    // 只读数据---深度只读
    // const state2 = readonly(state);
    const state2 = shallowReadonly(state);
    const handleUpdate = () => {
      // state2.name += "===";
      state2.wife.name += "===";
    };
    return {
      state2,
      handleUpdate,
    };
  },
});
</script>
<style  scoped>
</style>