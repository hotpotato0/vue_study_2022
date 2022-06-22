### 싱글 파일 컴포넌트 강의 요약

## 싱글파일 컴포넌트에서 배운 내용 적용하여 개발 시작하기

<script>

// new Vue({
//     data: {
//         str: 'hi'       - >> 기존의 ES5 방식은 변수에 컴포넌트 내용을 넣어 인스턴스 안에서 참조하는 방식
//     }
// })

export default {
  data: function() {
    return {
      str: 'hi'               // 다른 파일의 있는 내용을 참조해오기 위한 방식
    }
  }
};
</script>

## 싱글파일 컴포넌트 체계에서 컴포넌트 등록하기.

Component 등록시 파스칼 케이스, 컴포넌트 이름은 최소한 2글자 이상~!(ex AppHeader.vue -> 이유는 태그를 만들었을때 기본 태그인지 만든 태그인지 브라우저가 구분하기 힘듬...... main.vue 로 만들면 <main></main> ?? 원래 있는건지 아닌지 알수가 없다. 누가?? 브라우저가!


생성한 vue 파일을 불러올 경우 script 태그에
-> import AppHeader from './components/AppHeader.vue'; -> .vue 를 붙여줘야 vscode 바로가기 사용 가능하다..

이후 components 에 등록.. 
components: {
    'app-header': AppHeader   -> 파일의 내용이 변수에 담겼고 변수의 내용을 연결햇다~
}

이후에 <app-header> 태그로 사용.


## 싱글 파일 컴포넌트에서 props 속성 사용하는 방법

⭐️  props 란 ?
부모 컴포넌트에서 자식 컴포넌트로

데이터를 전달할때 사용되어지는

단방향 데이터 전달 방식이다

⭐️  사용 방법
부모 컴포넌트에서 자식 컴포넌트를 호출시

자식 컴포넌트 태그 내 v-bind나 : 키워드를통해

데이터를 전달하고 자식 컴포넌트에서

props객체를 통해 데이터를 전달받는 방식이다

<!--부모 컴포넌트-->
<template>>
    <자식컴포넌트이름 v-bind:props이름="전달데이터"/>
</template>

v-bind ??? 단방향??? 

## event emit ??-> 부모에서 자식으로 데이터 보내기!
=> App.vue
<template>
  <div>
    <app-header 
      v-bind:propsdata="str"
      v-on:renew="renewStr"></app-header>
  </div>

  export default {
  data: function() {
    return {
      str: 'Header'
    }
  },
  components: {
    'app-header': AppHeader
  },
  methods: {
    renewStr: function() {
      this.str = 'hi';
    }
  }
}

=> AppHeader.vue
<template>
  <header>
    <h1>{{ propsdata }}</h1>
    <button v-on:click="sendEvent">send</button>
  </header>
</template>

<script>
export default {
  props: ['propsdata'],
  methods: {
    sendEvent: function() {
      this.$emit('renew');
    }
  }
}
}

##vue-cli 정리
-> command line 인터페이스 보조 도구로 실행한 프로젝트 
-> npm run serve 


index.html -> <!-- built files will be auto injected --> 이 한줄이 젤 중요 -> webpack 주입..,,
내부적으로 webpack이 돌아가고 있는데 ...webpack에 대한 이해가 필요.. 

### 사용자 입력 폼 만들기

<form>태그

label 태그에서 for , id 맞춰주면 포커스가 자동으로 가게됌..


## v-model 속성과 submit 이벤트 처리..

v-bind: 뷰 인스턴스의 데이터 속성을 해당 HTML 요소에 연결할 때 사용
v-on: 해당 HTML 요소의 이벤트를 뷰 인스턴스의 로직과 연결할 때 사용
v-model: v-bind와 v-on의 조합


https://joshua1988.github.io/web-development/vuejs/v-model-usage/


 data: function() {
    return {
      username: '',
      password: '',
    }
  },
  <input id="username" type="text" v-model="username">
  <input id="password" type="password" v-model="password">


이벤트 버블링, 이벤트 캡처 , 이벤트 위임
https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/

event.preventDefault() -> form의 이동 및 새로고침을 막음..

Vue에서는 대신에 v-on:submit.prevent 를 사용한다.

## axios 
npm i axios로 axios install !
