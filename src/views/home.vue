<template>
  <div>
      <x-header :left-options="{showBack: false}">
        <span>首页</span>
        <x-icon slot="right" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
      </x-header>
      <swiper loop auto :list="banner_list" :index="banner_index" @on-index-change="onIndexChange"></swiper>
      <div class="news_box">
        <p class="news_box_title">公司新闻</p>
      </div>
  </div>
</template>
<script src=""></script>
<script>
  const urlList = [{
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
    title: '送你一朵fua'
  }, {
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg',
    title: '送你一辆车'
  }, {
    url: 'javascript:',
    img: 'https://static.vux.li/demo/5.jpg', // 404
    title: '送你一次旅行',
    fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
  }]
  export default {
    name:'home',
    data () {
      return{
        banner_list:urlList,
        banner_index:0
      }
    },
    methods:{
      onIndexChange(index){
        this.banner_index = index;
        console.log(this.banner_index)
      }
    }
  }
</script>
<style lang="scss">
.vux-header {
  background-color: #0A6AD8!important;
}
.vux-slider{
  .vux-swiper-desc{
    text-align: left;
  }
  .vux-indicator{
    .vux-icon-dot.active{
      background-color: #0A6AD8!important;
    }
  }
}
.news_box{
  padding: 0 20px;
  .news_box_title{
    font-size:18px;
    color:#1E2B2B;
    padding:14px 0 10px 0;
    margin:0;
    line-height:18px;
    text-align:left;
    border-bottom:1px solid #E3E6E5;
  }
}
</style>