<script>
import ccForm from '../components/login/form.vue'
export default {
  components: {ccForm},
};

</script>
<template>
  <q-layout view="lHh Lpr lFf">

    <q-page-container>
      <div>
        <ccForm class="container flex flex-center">
        </ccForm>

      </div>
    <router-view />
    </q-page-container>
  </q-layout>
</template>

<style scopped>
.container {
  padding: 20px;
}

</style>
 