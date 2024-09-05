<template>
    <div id="app">
       <!-- 页面内容 -->
      <h3>vite-vue2-vuex</h3>
      <h2>{{value}}</h2>
      <div>count:{{ count}}</div>
      <div>count:{{ title}}</div>
      count: {{ count }} 
    title:{{ title }}
   
    <button @click="countAdd(5)">count+5</button>
    <button @click="countAdd(10)">count+10</button>
    <button @click="change(6)">更改count和title</button>
    </div>
  </template>
  
  <script>
  //1.将引入vuex中的mapState
import { mapState,mapMutations  } from "vuex";
export default {
  // 其他组件都嵌套在 App 组件中
  components: {}, // 其他组件的名


  // 数据属性--注册数据
  data() {
    return {
        value:1
    };
  },
  watch: {},
  //   计算属性
 computed: {
    //2. mapState用扩展运算符将vuex中的数据映射到computed属性上
    ...mapState(['count','title'])
  },
  // 生命周期钩子函数
  created() {}, //数据渲染前--实列创建后
  mounted() {}, //数据挂载后

  // 存储该组件中所有的方法的对象
  methods: {
  // //2.映射  ==应该是没必要这一步骤
//   ...mapMutations(["addCount", "changeObj"]),

//3.监听事件 触发 提交请求
countAdd(n) {
    this.$store.commit('addCount',n)

},
change(n) {
     this.$store.commit('changeObj',{
        mun:n,
        txt:'学习vuex'
     })    
},

  },
};
</script>
  
  <style scoped>
/* css样式 */
</style>