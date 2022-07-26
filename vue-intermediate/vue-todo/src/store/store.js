// // import Vue from 'vue'
// // import Vuex from 'vuex'
// //
// //
// // //.use() 플러그인 기능 -> 전역으로 사용하기위해 글로벌 funtionality를 추가하기 위함
// // Vue.use(Vuex);
// //
// //
// // export const store = new Vuex.Store({
// //     state: {
// //         headerText: 'Todo it!'
// //         // message: 'hello',
// //         // num: 3
// //     }
// //     //
// // });
//
// import { createApp } from 'vue'
// import { createStore } from 'vuex'
//
// // Create a new store instance.
// const store = createStore({
//     state () {
//         return {
//             count: 0
//         }
//     },
//     mutations: {
//         increment (state) {
//             state.count++
//         }
//     }
// })
//
// const app = createApp({ /* your root component */ })
//
// // Install the store instance as a plugin
// app.use(store)
// [store > store.js 설명]
// 1. store : 모든 컴포넌트가 공유할 수 있는 싱글톤 방식의 데이터 저장소입니다
// 2. main.js 파일에서 시작점 진입 시 등록 필요

// [vuex import 수행 실시]
import { createStore } from 'vuex';
import todoApp from './modules/todoApp'
// import * as getters from './getters'
// import * as mutations from './mutations'

// const storage = {
//     // fetch: function(){}
//     fetch(){
//         const arr = [];
//         if(localStorage.length > 0) {
//             for (let i = 0; i < localStorage.length; i++) {
//                 if (localStorage.key(i) !== 'loglevel:webpack-dev-server')
//                     arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
//             }
//         }
//         return arr;
//     },
// }
// [store 데이터 설정 실시]
const store = createStore ({
    modules: {
        todoApp
    },
    // state: { // [변수들의 집합]
    //     // headerText: "ToDo Header입니다!",
    //     todoItems: storage.fetch()
    // },
    // getters,
    // mutations,
    // getters: {
    //   storedTodoItems(state){
    //       return state.todoItems;
    //   }
    // },
    // getters: { // [state의 변수들을 get 호출]
    //     getUserInfo(state){
    //         return "이름 : " + state.name;
    //     }
    // },
    // mutations: { // [변수들을 조작하는 함수들]
    //     // setUserInfo(state, name){
    //     //     state.name = name;
    //     // },
    //     removeOneItem (state, payload) {
    //         localStorage.removeItem(payload.todoItem.item);
    //         state.todoItems.splice(payload.index, 1);
    //     },
    //     addTodoItem (state, todoItem) {
    //         // console.log("입력됨");
    //         const obj = {completed: false, item: todoItem};
    //         localStorage.setItem(todoItem, JSON.stringify(obj));
    //         state.todoItems.push(obj);
    //     },
    //     toggleOneItem (state, payload) {
    //         // console.log(todoItem, index);
    //         // todoItem.completed = !todoItem.completed;
    //         state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
    //         localStorage.removeItem(payload.todoItem.item);
    //         localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
    //     },
    //     clearAllItems (state) {
    //         localStorage.clear();
    //         state.todoItems = [];
    //     }
    // },
    // actions: { // [비동기 처리를 하는 함수들]
    // },
});

export default store;