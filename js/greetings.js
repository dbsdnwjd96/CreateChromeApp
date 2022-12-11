
const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

/* 반복되는 string은 대문자로 변수명으로 정리한다. */
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    // console.log(event);

    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    loginForm.classList.add(HIDDEN_CLASSNAME);
    paintGreetings(userName);
    // console.log(userName);

    /* 
    - onLoginSubmit의 동작순서
        1. event.preventDefault(); 기본동작을 막는다. (브라우저가 submit할때 하는 기본동작을 하지않음)
        2. login-form에 hidden클래스 추가.
        3. h1#greeting에 텍스트 추가.
        4. h1#greeting에 hidden클래스 제거.

    - user 기억하기
        브라우저에 공짜로 기억할수 있게해주는것. → localStorage
        (확인하고 싶다면? 개발자도구 → Application → Local Storage에서 확인가능)

        localStorage.setItem("key", "value");로 작성을 하면 브라우저 상에 저장이 됨.
        localStorage.getItem("key");로 작성을 하면 저장된 데이터를 불러 올 수 있음.
        localStorage.removeItem("key");로 작성을 하면 저장된 데이터를 삭제 할 수 있음.
        
    */
}

/* 화면에 텍스트가 출력되게 하는 함수 */
function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const saveUsername = localStorage.getItem(USERNAME_KEY);
console.log(saveUsername);

/*
- user정보 유무 확인하기
    localStorage에 저장까지 해놨지만 브라우저 새로고침시 여전히 login-form이 노출된다.

    해결과정: 시작시 login-form과 h1#greetings을 둘 다 숨긴채로 시작한다.
            localStorage.getItem시 user가 없으면 null이 나옴을 이용해
            이를 이용해 saveUsername이 null이 나오면 login-form을 보여주고,
            아닐경우 h1#greetings를 보여준다.
*/

if(saveUsername == null){
    //show the form (유저정보가 없을 때.)
    loginForm.classList.remove(HIDDEN_CLASSNAME);

    loginForm.addEventListener("submit", onLoginSubmit)
    /* 
        onLoginSubmit()이라고 작성하지 않는이유 : ()를 추가해서 작성하면 바로 실행해 버리기 때문.
        #login-form안에서 submit 이벤트 발생시 onLoginSubmit function실행.
    */
}else{
    //show the greetings
    paintGreetings(saveUsername);
}