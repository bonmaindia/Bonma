// Mobile Menu Logic
function setupMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });
  }
}

// Navbar Scroll Effect
function setupNavbarScroll() {
  const nav = document.getElementById('main-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        nav.classList.add('bg-white', 'shadow-md', 'py-2');
        nav.classList.remove('bg-transparent', 'py-4');
      } else {
        nav.classList.remove('bg-white', 'shadow-md', 'py-2');
        nav.classList.add('bg-transparent', 'py-4');
      }
    });
  }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', () => {
  setupMobileMenu();
  setupNavbarScroll();
  
  // Lucide Icons initialization
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
