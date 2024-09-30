function verifyCheckbox(checkboxID, todoTitle) {
  const isChecked = document.getElementById(checkboxID).checked;
  if (isChecked) {
    todoTitle.style.textDecoration = "line-through";
  } else {
    todoTitle.style.textDecoration = "none";
  }
}

export default verifyCheckbox;
