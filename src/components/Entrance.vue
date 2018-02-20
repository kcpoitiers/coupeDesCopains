<template>
<div class="entrance-container joe">
  <div class="md-layout md-gutter entrance-container Aligner">
    <div class="md-layout-item md-size-40 Aligner-item Aligner-item--top "></div>
    <div class="md-layout-item Aligner-item md-vertical-align-center md-alignment-center">
      <h1 class="naka">Nakama Cup</h1>  
      <h3>Open de Poitiers</h3>  
    </div>
    <div class="md-layout-item md-size-40 Aligner-item Aligner-item--bottom"></div>
  </div>
</div>
</template>

<script>
import Vue from 'vue'

export default {
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
</style>

