document.addEventListener("DOMContentLoaded", () => {

  // --- 🌙 Tema oscuro persistente ---
  const checkbox = document.getElementById('checkbox');
  const body = document.body;
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'dark') {
    body.classList.add('dark');
    if (checkbox) checkbox.checked = true;
  }

  if (checkbox) {
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  // --- Solo ejecutar pestañas en menu.html ---
  if (window.location.pathname.includes("menu.html")) {
    const tabButtons = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    if (tabButtons.length && tabContents.length) {
      tabButtons.forEach(button => {
        button.addEventListener("click", () => {
          tabButtons.forEach(btn => btn.classList.remove("active"));
          tabContents.forEach(content => content.classList.remove("active"));

          button.classList.add("active");
          const target = button.getAttribute("data-tab");
          const targetContent = document.getElementById(target);

          if (targetContent) {
            targetContent.classList.add("active");
          }
        });
      });
    }
  }
});
