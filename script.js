jQuery(document).ready(function($) {
	var $counter = $('.intro-counter'),
			counter = 1,
			timerId = setInterval(countDown, 800);
	
	function countDown() {
		if (counter > 0) {
			$counter.text(counter--);
		} else {
			clearInterval(timerId);
			$('.intro').fadeOut();
			$('body').removeClass('locked');
		}
	}
});

const listaImage = [
	"pics/1.jpg",
	"pics/2.jpg",
	"pics/3.jpg",
	"pics/4.jpg",
	"pics/5.jpg",
	"pics/1.jpg",
	"pics/2.jpg",
	"pics/3.jpg",
	"pics/4.jpg",
	"pics/5.jpg",
	"pics/6.jpg",
	"pics/7.jpg",
	"pics/8.jpg",
	"pics/9.jpg"

	
];

let html = '<div class="swiper-container">';
html += '<div class="swiper-wrapper">';

for (let i = 0; i < listaImage.length; i++) {
	html += "<div class='swiper-slide'>";
	html += "<div class='picture'>";
	html += `<img src="${listaImage[i]}">`;
	html += "</div>";
	html += "</div>";
}
html += "</div>";
html += "</div>";

document.getElementById("slide").innerHTML += html;
//document.body.innerHTML += html;

const swiper = new Swiper(".swiper-container", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	coverflowEffect: {
		rotate: 20,
		stretch: 0,
		depth: 200,
		modifier: 1,
		slideShadows: true
	},
	loop: true,
	autoplay: {
		delay: 1500,
		disableOnInteraction: false
	}
});


