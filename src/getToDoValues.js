import { projects } from "./projectStore";

function getToDoValues() {
  const title = document.getElementById("title").value.trim();
  const description = document.getElementById("description").value.trim();
  const dueDate = document.getElementById("dueDate").value.trim();
  const priority = document.getElementById("priority").value.trim();

  const selectedProjectId = document.getElementById("project-select").value;
  const selectedProject = projects.find(
    (project) => project.id == selectedProjectId
  );
  if (!title || !description || !dueDate || !priority || !selectedProject) {
    alert("One or more fields are empty. Please fill in all fields!");
    return null;
  }

  return {
    title,
    description,
    dueDate,
    priority,
    selectedProject,
  };
}

export default getToDoValues;
