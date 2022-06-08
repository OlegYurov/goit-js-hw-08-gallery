const galleryItems = [
  {
    preview:
      'images/pexels-andy-vu-3244513_340.jpg',
    original:
      'images/andy-vu-3244513_1280.jpg',
    description: 'andy-vu',
  },
  {
    preview:
      'images/pexels-eberhard-grossgasteiger-572897_340.jpg',
    original:
      'images/eberhard-grossgasteiger-572897_1280.jpg',
    description: 'Горы, покрытые снегом под звездой',
  },
  {
    preview:
      'images/pexels-frans-van-heerden-624015_340.jpg',
    original:
      'images/frans-van-heerden-624015_1280.jpg',
    description: 'Северное сияние',
  },
  {
    preview:
      'images/pexels-luis-del-río-15286_340.jpg',
    original:
      'images/luis-del-río-15286_1280.jpg',
    description: 'Человек идет между зелеными лесными деревьями',
  },
  {
    preview:
      'images/pexels-asad-photo-maldives-3293148_340.jpg',
    original:
      'images/pexels-asad-photo-maldives-3293148_1280.jpg',
    description: 'Силуэт человека на качелях',
  },
  {
    preview:
      'images/pexels-evgeny-tchebotarev-4101555_1280.jpg',
    original:
      'images/pexels-evgeny-tchebotarev-4101555_1280.jpg',
    description: 'Фотография горы под пасмурным небом',
  },
  {
    preview:
      'images/pexels-jeremy-bishop-2422915_340.jpg',
    original:
      'images/pexels-jeremy-bishop-2422915_1280.jpg',
    description: 'Фото стручка дельфинов',
  },
  {
    preview:
      'images/pexels-sam-kolder-2387873_340.jpg',
    original:
      'images/pexels-sam-kolder-2387873_1280.jpg',
    description: 'Трое мужчин, стоящих у водопадов',
  },
  {
    preview:
      'images/pexels-stein-egil-liland-3408744_340.jpg',
    original:
      'images/stein-egil-liland-3408744_1280.jpg',
    description: 'Живописный вид на заснеженные горы ночью',
  },
];
/* 
<li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li> */

const refs = {
  galleryEl: document.querySelector('.js-gallery'),
  pictureCards: createPictureCard(galleryItems),
  modalOpen: document.querySelector('.lightbox'),
  modalImg: document.querySelector("img.lightbox__image"),
  closeModalBtn: document.querySelector('button[data-action="close-lightbox"]'),
  modalOverlay: document.querySelector('.lightbox__overlay'),
}
refs.galleryEl.insertAdjacentHTML('beforeend', refs.pictureCards);

refs.galleryEl.addEventListener('click', onGalleryElClick);

refs.closeModalBtn.addEventListener('click', onBtnCloseModal);
refs.modalOverlay.addEventListener('click', onModalOverlay);
window.document.addEventListener("keydown", onEscapeCloseModal);

function createPictureCard(pictures) {
  return  pictures.map(({ preview, original, description }) => {
    return `
    <li class="gallery__item">
    
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      
    </li>`;
  })
    .join('');
     
}

function onGalleryElClick(e) {
  
  if (!e.target.classList.contains('gallery__image')) {
    return
  }
  refs.modalImg.src = e.target.dataset.source;
  refs.modalOpen.classList.add('is-open');
  console.log(e.target.dataset.source);
}

function onBtnCloseModal(e) {
  refs.modalOpen.classList.remove('is-open');
  refs.modalImg.src = '';
}

function onModalOverlay(e) {
  refs.modalOpen.classList.remove('is-open');
}

function onEscapeCloseModal(e) {
  const checkClass = refs.modalOpen.classList.contains('is-open')
  if(checkClass && e.key === 'Escape')
  refs.modalOpen.classList.remove('is-open');
}