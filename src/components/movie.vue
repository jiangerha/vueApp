<template>
  <div class="movie-part">
    <div class="movie-title">
      <span class="left-text">影院热映</span>
      <span class="right-more">更多</span>
    </div>
    <scroll class="wrapper movie-list-container"
    :data="hotFilmList">
      <ul class="content movie-list" ref="movieList">
      <li v-for="item in hotFilmList" ref="movieItem">
          <img :src="item.images.small" @error="hideItem"/>
          <p class="movie_title">{{item.title}}</p>
          <rating v-if="item.rating.average > 0" :score="item.rating.average"></rating>
          <p v-else>暂无评分</p>
      </li>
      </ul>
      <div class="loading-wrapper"></div>
    </scroll>
  </div>
</template>
<script>
  import api from '../api/api'
  import rating from './rating'
  export default {
    data: () => ({
      hotFilmList:[],
      num:0,
      pulldown:false
    }),
    mounted(){
     this._renderList();
     this.$refs.movieList.style.width = "575px";
    },
    methods:{
      _renderList(){
        this.axios.get('/api' + api.hotfilm).then(response => {
          this.hotFilmList = response.data.subjects;
          this.num = response.data.total;
        }).catch(err =>{
          console.log(err)
        })
      },
      hideItem(e){
        $(e.target).parents("li").remove()
      }
    },
    components:{
      rating
    }
  }
</script>
<style lang="scss" scoped>
.movie-part{
  .movie-title{
    color: #333;
    padding:15px 15px 0 15px;
    height: 30px;
    box-sizing:content-box;
    span{
      display: inline-block;
      line-height: 30px;
    }
    .left-text{
      font-size: 16px;
      float: left;
    }
    .right-more{
      font-size: 14px;
      color: #42bd56;
      float: right;
    }
  }
  .movie-list-container{
    height: 180px;
    .movie-list{
      height: 100%;
      li{
        float: left;
        width:115px;
        margin: 0 5px;
        p{
          color:#333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>