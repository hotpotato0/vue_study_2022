### 사용자 입력 폼 만들기

<form>태그

label 태그에서 for , id 맞춰주면 포커스가 자동으로 가게됌..


## v-model 속성과 submit 이벤트 처리..

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



<form v-on:submit="submitForm">

event.preventDefault() -> form의 이동 및 새로고침을 막음..



## axios 
npm i axios로 axios install !

var url = 'https://jsonplaceholder.typicode.com/users';
var data = {
    username: this.username,
    password: this.password
}

axios.post(url, data)
    .then(function(response) {
        console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });
        
}