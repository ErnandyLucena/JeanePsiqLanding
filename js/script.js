        const carousel = document.getElementById('carousel');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
      
        let index = 0;
        const totalCards = 8; // Número total de cards
        const cardWidth = 288; // Largura de cada card (w-64 é 16rem, ou 256px, adicionei o margin m-4 que é 1rem)
      
        // Função para ir para o próximo card
        nextBtn.addEventListener('click', () => {
          if (index < totalCards - 1) {
            index++;
            carousel.style.transform = `translateX(-${cardWidth * index + 16 * index}px)`; // Considerando o espaçamento entre os cards
          }
        });
      
        // Função para voltar ao card anterior
        prevBtn.addEventListener('click', () => {
          if (index > 0) {
            index--;
            carousel.style.transform = `translateX(-${cardWidth * index + 16 * index}px)`; // Considerando o espaçamento entre os cards
          }
        });

        const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar-default');

  // Adiciona um evento de clique ao botão de menu
  menuToggle.addEventListener('click', () => {
    // Alterna a visibilidade do menu
    navbar.classList.toggle('hidden');
  });