// ============================================================
//  WORK PAGE — work.js
//  Filter functionality
// ============================================================

const filterBtns = document.querySelectorAll('.filter-btn');
const workCards = document.querySelectorAll('.work-card');
const workSections = document.querySelectorAll('.work-section');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    if (filter === 'all') {
      workCards.forEach(card => card.classList.remove('hidden'));
      workSections.forEach(section => section.style.display = '');
    } else {
      workCards.forEach(card => {
        card.classList.toggle('hidden', card.dataset.filter !== filter);
      });
      workSections.forEach(section => {
        const visible = section.querySelectorAll('.work-card:not(.hidden)').length;
        section.style.display = visible === 0 ? 'none' : '';
      });
    }
  });
});