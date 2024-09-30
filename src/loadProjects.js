import updateProjectSelect from "./updateProjectSelect";

export const PROJECTS_KEY = "projects";

function loadProjects() {
  const storedProjects = JSON.parse(localStorage.getItem(PROJECTS_KEY)) || []; // Recupera i progetti o un array vuoto se non ci sono
  storedProjects.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project-element");
    projectElement.id = project.id; // Imposta l'id del progetto

    const projectTitle = document.createElement("p");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = project.name; // Imposta il nome del progetto

    projectElement.appendChild(projectTitle); // Aggiunge il titolo al progetto
    document.getElementById("main-container").appendChild(projectElement); // Aggiunge il progetto al contenitore principale
  });

  updateProjectSelect(storedProjects); // Aggiorna il selettore dei progetti
}

export default loadProjects;
