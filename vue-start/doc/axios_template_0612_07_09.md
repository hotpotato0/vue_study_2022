## 섹션 7. HTTP 통신 라이브러리 axios

#### 액시오스
> 뷰에서 권고하는 HTTP 통신 라이브러리는 액시오스(Axios)입니다. 
> >Promise 기반의 HTTP 통신 라이브러리이며 상대적으로 다른 HTTP 통신 라이브러리들에 비해 문서화가 잘되어 있고 API가 다양합니다.
- Ajax(Asynchronous JavaScript and XML) - 비동기적인 웹 어플리케이션의 제작
- Vue resource - 2년전 공식 라이브러리였으나 현재 axios로 변경됨.


##### 자바스크립트의 비동기 처리 패턴
1. callback
2. promise
3. promise + generator
4. async & await

> To-do : 관련 링크 읽기
* 자바스크립트 비동기 처리와 콜백 함수https://joshua1988.github.io/web-development/javascript/javascript-asynchronous-operation/
* 자바스크립트 Promise 이해하기 https://joshua1988.github.io/web-development/javascript/promise-for-beginners/
* 자바스크립트 async와 await https://joshua1988.github.io/web-development/javascript/js-async-await/
* this 관련한 자바스크립트 동작원리 https://joshua1988.github.io/web-development/translation/javascript/how-js-works-inside-engine/
* 프런트엔드 개발자가 알아야 하는 HTTP 프로토콜 https://joshua1988.github.io/web-development/http-part1/

### Promise vs Async / Await
#### Async / Await란?
* asnyc/await 는 비동기 코드를 작성하는 새로운 방법이다. 이전에는 비동기코드를 작성하기 위해 callback이나 promise를 사용해야 했다.
* asnyc/await 는 실제로는 최상위에 위치한 promise에 대해서 사용하게 된다. Asnyc/await는 plain callback 이나 node callback과 함께 사용할 수 없다.
async/await는 promise처럼 non-blocking 이다.
* async/await는 비동기 코드의 겉모습과 동작을 좀 더 동기 코드와 유사하게 만들어준다. 이것이 async/await의 가장 큰 장점이다.

#### Promise 구현 예
~~~
const makeRequest = () =>
  getJSON()
    .then(data => {
      console.log(data)
      return "done"
    })

makeRequest()
~~~

#### async / await 구현 예
~~~
const makeRequest = async () => {
  console.log(await getJSON())
  return "done"
}

makeRequest()
~~~

#### axios 실습
> this 관련한 자바스크립트 동작원리 https://joshua1988.github.io/web-development/translation/javascript/how-js-works-inside-engine/

#### 웹 서비스에서의 클라이언트와 서버와의 HTTP 통신 구조

프런트엔드 개발자가 알아야 하는 HTTP 프로토콜 https://joshua1988.github.io/web-development/http-part1/


## 섹션 8. 템플릿 문법
> 뷰의 템플릿 문법이란 뷰로 화면을 조작하는 방법을 의미합니다. 템플릿 문법은 크게 데이터 바인딩과 디렉티브로 나뉩니다.

### 데이터 바인딩
데이터 바인딩은 뷰 인스턴스에서 정의한 속성들을 화면에 표시하는 방법입니다. 가장 기본적인 데이터 바인딩 방식은 콧수염 괄호(Mustache Tag)입니다.

~~~
//html
<div>{{ message }}</div>

//js
new Vue({
  data: {
    message: 'Hello Vue.js'
  }
})
~~~

### 디렉티브
디렉티브는 뷰로 화면의 요소를 더 쉽게 조작하기 위한 문법입니다. 화면 조작에서 자주 사용되는 방식들을 모아 디렉티브 형태로 제공하고 있습니다. 예를 들어 아래와 같이 특정 속성 값에 따라 화면의 영역을 표시하거나 표시하지 않을 수 있습니다.

~~~
//html
<div>
  Hello <span v-if="show">Vue.js</span>
</div>
 
//js
new Vue({
  data: {
    show: false
  }
})
~~~
위의 코드는 show라는 데이터 속성 값에 따라 Vue.js 텍스트가 출력되거나 되지 않는 코드입니다. 또 다른 사례를 살펴보겠습니다.


#### computed 속성

#### 뷰 디렉티브와 v-bind
> v-bind라는 문법을 통해 데이터만 조작했을때 쉽게 변경 가능

브라우저에서 v-bind를 만나면 Vue의 데이터 또는 computed 속성을 조회하여 데이터를 가져온다.

#### v-if, v-show
v-if 와 v-show의 차이는 
if는 dom을 아예 제거 show는 display 상태만 변경하고 dom의 정보는 남아있다.

#### 모르는 문법이 나왔을때 해결하는 방법
Vuejs.org 접속하여 검색 (Guide/API 등 활용)

#### v-on 
> 마우스, 키보드 입력에 대한 디렉티브

#### watch 속성

