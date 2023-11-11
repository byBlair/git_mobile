# mobile 페이지로 구현한 스타벅스 장바구니 페이지

## 소개

모바일로 볼 수 있는 스타벅스 장바구니 페이지 입니다.

## 배포링크

배포방식은 AWS S3의 간이 배포를 이용하였습니다.  

## 개발 도구 및 환경

1. 개발환경 : VSCode,npm
2. 개발도구 : HTML,CSS,react,redux

## 프로젝트 설명

### 메인페이지

Nav와 메인페이지를 구별해주었고
메인페이지는 data.json 파일 내용을 map으로 불러와서 정렬시켜주었다.
html과 css는 스타벅스 페이지를 참고했다. 
그리고 cartslice.js라는 파일을 새로 만들어 기능 코드부분을 깔끔하게 분리시켜주었다.
redux toolkit을 사용하여 각각 slice의 객체를 인자로 받아준다
name에 'cart'를 넣어서 prefix로 사용해준다.
reducers: slice 안에서 사용할 각각의 reducer 만들어주었다
addTocart,removeFromCart clearAllItem을 만들어주고 각각의 액션을 주었다
그리고 store.js 파일을 하나 더 만들어 카트안에 위 코드들을 적은 것들이 실현되게 만들어주었다

메인페이지의 button은 or연산자를 이용하여 추가를 누르면 카트안에 들어가고 그 위에 카트 아이콘에는 수량이 1씩 증가할 수 있도록 한다
추가를 누름과 동시에 삭제버튼이 나도록 설정해두었으며 삭제를 하면 수량이 빠져나가는것을 확인할 수 있다
button action을 dispatch하면 cartslice.js파일에서 만들었던 reducer함수를 호출합니다.
reducer는 store.js에가서 현재 state값을 가져와 새로운 state를 반환해줍니다.



### cart페이지
cart페이지도 마찬가지고 cartproductdata를 불러와 map으로 뿌려주었습니다
메인페이지에서 추가가 되면 카트에 하나씩 하나씩 쌓입니다
삭제버튼을 누르면 삭제가 되도록 cartslice에서 액션을 지정해주었고
전체비우기를 누르면 전체 항목들이 삭제가 됩니다 
cartProductData가 1보다 작은 숫자가 나오면 즉 항목이 하나도 없을때에는 
'장바구니가 비었습니다' 멘트가 뜹니다 



