document.addEventListener('DOMContentLoaded', () => {

  const followCursor = () => { 
    const el = document.querySelector('.follow-cursor') 

    window.addEventListener('mousemove', e => {
      const target = e.target 
      if (!target) return

      if (target.closest('a') || target.closest('button')) { 
        el.classList.add('follow-cursor_active') 
      } else {
        el.classList.remove('follow-cursor_active') 
      }

      el.style.left = e.pageX + 'px' 
      el.style.top = e.pageY + 'px' 
    })
  }

  followCursor() 

})

/**/ 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


