<template>
  <h1>Child子级组件</h1>
  <h2>age:{{ age }}</h2>
  <h2>length:{{ length }}</h2>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, toRef } from "vue";
function UserGetLength(age: Ref) {
  return computed(() => {
    return age.value.toString().length;
  });
}
export default defineComponent({
  name: "Child",
  props: {
    age: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    console.log(props);
    const length = UserGetLength(toRef(props, "age"));
    return {
      length,
    };
  },
});
</script>
<style  scoped>
</style>