<template>
  <div class="letter-buttons">
  </div>
</template>

<script>
export default {
  name: 'LetterButtons',
  components: {
  },
  data: () => ({
    letters: [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z'
    ]
  }),
  props: {
    clickCallback: {
      type: Function,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
