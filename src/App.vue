<template>
  <div class="page-containerjoe">

    <div v-if="$route.name === 'entrance'" >
      <router-link :to="{name: 'programme'}">
        <router-view></router-view>
      </router-link>
    </div>

    <div v-else>
       <div class="navbar">
        <md-app md-waterfall md-mode="fixed">
        <md-app-toolbar class="md-large md-dense md-primary">
            <div class="md-toolbar-row">
              <div class="md-toolbar-section-start">
                <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
                  <md-icon>menu</md-icon>
                </md-button>

                <span class="md-title">
                  <!-- <md-icon>face</md-icon> Nakama Cup </span> -->
                Nakama Cup | <span class="md-subheading">Open de Kendo à Poitiers</span></span>
              </div>

            </div>

            <div class="md-toolbar-row navbarFixed md-xsmall-hide md-small-hide">
              <div class="md-primary md-xsmall-hide md-small-hide">
                <!-- <md-button :to="{name: 'home'}" class="md-primary">Home</md-button>
                <md-button :to="{name: 'programme'}" class="md-primary">Programme</md-button>
                <md-button :to="{name: 'info'}">Info</md-button>
                <md-button :to="{name: 'media'}" class="md-primary">Media</md-button>
                <md-button :to="{name: 'contact'}">Contact</md-button>
                <md-button :to="{name: 'festival'}" class="md-primary">Festival Japon</md-button> -->

                <md-button class="md-primary">Accueil</md-button>
                <md-button :to="{name: 'programme'}" class="md-primary">Programme</md-button>
                <md-button class="md-primary">Info</md-button>
                <md-button class="md-primary">Media</md-button>
                <md-button :to="{name: 'contact'}" class="md-primary">Contact</md-button>
                <md-button class="md-primary">Festival Japon</md-button>
              </div>
            </div>
          </md-app-toolbar>

          <md-app-drawer :md-active.sync="menuVisible" md-small-hide>
            <md-toolbar class="md-transparent" md-elevation="2" md-small-hide>
              <span>Navigation</span>

              <div class="md-toolbar-section-end">
                <md-button class="md-icon-button md-dense" @click="toggleMenu">
                  <md-icon>keyboard_arrow_left</md-icon>
                </md-button>
              </div>
            </md-toolbar>

            <md-list>
              <md-list-item class="md-list-item-height">
                <md-icon>assignment</md-icon>
                <span class="md-list-item-text">Inscription</span>
              </md-list-item>

              <md-list-item>
                <md-icon>mail</md-icon>
                <span class="md-list-item-text">Contact</span>
              </md-list-item>

              <md-list-item>
                <md-icon>navigation</md-icon>
                <span class="md-list-item-text">Info pratique</span>
              </md-list-item>

              <md-list-item>
                <md-icon>announcement</md-icon>
                <span class="md-list-item-text">Annonce</span>
              </md-list-item>

              <md-list-item>
                <md-icon>share</md-icon>
                <span class="md-list-item-text">Partager</span>
              </md-list-item>

            </md-list>
          </md-app-drawer>
          <md-app-content>
            <router-view></router-view>
          </md-app-content>
        </md-app>
      </div>
    </div>

  </div>
</template>

<script>
  import Vuex from 'vuex'

  import RootStore from "@stores/rootstore/RootStore";
  // import MainLayout from '@views/MainLayout.vue' // @ is an alias to /src
  // import EntranceLayout from '@views/EntranceLayout.vue' // @ is an alias to /src

  export default{
    
    store: RootStore,
    
    data: function () {
      return {
        menuVisible: false
      }
    },

    // components: { EntranceLayout, MainLayout },
    computed: {
      ...Vuex.mapGetters(['entered']),
    },

    methods: {
      ...Vuex.mapActions(['enterSite']),
      toggleMenu(){ this.menuVisible = !this.menuVisible }
    },

    mounted(){ 
      console.log("Entered de base a : ")   
    }

  }
</script>


<style lang="scss" scoped>
  .md-app {
    min-height: 98vh;
    height:auto;
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

  .md-app-content {
    padding : 0px;
  }

  .md-list-item {
    height: 48px;
  }

</style>
