// main.js

// Sidebar toggle
const burger = document.querySelector('.burger');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-sidebar');

burger.addEventListener('click', () => {
  sidebar.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('open');
});

// Optional: close sidebar when clicking outside
window.addEventListener('click', (e) => {
  if (e.target === sidebar) {
    sidebar.classList.remove('open');
  }
});
