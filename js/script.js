const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar-default');
const navLinks = document.querySelectorAll('.nav-link');

// Abre e fecha o menu ao clicar no botão
menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('hidden');
});

// Fecha o menu ao clicar em qualquer item de navegação
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.add('hidden');
  });
});
