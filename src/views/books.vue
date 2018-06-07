<template>
    <div class="book-section">
      <div class="title-section">
        <div class="title">
            <p>书影音</p>
            <div class="books-icon">
                <md-icon>search</md-icon>
                <md-icon>account_circle</md-icon>
            </div>
        </div>
        <md-tabs md-sync-route>
          <md-tab id="tab-move" md-label="电影" to="/books/movie"></md-tab>
          <md-tab id="tab-tv" md-label="电视" to="/components/tabs/pages"></md-tab>
          <md-tab id="tab-show" md-label="综艺" to="/components/tabs/posts"></md-tab>
          <md-tab id="tab-reading" md-label="读书" to="/components/tabs/settings"></md-tab>
          <md-tab id="tab-city" md-label="同城" to="/components/tabs/settings"></md-tab>
          <md-tab id="tab-music" md-label="音乐" to="/components/tabs/settings"></md-tab>
        </md-tabs>
      </div>
      
      <div>
        <router-view/>
      </div>
    </div>
   </template>
   
   <script>
     import api from '../api/api'
       export default {
         data: () => ({
           hotFilmList:[]
         }),
         mounted(){
          this._renderList();
         },
         methods:{
           _renderList(){
             this.axios.get(api.hotfilm).then(response => {
               this.hotFilmList = response.data.subjects;
             }).catch(err =>{
               console.log(err)
             })
           }
         }
       }
     </script>
   
   <style lang="scss" scoped>
    .book-section{
      .title-section{
        .title{
          height: 40px;
          color: #333;
          position: relative;
          border-bottom:1px solid #eee;
          p{
            line-height: 40px;
            font-size: 18px;
            text-align: center;
          }
          .md-icon{
            color: #00b600;
            &:first-child{
              margin-right: 10px;
              cursor:pointer;
            }
          }
          .books-icon{
            position: absolute;
            right: 15px;
            top: 8px;
          }
        }
        .md-tabs{
          border-bottom: 1px solid #eee;
          .md-tabs-navigation{
            color: #ccc;
          }
        }
        
      }
      
    }
     </style>
