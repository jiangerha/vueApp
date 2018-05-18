<template>
  <div>
    <x-header :title='title' ref='headerOption'></x-header>
    <tabbar></tabbar>
  </div>
</template>
<script>
  import xHeader from '@/components/xHeader.vue';
  import tabbar from '@/components/tabbar.vue';
  export default {
    name:'home',
    data () {
      return{
        'title':'首页'
      }
    },
    mounted (){
      this.$refs.headerOption.hideBack();
    },
    components:{
      xHeader,
      tabbar
    }
  }
</script>
<style>

</style>