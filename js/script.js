        const carousel = document.getElementById('carousel');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
      
        let index = 0;
        const totalCards = 8; 
        const cardWidth = 288; 
      
       
        nextBtn.addEventListener('click', () => {
          if (index < totalCards - 1) {
            index++;
            carousel.style.transform = `translateX(-${cardWidth * index + 16 * index}px)`; 
          }
        });
      
     
        prevBtn.addEventListener('click', () => {
          if (index > 0) {
            index--;
            carousel.style.transform = `translateX(-${cardWidth * index + 16 * index}px)`; 
          }
        });

        const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar-default');


  menuToggle.addEventListener('click', () => {
  
    navbar.classList.toggle('hidden');
  });
