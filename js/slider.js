var mySwiper = new Swiper('.swiper-container', {
	spaceBetween: 10,
	slidesPerView: 3,
    slidesOffsetBefore: 50,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true
	}
});