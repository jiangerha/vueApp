<template>
  <div>
      <x-header :left-options="{showBack: false}">
        <span>首页</span>
        <x-icon slot="right" type="navicon" size="35" style="fill:#fff;position:relative;top:-12px;left:-3px;"></x-icon>
      </x-header>
      <swiper loop auto :list="bannerList" :index="bannerIndex" @on-index-change="onIndexChange"></swiper>
      <a @click="logout">logout</a>
      <div class="news-box" id="">
        <p class="news-box-title">公司新闻</p>
        <div class="list_box wrapper" id="wrapper" ref="wrapper">
            <ul class="news-list content" id="newsList">
                <li v-for="(item, index) in dataList">
                    <div class="img-box">
                        <img :src="item.img"/>
                    </div>
                    <div class="content-box">
                      <p class="content-title">{{item.title}}</p>
                      <p class="content-sourse">{{item.sourse}}</p>
                      <p class="content-desc">
                        <span class="has-read"><img src="../assets/images/eye-icon.png"/>{{item.hasRead}}</span>
                        <span class="publish-time">{{item.time}}</span>
                      </p>
                    </div>
                  </li>
            </ul>
        </div>
      </div>
  </div>
</template>
<script>
  // import BScroll from 'better-scroll'
  import * as types from '../store/types'
  import api from '../api/api'
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

  const list = [{
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
    title: '和贯咚咚，引领新时代的社交代的社交潮流潮流',
    sourse:'人民日报',
    time:"2018-01-22",
    hasRead:'3652'
  }, {
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
    title: '和贯咚咚，引领新时代的社交代的社交潮流潮流',
    sourse:'人民日报',
    time:"2018-01-22",
    hasRead:'3652'
  },{
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
    title: '和贯咚咚，引领新时代的社交代的社交潮流潮流',
    sourse:'人民日报',
    time:"2018-01-22",
    hasRead:'3652'
  },{
    url: 'javascript:',
    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg',
    title: '和贯咚咚，引领新时代的社交代的社交潮流潮流',
    sourse:'人民日报',
    time:"2018-01-22",
    hasRead:'3652'
  }]

  export default {
    name:'home',
    data () {
      return{
        bannerList:urlList,
        bannerIndex:0,
        dataList:list,
        fullHeight:document.documentElement.clientHeight
      }
    },
    mounted(){
      //定义wrapper高度
      this.setHeight();

      window.onresize = () => {
        return (() => {
          this.fullHeight = document.documentElement.clientHeight;
          this.setHeight();
        })()
      }

      this.$nextTick(() => {
        //$refs绑定元素
        if(!this.scroll){
            this.scroll = new BScroll(this.$refs.wrapper, {
            //开启点击事件 默认为false
            click:true
        })
        }else if(!this.$refs.wrapper){
            return
        }
        else{
            this.scroll.refresh()
        }
      });
    },
    methods:{
      //banner 切换逻辑
      onIndexChange(index){
        this.bannerIndex = index;
      },
      //banner 图片出现错误逻辑
      onImgError (item, $event) {
        console.log(item, $event)
      },
      setHeight(){
        var $wrapper = document.getElementById("wrapper");
        $wrapper.style.height = (this.fullHeight - 323 -10)+'px';
      },
      logout(){
        this.$store.commit(types.LOGOUT)
        this.$router.push({
          path: '/login'
        })
      }
    },
    watch:{
      fullHeight (val) {
        if(!this.timer) {
          this.fullHeight = val
          this.timer = true
          let that = this
          setTimeout(function (){
            that.timer = false;
            console.log(val);
          },400)
        }
      }
    }
  }
</script>
<style scoped lang="scss" rel="stylesheet/scss" type="text/css">
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
.news-box{
  padding: 0 20px;
  .news-box-title{
    font-size:18px;
    color:#1E2B2B;
    padding:14px 0 10px 0;
    margin:0;
    line-height:18px;
    text-align:left;
    border-bottom:1px solid #E3E6E5;
  }
  .wrapper{
  width: 100%;
  overflow: hidden;
  z-index: 1;
  height: auto;
}
.content{
  padding: 0;
  margin: 0;
  li{
    padding:15px 0 20px 0;
    display: flex;
    border-bottom:1px solid #E3E6E5;
    .img-box{
      width: 54%;
      height: 90px;
      overflow: hidden;
      img{
        width:100%;
        height: 100%;
      }
    }
    .content-box{
      margin-left: 10px;
      height: 90px;
      >p{
        margin: 0;
        text-align:left;
      }
      .content-title{
        font-size: 15px;
        color:#1E2B2B;
      }
      .content-sourse{
        color: #999;
        font-size: 12px;
        margin: 10px 0 15px 0;
        line-height: 12px;
      }
      .content-desc{
        font-size: 12px;
        .has-read{
          color: #0A6AD8;
          img{
            width: 16px;
            margin-right:5px;
          }
        }
        .publish-time{
          float: right;
          color: #999;
        }
      }
    }
  }
  
}
}
</style>