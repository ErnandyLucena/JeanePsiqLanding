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

const form = document.getElementById('contatoForm');
const popup = document.getElementById('popupSucesso');
const fecharPopup = document.getElementById('fecharPopup');

// Quando o formulário for enviado
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Impede o envio do formulário real

  // Exibe o popup de sucesso
  popup.classList.remove('hidden'); // Remove a classe 'hidden' para mostrar o popup
});

// Quando o botão de fechar for clicado
fecharPopup.addEventListener('click', function() {
  popup.classList.add('hidden'); // Oculta o popup
  form.reset(); // Limpa o formulário
});