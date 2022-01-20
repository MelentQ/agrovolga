import gsap from 'gsap';

export default function initAnimations() {
  initIntroTitleAnimation();
  initIntroSliderAnimation();
}

function initIntroTitleAnimation() {
  const targetContainer = document.querySelector('.js-init-title-animation');

  const imageLine = targetContainer.querySelector('.intro__title-icon-container');

  if (targetContainer) {
    const timeline = gsap.timeline();
    timeline.to(targetContainer, {
      y: 0,
      opacity: 1,
      duration: 1,
      delay: 1
    })
    timeline.to(imageLine, {
      x: 183,
      duration: 1.5,
    })
  }
}

function initIntroSliderAnimation() {
  const targetContainer = document.querySelector('.js-init-slider-animation');

  if  (targetContainer) {
    gsap.to(targetContainer, {
      opacity: 1,
      duration: 0.5,
      delay: 1
    })
  }
}