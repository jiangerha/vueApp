<template>
  <div class="movie-details">
    <details-header :data="{type:0,title:detailData.title,img:detailData.images.small,backUrl:backUrl}"></details-header>
    <div class="base-info">
        <p class="info-title">{{detailData.title}}</p>
        <div class="info-text">
          <p class="info-details">
            <span v-for="item in detailData.genres">{{item}}/</span>
            <span v-for="item in detailData.directors">{{item.name}}(导演)/</span>
            <span v-for="item in detailData.casts">{{item.name}}/</span>
            <span>{{detailData.year}}</span>(
            <span v-for="item in detailData.countries">{{item}}</span>)上映
          </p>
        </div>
        <div class="info-rating">
          <p class="rate-title">豆瓣评分</p>
          <div v-if="detailData.rating.average > 0">
            <p class="score-num">{{detailData.rating.average}}</p>
            <rating :score="detailData.rating.average"></rating>
            <p class="rating-count" v-if="detailData.ratings_count > 0">{{detailData.ratings_count}}人</p>
          </div>
          <p v-else>暂无评分</p>
        </div>
      </div>
  </div>
</template>
<script>
  import api from '../api/api'
  import rating from './rating'
  import detailsHeader from './detailsHeader'
  export default {
    data(){
      return{
        detailData:{},
        backUrl:this.$route.query.backUrl
      }
    },
    mounted(){
      this._getInfo()
    },
    methods:{
      _getInfo(){
        this.axios.get(api.moviedetail + this.$route.query.id).then(response => {
          console.log(api.moviedetail + this.$route.query.id)
          this.detailData = response.data;
          console.log(this.detailData)
        }).catch(err => {
          console.log(err)
        })
      }
    },
    components:{
      rating,
      detailsHeader
    }
  }
</script>
<style lang="scss" scoped>
.movie-details{
  .base-info{
    .info-title{
      margin: 10px 20px;
      font-size: 24px;
      line-height: 32px;
      word-break: break-all;
      text-align:left;
    }
    >div{
      display: inline-block;
      float: left;
    }
    .info-text{
      width: 70%;
      padding: 0 10% 0 5%;
      .rate-box{
        display: inline-block;
      }
      .info-details{
        color: #999!important;
      }
    }
    .info-rating{
      width: 25%;
      height: 80px;
      box-shadow: 1px 1px 1px 2px #ececec;
      .rate-title{
        font-size: 12px;
        color:#999;
        text-align:center;
      }
      .score-num{
        text-align: center;
        font-size: 18px;
        line-height: 18px;
      }
      .rating-count{
        text-align: center;
        font-size: 12px;
        color: #888;
      }
    }
  }
}
</style>