<template >
  <q-layout view="lHh Lpr lFf">

    <q-page-container>      
      <div   class="container flex-center">
	<q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-toolbar-title>
          <div>{{usuario.nome}}</div>
         </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-card>
    <q-card-title>
      Medidor: <br>
      </q-card-title>
    <q-card-separator />
    <q-card-main>
      
      </tr>
      <div class="container">  
        <q-list class=" flex flex-center">  
        <q-collapsible icon="" label="Consumo" v-model="open">
            <q-btn @click='getConsumo'></q-btn>
            <p>Atual:{{consumos.consumo24h}}</p>
            <p>Data:{{consumos.hora}}</p>
            <p>Consumo de 30 dias:{{consumos.consumo30d}}</p>
            <p>Valor:{{consumos.valor}}</p>
        </q-collapsible>
        <q-collapsible icon="" label="Leitura">
            <q-btn @click='getLeitura'></q-btn>
            <div v-for="lista of this.leitura">
            <P>
            	Registro:{{lista.idRegistro}}
        	   <p>Data: {{lista.data}}</p>
        	   <p>Valor: {{lista.valor}}</p>  </P>
        	   </div>
        </q-collapsible>
        <q-collapsible icon="" label="Relatório">
          <p>Período:</p>
          <q-btn type=buttom color="positive" @click='get24h' value='get24h'>24 Horas</q-btn>
          <q-btn type=buttom color="warning" @click='' value=''>7 Dias</q-btn>
          <q-btn type=buttom color="negative" @click='' value=''>30 Dias</q-btn>
        </q-collapsible>
      </q-list>
      </div>
    </q-card-main>
  </q-card>
      <q-btn align=left type=buttom color="negative" @click='logout' value='logout'>Sair</q-btn> <br>
      </div>
    </div>
    <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scopped>
.container {
  padding: 50px;
}
.colapsible{
	witdh:10%;
}

</style>

<script>
import vue from "vue";
import axios from 'axios';

	    var config = {
		headers : {'Authorization': "bearer " + localStorage.getItem('user-token')}
		}

export default {
  name: "login",
  data() {
    return {
    	usuario:"",
		consumos:"",
		leitura:"",
      	open:true,
      	array:[]

    };
	},
	created(){
		this.getConsumo()
		this.getUsuario()
		this.get30d()
		this.get24h()
		this.getLeitura()
	},
  methods: {
		
   getConsumo() {
	       axios.get("link" , config)
	          .then(response => {
	            this.consumos = response.data[0]
	            conosle.log(this.consumos)
	            })
	          .catch(error => {
	               this.$q.notify({
	                color: 'negative',
	                position: 'top',
	                message: "Não há consumo",
	                icon: 'report_problem'
	              })
	             localStorage.removeItem('user-token')
	          })
	        },
			getUsuario() {
			    	console.log("Cheguei")
			       axios.get("link" , config)
			          .then(response => {
			            this.usuario = response.data.usuario
			            })
			          .catch(error => {
			               this.$q.notify({
			                color: 'negative',
			                position: 'top',
			                message: "error",
			                icon: 'report_problem'
			              })
			             localStorage.removeItem('user-token')
			          })
			        },
	        getLeitura() {
	       axios.get("link" , config)
	          .then(response => {
	            this.leitura = response.data
	            for (var i = 0; i <= 20; i++) {
	            	this.leitura[i]
	            console.log(this.leitura[i])
	            }
	            })
	          .catch(error => {
	               this.$q.notify({
	                color: 'negative',
	                position: 'top',
	                message: "Não há leituras",
	                icon: 'report_problem'
	              })
	             localStorage.removeItem('user-token')
	          })
	        },
	        get30d() {
	       axios.get("link" , config)
	          .then(response => {
	            this.leitura = response.data[0]
	            console.log(this.leitura)
	            })
	          .catch(error => {
	               this.$q.notify({
	                color: 'negative',
	                position: 'top',
	                message: "Não há leituras",
	                icon: 'report_problem'
	              })
	             localStorage.removeItem('user-token')
	          })
	        },
	        get24h() {
	       axios.get("link" , config)
	          .then(response => {
	            this.leitura = response.data[0]

	            console.log(this.leitura)
	            })
	          .catch(error => {
	               this.$q.notify({
	                color: 'negative',
	                position: 'top',
	                message: "Não há leituras",
	                icon: 'report_problem'
	              })
	             localStorage.removeItem('user-token')
	          })
	        },
	        get7d() {
	       axios.get("link" , config)
	          .then(response => {
	            this.leitura = response.data[0]
	            console.log(this.leitura)
	            })
	          .catch(error => {
	               this.$q.notify({
	                color: 'negative',
	                position: 'top',
	                message: "Não há leituras",
	                icon: 'report_problem'
	              })
	             localStorage.removeItem('user-token')
	          })
	        },
  
	    logout() {
	      localStorage.removeItem('user-token')
	      this.$router.push('login') 
	    },
  }
};

</script>