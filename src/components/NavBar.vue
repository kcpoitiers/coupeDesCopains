<template>
<div class="navbar">
  <md-app md-waterfall md-mode="fixed-last">
    <md-app-toolbar class="md-large md-dense md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">
          <md-button class="md-icon-button" @click="toggleMenu" v-if="!menuVisible">
            <md-icon>menu</md-icon>
          </md-button>

          <span class="md-title">
            <md-icon>face</md-icon> Nakama Cup </span>
        </div>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button" @click="menuMoreVisible = !menuMoreVisible">
            <md-icon>more_vert</md-icon>
          </md-button>
        </div>
      </div>

      <div class="md-toolbar-row navbarFixed">
        <div class="md-primary">
          <md-button :to="{name: 'home'}">Home</md-button>
          <md-button :to="{name: 'programme'}" class="md-primary">Programme</md-button>
          <md-button :to="{name: 'info'}">Info</md-button>
          <md-button :to="{name: 'media'}" class="md-primary">Media</md-button>
          <md-button :to="{name: 'contact'}">Contact</md-button>
          <md-button :to="{name: 'matsuri'}" class="md-primary">Festival Matsuri</md-button>
        </div>
      </div>
    </md-app-toolbar>

    <md-app-drawer class="md-right" :md-active.sync="menuMoreVisible">
      <md-toolbar class="md-transparent" md-elevation="0">Navigation</md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>move_to_inbox</md-icon>
          <span class="md-list-item-text">Inbox</span>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">Sent Mail</span>
        </md-list-item>
      </md-list>
    </md-app-drawer>

    <md-app-drawer :md-active.sync="menuVisible" md-persistent="mini">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span>Navigation</span>

        <div class="md-toolbar-section-end">
          <md-button class="md-icon-button md-dense" @click="toggleMenu">
            <md-icon>keyboard_arrow_left</md-icon>
          </md-button>
        </div>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <md-icon>assignment</md-icon>
          <span class="md-list-item-text">Inscription</span>
        </md-list-item>

        <md-list-item>
          <md-icon>send</md-icon>
          <span class="md-list-item-text">Sent Mail</span>
        </md-list-item>

        <md-list-item>
          <md-icon>delete</md-icon>
          <span class="md-list-item-text">Trash</span>
        </md-list-item>

        <md-list-item>
          <md-icon>error</md-icon>
          <span class="md-list-item-text">Spam</span>
        </md-list-item>
      </md-list>
    </md-app-drawer>

  </md-app>
</div>
</template>

<script>
import Vue from 'vue'

export default{
  data: function () {
    return {
      menuVisible: false,
      menuMoreVisible: false
    }
  },

  methods: {
    toggleMenu(){ this.menuVisible = !this.menuVisible }
  },
}
</script>

<style lang="scss" scoped>
  .md-app {
    min-height: 400px;
    border: 1px solid rgba(#000, .12);
  } // Demo purposes only
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

