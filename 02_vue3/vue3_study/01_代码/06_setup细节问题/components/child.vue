<template>
  <h2>App子级组件</h2>
  <h3>msg：{{ msg }}</h3>
  <h3>count：{{ count }}</h3>
  <button @click="Emit">Emit</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Child",
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  /* setup 细节问题
    setup 是在 beforeCreate 生命周期回调之前就执行了  而且只执行一次
    由此推断出 setup在执行的时候 当前的组件还没有创建出来 意味着组件实例对象this根本不能使用  
    this为undefined 说明不能通过this 再去调用data/computed/methods/props中的相关内容
    其中所有的composition Api相关回调函数也不可使用


    setup的返回值
    setup的返回值是一个对象 内部属性和方法实给html模板使用的
    setup中的对象内部的属性和data函数中的return对象的属性都可以在html模板中使用
    setup中的对象中的方法和methods对象中的方法会合并为组件对象的方法
    在vue3中尽量不要混合使用data和setup methods和setup
    一般不会混合使用 methods中可以访问setup提供的属性和方法 但在setup中无法访问data和methods
    setup不能是一个async函数 因为setup函数返回的是一个对象 async 返回的是一个promise 这个时候 模板无法访问到数据和方法


    setup的参数
    */

  //数据初始化的生命周期回调
  //   beforeCreate() {
  //     console.log("beforeCreate。。。");
  //   },
  //界面渲染完毕
  //   mounted() {
  //     console.log("mounted。。。");
  //   },
  //setup(props, context) {
  setup(props, { attrs, emit, slots }) {
    // props参数 是一个对象 里面有父级组件向子组件传递的数据 并且是在子组件中使用props接收到的所有属性
    // 包含props配置声明且传入的所有属性的对象
    // console.log(props);
    // console.log(props.msg);

    // context参数 是一个对象 里面有attrs对象(获取当前组件标签上的所有的属性的对象
    // 但是该属性是在props中没有声明的接受的所有的属性的对象) emit方法(分发事件的) slots对象(插槽)
    // 包含没有在props配置中声明的属性的对象 相当于 this.$attrs

    // console.log(context.attrs);
    // console.log(context.attrs.msg2);
    // console.log(context.emit);

    console.log(attrs);

    console.log("setup 执行了。。。", this);
    const count = 10;
    const showMsg1 = () => {
      console.log("setup中的showMsg1方法。。。");
    };
    // 按钮的点击事件的回调函数
    const Emit = () => {
      //   console.log("Emit。。。", "++");
      emit("handleEmit", " and you ?");
    };
    console.log("props", props);
    console.log("slots", slots);

    return {
      showMsg1,
      count,
      Emit,
      // setup一般返回一个对象 对象中的属性和方法都可以直接在html模板中直接使用
    };
  },
  /*
  data() {
    return {
      count: 10,
    };
  },
  //界面渲染完毕
  mounted() {
    console.log(this);
  },
  methods: {
    showMsg2() {
      console.log("methods中的showMsg2方法。。。");
    },
  },
  */
});
</script>

<style>
</style>