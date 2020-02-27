<template>
  <div class="employee-selector">
    <div class="viewport">
      <md-toolbar :md-elevation="1">
        <span class="md-title">Employee Selection</span>
      </md-toolbar>
      <LetterButtons :clickCallback="sortByLetter" />
      <EmployeeList />
    </div>
  </div>
</template>

<script>
import EmployeeList from '@/components/Employee/EmployeeList';
import LetterButtons from '@/components/LetterButtons/LetterButtons';
export default {
  name: 'EmployeeSelector',
  components: {
    LetterButtons,
    EmployeeList
  },
  data: () => ({
  }),
  methods: {
    sortByLetter(letter) {
      console.log(letter);

    }
  }
}
</script>

<style scoped>
</style>
