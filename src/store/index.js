import { createStore } from 'vuex'

export default createStore({
  state: {
    todoList: []
  },
  mutations: {
    addTask(state, task) {
      state.todoList.push(task)
    },
    deleteTask(state, task) {
      state.todoList.splice(state.todoList.findIndex(elem => elem === task), 1)
    },
    deleteAllTasks(state) {
      state.todoList = []
    },
    deleteAllCompletedTasks(state) {
      state.todoList.forEach(elem => elem.completed ? this.commit('deleteTask', elem) : null)
    },
    moveTask(state, payload) {
      let currIndex = state.todoList.findIndex(elem => elem === payload.item)
      let destIndex = currIndex + payload.moveAmount

      if (destIndex >= 0 && destIndex < this.getters.getLength) {
        state.todoList.splice(destIndex, 0, state.todoList.splice(currIndex, 1)[0])
      }
    },
  },
  getters: {
    isEmpty: (state, getters) => {
      return getters.getLength === 0
    },
    getLength: state => {
      return state.todoList.length
    },
    isFirstTask: (state) => (item) => {
      return state.todoList.findIndex(elem => elem === item) === 0
    },
    isLastTask: (state, getters) => (item) => {
      return state.todoList.findIndex(elem => elem === item) === getters.getLength - 1
    }
  }
})
