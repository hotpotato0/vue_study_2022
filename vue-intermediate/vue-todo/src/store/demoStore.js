
// [vuex import 수행 실시]
import { createStore } from 'vuex';

// [store 데이터 설정 실시]
const store = createStore ({
    state: { // [변수들의 집합]
        price: 100
    },
    getters: {
        originalPrice(state){
            return state.price;
        },
        doublePrice(state){
            return state.price*2;
        },
        triplePrice(state){
            return state.price*3;
        },
    }
});

export default store;