<template>
  <div>
    <ul>
        <li v-for="{todoItem, index} in propsdata" v-bind:key="todoItem.item" class="shadow">
            <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)"></i>
            {{todoItem.item}}
            <span class="removeBtn" v-on:click="removeTodo(todoItem,index)">
                <i class="fas fa-trash-alt"></i>
            </span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    props: ['propsdata'],
    methods: {
        removeTodo: function(todoItem, index) {
            this.$emit('removeItem',todoItem,index);
        },
        toggleComplete: function(todoItem, index) {
          this.$emit('toggleItem',todoItem, index);
        }
    },
}
</script>

<style>
    
</style>