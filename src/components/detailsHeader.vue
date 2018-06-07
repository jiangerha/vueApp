<template>
  <div class="header-section" ref="headerSection">
      <div class="details-header">
          <md-icon class="back-icon">navigate_before</md-icon>
          <div v-if="type == 0">
              <md-icon>video_library</md-icon>
              <span>电影</span>
          </div>
          <div v-if="type == 1">
              <md-icon>video_label</md-icon>
              <span>电视</span>
          </div>
          <div v-if="type == 2">
              <md-icon>import_contacts</md-icon>
              <span>图书</span>
          </div>
          <div v-if="type == 3">
              <md-icon>business</md-icon>
              <span>活动</span>
          </div>
          <div v-if="type == 4">
              <md-icon>audiotrack</md-icon>
              <span>唱片</span>
          </div>
          <md-icon class="share">reply</md-icon>
        </div>
        <img :src="imgUrl"/>
  </div>
  
</template>
<script>
  export default {
    data(){
      return{
        type:0,
        title:'',
        imgUrl:''
      }
    },
    props:{
      data:{
        type:Object,
        require:true
      }
    },
    mounted(){
      this.type = this.data.type,
      this.title = this.data.title,
      this.imgUrl = this.data.img
    }
  }
</script>
<style lang="scss" scoped>
  .header-section{
    text-align: center;
    background: #282C34;
    .details-header{
      height: 40px;
      padding: 8px 5%;
      >div{
        display:inline-block;
        width:70%;
        text-align:center;
        .md-icon{
          font-size: 24px!important;
          color:#fff!important;
        }
        span{
          color: #fff;
        }
      }
      .back-icon,.share{
        width: 10%;
      }
      .md-icon{
        font-size: 30px!important;
      }
      .share{
        float: right;
      }
    }
    img{
      width: 40%;
      margin: 15px 0;
    }
  }
  
</style>