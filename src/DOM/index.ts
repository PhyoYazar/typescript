interface Todo {
  text: string;
  checked: boolean;
}

// const btn = document.getElementById("btn")! as HTMLButtonElement;
const input = document.getElementById("todoinput")! as HTMLInputElement;
const todolist = document.getElementById("todolists")!;
const form = document.querySelector("form")!;

const todos: Todo[] = readTodos();
todos.forEach(createList);

function readTodos(): Todo[] {
  const readData = localStorage.getItem("todo");
  if (readData === null) return [];
  return JSON.parse(readData);
}

function createList(data: Todo): void {
  const list = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  list.append(data.text);
  list.append(checkbox);
  todolist.append(list);
  input.value = "";
}

const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const todoData = {
    text: input.value,
    checked: false,
  };

  createList(todoData);
  todos.push(todoData);
  localStorage.setItem("todo", JSON.stringify(todos));
};

form.addEventListener("submit", handleSubmit);
