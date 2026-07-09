document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            
            // Едноставна анимација за хамбургер иконата
            const spans = menuToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });
    }

    // Затвори го менито кога ќе се кликне на некој линк
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
        });
    });
});




// script.js - Финализиран и тестиран код за отворање на мобилното мени

document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.querySelector('.burger-btn');
  const body = document.body;
  const navLinks = document.querySelectorAll('.main-nav a');

  // 1. Спремно отворање и затворање на бургер менито при клик
  if (burgerBtn) {
    burgerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation(); // Спречува кликот да премине на документот
      
      // Ја додава или вади класата која го контролира SCSS оверлејот
      body.classList.toggle('nav-active');
    });
  }

  // 2. Автоматски затвори го менито кога корисникот ќе избере и кликне линк
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      body.classList.remove('nav-active');
    });
  });

  // 3. UX Бонус: Ако менито е отворено, клик било каде на празен простор надвор од него го затвора
  document.addEventListener('click', (e) => {
    if (body.classList.contains('nav-active')) {
      const isClickInsideNav = e.target.closest('.main-nav');
      const isClickInsideBtn = e.target.closest('.burger-btn');
      
      if (!isClickInsideNav && !isClickInsideBtn) {
        body.classList.remove('nav-active');
      }
    }
  });
});

// Додај го ова внатре во твојот DOMContentLoaded во script.js
const mobileNav = document.querySelector('.main-nav');

if (mobileNav) {
  mobileNav.addEventListener('click', (e) => {
    // Проверува дали е кликнато на самиот крај каде што се наоѓа корисничкиот ::after елемент
    if (e.target === mobileNav && e.offsetY > mobileNav.clientHeight - 100) {
      document.body.classList.remove('nav-active');
      
      // Скролај до контакт формата
      const contactSection = document.querySelector('.contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
}









document.addEventListener('DOMContentLoaded', () => {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Прво затвори ги сите други отворени прашања (Accordion ефект)
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-answer').style.maxHeight = null;
      });

      // Ако не беше активно, отвори го моменталното
      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
});