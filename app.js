
var container = document.getElementById("todo-container");
var todos = [];
var editIndex = null
var input = document.getElementById("task");

function render() {
    container.innerHTML = "";
    for (var i = 0; i < todos.length; i++) {
        var element = todos[i];
        container.innerHTML += `<p>${element.title} 
       <i class="fa fa-trash" onclick="onDelete(${i})"></i>
       <i class="fa fa-edit" onclick="onEdit(${i})"></i>
        </p>`
    }
}

function addTodo() {
    if(editIndex !== null){
        todos[editIndex] = { title: input.value }
    }else{
        todos.push({ title: input.value });
    }
    input.value = ""
    editIndex = null;
    render();
}

function onDelete(i) {
    todos.splice(i, 1);
    render();
};
function onEdit(i) {
    var element = todos[i];
    input.value = element.title;
    input.focus();
    editIndex = i
}

render();



