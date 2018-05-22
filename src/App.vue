<template>
  <div id="app">
    <router-view/>
    <tabbar></tabbar>
  </div>
</template>

<script>
  import tabbar from '@/components/tabbar.vue'
export default {
  name: 'App',
  data (){
    return{
    }
  },
  methods:{
    
  },
  components:{
      tabbar
  }
}
</script>

<style lang="scss" scoped>
/* @import '/src/assets/scss/common.scss' */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

</style>
