const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");
const links = document.querySelectorAll('nav ul li a');

for(const element of toggle){
    element.addEventListener('click', function(){
        nav.classList.toggle('show');
    })
}

for(const link of links){
    link.addEventListener('click', function(){
        nav.classList.remove('show');
    })
}


function listnerEventScroll(){
    const header = document.querySelector("#header");
    const navHeight = header.offsetHeight;
    const backToTopButton= document.querySelector('.back-to-top');

    if(window.scrollY >= navHeight){
        header.classList.add('scroll-shadow');
    }else{
        header.classList.remove('scroll-shadow');
    }

    if(this.window.scrollY >= 560){
        backToTopButton.classList.add('show')
    }else{
        backToTopButton.classList.remove('show')
    }
}

const sections = document.querySelectorAll('main section[id]');
function ativeMenu(){
    const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4;
    for(const section of sections){
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        const checkpointStart = checkpoint >= sectionTop;
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight;

        if(checkpointStart && checkpointEnd){
            document.querySelector('nav ul li a[href*='+sectionId+']')
            .classList.add('active');
        }else{
            document.querySelector('nav ul li a[href*='+sectionId+']')
            .classList.remove('active');
        }

    }
}

const swiper = new Swiper(".swiper ", {
    speed: 400,
    spaceBetween: 10,
    slidesPerView: 1,
    //effect: 'slide' | 'custom' | 'fade' | 'cube' | 'coverflow' | 'flip',
    pagination: {
      el: ".swiper-pagination"
    },
    //mousewheel: true,
    keyboard: true,
    breakpoints:{
        767:{
            slidesPerView: 2,
            setWrapperSize: true
        }, 640: {
        slidesPerView: 1,
      }
    }
  });
  //swiper.init();
  //swiper.slideNext();

  const scrollReveal = ScrollReveal({
      origin: 'top',
      distance: '30px',
      duration: 700,
      reset: true
  });
  
  scrollReveal.reveal(`
    #home .image, #home .text,
    #about .image, #about .text,
    #contributors .contributor,
    #services header, #services .card,
    #testimonial header, #testimonials .testimonials
    #contact .text, #contact .links,
    #map .text,
    footer .brand, footer .social
  `, {interval: 100});

  window.addEventListener('scroll', function(){
    listnerEventScroll();
    ativeMenu();
})