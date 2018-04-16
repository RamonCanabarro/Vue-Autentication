<script>
import ccForm from '../components/login/form.vue'
import ccList from '../components/login/list.vue'
export default {
  components: {ccForm, ccList}
};
</script>
<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="primary"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >
        <q-toolbar-title>
          SmartGrid
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

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
 