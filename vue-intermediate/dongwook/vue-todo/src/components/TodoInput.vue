<template>
  <div class="inputBox">
    <input type = "text" v-model="newTodoItem" v-on:@keyup.enter="addTodo">
    <span class="addContainer">
        <i class="fas fa-plus addBtn" v-on:click="addTodo"></i>
    </span>

    <alert-modal v-if="showModal" @close="showModal = false">
       <template v-slot:header>
            custom header
       </template>
    </alert-modal>
  </div>
</template>

<script>

import AlertModal from './common/AlertModal.vue'
export default {
    data: function(){
        return{
            newTodoItem: "",
            showModal: false
        }
    },
    methods: {
        addTodo: function() {
            console.log(this.newTodoItem);
            //저장
            if (this.newTodoItem !==''){
                this.$emit('addTodoItem',this.newTodoItem);
                this.clearInput();
            } else {
                // alert("type sth");
                this.showModal = !this.showModal;
            }
        },
        clearInput: function() {
            this.newTodoItem = '';
        }
    },
    components: {
        AlertModal: AlertModal
    }
}
</script>

<style scoped>
    input:focus {
        outline: none;
    }
    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }
    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addBtn {
        color:white;
        vertical-align: middle;
    }
</style>