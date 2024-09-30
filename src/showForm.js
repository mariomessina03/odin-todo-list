function showForm() {
  const addToDoBtn = document.getElementById("add-todo");
  const addProjectBtn = document.getElementById("add-project");

  addToDoBtn.addEventListener("click", () => {
    if (isFormDisplayed()) {
      resetForms();
    }
    document.getElementById("todo-form").style.display = "block";
  });

  addProjectBtn.addEventListener("click", () => {
    if (isFormDisplayed()) {
      resetForms();
    }
    document.getElementById("project-form").style.display = "block";
  });
}

export function isFormDisplayed() {
  const forms = document.querySelectorAll(".form");
  for (const form of forms) {
    if (form.style.display === "block") {
      return true;
    }
  }
  return false;
}

export function resetForms() {
  const forms = document.querySelectorAll(".form");
  for (const form of forms) {
    form.reset();
    form.style.display = "none";
  }
}

export default showForm;
