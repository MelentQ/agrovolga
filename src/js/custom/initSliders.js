import gsap from 'gsap';
import {Swiper, Navigation} from "swiper";

Swiper.use([Navigation]);

export default function initSliders() {
  const sliders = Array.from(document.querySelectorAll('.js-init-slider'));
  sliders.forEach(slider => {
    let settings = {};
    let delay = null;

    if (slider.dataset.settings) {
      settings = eval(slider.dataset.settings);
    }
    if (slider.dataset.delay) {
      delay = Number(slider.dataset.delay);
    }

    if (settings) {
      const nextBtn = slider.querySelector('.js-init-slider-btn-next');
      const prevBtn = slider.querySelector('.js-init-slider-btn-prev');

      const swiper = new Swiper(slider.querySelector('.swiper'), {
        ...settings,
        navigation: {
          nextEl: nextBtn,
          prevEl: prevBtn,
        }
      });

      // Управление автоплеем
      // Управление анимацией кнопки "Врепед"
      
      if(delay) {
        const btnAnimatedLine = document.querySelector('#slider-next-line');

        const animation = gsap.timeline();

        function initLineAnimation() {
          animation.clear();
          animation.eventCallback('onComplete', null);
          animation.fromTo(btnAnimatedLine, {
              strokeDashoffset: 125.6,
            }, {
              ease: "none",
              strokeDashoffset: 0,
              duration: delay/1000,
            }
          );
          animation.eventCallback('onComplete', () => {
            if(swiper.isEnd) {
              swiper.slideTo(0);
            }
            else {
              swiper.slideNext();
            }
          });
        }

        swiper.on('slideChangeTransitionStart', () => {
          initLineAnimation();
        })

        initLineAnimation();
      } else {
        // Если автоплей отключен, то делаем кнопку "Следующий слайд" с прозрачностью 1
        document.querySelector('#slider-next-circle').style.opacity = 1;
      }

    } else {
      console.warn(`Для слайдера [${slider.classList}] добавьте обязательные атрибуты: data-settings (Имя переменной с объектом настроек) и data-delay (задержка автовоспроизведения в миллисекундах).`)
    }
  })
}