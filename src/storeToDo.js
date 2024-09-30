export const TODO_KEY = "todos";

function storeToDo(values) {
  const newToDo = {
    ...values, // Usa l'operatore spread per copiare tutti i valori
    selectedProject: values.selectedProject.id,
    //
    id: new Date().getTime(),
  };

  // Recupera i ToDo esistenti dal localStorage
  const todos = JSON.parse(localStorage.getItem(TODO_KEY)) || [];
  todos.push(newToDo); // Aggiungi il nuovo ToDo all'array

  localStorage.setItem(TODO_KEY, JSON.stringify(todos)); // Salva l'array aggiornato nel localStorage
}

export default storeToDo;
