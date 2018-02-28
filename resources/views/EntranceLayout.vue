<template>
  <router-link :to="{name: 'programme'}">
  <div id="layout" class="entrance" @click="enterSite()">
  <!-- <div id="layout" class="entrance"> -->
    <Entrance></Entrance>
  </div>
  </router-link>
</template>

<script>
import Vuex from 'vuex'
import RootStore from "@stores/rootstore/RootStore";
import Entrance from "@components/Entrance";

export default {

  store: RootStore,
  components: { Entrance },
  computed: {
    ...Vuex.mapGetters(['entered']),
  },

  methods: {
    ...Vuex.mapActions(['enterSite'])
  },

  mounted(){ 
    console.log("Entrance Layout Mounted")   
  }

}
</script>

<style>
  .entrance {
    min-height:200px;
    background: #112288;
  }
</style>
