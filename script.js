document.addEventListener('DOMContentLoaded', () => {
    const optionGroups = document.querySelectorAll('.options');
    optionGroups.forEach(group => {
      group.addEventListener('click', e => {
        if (e.target.classList.contains('option')) {
          group.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
          e.target.classList.add('selected');
        }
      });
    });
  
    const carousel = document.getElementById("carousel");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
  
    let currentIndex = 0;
  
    function updateCarousel() {
      const cardWidth = carousel.querySelector(".card").offsetWidth + 20;
      const screenWidth = window.innerWidth;
      const visibleCards = screenWidth <= 768 ? 1 : 3;
      carousel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }
  
    prevBtn.addEventListener("click", () => {
      const screenWidth = window.innerWidth;
      const shift = screenWidth <= 768 ? 1 : 3;
      if (currentIndex > 0) {
        currentIndex -= shift;
        updateCarousel();
      }
    });
  
    nextBtn.addEventListener("click", () => {
      const screenWidth = window.innerWidth;
      const shift = screenWidth <= 768 ? 1 : 3;
      const cards = carousel.querySelectorAll(".card").length;
      const maxIndex = cards - shift;
      if (currentIndex < maxIndex) {
        currentIndex += shift;
        updateCarousel();
      }
    });
  
    window.addEventListener("resize", updateCarousel);
    window.addEventListener("load", updateCarousel);
  
    let step = 1;
  
    function nextStep() {
      if (step < 3) {
        document.getElementById(`step${step}`).classList.remove('active');
        step++;
        document.getElementById(`step${step}`).classList.add('active');
      }
    }
  
    function prevStep() {
      if (step > 1) {
        document.getElementById(`step${step}`).classList.remove('active');
        step--;
        document.getElementById(`step${step}`).classList.add('active');
      }
    }
  
    window.nextStep = nextStep;
    window.prevStep = prevStep;
  
    window.sendWhatsApp = function () {
      const form = document.querySelector('#roofForms .selected')?.textContent || '';
      const comment = document.getElementById('comment').value;
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
  
      if (!form || !name || !phone) {
        alert('Пожалуйста, заполните все поля.');
        return;
      }
  
      const msg = `Здравствуйте!\nИмя: ${name}\nвид сайта: ${form}\nКомментарий: ${comment}`;
      const myPhone = '77086252008';
      const url = `https://wa.me/${myPhone}?text=${encodeURIComponent(msg)}`;
      window.open(url, '_blank');
    };
  });
  