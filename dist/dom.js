"use strict";
// const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput");
const todolist = document.getElementById("todolists");
const form = document.querySelector("form");
const todos = readTodosDataFromLS();
todos.forEach(createTodoList);
function readTodosDataFromLS() {
    const readData = localStorage.getItem("todo");
    if (readData === null)
        return [];
    return JSON.parse(readData);
}
function saveTodosToLS() {
    localStorage.setItem("todo", JSON.stringify(todos));
}
function createTodoList(data) {
    const list = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = data.checked;
    checkbox.addEventListener("change", () => {
        data.checked = checkbox.checked;
        saveTodosToLS();
    });
    list.append(data.text);
    list.append(checkbox);
    todolist.append(list);
}
const handleSubmit = (e) => {
    e.preventDefault();
    const todoData = {
        text: input.value,
        checked: false,
    };
    createTodoList(todoData);
    todos.push(todoData);
    saveTodosToLS();
    input.value = "";
};
form.addEventListener("submit", handleSubmit);
