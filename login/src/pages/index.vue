<template>
  <div>
    <div v-if="$q.platform.is.ios">
    </div>
  </div>
</template>

<script>
// Gets rendered only on iOS platform.
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