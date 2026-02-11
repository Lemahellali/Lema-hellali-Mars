const body = document.querySelector("body");

const footer = document.createElement("footer");
body.appendChild(footer);

const today = new Date();
const thisYear = today.getFullYear();

const copyright = document.createElement("p");
copyright.innerHTML = `© Lema Hellali ${thisYear}`;
footer.appendChild(copyright);

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "Git & Github",
  "Responsive Design",
  "Accessibility Basic"
];

const skillsList = document.querySelector("#skillsList");

for (let i = 0; i < skills.length; i++) {
  const li = document.createElement("li");
  li.innerText = skills[i];
  skillsList.appendChild(li);
}


