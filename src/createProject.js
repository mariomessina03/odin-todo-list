import getProjectValues from "./getProjectValues";
import updateProjectSelect from "./updateProjectSelect";
import loadProjects from "./loadProjects";
import { projects } from "./projectStore";
import { PROJECTS_KEY } from "./loadProjects";

function createProject() {
  const submitBtn = document.getElementById("submit-project-form");
  submitBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const title = getProjectValues();

    if (title === null) {
      return;
    }

    const project = document.createElement("div");
    project.classList.add("project-element");
    project.id = new Date().getTime().toString();

    const projectTitle = document.createElement("p");
    projectTitle.classList.add("project-title");
    projectTitle.textContent = title;

    const newProject = {
      id: project.id,
      name: title,
    };

    projects.push(newProject);
    // Salva l'array aggiornato nel localStorage
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(projects));
    updateProjectSelect(projects);

    project.appendChild(projectTitle);
    document.getElementById("main-container").appendChild(project);

    const form = document.getElementById("project-form");
    form.reset();
    form.style.display = "none";
  });
}

export default createProject;
