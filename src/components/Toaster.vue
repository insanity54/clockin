<template>
  <div class="toaster">
    <md-snackbar :md-position="position" :md-duration="isInfinity ? Infinity : duration" :md-active.sync="showSnackbar" md-persistent>
      <span>{{ message }}</span>
      <md-button class="md-primary" @click="showSnackbar = false">Dismiss</md-button>
    </md-snackbar>
  </div>
</template>

<script>
export default {
  name: 'Toaster',
  props: {
  },
  data: function () {
    return {
      showSnackbar: false,
      duration: 4000,
      isInfinity: false,
      position: 'center',
      message: 'Default Notification'
    }
  },
  computed: {
  },
  methods: {
  },
  created: function () {
    this.$root.$on('send-notification', (msg) => {
      this.message = msg;
      this.showSnackbar = true;
    })
  },
  destroyed: function () {
    this.$root.$off('send-notification');
  }
}
</script>

<style scoped>
</style>
