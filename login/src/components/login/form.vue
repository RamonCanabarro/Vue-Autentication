<template>
<div>
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-toolbar-title>
          <div v-if="!logado">SmartGrid</div>
          <div v-else>{{msg}}, {{user.j.usuario.nome}}</div>
         </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

  <div v-if = '!logado'>
    <q-card inline >
      <q-card-media>
      <img src="statics/caesb.png">
      </q-card-media>
    <q-card-separator  class="my-input" /> <br>
    <q-card-title>
      <q-input class="my-input" v-model="user.login" placeholder="login" />
      <q-input class="my-input" type="password" v-model="user.password" placeholder="******" />
      <ul v-if="user.errors && user.errors.length">
        <li v-for="error of user.errors">
          {{error.message}}
        </li>
      </ul>
      </q-card-title>
    <q-card-separator />
    <q-card-main>
      <q-btn type='buttom' color="primary" class="my-button" @click='login' >Entrar</q-btn>
    </q-card-main>
  </q-card>
    <br>
    <span v-if='msg'>
      <q-alert color="negative">{{msg}}</q-alert></span>  
    </div>

    
</div>
</template>
<style>
.my-input {
  margin-bottom: 50px;
}
.my-button {
  width: 95%;
}
</style>
<script>
import moment from "moment";
import sha256 from "js-sha256";
import date from "quasar";
import axios from 'axios';
import Countdown from "vuejs-countdown";


export default {
  name: "login",
  components:{ Countdown },
  data() {
    return {
      open:true,
      msg: "",
      logado: false,
      user: {
        login: "",
        password: "",
        errors:[],
      }
    };
  },

  methods: {
    login() {
    axios.post("", {
    body: {
            login: "",
            password: "",
            dispositivo: "",
            ip: "",
            idDispositivo: "",
            env: ""
          }
          })
          .then(response => {
              console.log(response)
          })
          .catch(error => {
               this.$q.notify({
                color: 'negative',
                position: 'top',
                message: 'Loading failed',
                icon: 'report_problem'
              })
          })
        },
    logout() {
      this.user.login = "";
      this.user.password = "";
      this.logado = false;
      this.msg = "";
    },
  }
};
</script>