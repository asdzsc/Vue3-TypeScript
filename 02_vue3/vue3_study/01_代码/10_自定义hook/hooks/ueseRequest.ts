import { ref } from "vue";
// 引入axios
import axios from "axios";

// 发送axios请求
export default function request<T>(url: string) {
  // 加载状态
  const loading = ref(true);
  // 请求成功的数据
  const data = ref<T | null>(null);
  //错误信息
  const errorMsg = ref("");

  // 发送请求
  axios
    .get(url)
    .then((res) => {
      loading.value = false;
      data.value = res.data;
      // console.log(res);
    })
    .catch((err) => {
      loading.value = false;
      // console.log(err);
      errorMsg.value = err.message || "未知错误";
    });
  return {
    loading,
    data,
    errorMsg,
  };
}
