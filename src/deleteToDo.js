import { TODO_KEY } from "./storeToDo";

function deleteToDo(deleteBtn) {
  const todoElement = deleteBtn.closest(".todo-element");
  const todoId = todoElement.getAttribute("data-id");

  const storedToDos = JSON.parse(localStorage.getItem(TODO_KEY)) || [];
  const updatedToDos = storedToDos.filter((todo) => {
    return todo.id !== parseInt(todoId);
  });
  localStorage.setItem(TODO_KEY, JSON.stringify(updatedToDos));

  todoElement.remove();
}

export default deleteToDo;
