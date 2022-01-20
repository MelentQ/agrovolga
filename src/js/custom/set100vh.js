export default function set100vh() {
  const elements = Array.from(document.querySelectorAll('.js-set-100-vh'));
  elements.forEach(element => {
    element.style.height = document.documentElement.clientHeight + "px";
  })
}