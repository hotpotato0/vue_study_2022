const storage = {
    // fetch: function(){}
    fetch(){
        const arr = [];
        if(localStorage.length > 0) {
            for (let i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i) !== 'loglevel:webpack-dev-server')
                    arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
            }
        }
        return arr;
    },
}
const state = {
    todoItems: storage.fetch()
}
const getters = {
    storedTodoItems (state){
        return state.todoItems;
    }
}

const mutations ={
    removeOneItem (state, payload) {
        localStorage.removeItem(payload.todoItem.item);
        state.todoItems.splice(payload.index, 1);
    },
    addOneItem  (state, todoItem){
        // console.log("입력됨");
        const obj = {completed: false, item: todoItem};
        localStorage.setItem(todoItem, JSON.stringify(obj));
        state.todoItems.push(obj);
    },
    toggleOneItem (state, payload) {
        // console.log(todoItem, index);
        // todoItem.completed = !todoItem.completed;
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
        localStorage.removeItem(payload.todoItem.item);
        localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem))
    },
    clearAllItems (state) {
        localStorage.clear();
        state.todoItems = [];
    }

}

export  default {
    state, mutations, getters
}