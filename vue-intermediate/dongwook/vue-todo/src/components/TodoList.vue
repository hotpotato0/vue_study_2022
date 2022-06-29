<template>
  <div>
    <ul>
        <li v-for="{todoItem, index} in todoItems" v-bind:key="todoItem" class="shadow">
            <i class="checkBtn fas fa-check" v-on:click="toggleComplete"></i>
            {{todoItem}}
            <span class="removeBtn" v-on:click="removeTodo(todoItem,index)">
                <i class="fas fa-trash-alt"></i>
            </span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
            todoItems: []
        }
    },
    methods: {
        removeTodo: function(todoItem, index) {
            console.log("지우기");
            console.log(todoItem);
            console.log(index);
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index,1);
        },
        toggleComplete: function() {

        }
    },
    created: function(){
        console.log('created');

        if( localStorage.length > 0) {
            for(var i=0; i< localStorage.length; i++){
                this.todoItems.push(localStorage.key(i));
            }
        }
    }
}
</script>

<style>
    
</style>