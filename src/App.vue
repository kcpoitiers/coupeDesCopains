<template>
  <div class="page-containerjoe"  >
    <EntranceLayout v-if="!entered"></EntranceLayout>
    <MainLayout v-else v-on:click="enterSite"></MainLayout>
    
  <!-- <h1 v-if="!entered" v-on:click="enterSite">HEY IM JOE</h1> -->
  </div>
</template>

<script>
  import Vuex from 'vuex'

  import RootStore from "@stores/rootstore/RootStore";
  import MainLayout from '@views/MainLayout.vue' // @ is an alias to /src
  import EntranceLayout from '@views/EntranceLayout.vue' // @ is an alias to /src

  export default{
    
    store: RootStore,
    components: { EntranceLayout, MainLayout },
    computed: {
      ...Vuex.mapGetters(['entered']),
    },

    methods: {
      ...Vuex.mapActions(['enterSite'])
    },

    mounted(){ 
      console.log("Entered de base a : ")   
    }

  }
</script>
