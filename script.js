const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.work-card');

filters.forEach(btn => btn.addEventListener('click', () => {
  filters.forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const filter = btn.dataset.filter;
  cards.forEach(card => {
    const match = filter === 'all' || card.dataset.category === filter;
    card.style.display = match ? '' : 'none';
  });
}));

const modal = document.getElementById('workModal');
const modalImage = document.getElementById('modalImage');
const modalCategory = document.getElementById('modalCategory');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');

cards.forEach(card => card.addEventListener('click', () => {
  const img = card.querySelector('img');
  const span = card.querySelector('.work-info span');
  const title = card.querySelector('.work-info h3');
  modalImage.src = img.src;
  modalImage.alt = img.alt;
  modalCategory.textContent = span.textContent;
  modalTitle.textContent = title.textContent;
  modalDescription.textContent = card.dataset.description || '';
  modal.classList.add('open');
  document.body.classList.add('modal-open');
}));

document.querySelector('.modal-close').addEventListener('click', () => {
  modal.classList.remove('open');
  document.body.classList.remove('modal-open');
});
modal.addEventListener('click', e => {
  if(e.target === modal){
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
  }
});
document.addEventListener('keydown', e => {
  if(e.key === 'Escape'){
    modal.classList.remove('open');
    document.body.classList.remove('modal-open');
  }
});

const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => {
  const nav = document.querySelector('.site-header nav');
  const open = nav.style.display === 'flex';
  nav.style.display = open ? '' : 'flex';
  nav.style.position = 'absolute';
  nav.style.right = '4vw';
  nav.style.top = '65px';
  nav.style.flexDirection = 'column';
  nav.style.background = '#111';
  nav.style.padding = '18px 22px';
  nav.style.border = '1px solid #333';
});
