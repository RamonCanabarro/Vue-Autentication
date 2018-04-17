<template>
  <div>
    <div v-if="$q.platform.is.ios">
      // Gets rendered only on iOS platform.
    </div>
  </div>
</template>

<script>
// not available here outside
// of the export

export default {
  methods: {
    show () {
      // prints out Quasar version
      console.log(this.$q.version)
    }
  }
}
</script>