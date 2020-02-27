<template>
  <md-content class="employee-list md-layout-item">
    <md-list class="md-scrollbar">
      <EmployeeListItem v-for="employee in employees" :employee="employee" :key="employee.id" :clickCallback="navigateToEmployee" />
    </md-list>
  </md-content>
</template>

<script>
import EmployeeListItem from '@/components/Employee/EmployeeListItem';
import { mapState } from 'vuex';
export default {
  name: 'EmployeeList',
  components: {
    EmployeeListItem
  },
  data: () => ({
  }),
  computed: {
    ...mapState(['employees'])
  },
  methods: {
    navigateToEmployee (employeeId) {
      this.$router.push(`/employee/${employeeId}`);
    }
  }
}
</script>

<style scoped>

</style>
