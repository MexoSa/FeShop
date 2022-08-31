
function trackScroll() {
   let scrolled = window.pageYOffset;
   let coords = '200';
   if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
   }
   if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
   }
}

function backToTop() {
   if (window.pageYOffset > 0) {
      window.scrollBy({
         top: -window.pageYOffset,
         behavior: 'smooth'
      });
   }
}

const goTopBtn = document.querySelector('.back_to_top');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);
