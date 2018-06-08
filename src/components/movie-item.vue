<template>
  <div class="movie-part">
    <div class="movie-title">
      <span class="left-text">{{title}}</span>
      <span class="right-more">
        全部{{total}}
        <!-- <md-icon>navigate_after</md-icon> -->
      </span>
    </div>
    <scroll class="wrapper movie-list-container"
    :data="subjects">
      <ul class="content movie-list" ref="movieList">
        <li tag="li" v-for="item in subjects">
          <router-link tag="a" :to="{path:'/moviedetail',query:{id:item.id,backUrl:$route.fullPath}}">
              <img :src="item.images.small" @error="hideItem"/>
              <p class="movie_title">{{item.title}}</p>
              <div v-if="type!=1">
                <rating v-if="item.rating.average > 0" :score="item.rating.average"></rating>
                <p v-else>暂无评分</p>
              </div>
              <span class="collect-count" v-else>{{item.collect_count}}想看</span>
          </router-link>
        </li>
      </ul>
      <div class="loading-wrapper"></div>
    </scroll>
  </div>
</template>
<script>
  import * as types from '../store/types'
  import { mapState } from 'vuex';
  import rating from './rating'
  export default {
    data: () => ({
      pulldown:false
    }),
    props:['movieType'],
    mounted() {
      this.fetchData();
      this.$refs.movieList.style.width = "625px";
    },
    beforeUpdate() {
      console.log(`[beforeUpdate], movieType: ${this.movieType}`);
      this.fetchData();
    },
    destroyed() {
      console.log('[destroyed]');
    },
    methods:{
      fetchData() {
        if (
          !(this.$store.state.movie.movies[this.movieType].subjects &&
            this.$store.state.movie.movies[this.movieType].subjects.length > 0)
          ) {
          this.$store.dispatch(types.FETCH_MOVIES, { type: this.movieType });
        }
      },
      hideItem(e){
        $(e.target).parents("li").remove()
      }
    },
    computed: mapState({
      subjects(state) {
        return state.movie.movies[this.movieType].subjects
      },
      title(state) {
        return state.movie.movies[this.movieType].title
      },
      total(state) {
        return state.movie.movies[this.movieType].total
      },
      type(state) {
        return state.movie.movies[this.movieType].type
      }
    }),
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
      color: #ccc;
      float: right;
    }
  }
  .movie-list-container{
    height: 202px;
    .movie-list{
      height: 100%;
      overflow: hidden;
      li{
        float: left;
        width:115px;
        margin: 0 5px;
        img{
          width:100%;
          height: 162px;
          overflow: hidden;
        }
        p{
          color:#333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .collect-count{
          font-size: 12px;
          color: #666;
        }
      }
    }
  }
}
</style>