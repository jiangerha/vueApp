<!-- <template>
    <div>
        
    </div>
</template>
<script>
export default {
    name:"loginOuter",
    data () {
        return{

        }
    },
    methods: {

    },
    computd: {

    }
}
</script>
<style lang="scss" scoped>

</style> -->
<template>
    <div>
      <group>
        <x-switch title="基本用法" v-model="show1"></x-switch>
      </group>
  
      <actionsheet
      v-model="show1"
      :menus="menus1"
      @on-click-menu="click"
      @on-after-hide="log('after hide')"
      @on-after-show="log('after show')"></actionsheet>
    </div>
  </template>
    
  <script>
import { TransferDom, Group, XSwitch, Toast } from 'vux'

export default {
  components: {
    Group,
    XSwitch,
    Toast
  },
  directives: {
    TransferDom
  },
  data () {
    return {
      show1: false,
      menus1: {
        menu1: 'Share to friends',
        menu2: 'Share to timeline'
      }
    }
  },
  methods: {
    log (str) {
      console.log(str)
    },
    console (msg) {
      console.log(msg)
    },
    click (key) {
      console.log(key)
    }
  }
}
</script>

<style>
.popup0 {
  padding-bottom:15px;
  height:200px;
}
.popup1 {
  width:100%;
  height:100%;
}
</style>