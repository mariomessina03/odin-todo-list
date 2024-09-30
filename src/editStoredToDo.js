import { TODO_KEY } from "./storeToDo";

function editStoredToDo(
  todoId,
  updatedTitle,
  updatedDescription,
  updatedDueDate,
  updatedPriority
) {
  let todos = JSON.parse(localStorage.getItem(TODO_KEY)) || [];

  // Trova il to-do da aggiornare tramite il suo ID
  const todoIndex = todos.findIndex((todo) => todo.id === parseInt(todoId));

  if (todoIndex !== -1) {
    // Aggiorna il to-do con i nuovi valori
    todos[todoIndex].title = updatedTitle;
    todos[todoIndex].description = updatedDescription;
    todos[todoIndex].dueDate = updatedDueDate;
    todos[todoIndex].priority = updatedPriority;

    // Salva nuovamente nel localStorage
    localStorage.setItem(TODO_KEY, JSON.stringify(todos));
  }
}

export default editStoredToDo;
