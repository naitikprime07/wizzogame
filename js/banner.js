

var mySwiper = new Swiper ('.swiper', {
	loop: true, 
    direction: 'horizontal',
    autoplay: true,
    speed: 1000,
    slidesPerView: window.innerWidth>960?3:1,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  })        




