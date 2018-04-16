<script>
import moment from "moment";
import sha256 from "js-sha256";

export default {
  name: "login",
  data() {
    return {
      msg: "",
      logado: false,
      user: {
        medidor: "",
        senha: "",
        data: moment().format("DD/MM/YYYY"),
        j: {
          relogio: "0000228",
          token: "asjdhaslkjdhaskdjhaskdjhkjhasd",
          usuario: {
            nome: 123,
            email: "bira",
            nascimento: "01/01/2018",
            relogio: "0000228"
          },

          relogio: "0000228",
          atual: "5633.6000",
          data: "13/04/2018 04:00:00",
          consumo24h: "sem registro",
          consumo30d: "5633.6",
          success: true,
          results: 11221,
          rows: [
            { c0: "32868", c1: "5633.6000", c2: "13/04/2018 04:00:00" },
            { c0: "32867", c1: "5633.0000", c2: "13/04/2018 03:00:00" },
            { c0: "32866", c1: "5632.1900", c2: "13/04/2018 02:00:00" },
            { c0: "32865", c1: "5631.8700", c2: "13/04/2018 01:00:00" },
            { c0: "32864", c1: "5631.4500", c2: "13/04/2018 00:00:00" },
            { c0: "32863", c1: "5631.1700", c2: "12/04/2018 23:00:00" },
            { c0: "32862", c1: "5630.3400", c2: "12/04/2018 22:00:00" },
            { c0: "32861", c1: "5629.9900", c2: "12/04/2018 21:00:00" },
            { c0: "32860", c1: "5629.3200", c2: "12/04/2018 20:00:00" },
            { c0: "32859", c1: "5628.3600", c2: "12/04/2018 19:00:00" },
            { c0: "32858", c1: "5627.8700", c2: "12/04/2018 18:00:00" },
            { c0: "32857", c1: "5627.0800", c2: "12/04/2018 17:00:00" },
            { c0: "32856", c1: "5626.4200", c2: "12/04/2018 16:00:00" },
            { c0: "32855", c1: "5625.8000", c2: "12/04/2018 15:00:00" },
            { c0: "32854", c1: "5625.1300", c2: "12/04/2018 14:00:00" }
          ],
          relogio: "0000228",
          periodo: "7 dias",
          inicio: "",
          fim: ""
        }
      }
    };
  },

  methods: {
    login() {
      if (
        this.user.medidor + this.user.senha ===
        this.user.j.relogio + this.user.j.relogio
      ) {
        this.logado = true;
        this.senha = sha256(this.senha);
        console.log(this.senha);
      } else {
        this.msg = "medidor ou senha incorreta";
      }
    },
    logout() {
      this.user.medidor = "";
      this.user.senha = "";
      this.logado = false;
      this.msg = "";
    }
  }
};
</script>
<template>
<div>
  <div v-if = '!logado'>
    <q-card>
    <q-card-title>
      <img align=right src="statics/caesb.png">
      <input class="my-input" type="text" v-model="user.medidor" placeholder="Medidor">
      <input class="my-input criptografa" type="password" v-model="user.senha" placeholder="******">
      <input class="my-input" type="text" v-model="user.data" disabled>
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

    <div v-else>
      <q-card>
    <q-card-title>
      Nome: <b>{{user.j.usuario.nome}}</b> <br>
      <p>Medidor: {{user.j.relogio}}</p> <br>
      </q-card-title>
    <q-card-separator />
    <q-card-main>
      <div>
        <q-list class="container flex flex-center">
        <q-collapsible icon="" label="Consumo">
            <p>Atual: {{user.j.atual}}</p>
            <p>Data: {{user.j.data}}</p>
            <p>Consumo de 24 horas: {{user.j.consumo24h}}</p>  
            </p>Consumo de 30 dias: {{user.j.consumo30d}}</p>
        </q-collapsible>
        <q-collapsible icon="" label="Leitura">
            <p>Resultados: {{user.j.results}}</p>
            <P v-for="rows,i in user.j.rows" :key="i" >Consumo: {{rows.c1}} - {{rows.c2}} </P>
        </q-collapsible>
        <q-collapsible icon="" label="Relatório">
          <p>Período: {{user.j.periodo}}</p>
          <p>Início: {{user.j.inicio}}</p>
          <p>Fim: {{user.j.fim}}</p>
        </q-collapsible>
      </q-list>
      </div>
    </q-card-main>
  </q-card>
      <q-btn align=left type=buttom color="negative" @click='logout' value='logout'>Logout</q-btn> <br>    
      </div>
    </div>

</div>
</template>
<style>
.my-input {
  width: 50%;
  margin-bottom: 50px;
}
.my-button {
  width: 50%;
}
</style>