import getToDoValues from "./getToDoValues";
import verifyCheckbox from "./verifyCheckbox";
import populateForm from "./populateForm";
import { isFormDisplayed, resetForms } from "./showForm";
import deleteToDo from "./deleteToDo";
import storeToDo from "./storeToDo";

function createToDo() {
  const submitBtn = document.getElementById("submit-todo-form");
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const values = getToDoValues();
    if (values === null) {
      return;
    }

    storeToDo(values);

    const { title, description, dueDate, priority, selectedProject } = values;

    const todo = document.createElement("div");
    todo.classList.add("todo-element");

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
    if (priority === "high") {
      todoPriority.classList.add("priority-high");
    } else if (priority === "medium") {
      todoPriority.classList.add("priority-medium");
    } else {
      todoPriority.classList.add("priority-low");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const checkboxID = "checkbox-" + new Date().getTime().toString();
    checkbox.id = checkboxID;

    checkbox.addEventListener("change", () => {
      verifyCheckbox(checkboxID, todoTitle);
    });

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

    //

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "deletebutton";
    deleteBtn.id = "delete-todo";
    deleteBtn.addEventListener("click", () => {
      deleteToDo(deleteBtn);
    });

    todo.appendChild(todoTitle);
    todo.appendChild(todoDescription);
    todo.appendChild(todoDueDate);
    todo.appendChild(todoPriority);
    todo.appendChild(checkbox);
    todo.appendChild(editBtn);
    todo.appendChild(deleteBtn);

    document.getElementById(selectedProject.id).appendChild(todo);

    const form = document.getElementById("todo-form");
    form.reset();
    form.style.display = "none";
  });
}

export default createToDo;
