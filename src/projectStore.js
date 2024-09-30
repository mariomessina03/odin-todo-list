import { PROJECTS_KEY } from "./loadProjects";

export let projects = JSON.parse(localStorage.getItem(PROJECTS_KEY)) || [];
