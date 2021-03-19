<template>
  <h1>shallowReactive和shallowRef的使用</h1>
  <p>
    shallowReactive：只处理了对象内的最外层属性的响应式(浅响应式) <br />
    shallowRef：只处理的value的响应 不进行对象的reactive处理<br />
    什么时候使用浅响应式呢 <br />
    一般情况下使用ref和reactive <br />
    如果有一个对象数据 结构比较深 但是只是外层属性的变化----shallowReactive<br />
    如果有一个对象数据 后面会产生新的对象进行替换----shallowRef
  </p>
  <h2>m1:{{ m1 }}</h2>
  <h2>m2:{{ m2 }}</h2>
  <h2>m3:{{ m3 }}</h2>
  <h2>m4:{{ m4 }}</h2>
  <hr />
  <button @click="handleUpdate">更新数据</button>
</template>

<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  shallowReactive,
  shallowRef,
} from "vue";
export default defineComponent({
  name: "App",
  setup() {
    //深度劫持(深监视)----深度响应式
    const m1 = reactive({
      name: "Tom",
      age: 18,
      wife: {
        name: "小甜甜",
        age: 17,
      },
    });
    //浅度劫持(浅监视)----浅度响应式
    const m2 = shallowReactive({
      name: "Tom",
      age: 18,
      wife: {
        name: "小甜甜",
        age: 17,
      },
    });
    //深度劫持(深监视)----深度响应式----做了reactive处理
    const m3 = ref({
      name: "Tom",
      age: 18,
      wife: {
        name: "小甜甜",
        age: 17,
      },
    });
    //浅度劫持(浅监视)----浅度响应式
    const m4 = shallowRef({
      name: "Tom",
      age: 18,
      wife: {
        name: "小甜甜",
        age: 17,
      },
    });
    const handleUpdate = () => {
      // 更改m1的数据---reactive方式
      // m1.name += "===";
      // m1.wife.name += "===";
      // 更改m2的数据---shallowReactive方式
      // m2.name += "===";
      // m2.wife.name += "==="; // 非响应式
      // 更改m3的数据---ref方式
      // m3.value.name += "===";
      // m3.value.wife.name += "===";
      // 更改m4的数据---ref方式
      m4.value.name += "===";
      m4.value.wife.name += "===";
      console.log(m4.value);
      console.log(m4.value.wife);
    };
    return {
      m1,
      m2,
      m3,
      m4,
      handleUpdate,
    };
  },
});
</script>
<style  scoped>
</style>