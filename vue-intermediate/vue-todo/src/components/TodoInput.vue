<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">

<!--    <button v-on:click="addTodo">add</button>-->
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn"></i>
<!--      <i icon="fa-solid fa-plus addBtn" />-->
    </span>
    <Modal v-if="showModal" @close="showModal = false">
<!--      <custom v-slot="header">-->
        <span>
        경고
        <i class="closeModalBtn fa fa-times"
           aria-hidden="true"
           @click="showModal = false">
        </i>
<!--      </custom>-->
      </span>
      <span>
        할 일을 입력하세요.
<!--      <p slot="body">할 일을 입력하세요.</p>-->
        </span>
    </Modal>
  </div>
</template>

<script>
import Modal from './common/CustomModal.vue'
export default {
  data() {
    return{
      newTodoItem: "",
      showModal: false
    }
  },
  methods: {
    addTodo() {
      // console.log(this.newTodoItem);
      // 저장하는 로직 수행 후 비우면 됨
      if( this.newTodoItem !== ''){
        // this.#emit('이벤트 이름', 인자1, 인자2, ...);
        this.$emit('addTodoItem', this.newTodoItem);
        this.clearInput();
        // this.newTodoItem = '';
      } else{
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';

    }
  },
  components: {
    Modal
  }
}
</script>

<style scoped>
input:focus {
  outline: none;
}

.inputBox{
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}

.inputBox input{
  border-style: none;
  font-size: 0.9rem;
}

.addContainer{
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}

.addBtn {
  color: white;
  vertical-align: middle;

}
</style>