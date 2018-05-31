<template>
    <div class="login-box">
        <div class="logo-box">
          <img src="../assets/images/login-bg.png"/>
          <img class="logo" src="../assets/images/logo-icon.png"/>
        </div>
        <form class="login-form" novalidate @submit.stop.prevent="login">
          <md-input-container>
            <label>用户名</label>
            <md-input type="text" v-model="username"></md-input>
          </md-input-container>
          <md-input-container md-has-password>
            <label>密码(Press Enter)</label>
            <md-input type="password" v-model="pwd"></md-input>
          </md-input-container>
          <md-card-actions>
            <md-button type="submit" class="md-raised md-primary" :disabled="sending">登录</md-button>
          </md-card-actions>
        </form>
        <div class="divider">或</div>
        <div class="to-register"><a href="./">邮箱快捷注册</a></div>
        <a class="change-type-box">
          <img src="../assets/images/type-change-icon.png"/>
        </a>
    </div>
</template>
<script type="application/ecmascript">
  import api from '../api/api'
  import * as types from '../store/types'
export default {
    name:"login",
    data () {
        return{
          username:'',
          pwd:''
        }
    },
    methods: {
      login(){
        if(this.username && this.pwd){
          alert(this.username)
          alert(this.pwd)
          // let params = {
          //   "param":{
          //     "serverUrl": "http://www.hounify.com:8818/api/",
          //     "paramJson":
          //       {
          //         "username":this.username,
          //         "password":this.pwd
          //       }
          //   }
          // }
          let params = {"username":this.username,"password":this.pwd}
          this.axios.post('/gys/appLoginAndSave', params).then(response => {
                var userInfo = {
                  "username":this.username,
                  "pwd":this.pwd
                }
                this.$store.commit(types.LOGIN, userInfo)
                console.log(this.$store.state.userInfo)
                let redirect = decodeURIComponent(this.$route.query.redirect || '/');
                this.$router.push({
                  path: redirect
                })
              }).catch(err => {
                console.log(err)
              })
        }
      }
    },
    computd: {

    }
}
</script>
<style lang="scss" scoped>
  .login-box{
    margin-top: 5.8vh;
    .logo-box{
      position: relative;
      img{
        width: 100%;
      }
      .logo{
        width: 96px;
        position: absolute;
        top: 24px;
        left: 50%;
        margin-left: -48px;
      }
    }
    .login-form{
      padding: 0 20px;
      .md-input-container{
        &:first-child{
          margin-top: 6vh;
          margin-bottom:4.6vh;
        }
        input,button{
          outline:none;
        }
        input{
          width: 100%;
          height: 29px;
          border: none;
          font-size:16px;
          line-height:29px;
        }
        .login{
          height: 7vh;
          width: 100%;
          border: none;
          background: #0A6AD8;
          color: #fff;
          font-size: 18px;
          margin-top: 7.9vh;
        }
      }
      .forget-pwd{
        display: block;
        width: 100%;
        text-align: right;
        font-size: 15px;
        color: #ccc;
        text-decoration: none;
        margin: 3.2vh 0 6.25vh 0;
      }
    }
    .divider{
      margin: 0 20px;
      background-image: url('../assets/images/login-line.png');
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
      font-size: 15px;
      color: #E6E6E6;
    }
    .to-register{
      width: 110px;
      height: 28px;
      border: 1px solid #FF9212;
      text-align: center;
      margin:8vh auto 0 auto;
      a{
        text-decoration:none;
        color:#FF9212;
        font-size:14px;
        line-height:28px;
       
      }
    }
    .change-type-box{
      display: inline-block;
      width: 50px;
      height: 70px;
      position: absolute;
      bottom: 0;
      right: 0;
      img{
        width:100%;
      }
    }
  }
</style>