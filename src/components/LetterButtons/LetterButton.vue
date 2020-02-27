<template>
  <div class="letter-button">
    <md-button class="md-dense md-icon-button md-raised" @click="clickCallback(letter)">
      <small>{{ letter }}</small>
    </md-button>
  </div>
</template>

<script>
export default {
  name: 'LetterButton',
  components: {
  },
  props: {
    letter: {
      type: String,
      required: true,
      default: '!'
    },
    clickCallback: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
