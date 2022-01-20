import '../libs/hystmodal.min.js';

export default function initModals() {
  const hystmodal = new HystModal({
      linkAttributeName: "data-hystmodal",
      afterClose: function(modal){
        if (modal.openedWindow.id == "video-modal") {
          // Возможно, можно лучше
          modal.openedWindow.querySelector('iframe').src = "";
        }
      }
  });

  initVideoModals();
}

function initVideoModals() {
  const videoModal = document.querySelector('#video-modal');
  const iframe = videoModal.querySelector('iframe');

  const openBtns = Array.from(document.querySelectorAll('.js-open-video-modal'));
  openBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      iframe.src = `https://www.youtube.com/embed/${btn.dataset.videoCode}?autoplay=1&rel=0`
    })
  })
}