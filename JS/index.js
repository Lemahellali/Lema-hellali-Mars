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
const messageForm = document.querySelector("form[name='leave-message']");
const messageSection = document.querySelector("#messages");
const messageList = messageSection.querySelector("ul");

messageForm.addEventListener("submit", function(event) {

  event.preventDefault();

  const userName = event.target.usersName.value;
  const userEmail = event.target.usersEmail.value;
  const userMessage = event.target.usersMessage.value;

  const newMessage = document.createElement("li");

  newMessage.innerHTML = `
    <a href="mailto:${userEmail}">${userName}</a>
    <span>: ${userMessage}</span>
  `;

  const removeButton = document.createElement("button");
  removeButton.innerText = "remove";
  removeButton.type = "button";

  removeButton.addEventListener("click", function() {
    newMessage.remove();
  });

  newMessage.appendChild(removeButton);
  messageList.appendChild(newMessage);

  messageForm.reset();

});

fetch("https://api.github.com/users/Lemahellali/repos")
  .then(function(response) {
    return response.json();
  })
  .then(function(repositories) {

    console.log(repositories);

    const projectSection = document.getElementById("projects");
    const projectList = projectSection.querySelector("ul");

    for (let i = 0; i < repositories.length; i++) {

      const project = document.createElement("li");

      project.innerText = repositories[i].name;

      projectList.appendChild(project);
    }

  })
  .catch(function(error) {
    console.error("Error fetching repos:", error);
  });
