// Hamburger Menu
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');
let isOpen = false;

menuBtn.onclick = () => {
  isOpen = !isOpen;
  menu.classList.toggle('show');
  menuBtn.innerHTML = isOpen ? '<i class="fa fa-times"></i>' : '<i class="fa fa-bars"></i>';
};

// Search Filter
const searchInput = document.getElementById('searchInput');
const floatingSearchInput = document.getElementById('floatingSearchInput');
const products = document.querySelectorAll('.product');

function filterProducts(term) {
  term = term.toLowerCase().trim();
  products.forEach(product => {
    const name = product.querySelector('.product-name').textContent.toLowerCase();
    product.style.display = name.includes(term) ? 'block' : 'none';
  });
}

if (searchInput) searchInput.addEventListener('input', e => filterProducts(e.target.value));
if (floatingSearchInput) floatingSearchInput.addEventListener('input', e => filterProducts(e.target.value));

// Close menu on outside click
document.addEventListener('click', e => {
  if (!menu.contains(e.target) && !menuBtn.contains(e.target) && isOpen) {
    isOpen = false;
    menu.classList.remove('show');
    menuBtn.innerHTML = '<i class="fa fa-bars"></i>';
  }
});
