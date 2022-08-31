if (document.querySelector('.poster__slider')) {
   let dots = document.querySelectorAll(".slider__dots span");
   const prevBtn = document.querySelector('.slider__prevBtn');
   const nextBtn = document.querySelector('.slider__nextBtn');

   let slideIndex = 1;
   showSlides(slideIndex);

   function plusSlide() {
      showSlides(slideIndex += 1);
   }

   function minusSlide() {
      showSlides(slideIndex -= 1);
   }

   function currentSlide(n) {
      showSlides(slideIndex = n);
   }

   function showSlides(n) {
      let i;
      let slides = document.querySelectorAll(".slider__item");
      if (n > slides.length) {
         slideIndex = 1
      }
      if (n < 1) {
         slideIndex = slides.length
      }
      for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
   }

   prevBtn.addEventListener('click', () => {
      minusSlide();
   })

   nextBtn.addEventListener('click', () => {
      plusSlide();
   })

   dots.forEach((dote, index) => {
      dote.addEventListener('click', () => {
         currentSlide(index + 1);
      })
   })
}
