import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }
    return arr;
  }
}

export const store = new Vuex.Store({
  state: {
    //headerText: "TODO it!"
    todoItems: storage.fetch()
  },
  mutations: {
    addOneItem(state, todoItem) {
      var obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      state.todoItems.push(obj);
    },
    removeOneItem: function(state, payload) {
      state.todoItems.splice(payload.index, 1);
      localStorage.removeItem(payload.todoItem.item);
    },
    toggleOneItem: function(state, payload) {
      payload.todoItem.completed = !payload.todoItem.completed;
      localStorage.removeItem(payload.todoItem.item);
      localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    },
    clearAllItems: function(state) {
      state.todoItems = [];
      localStorage.clear();
    }
  }
});