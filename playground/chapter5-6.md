<h2>chapter 5</h2>
<h3>컴포넌트 통신 방법 - 응용</h3>

Q. 같은 레벨의 경우 통신을 어떻게 하는지

cf ) 아래 => 위 : event , 위 => 아래 : props

같은 레벨의 경우, 바로 옆으로 보낼 수 없다. 

-> 위로 보낸 후(event) 아래로 내려야함(props)

<h2>chapter 6</h2>
<h3>뷰라우터</h3>

뷰 라이브러리를 이용하여 싱글 페이지 애플리케이션을 구현할 때 사용하는 라이브러리
*  페이지를 이동할 때 사용하는 뷰 공식 라이브러리이자 기능
*  페이징에 관한 기능을 view router로 구현할 수 있다

> - 설치
> 1. CDN 방식 (이번 강의에서 사용한 방법)
> 2. NPM방식

<h3>라우터 등록</h3>

1) 라우터 인스턴스 생성
<pre><code>
var router = new VueRouter({
    //라우터 옵션
})
</code></pre>
2) 인스턴스에 라우터 인스턴스를 등록
<pre><code>
new Vue({
    router: router
})
</code></pre>


<h3>뷰 라우터 옵션</h3>
<pre><code>
* routes : [ //페이지의 정보들이 들어가는 속성
{path: '/login', component: LoginComponet},
{path: '/main', component: Main}
]

* mode: 'history' 
// 기본적으로 #을 기준으로 움직이는데 #을 없애고 바로 주소를 입력하고 싶다면 사용
</code></pre>



  * 참고
    * 뷰 - components
    * 라우터 - component

<h3>router-view</h3>

브라우저의 주소 창에서 URL이 변경되면, 해당 컴포넌트가 화면에 뿌려진다

<code><pre>

    <div id="app">
        <router-view></router-view>
    </div>

</pre></code>

<h3>router-link</h3>
페이지 이동을 할 때 사용자는 url을 입력해서 이동하지 않기 때문에, 라우터 링크를 이용함
<router-link to="이동할 URL">Login</router-link>