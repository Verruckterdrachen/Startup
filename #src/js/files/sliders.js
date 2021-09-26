//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');

			if (slider.classList.contains('_swiper_scroll')) {
				let sliderScroll = document.createElement('div');
				sliderScroll.classList.add('swiper-scrollbar');
				slider.appendChild(sliderScroll);
			}
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
	for (let index = 0; index < sliderScrollItems.length; index++) {
		const sliderScrollItem = sliderScrollItems[index];
		const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
		const sliderScroll = new Swiper(sliderScrollItem, {
			observer: true,
			observeParents: true,
			direction: 'vertical',
			slidesPerView: 'auto',
			freeMode: true,
			scrollbar: {
				el: sliderScrollBar,
				draggable: true,
				snapOnRelease: false
			},
			mousewheel: {
				releaseOnEdges: true,
			},
		});
		sliderScroll.scrollbar.updateSize();
	}
}


function sliders_bild_callback(params) { }

if (document.querySelector('.slider-about__body')) {
	let aboutSlider = new Swiper('.slider-about__body', {
		slidesPerGroup: 1,
		spaceBetween: 30,
		watchOverflow: true,
		loop: true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		speed: 1000,
		navigation: {
			nextEl: '.slider-about .slider-arrow_next',
			prevEl: '.slider-about .slider-arrow_prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1.3,
			},
			480: {
				slidesPerView: 2.3,
			},
			768: {
				slidesPerView: 3.3,
			},
			992: {
				slidesPerView: 4,
			},
		}
	});
}

if (document.querySelector('.slider-clients__body')) {
	let clientsSlider = new Swiper('.slider-clients__body', {
		slidesPerView: 1,
		slidesPerGroup: 1,
		spaceBetween: 0,
		watchOverflow: true,
		loop: true,
		parallax: true,
		/*autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},*/
		speed: 1000,
		pagination: {
			el: '.slider-clients__bullets',
			clickable: true,
			bulletClass: 'slider-clients__bullet',
			bulletActiveClass: 'slider-clients__bullet_active'
		},
	});
}
