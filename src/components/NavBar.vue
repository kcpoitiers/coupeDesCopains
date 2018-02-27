<template>
<div class="navbar">
  
</div>
</template>

<script>
  import Vue from 'vue'

  export default{
    data: function () {
      return {
        menuVisible: false
      }
    },

    methods: {
      toggleMenu(){ this.menuVisible = !this.menuVisible }
    }
  }
</script>

<style lang="scss" scoped>
  .md-app {
    min-height: 98vh;
    border: 1px solid rgba(#000, .12);
  }
  .md-drawer {
    width: 230px;
    max-width: calc(100vw - 125px);
  }
  .navbarFixed{
    padding-left: 48px;
  }
  .md-content-main{
    padding-left: 100px;
  }
</style>

