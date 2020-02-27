export default {
  state: [{
      id: 1234,
      firstName: 'Chris',
      lastName: 'Grimmett',
      nickName: 'Crispy',
      title: 'Technical Artist',
      email: 'chris@grimtech.net',
      image: 'https://grimtech.net/wp-content/uploads/2020/02/bald-feb18-2020.png',
      phone: '123-123-1234',
      punchCard: [
        { time: 1582841104130, direction: 'in' }
      ]
    }, {
      id: 87487,
      firstName: 'Steve',
      lastName: 'Sanchez',
      nickName: 'Steezy',
      title: 'CEO',
      email: 'steve@example.com',
      image: 'https://placekitten.com/100/100',
      phone: '123-123-1234',
      punchCard: [
        { time: 1582841104130, direction: 'out' }
      ]
    }
  ],
  getters: {
    getEmployeeById: (state) => (id) => {
      return state.find((employee) => employee.id === id);
    },
    getEmployeeIndexById: (state) => (id) => {
      return state.map((e) => e.id ).indexOf(id);
    },
    getEmployeePunchStatusById: (state, getters) => (id) => {
      let e = getters.getEmployeeById(id);
      let latestPunch = e.punchCard[e.punchCard.length-1];
      if (latestPunch.direction === 'in') return true; else false;
    }
  },
  mutations: {
    punchIn(state, empIndex) {
      let punch = {
        time: Date.now(),
        direction: 'in'
      };
      state[empIndex].punchCard.push(punch);
    },
    punchOut(state, empIndex) {
      let punch = {
        time: Date.now(),
        direction: 'out'
      };
      state[empIndex].punchCard.push(punch);
    }
  },
  actions: {
    punchInById({commit, getters}, id) {
      let employeeIndex = getters.getEmployeeIndexById(id);
      commit('punchIn', employeeIndex)
    },
    punchOutById({commit, getters}, id) {
      let employeeIndex = getters.getEmployeeIndexById(id);
      commit('punchOut', employeeIndex)
    },
    fetchQueue({ commit, state }) {
      return new Promise((resolve, reject) => {
        let audioId = state.queue[0];
        commit('shiftQueue');
        if (typeof audioId === 'undefined') reject(audioId);
        resolve(audioId);
      });
    }
  }
}
