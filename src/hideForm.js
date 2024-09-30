function hideForm() {
  const closeTodoFormBtn = document.getElementById("close-todo-form");
  const closeProjectFormBtn = document.getElementById("close-project-form");
  const closeEditTodoFormBtn = document.getElementById("close-edit-todo-form");

  closeTodoFormBtn.addEventListener("click", () => {
    const form = document.getElementById("todo-form");
    form.reset();
    form.style.display = "none";
  });

  closeProjectFormBtn.addEventListener("click", () => {
    const form = document.getElementById("project-form");
    form.reset();
    form.style.display = "none";
  });

  closeEditTodoFormBtn.addEventListener("click", () => {
    const form = document.getElementById("edit-todo-form");
    form.reset();
    form.style.display = "none";
  });
}

export default hideForm;
