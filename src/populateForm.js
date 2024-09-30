import editStoredToDo from "./editStoredToDo";

function populateForm(editBtn) {
  const todoElement = editBtn.closest(".todo-element");
  console.log(todoElement);

  const title = todoElement.querySelector(".todo-title").textContent;
  const description =
    todoElement.querySelector(".todo-description").textContent;
  const dueDate = todoElement.querySelector(".todo-dueDate").textContent;
  const priority = todoElement.querySelector(".todo-priority").textContent;

  const todoId = todoElement.getAttribute("data-id");

  document.getElementById("edit-title").value = title;
  document.getElementById("edit-description").value = description;
  document.getElementById("edit-dueDate").value = dueDate;
  document.getElementById("edit-priority").value = priority;

  document.getElementById("edit-todo-form").style.display = "block";

  const confirmEditToDo = document.querySelector("#confirm-edit-todo");
  confirmEditToDo.onclick = () => {
    const updatedTitle = document.getElementById("edit-title").value.trim();
    const updatedDescription = document
      .getElementById("edit-description")
      .value.trim();
    const updatedDueDate = document.getElementById("edit-dueDate").value.trim();
    const updatedPriority = document
      .getElementById("edit-priority")
      .value.trim();

    if (
      !updatedTitle ||
      !updatedDescription ||
      !updatedDueDate ||
      !updatedPriority
    ) {
      alert("One or more fields are empty. Please fill in all fields!");
      return;
    }

    editStoredToDo(
      todoId,
      updatedTitle,
      updatedDescription,
      updatedDueDate,
      updatedPriority
    );

    todoElement.querySelector(".todo-title").textContent = updatedTitle;
    todoElement.querySelector(".todo-description").textContent =
      updatedDescription;
    todoElement.querySelector(".todo-dueDate").textContent = updatedDueDate;
    todoElement.querySelector(".todo-priority").textContent = updatedPriority;

    document.getElementById("edit-todo-form").reset();
    document.getElementById("edit-todo-form").style.display = "none";
  };
}

export default populateForm;
