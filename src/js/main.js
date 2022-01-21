// import polyfills from './build-in/polyfills';
import './build-in/lazyload';
import detectTouch from './build-in/detectTouch';
import setScrollbarWidth from './build-in/setScrollbarWidth';
// import validation from './build-in/validation';
// import customSelects from './build-in/customSelects';
// import masks from './build-in/masks';
// import fileUpload from './build-in/fileUpload';
import anchorLinks from './build-in/anchorLinks';
// import mediaPlayer from './build-in/mediaPlayer';
// import datepicker from './build-in/datepicker';
// import accordions from './build-in/accordions';
// import modals from './build-in/modals';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import editableTextContainer from './custom/editableTextContainer';
import set100vh from './custom/set100vh';
import setFirstBlokPadding from './custom/setFirstBlockPadding';
import initSliders from './custom/initSliders';
import fix from './custom/fix';
import initModals from './custom/initModals';
import initAnimations from './custom/initAnimations';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', function () {
    // polyfills();
    detectTouch();
    setScrollbarWidth();
    // validation();
    // customSelects();
    // masks();
    // fileUpload();
    anchorLinks();
    // accordions();
    // mediaPlayer();
    // modals();
    // datepicker();

    // custom

    editableTextContainer();
    set100vh();
    setFirstBlokPadding();
    initSliders();
    fix();
    initModals();
    initAnimations();
});

document.addEventListener('lazyloaded', () => {
    ScrollTrigger.refresh();
});

window.addEventListener('load', function () {
    document.body.classList.add('loaded');
    ScrollTrigger.refresh();
    setTimeout(() => document.body.classList.add('animatable'), 300);
});
