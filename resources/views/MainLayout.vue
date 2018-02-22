<template>
  <div class="page-container">
    <NavBar></NavBar>
    <router-view></router-view>
  </div>
</template>

<script>
  import NavBar from '@components/NavBar'; // @ is an alias to /src

  export default{
    components: { NavBar },
  }
</script>
