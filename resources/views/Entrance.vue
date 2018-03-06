<template>
  <div class="entrance-container joe">
    <div id="entrance" class="md-layout entrance-container ">
      <div class="md-layout-item md-size-20"></div>
      
      <div class="md-layout-item md-size-60 md-alignment-center-center">
        <img class="title-nakamacup md-alignment-center-center" alt="title NakamaCup" 
          src="https://99cbae9365cf9ad7a86e-5a85c502fd986ac2593f51439f5144f7.ssl.cf3.rackcdn.com/opti/desktop-bande1-5a59fcab0a455.png"
        />
        <div>
          <md-icon class="md-size-4x md-accent md-elevation-2 md-with-hover">open_in_browser</md-icon>
        </div>
      
      </div>
      
      
      <div class="md-layout-item md-size-20"></div>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue'
  import $ from 'jquery'

  export default {

    mounted(){

      $(window).mousemove(function(e) {
        var change;
        var xpos=e.clientX;
        var ypos=e.clientY;
        var left= change*20;
        xpos=xpos*2;ypos=ypos*2;
        
        $('.title-nakamacup').css('top',((0+(ypos/150))+"px"));
        $('.title-nakamacup').css('right',(( 0+(xpos/150))+"px"));         
      });

    }
  }
</script>

<style lang="scss" scoped>
  .md-layout{
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  .entrance-container{
    min-height: 99.7vh;
  }

  .md-layout.md-gutter {
    margin-right: 0px;
    margin-left: 0px;
  }

  .center{
    color: #0c0c0c;
  } 

  .title-nakamacup {
    position: relative;
  }
</style>

<style lang="scss">

  @import url(https://fonts.googleapis.com/css?family=EB+Garamond|Cardo:400italic);


  .router-link-active{
    background: red;
  }

  
</style>

