<template>
  <div id="app">
    <router-view/>
    <tabbar v-show="showTab"></tabbar>
  </div>
</template>

<script>
  import tabbar from '@/components/tabbar.vue'
export default {
  name: 'App',
  data (){
    return{
      showTab:true
    }
  },
  methods:{
    
  },
  components:{
      tabbar
  },
  watch:{
    $route(){
      console.log(this.$route.path)
      if(this.$route.path == '/login'){
        this.showTab = false
      }else{
        this.showTab = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
