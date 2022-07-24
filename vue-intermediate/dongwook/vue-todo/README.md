### 각 속성들을 더 쉽게 사용 하는 방법 -> Helper

* State -> mapState
* getters -> mapGetters
* mutations -> mapMutations
* actions -> mapActions

### 헬퍼의 사용범

## 헬퍼를 사용하고자 하는 vue 파일에서 헬퍼를 로딩

* import { mapState } from 'vuex'
* import { mapGetters } from 'vuex'
* import { mapMutations } from 'vuex'
* import { mapActions } from 'vuex'

this.$store.state.변수명 -> 컴포넌트가 많아질수록 추척이 어려움. 
export default{
	computed() { ...mapStore(['num']), ...mapGetters(['countedNum']) },
  	methods : { ...mapMutations(['clickBtn']), ...mapActions(['asyncClickBtn']) }
}

* ... => ES6 Object Spread Operator (스프레드 연산자)

(https://paperblock.tistory.com/62)



## mapState

```js
// App.vue
import { mapState } from 'vuex'
computed(){
	...mapState(['num'])
  // num() { return this.$store.state.num; }
}
// store.js
state: {
	num: 10
}
<!-- <p>{{this.$store.state.num }} </p> -->
<p>{{this.num}}</p>
```


## mapGetters

```js
// App.vue
import { mapGetters } from 'vuex'
computed(){
	...mapGetters(['reverseMessage'])
}
// store.js
getters: {
	reverseMessage(state){
    	return state.msg.split('').reverse().join('');
    }
}
<!-- <p>{{ this.$store.getters.reverseMessage }}</p> -->
<p>{{this.reverseMessage}}</p>

```

## Object Spread Operator 쓰는 이유 :
싱글파일 컴포넌트 구조의 각 컴포넌트에서 정의된 computed 속성이 있을 것이고,
거기에 Vuex store에 정의된 getters를 사용해야하는 상황이 있을 것이다.

이때, ... 연산자를 통해 mapGetters를 연결해줘야 컴포넌트에서 computed 속성과 Vuex의 store에 등록된 getters를 함께 사용할 수 있다.


## mapMutations

```js
// App.vue
import { mapMutations } from 'vuex'
methods: 
	...mapMutations(['clickBtn']),
    authLogin(),
    displayTable() {}
}
// store.js
mutations: {
	clickBtn(state){
    	alert(state.msg);
    }
}
<button @click="clickBtn">popup message</button>
```

## mapActions

```js
// App.vue
import { mapActions } from 'vuex'
methods: 
	...mapActions(['delayClickBtn']),
}
// store.js
actions: {
	delayClickBtn(context){
      	setTimeout(() => context.commit('clickBtn', 2000);
    }
}
<button @click="delayClickBtn"> delay popup message</button>
```

## helper의 유연한 문법
* vuex에 선언한 속성을 그대로 컴포넌트에 연결하는 문법

```js
// 배열 리터럴
...mapMutations([
  // 'clickBtn': clickBtn -> ES6 키와 속성값이 같은 경우 축약형으로 됨.
	'clickBtn', 
   // addNumber(인자) mapMutataions의 좋은 점이 따로 인자 설정을 안해도 됨.
  	'addNumber', 
])
```

* vuex에 선언한 속성을 컴포넌트의 특정 메서드에다가 연결하는 문법

컴포넌트에서 사용하는 메서드와 Store의 Mutation 명이 다를 경우 객체 리터럴을 사용해서 등록할 수 있다.

```js
// 객체 리터럴
...mapMutations([
   // 컴포넌트 메서드 명 : Store의 Mutataion명
	popupMsg : 'clickBtn' 
])
```
## Helper 함수가 주는 편안함

* demoStore.js

``` js
import Vue from 'vue';
import Vuex from 'vuex';​

Vue.use(Vuex);​
export const store = new Vuex.store({    
    state: {        
        price: 100    
        },    
        getters: {        
            originalPrice(state) {
                 return state.price;        
            },        
            doublePrice(state) {            
                return state.price * 2;        
            },        
            triplePrice(state) {            
                return state.price * 3;        
            }    
        }
 });
```

* 헬퍼를 사용하지 않고 Vuex를 적용한 컴포넌트 - Demo.vue

```js
<template>    
<div id="root">        
<p>{{ originalPrice }}</p>  //100        
<p>{{ doublePrice }}</p>    //200        
<p>{{ triplePrice }}</p>    //300    
</div></template>
​<script>  
export default {
    computed: {
        originalPrice() {
            return this.$store.getters.originalPrice;           
        },         
        doublePrice() {              
            return this.$store.getters.doublePrice;          
        },          
        triplePrice() {              
            return this.$store.getters.triplePrice;         
        },      
    },  
};
</script>
```

* 헬퍼 함수 사용 예시 

```js
<template>    
<div id="root">        
<p>{{ originalPrice }}</p>  //100        
<p>{{ doublePrice }}</p>    //200        
<p>{{ triplePrice }}</p>    //300    
</div></template>
​<script>  

import {mapGetters} from 'vuex';
export default {
    computed: {
        ...mapGetters(['originalPrice', 'doublePrice', 'triplePrice']), //배열 형태로 .. 
    },  
};

</script>
```

## 프로잭트 구조화와 모듈화 방법

1. 앱이 간단할 경우.
* 아래의 store.js 를 바꿔보자..
```js
import Vue from 'vue'
import Vuex from 'vuex'

export const store = new Vuex.store({
	state: {},
  	getters: {},
  	mutations: {},
  	actions: {},
});
```

* Vuex.Store({}) 의 속성들을 모듈화 하자~

* ES6의 import, export로 속성별로 모듈화 ( alias 이용 )

```js
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from 'store/getters.js'
import * as mutations from 'store/mutations.js'

export const store = new Vuex.store({
	state: {},
  	getters: getters, // -> getters, 로 축약 가능.
  	mutations: mutations, // -> mutations, 로 축약 가능.

});
```

2. 앱 규모가 큰 경우. 
-> 앱이 비대해져 1개의 store로는 관리가 힘든 경우 **modules** 속성 사용

```js
// store.js
import Vue from 'vue'
import Vuex from 'vuex'
import todo from 'modules/todo.js'

export const store = new Vuex.store({
	mudules: {
    	moduleA: todo, //모듈 명칭 : 모듈 파일명
      	todo // todo: todo
    }
});

// todo.js
const state = {},
const getters = {},
const mutations = {},
const actions = {},
```