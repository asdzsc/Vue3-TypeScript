import { onBeforeUnmount, onMounted, ref } from "vue";

export default function mousePosition() {
  const x = ref(0);
  const y = ref(0);
  // 点击事件回调函数
  const handleClick = (e: MouseEvent) => {
    x.value = e.pageX;
    y.value = e.pageY;
  };
  // 页面已经加载完毕了 再进行点击操作
  // 页面加载完毕的生命周期组合Api
  onMounted(() => {
    window.addEventListener("click", handleClick);
  });
  // 页面卸载之前的生命周期组合Api
  onBeforeUnmount(() => {
    window.removeEventListener("click", handleClick);
  });
  return {
    x,
    y,
  };
}
