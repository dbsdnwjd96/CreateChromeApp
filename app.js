// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginSubmit() {
    const userName = loginInput.value;
    console.log(userName);
}

loginForm.addEventListener("submit", onLoginSubmit)