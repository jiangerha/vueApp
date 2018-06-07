<template>
  <div class="movie-details">
    <details-header :data="{type:0,title:detailData.title,img:detailData.images.small}"></details-header>
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
          <p>豆瓣评分</p>
          <div v-if="detailData.rating.average > 0">
            <p>{{detailData.rating.average}}</p>
            <rating :score="detailData.rating.average"></rating>
            <span class="rating-count" v-if="detailData.ratings_count > 0">{{detailData.ratings_count}}人</span>
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
        detailData:{}
      }
    },
    mounted(){
      this._getInfo()
    },
    methods:{
      _getInfo(){
        this.axios.get(api.moviedetail + this.$route.query.id).then(response => {
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
      width: 75%;
      padding: 0 10% 0 5%;
      .rate_box{
        display: inline-block;
      }
      .rating-count{
        font-size: 12px;
        color: #888;
      }
      .info-details{
        span{
          color: #666!important;
        }
      }
    }
    .info-rating{
      width: 20%;
      height: 80px;
      box-shadow: 1px 1px 1px 2px #ececec;
      .rate_box{
        span{
          display: none!important;
        }
      }
    }
  }
}
</style>