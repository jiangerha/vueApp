<template>
  <div class="search-page">
      <div class="search-box">
        <div class="search-input">
            <input type="text" ref="searchText" placeholder="影视、图书、唱片、同城等"/>
            <span class="search-icon" @click="search">
                <md-icon>search</md-icon>
            </span>
        </div>
        <span class="dismiss-text" @click="back">取消</span>
      </div>
      <ul class="search-list" ref="searchList">
        <li v-for="(item,index) in searchList">
          <div>
            <img :src="item.images.small" @error="remove(index)"/>
          </div>
          <div>
            <p>{{item.title}}</p>
          </div>
        </li>
      </ul>
  </div>
  
</template>
<script>
  import api from '../api/api'
  export default {
    data(){
      return{
        searchList:[],
        fullHeight: document.documentElement.clientHeight,
      }
    },
    created(){

    },
    mounted(){
      this.$refs.searchList.style.height = (this.fullHeight - 51) + 'px'
    },
    methods:{
      search(){
        var searchText = this.$refs.searchText.value;
        console.log(api.searchmovie + searchText)
        this.axios.get(api.searchmovie + searchText).then(res => {
          console.log(res)
          this.searchList = res.data.subjects
        }).catch(err => {
          console.log(err)
        })
      },
      back(){
        history.go(-1)
      },
      remove(i){
        this.$delete(this.searchList,i)
      }
    },
    computed:{

    }
  }
</script>
<style lang="scss" scoped>
  .search-page{
    .search-box{
      height: 50px;
      background: #fff;
      border-bottom: 1px solid #ececec;
      display: flex;
      padding: 0 15px;
      .search-input{
        height: 30px;
        width:90%;
        margin:10px 0;
        position: relative;
        input{
          width: 100%;
          height: 100%;
          text-indent: 30px;
          background: #ececec;
          border: none;
          border-radius: 6px;
        }
        .search-icon{
          display: inline-block;
          position: absolute;
          top: 50%;
          margin-top: -12px;
          left: 5px;
        }
      }
      .dismiss-text{
        display: inline-block;
        width: 10%;
        color: #00b600;
        line-height: 50px;
        text-align: right;
      }
    }
    .search-list{
      overflow: overlay;
      padding-top: 15px;
      background: #f7f7f7;
      li{
        display: flex;
        padding:15px;
        height: auto;
        background:#fff;
        margin:10px 0;
        >div{
          img{
            width:50px;
          }
        }
      }
    }
  }

</style>