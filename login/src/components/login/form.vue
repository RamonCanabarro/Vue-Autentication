<template>
<div>
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-toolbar-title>
          <div >SmartGrid</div>
          </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

  <div>
    <q-card inline >
      <q-card-media>
      <img src="statics/caesb.png">
      </q-card-media>
    <q-card-separator  class="my-input" /> <br>
    <q-card-title>
      <q-input class="my-input" v-model="user.medidor" placeholder="login" />
      <q-input class="my-input" type="password" v-model="user.senha" placeholder="******" />
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
import vuex from "vuex";
import vue from "vue";
import moment from "moment";
import sha256 from "js-sha256";
import date from "quasar";
import axios from 'axios';

export default {
  name: "login",
  data() {
    return {
      open:true,
      msg: "",
      user: {
        medidor: "",
        senha: "",
        errors:[]
      }
    };
  },
  methods: {
    login() {
      axios.post("", {
            login: this.user.medidor,
            password: sha256(this.user.senha),
            dispositivo: "0073",
            ip: "192.168.0.15",
            idDispositivo: "XZXDSDSDSDAA",
            env: "p"
          })
          .then(response => {
            console.log(response)
            const token = response.data.token
            localStorage.setItem('user-token', token) 
            this.$router.push('index')
            })
          .catch(error => {
               this.$q.notify({
                color: 'negative',
                position: 'top',
                message: "Campos inválidos",
                icon: 'report_problem'
              })
             localStorage.removeItem('user-token')
          })
        },
    logout() {
      this.user.login = "";
      this.user.password = "";
      this.msg = "";
    },
  }
};
</script>