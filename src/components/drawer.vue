<template>
    <div class="page-container md-layout-column">
      <md-toolbar class="md-primary">
        <div class="fist-line">
            <md-button class="md-icon-button left" @click="showNavigation = true">
                <md-icon>menu</md-icon>
              </md-button>
              <span class="md-title">电影</span>
              <md-button class="md-icon-button right">
                  <md-icon>search</md-icon>
              </md-button>
        </div>
        
        <md-tabs md-sync-route>
          <md-tab id="tab-home" md-label="正在热映"></md-tab>
          <md-tab id="tab-pages" md-label="即将上映"></md-tab>
          <!-- <md-tab id="tab-disabled" md-label="Disabled" md-disabled></md-tab> -->
        </md-tabs>
      </md-toolbar>
  
      <md-drawer :md-active.sync="showNavigation">
        <md-toolbar class="md-transparent" md-elevation="0">
          <p class="md-title">Micro Dou</p>
          <p>一个移动端豆瓣 Web 应用</p>
        </md-toolbar>
  
        <md-list>
          <md-list-item  to="/movie">
            <md-icon>move_to_inbox</md-icon>
            <span class="md-list-item-text">电影</span>
          </md-list-item>
  
          <md-list-item to="/books">
            <md-icon>send</md-icon>
            <span class="md-list-item-text">图书</span>
          </md-list-item>
  
          <md-list-item to="/music">
            <md-icon>delete</md-icon>
            <span class="md-list-item-text">音乐</span>
          </md-list-item>
  
          <md-list-item to="/about">
            <md-icon>error</md-icon>
            <span class="md-list-item-text">关于</span>
          </md-list-item>
        </md-list>
      </md-drawer>
  
      <!-- <div> -->
        
      <!-- </div> -->
      <md-content>
        Lorem ipsum dolor sit amet, consecteepudiandae maxime? Quae non explicabo, neque.
      </md-content>
    </div>
  </template>
  
  <script>
    export default {
      name: 'drawer',
      data: () => ({
        showNavigation: false
      }),
      methods:{
        
      }
    }
  </script>

<style lang="scss" scoped>
  #app{
    .page-container{
      .md-toolbar{
        padding: 0;
      }
    }
    .fist-line{
      width: 100%;
      text-align: left;
      padding: 0 15px;
      .md-title{
        line-height: 40px;
      }
    }
    .md-content{
      background: #fff;
      color: #333;
    }
  }

  .md-drawer {
    width: 85%;
    max-width: calc(100vw - 100px);
    background: #f7f7f7;
    .md-toolbar{
      background: rgb(66,66,66);
      padding:70px 0!important;
      p{
        width: 100%;
      }
      .md-title{
        font-size: 32px;
      }
    }
    .md-list{
      background: #f7f7f7;
      span,i{
        color: #333;
      }
    }
  }

  .md-content {
    padding: 16px;
  }
  .md-toolbar .md-tabs{
    width: 100%;
  }
  </style>