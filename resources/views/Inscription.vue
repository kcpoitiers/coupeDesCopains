<template>
  <div id="inscription">
    <div class="md-display-1 title-t1"><h1>Inscriptions</h1></div>
    <div class="md-layout">
      
      <div class="md-layout-item md-size-15 md-small-size-100 md-alignment-center-center">
      </div>

      <div class="md-layout-item md-size-70 md-small-size-100 md-alignment-center-center md-layout md-elevation-1 textCenter">
        <!-- Slide 1 -->
        <div class="md-layout-item md-size-40 md-small-size-100 md-alignment-center-center slide slide-1">

          <p class="md-body-1">
            <img src="https://99cbae9365cf9ad7a86e-5a85c502fd986ac2593f51439f5144f7.ssl.cf3.rackcdn.com/dos-5aa5979566e69.jpg" />
          </p>
        </div>

        <div class="md-layout-item md-size-60 md-small-size-100 md-alignment-center-center slide slide-1">
          
          <p class="md-subheading margin10">
            Inscrivez-vous dés maintenant
          </p>
          
          <p class="md-body-1"> 
            <span class="md-body-2">Formulaire d'inscription compétitions individuelles</span> <br />
            <a href="https://goo.gl/forms/ZOiCoMBDiNOoAPuj1" target="_blank"> https://goo.gl/forms/ZOiCoMBDiNOoAPuj1 </a> <br />

            <span class="md-body-2">Formulaire d'inscription compétitions équipes</span> <br />
            <a href="https://goo.gl/forms/qfkT7z0WmE9G04Nb2" target="_blank"> https://goo.gl/forms/qfkT7z0WmE9G04Nb2 </a>
          </p>

          <p class="md-body-1 formContact"> 
            <span class="md-body-2">Un doute ? Contactez-nous !</span> <br />
            <router-link :to="{name: 'contact'}">
              Formulaire de Contact
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
  .formContact {
    margin-top: 40px;
  }
</style>
