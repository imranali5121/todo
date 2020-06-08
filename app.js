
var container = document.getElementById("todo-container");
var todos = [
    // { title: "todo 1" },
    // { title: "todo 2" },
    // { title: "todo 3" },
]


function render() {
    container.innerHTML = "";
    for (var i = 0; i < todos.length; i++) {
        var element = todos[i];
        container.innerHTML += `<p>${element.title} 
        <button onclick="onDelete(${i})">Delete</button></p>`
    }
}

function addTodo() {
    todos.push({ title: "New Todo" });
    render();
}

function onDelete(i) {
    todos.splice(i, 1);
    render();
}

render();



