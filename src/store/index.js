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
      const index = state.tasks.findIndex((task) => task.text === updatedTask.text);
      if (index !== -1) {
        state.tasks[index] = updatedTask;
      }
    },
  },
  actions: {
    fetchTasks({ commit }) {
      fetch('http://127.0.0.1:5000/tasks')
        .then((response) => response.json())
        .then((data) => {
          const tasks = data.map((task) => ({
            done: task.done,
            text: task.text,
          }));
          commit('setTasks', tasks);
        })
        .catch((error) => console.error('Error fetching tasks:', error));
    },
  },
  getters: {
    tasks: (state) => state.tasks,
  },
});
