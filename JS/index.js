const overlay    = document.getElementById('modal-overlay');
const closeBtn   = document.getElementById('modal-close');
const imgZone    = document.getElementById('modal-image-zone');
const modalImg   = document.getElementById('modal-img');
const modalDate  = document.getElementById('modal-date');
const modalTitle = document.getElementById('modal-title');
const modalText  = document.getElementById('modal-content');


function openModal(el) {
    const titre   = el.dataset.titre   || '';
    const contenu = el.dataset.contenu || '';
    const date    = el.dataset.date    || '';
    const img     = el.dataset.img     || '';
    const bg      = el.dataset.bg      || '#272731';

    modalTitle.textContent = titre;
    modalText.textContent  = contenu;
    modalDate.textContent  = date;


    if (img) {
        modalImg.src             = img;
        modalImg.style.display   = 'block';
        imgZone.style.background = 'none';
    } else {
        modalImg.style.display   = 'none';
        imgZone.style.background = bg;
    }

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}


document.querySelectorAll('.Actu-case-gauche, .Actu-case-millieu, .Actu-case-droite')
    .forEach(carte => carte.addEventListener('click', () => openModal(carte)));

closeBtn.addEventListener('click', closeModal);


overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
});


document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});
