import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters'
// import * as mutations from './mutations'
import todoApp from './modules/todoApp'

Vue.use(Vuex);
// use: vue의 플러그인이라는 기능
// global functionality 를 추가하고 싶을 때 이용

// const storage = {
//     fetch() {
//         const arr = [];
//         if (localStorage.length > 0) {
//         for (var i = 0; i < localStorage.length; i++) {
//             if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
//             arr.push((JSON.parse(localStorage.getItem(localStorage.key(i)))));
//             }
//         }
//         }
//         return arr;
//     }
// };



export const store = new Vuex.Store({
    modules: {
        todoApp
    }
    // state: {
    //     todoItems: storage.fetch()
    // },
    // // getters: getters, 
    // getters, 
    // // {
    // //     storedTodoItems(state) {
    // //         return state.todoItems;
    // //     }
    // // },
    // // mutations: mutations
    // mutations
    // // {
    // //     addOneItem(state, todoItem) {
    // //         const obj = { completed: false, item: todoItem };
    // //         localStorage.setItem(todoItem, JSON.stringify(obj));
    // //         state.todoItems.push(obj); // state를 통해서 인자에 접근한다.
    // //     },
    // //     removeOneItem(state, payload) {
    // //         localStorage.removeItem(payload.todoItem.item);
    // //         state.todoItems.splice(payload.index, 1);
    // //     },
    // //     toggleOneItem(state,payload) {
    // //         state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    // //         localStorage.removeItem(payload.todoItem, payload.index);
    // //         localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
    // //     },
    // //     clearAllItem(state) {
    // //         localStorage.clear();
    // //         state.todoItems = [];
    // //     }       
    // // }
});