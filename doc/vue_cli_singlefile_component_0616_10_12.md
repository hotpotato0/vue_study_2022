### vue cli 2.x vs 3.x

vue init '프로젝트 템플릿 유형' '프로젝트 폴더 위치'
vue init webpack-simple '프로젝트 폴더 위치'

[Vue CLI 3.X]
vue create '프로젝트 폴더 위치'

### .vue 
template 밑에는 한개의 div 태그만 가

#### components 를 두단어로 조합하는 이유?
브라우저에서 한단어로 하면 표준 태그와 구분이 안되므로(충돌 가능) 두단어 이상의 조합으로 생성

파일의 내용 변수에 담겼고 이를 연결했다 

리뷰 -> v-bind: 프롭스 속성 이름="상위 컴포넌트의 데이터 이름">
