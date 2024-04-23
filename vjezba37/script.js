"use strict";

const apiUrl = "https://jsonplaceholder.typicode.com/todos?_limit=10"; /* ovo ?_limit=10 dodajemo na kraju ako zelimo staviti limit da ne ispisuje sve vec samo broj koji mi stavimo*/

const getTodos = () => {
    fetch(apiUrl)
    .then((res)=> res.json())
    .then((data)=> {
        data.forEach((todo) => noviTodo(todo));
    });
};

const noviTodo = (todo) => {
    const div = document.createElement("div");
    div.classList.add("todo");
    div.appendChild(document.createTextNode(todo.title));
    div.setAttribute("data-id", todo.id);

    let trashIcon = document.createElement("i");
    trashIcon.className = "fa-solid fa-trash";
    trashIcon.addEventListener("click", deleteTodo);
    div.appendChild(trashIcon);

    if(todo.completed){
        div.classList.add("gotov");
    }

    document.getElementById("todo-list").appendChild(div);
};

const deleteTodo = (e) => {
    if(e.target.classList.contains("fa-trash")){
        const id = e.target.dataset.id;
        fetch(`˘${apiUrl}/${id}`, {
            method: "DELETE",
        })
        .then((res)=> res.json())
        .then(()=>{
            const todoDiv = e.target.closest(".todo")
            todoDiv.remove();
        });
    }
};

const createTodo = (e) => {
    e.preventDefault();

    const input = e.target.firstElementChild;
    const  noviTodoNaslov = input.value.trim(); // .trim ako ima puno space/razmaka da makne
    if(noviTodoNaslov === ""){
        alert("Molimo unesite novi zadatak");
        return;
    }

    const dodajTodo = {
        title: noviTodoNaslov,
        completed: false,
    };

    fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify(dodajTodo),
        headers:{
            "Copntent-Type": "application/json",
        },
    })
    .then((res)=>res.json())
    .then((data) => {
        input.value = "";
        noviTodo(data);
    });
};

const toggleCompleted = (e) => {
    if (e.target.classList.contains("todo")) {
        e.target.classList.toggle("gotov");
    }
};

const updateTodo = (id, completed) =>{
    fetch(`${apiUrl}/${id}`), {
        method: "PUT",
        body: JSON.stringify("completed"),
        headers: {
            "Content-Type": "application/json",
        },
    }
}

document.addEventListener("DOMContentLoaded", getTodos);
document.getElementById("todo-form").addEventListener("submit", createTodo);
document.getElementById("todo-list").addEventListener("click", toggleCompleted);

