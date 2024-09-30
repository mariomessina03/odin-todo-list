function getProjectValues() {
  const title = document.getElementById("project-title").value.trim();

  if (!title) {
    alert("Please enter a valid title!");
    return null;
  }

  return title;
}

export default getProjectValues;
