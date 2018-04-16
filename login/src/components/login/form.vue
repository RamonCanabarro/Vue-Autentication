<script>
import moment from "moment";
export default {
  name: "login",
  data() {
    return {
      user: {
        medidor: null,
        password: null,
        data: moment().format("DD/MM/YYYY")
      }
    };
  },

  methods: {
    handleSubmit: function(e) {
      e.preventDefault();
      this.$auth.login({
        params: { auth: this.user },
        success: function() {
          console.log("Usuário logado com sucesso.");
        },
        error: function() {
          console.log("Usuário e/ou senha inválidos.");
        },
        rememberMe: true,
        redirect: "/signup"
      });
    }
  }
};
</script>
<template>
  <form v-on:submit="handleSubmit($event)">
    <input class="my-input" type="text" v-model="user.medidor" placeholder="Medidor">
    <input class="my-input" type="password" v-model="user.senha" placeholder="******">
    <input class="my-input" type="text" v-model="user.data" disabled>
    <button class="primary my-button">Entrar</button>  
  </form>
</template>
<style>
.my-input {
  width: 75%;
  margin-bottom: 30px;
}
.my-button {
  width: 75%;
}
</style>