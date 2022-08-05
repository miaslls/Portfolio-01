'use strict';

let projectIndex = 1;

showProjects(projectIndex);

function changeProject(n) {
  showProjects((projectIndex += n));
}

function showProjects(n) {
  let projects = document.getElementsByClassName('project-container');

  if (n > projects.length) {
    projectIndex = 1;
  }

  if (n < 1) {
    projectIndex = projects.length;
  }

  for (let i = 0; i < projects.length; i++) {
    projects[i].style.display = 'none';
  }

  projects[projectIndex - 1].style.display = 'flex';
}
