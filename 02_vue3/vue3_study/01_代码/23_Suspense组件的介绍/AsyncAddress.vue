<template>
  <h2>AsyncAddress子级组件</h2>
  <h3>{{ data }}</h3>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "AsyncAddress",
  //   setup() {
  //     return axios.get("/data/Address.json").then((res) => {
  //       return {
  //         data: res.data,
  //       };
  //     });
  //   },
  async setup() {
    const { data } = await axios.get("/data/Address.json");
    return {
      data: data,
    };
  },
});
</script>
<style  scoped>
</style>