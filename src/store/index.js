import Vue from 'vue'
import Vuex from 'vuex'

//注册vuex
Vue.use(Vuex)

//创建一个仓库
const store=new Vuex.Store(
  
   
    //仓库数据,
    {
          // 严格模式，如果(子组件)操作了state数据，报错Error
        strict:true,
        state:{
            count: 100,
            title: "vuex",
         },//-状态-公共数据
        getters:{}, //类似于计算属性,
        //里面定义 修改state数据的方法
   mutations: {
    //1.只有一个payload
  addCount(state,n) {
    state.count += n;
  },
  //2,多个payload,
  changeObj(state, obj) {
    state.title = obj.txt;
    state.count = obj.mun;
  },
},
        actions:{ }//异步处理数据
    }
    
)


//导出数据
export default store