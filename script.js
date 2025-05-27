const skills = ["HTML", "CSS", "JavaScript", "React", "Git"];
const projects = [
  "Portfolio Website",
  "Weather App using OpenWeather API",
  "To-Do List with Local Storage",
  "Personal Blog (HTML/CSS)",
  "Calculator App"
];

const skillsList = document.getElementById("skills-list");
const projectsList = document.getElementById("projects-list");

// Populate skills
skills.forEach(skill => {
  const li = document.createElement("li");
  li.textContent = skill;
  skillsList.appendChild(li);
});

// Populate projects
projects.forEach(project => {
  const li = document.createElement("li");
  li.textContent = project;
  projectsList.appendChild(li);
});
