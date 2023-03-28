//
//  JS File
//  You may remove the code below - it's just boilerplate
//

//
// Variables
//

// Constants
/*
const appID = "app";
const headingText = "To do. To done. ✅";*/

// Variables

// DOM Elements
let todoInput = document.querySelector(".todo-input");
let todoButton = document.querySelector(".todo-button");
let todoList = document.querySelector(".todo-list");
let todoFilter = document.querySelector(".todo-filter");


//Event listeners

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
todoFilter.addEventListener("change", filterItems);


//
// Functions
//

function addTodo(event) {
  if(todoInput.value !=""){
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value; 
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check-circle"></li>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></li>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    
    todoList.appendChild(todoDiv);
    todoInput.value = "";
  }
}

function deleteCheck(e) {
  const item = e.target;

  if(item.classList[0] === "trash-btn") {
      const todo = item.parentElement;
      todo.classList.add("slide");

      todo.addEventListener("transitionend", function() {
          todo.remove();
      });
  }

  if(item.classList[0] === "complete-btn") {
      const todo = item.parentElement;
      todo.classList.toggle("completed");
  }
}

function filterTodo(e) {
  const todos = todoList.childNodes;
  todos.forEach(function(todo) {
      switch(e.target.value) {
          case "all": 
              todo.style.display = "flex";
              break;
          case "completed": 
              if(todo.classList.contains("completed")) {
                  todo.style.display = "flex";
              } else {
                  todo.style.display = "none";
              }
              break;
          case "incomplete":
              if(todo.classList.contains("incomplete")) {
                  todo.style.display = "flex";
              } else {
                  todo.style.display = "none";
              }
              break;
      }
  });
}



// Add a heading to the app container
function initialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app container");
    return;
  }

  // Create an h1 and add it to our app
  /*const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);*/

  // Init complete
  console.log("App successfully initialised");
}


initialise();
