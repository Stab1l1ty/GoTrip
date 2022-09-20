//Carousel

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
  });
const owl = $('.owl-carousel');
owl.owlCarousel({
    // нам нужна опция как center:true, чтобы центрировать элемент, и к тому элементу, который отцентрирован, будут применяться спец. классы, по этому классу, мы будем делать активкую картинку больше
    center: true,
    loop: true, // чтобы перемещать картинки, ну т.к у нас активная картинка стартует с центра, тогда это св-ва нам не нужно и пишем старт позишн 1    
    margin: 20,  //отступы между слайдами
    startPosition: 0,  // т.к индексы с нуля, то это картинка №2
    items: 1,  //3 слайда за раз, это значение по умолчанию
    responsive: {
        540: {
            items: 3,
            startPosition: 1,
        },
        
        850: {
            items: 3,
            startPosition: 1,
        },

		1200: {
            items: 3,
			margin: 30,
		},
	},
});
$('.slider__btn--prev').click(function() {
    owl.trigger('prev.owl.carousel');
})
$('.slider__btn--next').click(function() {
    owl.trigger('next.owl.carousel');
})

// Nav_icon
const navBtn = document.querySelector('.nav__toggle');
const nav = document.querySelector('.nav');
const menuIcon = document.querySelector('.menu-icon');

navBtn.onclick = function(){
    nav.classList.toggle('nav--mobile')
    menuIcon.classList.toggle('menu-icon--active');
    document.body.classList.toggle('no-scroll');
}