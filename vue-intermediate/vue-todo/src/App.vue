<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <!-- <TodoInput v-on:하위 컴포넌트에서 발생시킨 이벤트 이름="현재 컴포넌트의 메서드 명"></TodoInput> -->
    <TodoInput v-on:addTodoItem="addOneItem"></TodoInput>
    <!-- <TodoList v-bind: 내려보낼 프롭스 속성 이름 = "현재 위치의 컴포넌트 데이터 속성"></TodoList> -->
    <TodoList v-bind:propsdata="todoItems" v-on:removeItem="removeOneItem" v-on:toggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:clearAll="clearAllItem"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

// var my_cmp = {
//   template: '<div>my componet</div>'
// };

// new Vue({
//   el: '',
//   components: {
//     'my-cmp' : my_cmp
//   }
// });

export default {
  data: function () {
    return {
      todoItems: []
    }
  },
  methods: {
    addOneItem: function(todoItem) {
      var obj = { completed: false, item: todoItem };
      localStorage.setItem(todoItem, JSON.stringify(obj));
      // 현재 화면에 있는 목록과 동기화됨
      this.todoItems.push(obj);
    },
    removeOneItem: function (todoItem, index) {
      // console.log(todoItem,index);
      localStorage.removeItem(todoItem.item);
      // 특정 인덱스에서 하나 지울 수 있다
      this.todoItems.splice(index, 1);
    },
    toggleOneItem: function (todoItem, index) {
      // todoItem.completed = !todoItem.completed;
      // 컴포넌트간의 경계를 명확하게 바꾸자
      this.todoItems[index].completed = !this.todoItems[index].completed;
      // 로컬 스토리지에 데이터를 갱신하는 부분
      localStorage.removeItem(todoItem, index);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItem: function() {
      localStorage.clear();
      this.todoItems = [];
    }
  },
  created: function () {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push((JSON.parse(localStorage.getItem(localStorage.key(i)))));
          // this.todoItems.push(localStorage.key(i));
          // console.log(localStorage.key(i))
        }
      }
    }
  },
  components: {
    // 컴포넌트 태그명 : 컴포넌트 내용
    'TodoHeader': TodoHeader,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter

  }
}
</script>

<style>
  body{
   text-align: center;
   background-color: #F6F6F6; 
  }
  input {
    border-style: groove;
    widows: 200px;
  }
  button {
    border-style: groove;
  }
  .shadow{
    box-shadow: 5px 10px 10px rgba(0,0,0,0,0.03);
  }
</style>
