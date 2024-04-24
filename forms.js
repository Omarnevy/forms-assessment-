
const todos = [];


function renderTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = ''; // Clear the current list

   
    todos.map(todo => {
        const listItem = document.createElement('li');
        listItem.textContent = todo;
        todoList.appendChild(listItem);
    });
}


function handleFormSubmit(event) {
    event.preventDefault();
   
    const todoInput = document.getElementById('todo-input');
    const newTodo = todoInput.value;

   
    todos.push(newTodo);

    
    todoInput.value = '';

   
    renderTodos();
}


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    form.addEventListener('submit', handleFormSubmit);
});