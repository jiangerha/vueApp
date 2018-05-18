<template>
  <div>
      <tabbar>
        <tabbar-item selected @click.native="changeTab">
          <img slot="icon" src="../assets/images/home-icon.png">
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item show-dot @click.native="changeTab">
          <img slot="icon" src="../assets/images/mailList-icon.png">
          <span slot="label">通讯录</span>
        </tabbar-item>
        <tabbar-item @click.native="changeTab">
          <img slot="icon" src="../assets/images/DongDong-icon-on.png">
          <span slot="label">咚咚</span>
        </tabbar-item @click.native="changeTab">
        <tabbar-item badge="2" @click.native="changeTab">
          <img slot="icon" src="../assets/images/charge-icon.png">
          <span slot="label">充电</span>
        </tabbar-item>
        <tabbar-item badge="2" @click.native="$vux.toast.text('How are you~', 'top')">
          <img slot="icon" src="../assets/images/personal-icon.png">
          <span slot="label">个人中心</span>
        </tabbar-item>
      </tabbar>
  </div>
</template>
<script>
  export default {
    data () {
      return{

      }
    },
    methods:{
      changeTab(event){
        console.log(1)
      }
    }
  }
</script>
<style lang="scss">
  .weui-tabbar__item{
    text-decoration: none;
    .weui-tabbar__label{
      margin: 6px 0;
      font-size: 14px!important;
      line-height:1.2;
    }
  }
  
  .weui-bar__item_on{
    .weui-tabbar__label{
      span{
        color: #4EA1FF!important;
      }
    }
  }
</style>