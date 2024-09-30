import "./styles.css";

import showForm from "./showForm.js";
import hideForm from "./hideForm.js";
import createToDo from "./createToDo.js";
import createProject from "./createProject.js";

import loadProjects from "./loadProjects.js";
import loadToDos from "./loadToDos.js";

document.addEventListener("DOMContentLoaded", () => {
  loadProjects(); // Carica i progetti salvati quando la pagina viene ricaricata
  loadToDos();
});

showForm();
hideForm();

createProject();
createToDo();
