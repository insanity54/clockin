<template>
  <md-list-item>
    <md-avatar>
      <img :src="image" :alt="fullName">
    </md-avatar>

    <span class="md-list-item-text">{{ fullName }}</span>

    <md-button class="md-icon-button md-list-action" @click="clickCallback(id)">
      <md-icon class="md-primary">arrow_forward_ios</md-icon>
    </md-button>

  </md-list-item>
</template>

<script>
export default {
  name: 'EmployeeListItem',
  components: {
  },
  props: {
    employee: {
      type: Object,
      required: true
    },
    clickCallback: {
      type: Function,
      required: true
    }
  },
  computed: {
    fullName() {
      return `${this.employee.firstName} ${this.employee.lastName}`;
    },
    title() {
      return this.employee.title;
    },
    image() {
      return this.employee.image;
    },
    id () {
      return this.employee.id;
    }
  }
}
</script>

<style scoped>
</style>
