<template>
  <div id="programme">

    <div class="md-layout">
      
      <div class="md-layout-item md-size-15 md-small-size-100 md-alignment-center-center">
      </div>

      <div class="md-layout-item md-size-70 md-small-size-100 md-alignment-center-center md-layout md-elevation-1 textCenter">
        <!-- Form -->
        <form novalidate class="md-layout formContact" @submit.prevent="validateUser">
          <md-card class="md-layout-item md-size-100 md-small-size-100">
            <md-card-header>
              <div class="md-display-1 title-t1"><h1>Envoyer un message</h1></div>
            </md-card-header>

            <md-card-content>
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                  <md-field :class="getValidationClass('firstName')">
                    <label for="first-name">Prénom</label>
                    <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName" :disabled="sending" />
                    <span class="md-error" v-if="!$v.form.firstName.required">Le prénom est requis.</span>
                    <span class="md-error" v-else-if="!$v.form.firstName.minlength">Le prénom est invalide.</span>
                  </md-field>
                </div>

                <div class="md-layout-item md-small-size-100">
                  <md-field :class="getValidationClass('lastName')">
                    <label for="last-name">Nom</label>
                    <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName" :disabled="sending" />
                    <span class="md-error" v-if="!$v.form.lastName.required">Le nom de famille est requis.</span>
                    <span class="md-error" v-else-if="!$v.form.lastName.minlength">Le nom de famille est invalide.</span>
                  </md-field>
                </div>
              </div>

              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('clubName')">
                  <label for="club-name">Club</label>
                  <md-input name="club-name" id="club-name" v-model="form.clubName" :disabled="sending" />
                  <span class="md-error" v-if="!$v.form.clubName.required">Le nom de famille est requis.</span>
                  <span class="md-error" v-else-if="!$v.form.clubName.minlength">Le nom de famille est invalide.</span>
                </md-field>
              </div>

              <md-field :class="getValidationClass('email')">
                <label for="email">Email</label>
                <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.email.required">L'email est requis.</span>
                <span class="md-error" v-else-if="!$v.form.email.email">L'email est invalide.</span>
              </md-field>

              <div class="md-layout-item md-small-size-100">
                <md-field :class="getValidationClass('message')">
                  <label for="message">Message</label>
                  <md-textarea  name="message" id="message" v-model="form.message" :disabled="sending" />
                  <span class="md-error" v-if="!$v.form.message.required">Le message est requis.</span>
                  <span class="md-error" v-else-if="!$v.form.message.minlength">Le message est invalide.</span>
                </md-field>
              </div>

            </md-card-content>

            <md-progress-bar md-mode="indeterminate" v-if="sending" />

            <md-card-actions>
              <md-button type="submit" class="md-primary" :disabled="sending">Envoyer</md-button>
            </md-card-actions>
          </md-card>

          <md-snackbar :md-active.sync="msgSaved">Message bien envoyé, merci {{ lastUser }} !</md-snackbar>

          <md-card class="md-layout-item md-size-100 md-small-size-100">
            <md-card-header>
              <div class="md-display-1 title-t1"><h1>Téléphone</h1></div>
            </md-card-header>

            <md-card-content>
              <div class="md-layout md-gutter">
                <div class="md-layout-item md-small-size-100">
                  <p class="md-title"> <u>Mélodie</u> : 06.62.78.44.12 | <u>Thibault</u> : 07.82.83.43.89 </p>
                </div>
                </div>
            </md-card-content>
          </md-card>
        </form>
      </div>


    </div>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'

  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    data: () => ({
      form: {
        firstName: null,
        lastName: null,
        clubName: null,
        message: null,
        age: null,
        email: null,
      },
      msgSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        firstName: {
          required,
          minLength: minLength(3)
        },
        lastName: {
          required,
          minLength: minLength(3)
        },
        clubName: {
          required,
          minLength: minLength(3)
        },
        message: {
          required,
          minLength: minLength(3)
        },
        email: {
          required,
          email
        }
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.firstName = null
        this.form.lastName = null
        this.form.message = null
        this.form.email = null
        this.form.clubName = null
      },
      saveMessage () {
        this.sending = true

        var ladate=new Date()
        let dateMail = ladate.getDate()+"/"+(ladate.getMonth()+1)+"/"+ladate.getFullYear()

        let messageBody = "<u>Corps du message envoyé par le site nakama-cup.com</u> : <br /><br />"
        messageBody += "<u>Nom & prénom</u> : "+ this.form.firstName +" "+ this.form.lastName+" <br />"
        messageBody += "<u>Club</u> : "+ this.form.clubName +" <br />"
        messageBody += "<u>Mail</u> : "+ this.form.email +" <br />"
        messageBody += "<u>Message</u> : "+ this.form.message +" <br /> <br />"
        messageBody += "<u>Envoyé le</u> : "+ dateMail +" <br /><br />"

        messageBody += "Bonne journée, <br />"
        messageBody += "Équipe Kendo Club Poitiers <br />"

        Email.send("kcpoitiers@gmail.com",
          "kcpoitiers@gmail.com",
          "|| Nakama-Cup.com || Message envoyé par le formulaire du site",
          messageBody,
          "smtp.elasticemail.com",
          "fake125451556846@gmail.com",
          "722a5ec1-5534-4a7f-ac0f-75e9e2ccf6c0",
          function done(message) { console.log(message) }
          );
        
        this.lastUser = `${this.form.firstName} ${this.form.lastName}`
        this.msgSaved = true
        this.sending = false
        this.clearForm()

      },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveMessage()
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
</style>



<style scoped>

.md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
  
  .title-message {
    font-size: 200%;
    font-weight: bolder;
  }

  .margin10 {
    margin: 30px 0px;
  }

  .formContact {
    margin: 20px 20px;
  }
</style>
