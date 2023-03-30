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

const carousel = document.querySelector("[data-target='carousel']");
const carouselItem = carousel.querySelector("[data-target='carousel-item']");
const rightButton = document.querySelector("[data-action='slideRight']");

const carouselWidth = carousel.offsetWidth;
const cardStyle = carouselItem.currentStyle || window.getComputedStyle(carouselItem);
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);

const cardCount = carousel.querySelectorAll("[data-target='carousel-item']").length;

let offset = 0;
// const maxX = -((cardCount / 3) * carouselWidth + cardMarginRight * (cardCount / 3) - carouselWidth - cardMarginRight);
const maxOffset = 0;

rightButton.addEventListener('click', function () {
	console.log(offset);
	if (offset !== maxOffset) {
		offset -= carouselWidth + cardMarginRight;
		carousel.style.transform = `translateX(${offset}px)`;
	}
});
const getYear = () => {
	return new Date().getFullYear();
};

const footerCopy = document.getElementById('copywrite');

footerCopy.innerHTML = getYear();