#### watch vs computed
> https://vuejs.org/guide/essentials/computed.html#ad
>> 한글판 https://kr.vuejs.org/v2/guide/computed.html

computed -> 단순 값에 대한 계산 / 반응형 getter ex. valiadation
~~~
<template>
  <div>
    <p>원본 메시지: "{{ message }}"</p>
    <p>역순으로 표시한 메시지: "{{ reversedMessage }}"</p>
  </div>
</template>

<script>
export default {
  name: 'test',
  data(){
    return {
      message: '안녕하세요'
    }
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    }
  }
}
</script>
~~~
computed 프로퍼티를 보면 reverseMessage 라는 프로퍼티에 값으로 익명함수가 할당되어있다. computed에 정의하는 이 익명함수는 반드시 값을 리턴하도록 작성되야한다.
#### Getter
computed의 reverseMessage 프로퍼티가 정의될때 내부적으로는 Object.defineProperty를 통해 정의되며, 이때 익명함수가 getter로 설정된다. reverseMessage 를 함수가 아니라 일반 객체처럼 사용할 수 있는점과 호출될때만 계산이 이루어지고, 계산결과가 캐싱되는 특성이 생기게 된것은 getter의 특성덕분이다(이는 methods와의 차이를 유발하는 지점이기도 하다). 하지만 바로 이점 때문에 값이 변하게 되어도 캐싱때문에 변경된 값을 인지하지 못하는 단점이 생기게된다.

> computed 정리 잘된 블로그 https://mygumi.tistory.com/311

아래 동일 내용(캡쳐)

![img_2.png](img_2.png)
![img_1.png](img_1.png)

#### 반응형(Reactive)
Vue.js 는 이 단점을 상쇄하고 반응형을 구현하기 위해 특별한 장치를 한다. getter 함수 내에 속한 프로퍼티의 변경여부를 추적하는 것이다.(마이구미님 글 참고) 위 예시에서는 message 를 감시하고 있다가 message의 값이 변경되면 reverseMessage 를 다시 계산한다. 결국, computed는 사용하기 편하고, 자동으로 값을 변경하고 캐싱해주는 아주 끝내주는 “반응형 getter”라 부를 수 있겠다. (반응형은 Computed뿐 아니라 Vue.js 의 전반의 주요한 특징으로 볼 수 있다.)


### watch - 반응형 콜백
변경을 감시(watch)한다는 점 때문에 computed와 watch를 혼동할 수 있다.걱정할 필요는 없다. computed에 비해 watch는 단순하고 이해하기 쉽기 때문이다. watch는 Vue 인스턴스의 특정 프로퍼티가 변경될때 지정한 콜백함수가 실행되는 기능이다.

~~~
<template>
  <div>
    <p>원본 메시지: "{{ message }}"</p>
    <p>역순으로 표시한 메시지: "{{ reversedMessage }}"</p>
  </div>
</template>

<script>
export default {
  name: 'test',
  data(){
    return {
      message: '안녕하세요',
      reversedMessage: ''
    }
  },
  watch: {
    message: function (newVal, oldVal) {
      this.reversedMessage = newVal.split('').reverse().join('')
    }
  }
}
</script>
~~~
> watch를 정의한 부분(17~21)을 보면 message 프로퍼티에 익명함수가 할당되어있다. 이 익명함수가 콜백함수 역할을 할 것이고, message 프로퍼티가 변경되면 변경된 값을 콜백함수의 첫번째 인자로 전달하고, 이전 값을 두번째 인자로 전달하여 실행한다. computed가 새 프로퍼티를 생성하고 그것의 getter 로 익명함수를 설정되는 것과는 달리 watch는 아무 프로퍼티도 생성하지 않고 익명함수는 단순히 콜백함수로의 역할을 한다. watch에 명시된 프로퍼티는 감시할 대상을 의미할 뿐이다.


### 어떻게 사용할 것인가
* 위의 예시처럼 인스턴스의 data에 할당된 값들 사이의 종속관계를 자동으로 세팅하고자 할때는 computed로 구현하는것이 좋다. 그러니까 reverseMessage 는 message 값에 따라 결정되어진다. 이 종속관계가 조금이라도 복잡해지면 watch로 구현할 경우 중복계산이 일어나거나 코드 복잡도가 높아질 것이다. 이는 오류도 더 많이 발생시킬 것이다.
* watch는 특정 프로퍼티의 변경시점에 특정 액션(call api, push route …)을 취하고자 할때 적합하다.
* computed의 경우 종속관계가 복잡할 수록 재계산 시점을 예상하기 힘들기 때문에 종속관계의 값으로 계산된 결과를 리턴하는 것 외의 사이드 이펙트가 일어나는 코드를 지양해야한다.
* 더 쉽게 판단하는 방법: 만약 computed로 구현가능한 것이라면 watch가 아니라 computed로 구현하는것이 대게의 경우 옳다.

#### computed 속성을 이용한 클래스 코드 작성 방법
