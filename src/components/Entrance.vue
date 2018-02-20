<template>
<div class="entrance-container joe">
  <div class="md-layout md-gutter entrance-container ">
    <div class="md-layout-item md-size-20"></div>
    <div class="md-layout-item md-size-60 md-alignment-center-center">
      <img class="title-nakamacup md-alignment-center-center" 
        src="https://99cbae9365cf9ad7a86e-5a85c502fd986ac2593f51439f5144f7.ssl.cf3.rackcdn.com/opti/desktop-bande1-5a59fcab0a455.png" 
        alt="title NakamaCup" />
      <Countdown deadline="February 28, 2018" class="center"></Countdown>
      <!-- <p class="title-nakamacup">Joe</p> -->
    </div>
    <div class="md-layout-item md-size-20"></div>
  </div>
</div>
</template>

<script>
  import Vue from 'vue'
  import Countdown from 'vuejs-countdown'

  export default {
    components: { Countdown },
    mounted(){
      console.log("entrance")
    }
  }
</script>

<style lang="scss" scoped>
  .md-layout{
    align-items: center;
  }

  .entrance-container{
    min-height: 100vh;
  }

  .md-layout.md-gutter {
    margin-right: 0px;
    margin-left: 0px;
}

  .title-nakamacup {
    text-align: center;
    width:100%;
  }

  .center{
    color: #0c0c0c;
    margin-left:450px;
  } 
</style>

