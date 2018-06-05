<template>
    <div>
        <x-header :left-options="{showBack: true}">
          <span>{{title}}</span>
          <x-icon slot="right" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
        </x-header>
    </div>
</template>
<script>
  export default {
    data () {
      return{

      }
    },
    props: {
      title: {
        type:String,
        default:'首页'
      }
    },
    methods:{
      hideBack(){
        var $target = document.getElementsByClassName("vux-header-left")[0];
        $target.style.display = "none";
      },
      changeIcon(){
        
      }
    }
  }
</script>
<style lang="scss" scoped>
  .vux-header{
    background-color: #0A6AD8;
  }
</style>