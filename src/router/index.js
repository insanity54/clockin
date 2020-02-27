import App from '@/App';
import Clock from '@/components/Clock';
import EmployeeList from '@/components/Employee/EmployeeList';
import EmployeeCard from '@/components/Employee/EmployeeCard';
import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    components: {
      default: App,
      clock: Clock,
      rightPanel: EmployeeList
    }
  }, {
    path: '/employee/:id',
    components: {
      default: App,
      clock: Clock,
      rightPanel: EmployeeCard
    },
    props: {
      rightPanel: true
    }
  }]
});
