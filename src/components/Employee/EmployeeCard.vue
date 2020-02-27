<template>
  <div class="employee-card">
    <md-card>
      <md-card-area md-inset>
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{ firstName }} "{{ nickName }}" {{ lastName }}</div>
            <div class="md-subhead">{{ title }}</div>
            <div class="md-body-1">{{ email }}</div>
            <div class="md-body-1">{{ phone }}</div>
          </md-card-header-text>

          <md-card-media>
            <img :src="image" :alt="fullName">
          </md-card-media>
        </md-card-header>
      </md-card-area>

      <md-card-content>
        <div v-if="!isPunchedIn">
          <md-content class="md-accent">Employee is punched out</md-content>
        </div>
        <div v-if="isPunchedIn">
          <md-content class="md-primary">Employee is punched in</md-content>
        </div>
      </md-card-content>

      <md-card-actions>
        <md-button class="md-primary" @click="punchInCallback">Punch In</md-button>
        <md-button class="md-accent" @click="punchOutCallback">Punch Out</md-button>
        <md-button class="" @click="cancelCallback">Cancel</md-button>
      </md-card-actions>

    </md-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'EmployeeCard',
  components: {
  },
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'getEmployeeById',
      'getEmployeePunchStatusById'
    ]),
    employee() {
      return this.getEmployeeById(parseInt(this.id));
    },
    isPunchedIn() {
      return this.getEmployeePunchStatusById(parseInt(this.id));
    },
    fullName() {
      return `${this.employee.firstName} ${this.employee.lastName}`;
    },
    firstName() {
      return this.employee.firstName;
    },
    lastName() {
      return this.employee.lastName;
    },
    nickName() {
      return this.employee.nickName;
    },
    email() {
      return this.employee.email;
    },
    phone() {
      return this.employee.phone;
    },
    title() {
      return this.employee.title;
    },
    image() {
      return this.employee.image;
    }
  },
  methods: {
    cancelCallback() {
      this.$router.push({ path: '/' });
    },
    punchInCallback() {
      this.$store.dispatch('punchInById', parseInt(this.id));
      this.$root.$emit('send-notification', `${this.firstName} has punched in.`);
      this.$router.push({ path: '/' });
    },
    punchOutCallback() {
      this.$store.dispatch('punchOutById', parseInt(this.id));
      this.$root.$emit('send-notification', `${this.firstName} has punched out.`);
      this.$router.push({ path: '/' });
    }
  }
}
</script>

<style scoped>
</style>
