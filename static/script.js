document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("mode-toggle");

  if (!toggleButton) return;

  // Load saved theme (default = dark)
  const savedTheme = localStorage.getItem("theme") || "dark";

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    toggleButton.textContent = "☀️";
    toggleButton.setAttribute("aria-label", "Switch to Dark Mode");
  } else {
    document.body.classList.remove("light-mode");
    toggleButton.textContent = "🌙";
    toggleButton.setAttribute("aria-label", "Switch to Light Mode");
  }

  // Toggle on click
  toggleButton.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light-mode");

    if (isLight) {
      toggleButton.textContent = "☀️";
      toggleButton.setAttribute("aria-label", "Switch to Dark Mode");
      localStorage.setItem("theme", "light");
    } else {
      toggleButton.textContent = "🌙";
      toggleButton.setAttribute("aria-label", "Switch to Light Mode");
      localStorage.setItem("theme", "dark");
    }
  });
});
