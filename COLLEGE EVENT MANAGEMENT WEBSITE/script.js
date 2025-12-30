
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registrationForm");
  const message = document.getElementById("message");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const event = document.getElementById("event").value;

      if (name === "" || email === "" || event === "") {
        message.textContent = " Please fill all fields.";
        message.style.color = "red";
      } else {
        message.textContent = ` Thank you, ${name}! You are registered for ${event}.`;
        message.style.color = "green";
        form.reset();
      }
    });
  }
}); 

const themeToggle = document.getElementById("themeToggle");


if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = " Light Mode";
}

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      themeToggle.textContent = " Light Mode";
      localStorage.setItem("theme", "dark");
    } else {
      themeToggle.textContent = " Dark Mode";
      localStorage.setItem("theme", "light");
    }
  });
}
