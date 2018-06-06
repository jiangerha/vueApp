<template>
  <div id="app" :style="{height:fullHeight}">
          <md-content>
              <router-view/>
          </md-content>
          <div class="phone-viewport">
              <md-bottom-bar md-sync-route>
                  <md-bottom-bar-item to="/home" md-label="首页" md-icon="home"></md-bottom-bar-item>
                <md-bottom-bar-item to="/books/movie" md-label="书影音" md-icon="add"></md-bottom-bar-item>
                <md-bottom-bar-item to="/broadcast" md-label="广播" md-icon="favorite"></md-bottom-bar-item>
                <md-bottom-bar-item to="/user" md-label="我的" md-icon="favorite"></md-bottom-bar-item>
              </md-bottom-bar>
            </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data (){
    return{
      fullHeight: document.documentElement.clientHeight,
      showNavigation: false,
      showTab:true
    }
  },
  mouted(){
  },
  methods:{
    
  },
  components:{
  },
  watch:{
    $route(){
      if(this.$route.fullPath.indexOf("/home")>-1){
        this.showTab = true
      }else{
        this.showTab = false
      }
      console.log(this.$route.fullPath)
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
  height: 100%;
  .md-content{
    position: absolute;
    width:100%;
    height: 100%;
    padding-bottom: 56px;
    background:#f7f7f7;
  }
  .phone-viewport{
    position: absolute;
    width: 100%;
    bottom: 0;
    border-top: 1px solid #eee;
    .md-bottom-bar{
      background: #f7f7f7;
      .md-bottom-bar-item{
        color:#ccc;
      }
      .md-active{
        color: #00b600;
      }
    }
  }
}

</style>
