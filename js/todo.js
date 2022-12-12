const toDoForm = document.getElementById('todo-form');
const todoInput = document.querySelector('#todo-form input');
const toDoList = document.getElementById('todo-list');

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement('li');
    const span = document.createElement('span');
    const button = document.createElement('button')
    button.innerText = '❌';

    button.addEventListener('click', deleteTodo);

    li.appendChild(span);
    li.appendChild(button);

    span.innerText = newTodo;

    toDoList.appendChild(li);
}

function handleToDosubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = '';
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveTodos(newTodo);

    /*
    -localStorage에 저장하는 방법
        localStorage는 string으로만 데이터가 들어갈 수 있다.
        따라서 array 형식인 toDos의 데이터들은 들어갈 수 없다.

        하지만 localStorage에 array형식으로 데이터를 넣고싶다면?
        → JSON.stringify()를 사용해서 array를 stringify해서 localStorage안에 저장한다.
        (모습은 array이나 실제로는 string으로 저장됨)

    */
}

toDoForm.addEventListener("submit", handleToDosubmit);

const saveToDos = localStorage.getItem(TODOS_KEY);

if(saveToDos !== null){
    const parsedToDos = JSON.parse(saveToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}