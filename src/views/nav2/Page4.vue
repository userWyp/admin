<template>
  <div>
    <!--<h1>vuex 测试</h1>-->
    <!--Clicked: {{ getCount }} times-->
    <!--<button @click="increment">+</button>-->
    <!--<button @click="decrement">-</button>-->
    <el-button @click="alertMsg" type="danger">点击查看我的秘密</el-button>
  </div>
</template>

<script>
  // import { mapGetters } from 'vuex'
  // import { mapActions } from 'vuex'
  //
  export default {
  //   computed: {
  // 	// 使用对象展开运算符将 getters 混入 computed 对象中
  //   ...mapGetters([
  //     'getCount'
  //     // ...
  //   ])
  //   },
    methods: {
      alertMsg:function () {
        alert('什么秘密都没有');
      }
  //   ...mapActions([
  //     'increment', // 映射 this.increment() 为 this.$store.dispatch('increment')
  //     'decrement'
  //   ])
  //     //...mapActions({
  //     //  add: 'increment' // 映射 this.add() 为 this.$store.dispatch('increment')
  //     //})
    }
  }

</script>