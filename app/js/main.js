const modalTrigger = document.querySelectorAll('[data-modal]'),
	modal = document.querySelector('.modal'),
	modalCloseBtn = document.querySelector('#closeModal');




function openModal() {
	modal.classList.add('show');
	modal.classList.remove('hide');
	document.body.style.overflow = 'hidden';
}

modalTrigger.forEach(btn => {
	btn.addEventListener('click', openModal);
});

function closeModal() {
	modal.classList.add('hide');
	modal.classList.remove('show');
	document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
	if (e.target === modal) {
		closeModal();
	}
});

document.addEventListener('keydown', (e) => {
	if (e.code === "Escape") {
		closeModal();
	}
});


(function stickyBlock(id = "header") {
	const block = document.getElementById(id),
		sticky = block.getBoundingClientRect().height;

	window.addEventListener('scroll', () => {
		stickyClass();
	});

	function stickyClass() {
		const pageTop = window.pageYOffset;

		if (pageTop > sticky) {
			block.classList.add("sticky");
		} else {
			block.classList.remove("sticky");
		}
	}
})();


const closeWarning = document.querySelector('[data-close]');
const protected = document.querySelector('.protected');


function closeProtected() {
	protected.classList.add('hide');
}

closeWarning.addEventListener('click', closeProtected);

(function () {
	const burgerItem = document.querySelector('.burger');
	const menu = document.querySelector('.menu');
	const menuClose = document.querySelector('.header__nav-close');
	const linkClose = document.querySelector('.header__link1');
	const linkClose2 = document.querySelector('.header__link2');
	const linkClose3 = document.querySelector('.header__link3');
	const linkClose4 = document.querySelector('.header__link4');

	burgerItem.addEventListener('click', () => {
		menu.classList.add("header-nav--active");

	});
	menuClose.addEventListener('click', () => {
		menu.classList.remove("header-nav--active");

	});
	linkClose.addEventListener('click', () => {
		menu.classList.remove("header-nav--active");

	});
	linkClose2.addEventListener('click', () => {
		menu.classList.remove("header-nav--active");

	});
	linkClose3.addEventListener('click', () => {
		menu.classList.remove("header-nav--active");

	});
	linkClose4.addEventListener('click', () => {
		menu.classList.remove("header-nav--active");

	});
}());