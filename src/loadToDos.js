import { TODO_KEY } from "./storeToDo";
import verifyCheckbox from "./verifyCheckbox";
import deleteToDo from "./deleteToDo";
import { isFormDisplayed, resetForms } from "./showForm";
import populateForm from "./populateForm";

function loadToDos() {
  const storedToDos = JSON.parse(localStorage.getItem(TODO_KEY)) || [];

  storedToDos.forEach((storedTodo) => {
    // Destrutturazione dei dati del ToDo salvato
    const { id, title, description, dueDate, priority, selectedProject } =
      storedTodo;

    // Verifica che il progetto esista prima di procedere
    const projectElement = document.getElementById(selectedProject);
    if (!projectElement) {
      console.error(`No project found with ID: ${selectedProject}`);
      return; // Salta questo ToDo se non esiste il progetto corrispondente
    }

    // Creazione dell'elemento ToDo
    const todo = document.createElement("div");
    todo.classList.add("todo-element");

    // Associa l'ID univoco al ToDo nel DOM
    todo.setAttribute("data-id", id);

    const todoTitle = document.createElement("p");
    todoTitle.classList.add("todo-title");
    todoTitle.textContent = title;

    const todoDescription = document.createElement("p");
    todoDescription.classList.add("todo-description");
    todoDescription.textContent = description;

    const todoDueDate = document.createElement("time");
    todoDueDate.classList.add("todo-dueDate");
    todoDueDate.textContent = dueDate;
    todoDueDate.setAttribute("datetime", dueDate);

    const todoPriority = document.createElement("p");
    todoPriority.classList.add("todo-priority");
    todoPriority.textContent = priority;

    // Imposta la priorità visivamente
    if (priority === "high") {
      todoPriority.classList.add("priority-high");
    } else if (priority === "medium") {
      todoPriority.classList.add("priority-medium");
    } else {
      todoPriority.classList.add("priority-low");
    }

    // Creazione della checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const checkboxID = "checkbox-" + id;
    checkbox.id = checkboxID;

    checkbox.addEventListener("change", () => {
      verifyCheckbox(checkboxID, todoTitle);
    });

    // Bottone per editare il ToDo
    const editBtn = document.createElement("button");
    editBtn.textContent = "editbutton";
    editBtn.id = "edit-todo";
    editBtn.addEventListener("click", () => {
      if (isFormDisplayed()) {
        resetForms();
      }
      document.getElementById("edit-todo-form").style.display = "block";
      populateForm(editBtn);
    });

    // Bottone per eliminare il ToDo
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "deletebutton";
    deleteBtn.id = "delete-todo";
    deleteBtn.addEventListener("click", () => {
      deleteToDo(deleteBtn);
    });

    // Aggiungi tutti gli elementi al container del ToDo
    todo.appendChild(todoTitle);
    todo.appendChild(todoDescription);
    todo.appendChild(todoDueDate);
    todo.appendChild(todoPriority);
    todo.appendChild(checkbox);
    todo.appendChild(editBtn);
    todo.appendChild(deleteBtn);

    projectElement.appendChild(todo);
  });
}

export default loadToDos;
