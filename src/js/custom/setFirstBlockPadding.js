export default function setFirstBlokPadding() {
  const header = document.querySelector('.js-first-block--header');
  const element = document.querySelector('.js-first-block');
  if (header && element) {
    element.style.paddingTop = header.clientHeight + "px";
  }
}