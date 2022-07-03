<template>
    <div class="inputBox shadow">
        <!-- v-model : input에 입력된 텍스트를 바로바로 반영 -->
        <input type="text" v-model="newTodoItem">
        <!-- <button v-on:click="addTodo">add</button> -->
        <span class="addContainer" v-on:click="addTodo">
            <i class="addBtn fas fa-plus" aria-hidden="true"></i>
        </span>
        <Modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">
                <!-- AlertModal.vue 에 있는 header에 있는 내용을 재정의 할 수 있다 -->
                경고!
                <i class="closeModalBtn fas fa-times" @click="showModal = false"></i>
            </h3>
            <div slot="body">
                아무것도 입력하지 않으셨습니다.
            </div>
        </Modal>
    </div>
</template>
<script>
import AlertModal from './common/AlertModal.vue'
export default {
    data: function() {
        return {
            // 이 부분이 v-model
            newTodoItem: "" ,
            showModal: false
        }
    },
    methods: {
        // addTodo가 v-on 으로 올라간다
        addTodo: function() {
            // var obj = { completed: false, item: this.newTodoItem };
            // // this: todointputitem을 말한다
            // // console.log(this.newTodoItem);
            // // 저장하는 로직
            // // localStorage.setItem(this.newTodoItem, obj);
            // localStorage.setItem(this.newTodoItem, JSON.stringify(obj));
            // // 객채(obj) 스트링으로 변환해줌
            // // F12 > 애플리케이션> 로컬스토리지 > 키/값에 저장되는 것 확인할 수 있다.
            // // this.newTodoItem = '';
            // // clear을 분리
            // this.clearInput();
            if (this.newTodoItem !== '') {
                // this.#emit('이벤트이름',인자1,인자1...)
                this.$emit('addTodoItem',this.newTodoItem);
                this.clearInput();
            }  else {
                this.showModal = !this.showModal;
            }
        },
        clearInput: function() {
            this.newTodoItem = '';
        }
    }, 
    components: {
        Modal: AlertModal
    }
}
</script>

<style scoped>
input:focus {
    online: none;
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
    color: white;
    vertical-align: middle;
}
.closeModalBtn {
    color: #42b983;
}
</style>