<template>
    <div class="login-box">
        <div class="logo-box">
          <img src="../assets/images/login-bg.png"/>
          <img class="logo" src="../assets/images/logo-icon.png"/>
        </div>
        <form class="login-form">
          <div class="form-group">
              <input type="text" placeholder="请输入您的账号" v-model="username"/>
          </div>
          <div class="form-group">
              <input type="password" placeholder="请输入您的密码" v-model="pwd"/>
          </div>
          <div class="form-group">
              <button class="login" type="button">登录</button>
          </div>
          <a class="forget-pwd" href="./">忘记密码？</a>
        </form>
        <div class="divider">或</div>
        <div class="to-register"><a href="./">邮箱快捷注册</a></div>
        <a class="change-type-box">
          <img src="../assets/images/type-change-icon.png"/>
        </a>
    </div>
</template>
<script>
export default {
    name:"login",
    data () {
        return{
          username:'',
          pwd:''
        }
    },
    methods: {

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
      .form-group{
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
          border-bottom:1px solid #ccc;
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