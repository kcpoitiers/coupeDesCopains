<template>
  <div id="programme">
    <div class="md-display-1 title-t1"><h1>Open de Kendo à Poitiers</h1></div>
    <div class="md-layout">
      
      <div class="md-layout-item md-size-15 md-small-size-100 md-alignment-center-center">
      </div>

      <div class="md-layout-item md-size-70 md-small-size-100 md-alignment-top-center md-layout md-elevation-1 textCenter">
        <!-- Slide 1 -->
        <div class="md-layout-item md-size-60 md-small-size-100 md-alignment-center-center slide slide-1">

          <p class="md-body-1">
            <img src="https://99cbae9365cf9ad7a86e-5a85c502fd986ac2593f51439f5144f7.ssl.cf3.rackcdn.com/21728253-754496224740485-1490541200728452537-n-5aa590434962b.jpg" />
          </p>
        </div>

        <div class="md-layout-item md-size-40 md-small-size-100 md-alignment-center-center slide slide-1 slide1-2">
          
          <p class="md-subheading margin10 mt20">
            Bievennue à Poitiers
          </p>

          <p class="md-body2 margin10 txtIntro">
            Le Kendo Club Poitiers vous ouvre ses portes pour vous accueillir au sein de sa ville pour les 10 ans club. Sous le signe d’une compétition amicale, participez à la 1ère Nakama Cup !
          </p>

          <p class="md-body2 margin10 txtIntro">
            Le week-end du 7-8 avril 2018 à Poitiers, venez nombreux pour tenter de remporter cette 1ère édition placée sous le signe de la camaraderie !
            <br />
            <br />
            <br />
          </p>


          <p class="md-subheading margin10 mt20">
            Programme
          </p>
          
          <p class="md-body-1"> 
            <router-link :to="{name: 'programme'}">
              Nakama-Cup 2018
            </router-link>
          </p>

          <p class="md-subheading margin10 mt20">
            Inscriptions
          </p>
          
          <p class="md-body-1"> 
            <router-link :to="{name: 'inscription'}">
              S'inscrire dés maintenant
            </router-link>
          </p>

        </div>

      </div>

      <div class="md-layout-item md-size-15 md-small-size-100 md-alignment-center-center">
      </div>

    </div>
  </div>
</template>

<script >

export default {}
</script>

<style scoped>
  .txtIntro {
    margin-left : 30px;
    margin-right : 30px;
  }

  .slide1-2 {
    padding-top:10vh;
  }

  .mt20 {
    margin-top: 20px;
  }
</style>
