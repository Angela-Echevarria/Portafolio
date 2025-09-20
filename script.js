const hamburguesa = document.getElementById('hamburguesa');
const menuMobile = document.getElementById('menuMobile');

// Abrir/Cerrar menú
function toggleMenu(ev) {
  ev.stopPropagation();
  const isOpen = menuMobile.classList.toggle('show');
  hamburguesa.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  menuMobile.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
}

// Cerrar menú
function closeMenu() {
  if (menuMobile.classList.contains('show')) {
    menuMobile.classList.remove('show');
    hamburguesa.setAttribute('aria-expanded', 'false');
    menuMobile.setAttribute('aria-hidden', 'true');
  }
}

// Eventos
hamburguesa.addEventListener('click', toggleMenu);

// Cerrar al hacer click en un link
menuMobile.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (link) {
    setTimeout(closeMenu, 50); // Pequeño delay para que navegue
  }
});

// Cerrar si click afuera
document.addEventListener('click', (e) => {
  if (!menuMobile.contains(e.target) && !hamburguesa.contains(e.target)) {
    closeMenu();
  }
});

// Cerrar con Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeMenu();
});

// Cerrar al redimensionar a escritorio
window.addEventListener('resize', () => {
  if (window.innerWidth > 535) closeMenu();
});