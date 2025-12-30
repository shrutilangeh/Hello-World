
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
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const message = document.getElementById("message");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const event = document.getElementById("event").value;

      try {
        const response = await fetch("/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name, email, event })
        });

        const result = await response.json();

        if (response.ok) {
          message.style.color = "green";
          message.textContent = result.message;
          form.reset();
        } else {
          message.style.color = "red";
          message.textContent = result.message;
        }
      } catch (error) {
        message.style.color = "red";
        message.textContent = "Server error!";
      }
    });
  }
}); }); 

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

const timerElement = document.getElementById("timer");
const eventDate = new Date("November 20, 2025 10:00:00").getTime();

if (timerElement) {
  const countdown = setInterval(function () {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
      clearInterval(countdown);
      timerElement.textContent = "🎉 Tech Fest 2025 is Live Now!";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }, 1000);
}

