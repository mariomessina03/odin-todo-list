function updateProjectSelect(projects) {
  const projectSelect = document.getElementById("project-select");
  projectSelect.innerHTML =
    '<option value="" disabled selected>Select a project...</option>';

  projects.forEach((project) => {
    const option = document.createElement("option");
    option.value = project.id;
    option.textContent = project.name;
    projectSelect.appendChild(option);
  });
}

export default updateProjectSelect;
