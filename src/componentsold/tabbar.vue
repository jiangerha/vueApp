<template>
  <div>
      <tabbar>
        <tabbar-item :selected="selected === '首页'" @click.native="selected = '首页'" link="/">
          <img slot="icon"  src="../assets/images/home-icon.png">
          <img slot="icon-active"  src="../assets/images/home-icon-on.png">
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item :selected="selected === '通讯录'" @click.native="selected = '通讯录'" link="/mailList">
          <img slot="icon" src="../assets/images/mailList-icon.png">
          <img slot="icon-active"  src="../assets/images/mailList-icon-on.png">
          <span slot="label">通讯录</span>
        </tabbar-item>
        <tabbar-item :selected="selected === '咚咚'" @click="selected = '咚咚'" link="/DongDong">
          <img slot="icon" src="../assets/images/DongDong-icon.png">
          <img slot="icon-active"  src="../assets/images/DongDong-icon-on.png">
          <span slot="label">咚咚</span>
        </tabbar-item>
        <tabbar-item :selected="selected === '充电'" @click="selected = '充电'" link="/charge">
          <img slot="icon" src="../assets/images/charge-icon.png">
          <img slot="icon-active" src="../assets/images/charge-icon-on.png"/>
          <span slot="label">充电</span>
        </tabbar-item>
        <tabbar-item :selected="selected === '个人中心'" @click="selected = '个人中心'" link="/personal">
          <img slot="icon" src="../assets/images/personal-icon.png">
          <img slot="icon-active"  src="../assets/images/personal-icon-on.png">
          <span slot="label">个人中心</span>
        </tabbar-item>
      </tabbar>
  </div>
</template>
<script>
  export default {
    data () {
      return{
        'selected':'首页'
      }
    },
    methods:{
      
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