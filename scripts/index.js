const myBurger = document.getElementById('burger');
const overlay = document.getElementById('mobile-menu');
const handleBurgerClick = () => {
	myBurger.classList.toggle('close');
	overlay.classList.toggle('overlay');
};
myBurger.addEventListener('click', handleBurgerClick);

const preventScroll = (e) => {
	e.preventDefault();
	e.stopPropagation();

	return false;
};

overlay.addEventListener('wheel', preventScroll, { passive: false });

const swiper = new Swiper('.swiper', {
	loop: true,
	autoplay: {
		delay: 2000,
	},
});

const gallery = new Swiper('#mobile-gall', {
	loop: true,
	spaceBetween: 30,
	lazyLoading: true,
	slidesPerView: 'auto',
});

const carousel = document.getElementById('carousel');
const nextButton = document.querySelector("[data-action='slideRight']");

nextButton.addEventListener('click', () => {
	carousel.scrollBy(620, 0);
});

const getYear = () => {
	return new Date().getFullYear();
};

const footerCopy = document.getElementById('copywrite');

footerCopy.innerHTML = getYear();
