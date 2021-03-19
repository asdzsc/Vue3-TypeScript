<template>
  <h1>reactive和ref的细节问题</h1>
  <h2>m1:{{ m1 }}</h2>
  <h2>m2:{{ m2 }}</h2>
  <h2>m3:{{ m3 }}</h2>
  <hr />
  <button @click="hanleUpdate">更新数据</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: "App",
  /*
  Vue3的composition API中的两个重要的响应式Api(ref和reactive)
  ref是用来处理基本数据类型的 reactive是用来处理对象(递归深度响应式) 
  如果ref对象/数组 内部会自动将对象/数组转换为reactive的代理对象
  ref内部：通过给value属性添加getter/setter来实现对数据的劫持
  reactive内部 通过Proxy来实现对象内部所有的劫持 并通过Reflect操作对象内部数据
  ref 的数据操作 在js中要.value  在模板中不需要(内部解析模板的时候会自动添加value)
  */

  setup() {
    // 通过ref设置数据
    const m1 = ref("abc");
    // 通过reactive设置数据
    const m2 = reactive({
      name: "Tom",
      wife: {
        name: "小甜甜",
      },
    });
    // 通过 ref 传入对象
    const m3 = ref({
      name: "Leo",
      wife: {
        name: "大甜甜",
      },
    });
    console.log(m2);
    console.log(m2.wife);
    // ref中如果放入一个对象 那么经过reactive的处理 形成了Proxy类型的对象
    console.log(m3.value);
    console.log(m3.value.wife);
    const hanleUpdate = () => {
      m1.value += " update";
      m2.name += " update";
      m2.wife.name += " update";
      m3.value.name += " update";
      m3.value.wife.name += " update";
    };
    return {
      m1,
      m2,
      m3,
      hanleUpdate,
    };
  },
});
</script>
<style  scoped>
</style>