<template>
  <div class="movie">
    <movie-item :movieType="typeObj.in_theaters"></movie-item>
    <movie-item :movieType="typeObj.coming_soon"></movie-item>
  </div>
</template>
<script>
  import movieItem from './movie-item'
  export default {
    data: () => ({
      typeObj :{
        "in_theaters":"in_theaters",
        "coming_soon":"coming_soon"
      }
    }),
    methods:{
      
    },
    components:{
      movieItem
    }
  }
</script>
<style lang="scss" scoped>

</style>