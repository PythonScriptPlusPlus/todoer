import { createStore } from 'vuex';

export default createStore({
  state: {
    tasks: [],
  },
  mutations: {
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    updateTask(state, updatedTask) {
      // eslint-disable-next-line
      for (const category in state.tasks) {
        const taskIndex = state.tasks[category].findIndex((task) => task.text === updatedTask.text);
        if (taskIndex !== -1) {
          state.tasks[category][taskIndex] = updatedTask;
          break;
        }
      }
    },
  },
  actions: {
    fetchTasks({ commit }) {
      fetch('http://127.0.0.1:5000/tasks')
        .then((response) => response.json())
        .then((data) => {
          const tasks = data;
          commit('setTasks', tasks);
        })
        .catch((error) => console.error('Error fetching tasks:', error));
    },
  },
  getters: {
    tasks: (state) => state.tasks,
  },
});
