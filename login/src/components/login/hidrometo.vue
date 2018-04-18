<template>
<div v-else>
    <q-card>
    <q-card-title>
      Medidor: {{user.j.relogio}} <br>
      </q-card-title>
    <q-card-separator />
    <q-card-main>
      
      </tr>
      <div>  
        <q-list class="container flex flex-center">  
        <q-collapsible icon="" label="Consumo" v-model="open">
            <p>Atual: {{user.j.atual}}</p>
            <p>Data: {{user.j.data}}</p>
            </p>Consumo de 30 dias: {{user.j.consumo30d}}</p>
        </q-collapsible>
        <q-collapsible icon="" label="Leitura">
            <p>Resultados: {{user.j.results}}</p>
            <P v-for="rows,i in user.j.rows" :key="i" >Consumo: {{rows.c1}} - {{rows.c2}} </P>
        </q-collapsible>
        <q-collapsible icon="" label="Relatório">
          <p>Período:</p>
          <p><q-btn type=buttom color="positive" @click='' value=''>24 Horas</q-btn></p>
          <p><q-btn type=buttom color="warning" @click='' value=''>7 Dias</q-btn></p>
          <p><q-btn type=buttom color="negative" @click='' value=''>30 Dias</q-btn></p>
        </q-collapsible>
      </q-list>
      </div>
    </q-card-main>
  </q-card>
      <q-btn align=left type=buttom color="negative" @click='logout' value='logout'>Sair</q-btn> <br>
      </div>
    </div>
</template>