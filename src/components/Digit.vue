<template>
  <span class="digit">
    {{ number }}
  </span>
</template>

<script>
export default {
  name: 'Digit',
  components: {
  },
  props: {
    number: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
</style>
