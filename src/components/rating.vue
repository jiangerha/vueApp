<template>
  <div class="rate-box">
      <md-icon :class="{ yellowBg: num>=0}">grade</md-icon>
      <md-icon :class="{ yellowBg: num>=1}">grade</md-icon>
      <md-icon :class="{ yellowBg: num>=2}">grade</md-icon>
      <md-icon :class="{ yellowBg: num>=3}">grade</md-icon>
      <md-icon :class="{ yellowBg: num>=4}">grade</md-icon>
      <!-- <span style="color:#666;font-size:12px;">{{scoreNum}}</span> -->
  </div>
 
</template>
<script>
  export default {
    data(){
      return{
        scoreNum:0,
        num:0
      }
    },
    mounted(){
      this.scoreNum = this.score;
     this.num = parseInt(this.score/2);
    },
    props:{
      score:{
        type:Number,
        require:true
      }
    }
  }
</script>
<style>
 
</style>