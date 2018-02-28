<template>
  <div id="programme" class="md-layout">

    <div class="md-layout-item md-size-50 md-small-size-100 md-alignment-center-center mcards">

      <md-card class="card">
      <md-ripple>
        <md-card-header>
          <div class="md-title">Nakama Cup</div>
        </md-card-header>

        <md-card-content>
          <p class="md-subheading">
            Samedi 7 avril - Compétition individuelle
          </p>
          <p class="md-body-1">
            <ul>
              <li> 10H00 – Ouverture des portes / Contrôle des Shinaïs </li>
              <li> 12H00 – Repas d’accueil </li>
              <li> 13H00 – Début de la compétition </li>
              <li> 17H30 – Fin prévisionnelle </li>
              <li> 18H00 – 19h30 : Démonstration d’arts martiaux </li>
            </ul>
          </p>

          <p class="md-subheading">
            Dimanche 8 avril - Compétition par équipe
          </p>
          <p class="md-body-1">
            <ul>
              <li> 08H30 – Ouverture des portes / Contrôle des Shinaïs </li>
              <li> 09H30 – Début de la compétition </li>
              <li> 12H00 – Arrêt des combats </li>
              <li> 13H00 – Reprise des combats </li>
              <li> 16H00 – Fin prévisionnelle </li>
            </ul>
          </p>
        </md-card-content>
      </md-ripple>
    </md-card>

    </div>

    <div class="md-layout-item md-size-50 md-small-size-100 md-alignment-center-center mcards">
      

      <md-card class="card">
      <md-ripple>
        <md-card-header>
          <div class="md-title">Catégories</div>
        </md-card-header>

        <md-card-content>

          <p class="md-subheading">
            Compétition individuelle
          </p>

          <p class="md-body-1">
            <ul>
              <li> Adultes -  18 ans et plus   </li>
              <li> Samouraïs - années de naissance 2007-2008</li>
              <li> Benjamins - années de naissance 2005-2006 </li>
              <li> Minimes - années de naissance 2003-2004 </li>
              <li> Cadets - années de naissance 2001-2002 </li>
              <li> Juniors - années de naissance 1998-1999-2000 </li>
            </ul>
          </p>

          <p class="md-subheading">
            Compétition équipe
          </p>

          <p class="md-body-1">
            <ul>
              <li> Adultes : 18 ans et plus, équipes de 3 </li>
              <li>Jeunes  :
              <ul> 
                <li>Sempo - Samouraï/Benjamin </li>
                <li>Chuken - Minime/Cadet </li>
                <li>Taisho - Juniors </li>
              </ul>
              </li>
            </ul>
          </p>

          <p class="md-subheading">
            Conditions d’inscription 
          </p>

          <p class="md-body-1">
            Être âgé de 18 ans pour l’Open et avoir l’autorisation parentale pour les mineurs. <br />
            Pour la compétition par équipe, il y a la possibilité de monter des équipes sur place avec les ronins présents.
          </p>
        </md-card-content>
      </md-ripple>
    </md-card>
  
    </div>

    <div class="md-layout-item md-size-100 md-small-size-100 md-alignment-center-center mcards">
      <md-card>
      <md-ripple>
        <md-card-header>
          <div class="md-title">Ouverture des inscriptions</div>
        </md-card-header>

        <md-card-content>

          <p class="md-body-1">
            Les inscriptions seront ouvertes le dimanche 04 mars 2018 via un formulaire google ou par mail à travers l'onglet contact qui sera par la suite
          </p>

        </md-card-content>
      </md-ripple>
    </md-card>
    </div>

  </div>
</template>

<script >

export default {}
</script>

<style scoped>
  .md-body-1, .md-body-2 {
    margin-top:10px;
  }
  .md-subheading {
    margin-top:20px;
    text-decoration: underline;
  }
  li {
    list-style-type: circle;
  }
  .mcards {
    padding : 10px 5px;
  }

</style>
