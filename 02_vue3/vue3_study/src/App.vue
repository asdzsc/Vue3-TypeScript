<template>
  <h1>自定义hook函数操作</h1>
  <hr />
  <h2>x:{{ x }}</h2>
  <h2>y:{{ y }}</h2>
  <hr />
  <h2>对象数据</h2>
  <h3 v-if="loading">正在加载中...</h3>
  <h3 v-else-if="errorMsg">错误信息： {{ errorMsg }}</h3>
  <ul v-else>
    <li>id:{{ data.id }}</li>
    <li>address:{{ data.address }}</li>
    <li>distance:{{ data.distance }}</li>
  </ul>
  <hr />
  <h2>数组数据</h2>
  <h3 v-if="loading">正在加载中...</h3>
  <h3 v-else-if="errorMsg">错误信息： {{ errorMsg }}</h3>
  <ul v-else v-for="item in data" :key="item.id">
    <li>id:{{ item.id }}</li>
    <li>title:{{ item.title }}</li>
    <li>price:{{ item.price }}</li>
  </ul>
</template>

<script lang="ts">
import useMouseCompositionApi from "./hooks/useMousePosition";
import request from "./hooks/ueseRequest";
import { defineComponent, watch } from "vue";

// 定义接口 约束对象类型
interface AddressData {
  id: string;
  address: string;
  distance: string;
}
// 定义接口 约束数组类型
interface ProductData {
  id: string;
  address: string;
  distance: number;
}
export default defineComponent({
  name: "App",
  // 需求 用户在页面中点击 把点击的位置获取到 并显示出来
  setup() {
    const { x, y } = useMouseCompositionApi();
    //发送请求
    // const { loading, data, errorMsg } = request<AddressData>("/data/address.json"); //获取对象数据
    const { loading, data, errorMsg } = request<ProductData[]>(
      "/data/product.json"
    ); //获取数组数据;

    watch(data, () => {
      if (data.value) {
        console.log(data.value.length);
      }
    });
    return {
      x,
      y,
      loading,
      data,
      errorMsg,
    };
  },
});
</script>
<style  scoped>
</style>