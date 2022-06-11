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
https://vuejs.org/guide/essentials/computed.html#ad

computed -> 단순 값에 대한 계산 ex. valiadation
watch -> 무거운 로직(매번 수행이 부담스러운 로직)

#### computed 속성을 이용한 클래스 코드 작성 방법
