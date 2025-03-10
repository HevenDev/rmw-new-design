// /***************************************************
// ==================== JS INDEX ======================
// ****************************************************
// 01. PreLoader Js
// 02.1. Nice Select Js
// 02.2. Data-bg
// 03. Menu Controls JS
// 04. Offcanvas Js
// 05. Search Js
// 06. Body overlay Js
// 07. Sticky Header Js
// 08. Smooth Scroll Js
// 09. Slider Activation Area
// 10. Section-title animation
// 11. Mouse move here
// 12. Button hover animation
// 13. Mouse Custom Cursor
// 14. hover reveal for image 
// 15. hover reveal for text
// 16. Scroll animation
// 17. Team Hover-animation
// 18. Start back to Top
// 19. MagnificPopup img view
// 20. MagnificPopup video view
// 21. Wow Js
// 22. Counter Js
// 23. Video Play Js
// 24. header height
// 25. Jquery Appear raidal
// 26. Blog Gallery Post Activation
// ****************************************************/

(function ($) {
	"use strict";

	var windowOn = $(window);
	////////////////////////////////////////////////////
	// 01. PreLoader Js
	windowOn.on('load', function () {
		$("#loading").fadeOut(500);
	});

	////////////////////////////////////////////////////
	// 02.1. Nice Select Js
	$('select').niceSelect();

	////////////////////////////////////////////////////
	// 02.2. Data-bg
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});

	////////////////////////////////////////////////////
	// 03. Menu Controls JS

	$('.tp-main__menu nav > ul > li').slice(-4).addClass('menu-last');

	if ($('.tp-main-menu-content').length && $('.tp-main-menu-mobile').length) {
		let navContent = document.querySelector(".tp-main-menu-content").outerHTML;
		let mobileNavContainer = document.querySelector(".tp-main-menu-mobile");
		mobileNavContainer.innerHTML = navContent;


		let arrow = $(".tp-main-menu-mobile .has-dropdown > a");

		arrow.each(function () {
			let self = $(this);
			let arrowBtn = document.createElement("BUTTON");
			arrowBtn.classList.add("dropdown-toggle-btn");
			arrowBtn.innerHTML = "<i class='far fa-angle-right'></i>";

			self.append(function () {
				return arrowBtn;
			});

			self.find("button").on("click", function (e) {
				e.preventDefault();
				let self = $(this);
				self.toggleClass("dropdown-opened");
				self.parent().toggleClass("expanded");
				self.parent().parent().addClass("dropdown-opened").siblings().removeClass("dropdown-opened");
				self.parent().parent().children(".tp-submenu").slideToggle();


			});

		});
	}

	////////////////////////////////////////////////////
	// 04. Offcanvas Js
	$(".tp-offcanvas-open-btn").on("click", function () {
		$(".tp-offcanvas__area").addClass("offcanvas-opened");
		$(".body-overlay").addClass("opened");
	});

	$(".tp-offcanvas-close-btn").on("click", function () {
		$(".tp-offcanvas__area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});

	////////////////////////////////////////////////////
	// 05. Search Js
	$(".tp-search-open-btn").on("click", function () {
		$(".tp-search-area").addClass("opened");
		$(".body-overlay").addClass("opened");
	});

	$(".tp-search-close-btn").on("click", function () {
		$(".tp-search-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 06. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".tp-offcanvas__area").removeClass("offcanvas-opened");
		$(".tp-search-area").removeClass("opened");
		$(".cartmini__area").removeClass("cartmini-opened");
		$(".tp-filter-offcanvas-area").removeClass("offcanvas-opened");
		$(".body-overlay").removeClass("opened");
	});


	////////////////////////////////////////////////////
	// 07. Sticky Header Js
	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#header-sticky").removeClass("header-sticky");
			$("#header-sticky-2").removeClass("header-sticky-2");
		} else {
			$("#header-sticky").addClass("header-sticky");
			$("#header-sticky-2").addClass("header-sticky-2");
		}
	});

	windowOn.on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$(".tp-side-menu-5").removeClass("sticky-active");
		} else {
			$(".tp-side-menu-5").addClass("sticky-active");
		}
	});

	////////////////////////////////////////////////////
	// 08. Smooth Scroll Js
	function smoothScroll() {
		$('.smooth a').on('click', function (event) {
			var target = $(this.getAttribute('href'));
			if (target.length) {
				event.preventDefault();
				$('html, body').stop().animate({
					scrollTop: target.offset().top - 120
				}, 1500);
			}
		});
	}
	smoothScroll();

	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax, ScrollToPlugin);
	gsap.config({
		nullTargetWarn: false,
	});

	////////////////////////////////////////////////////
	// 09. Slider Activation Area 

	// Home-1
	var mainSlider = new Swiper('.tp-slider-active', {
		slidesPerView: 1,
		spaceBetween: 30,
		loop: true,
		effect: 'fade',
		// Navigation arrows
		navigation: {
			nextEl: ".tp-slider-button-next",
			prevEl: ".tp-slider-button-prev",
		},
		pagination: {
			el: ".tp-slider-dot",
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + '<button>' + (index + 1) + '</button>' + "</span>";
			},
		},
	});

	mainSlider.on('slideChangeTransitionStart', function (realIndex) {
		if ($('.swiper-slide.swiper-slide-active, .tp-slider-item .is-light').hasClass('is-light')) {
			$('.tp-slider-variation').addClass('is-light');
		} else {
			$('.tp-slider-variation').removeClass('is-light');
		}
	});

	// brand 
	var BrandSlider = new Swiper('.tp-brand__active', {
		slidesPerView: 5,
		loop: true,
		autoplay: true,
		speed: 1500,
		centeredSlides: true,
		breakpoints: {
			'1200': {
				slidesPerView: 5,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	// Testimonial
	var TestiSlider = new Swiper('.tp-testimonial__active', {
		spaceBetween: 75,
		slidesPerView: 3,
		loop: true,
		autoplay: true,
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				spaceBetween: 30,
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	// Testimonial-2
	var Testi2Slider = new Swiper('.tp-testi__2-active', {
		spaceBetween: 30,
		slidesPerView: 1,
		loop: true,
		autoplay: true,
		speed: 1200,
		breakpoints: {
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
	});

	// Testimonial-3
	var Testi3Slider = new Swiper('.tp-testi__3-active', {
		spaceBetween: 30,
		slidesPerView: 1,
		loop: true,
		autoplay: true,
		speed: 1200,
		breakpoints: {
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		navigation: {
			prevEl: '.testi-3-prev',
			nextEl: '.testi-3-next',
		},
	});

	// Team-3
	var Team3Slider = new Swiper('.tp-team__3-active', {
		spaceBetween: 30,
		slidesPerView: 4,
		loop: true,
		autoplay: false,
		speed: 1200,
		breakpoints: {
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		navigation: {
			prevEl: '.team-prev',
			nextEl: '.team-next',
		},
	});

	// work 1
	var workSwiper = new Swiper('.tp-work__active', {
		speed: 1000,
		loop: true,
		slidesPerView: 1,
		spaceBetween: 30,
		autoplay: true,
		effect: 'slide',
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		pagination: {
			el: ".tp-pagination__dots",
			clickable: true,
		},
	});

	// work 2
	var workSwiper = new Swiper('.tp-work__2-active', {
		speed: 1000,
		loop: true,
		slidesPerView: 3,
		spaceBetween: 0,
		autoplay: true,
		effect: 'slide',
		breakpoints: {
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		pagination: {
			el: ".tp-pagination__dots",
			clickable: true,
		},
	});

	// work 4
	var workSwiper = new Swiper('.tp-work__4-active', {
		speed: 1000,
		loop: true,
		slidesPerView: 3,
		spaceBetween: 30,
		autoplay: true,
		effect: 'slide',
		centeredSlides: true,
		breakpoints: {
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 3,
			},
			'0': {
				slidesPerView: 3,
			},
		}
	});

	// Service 1
	var servic3swip = new Swiper('.tp-services__3-active', {
		speed: 1000,
		loop: true,
		slidesPerView: 3,
		spaceBetween: 30,
		autoplay: true,
		effect: 'slide',
		breakpoints: {
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		pagination: {
			el: ".tp-pagination__dots",
			clickable: true,
		},
	});

	// text-slider-1
	var tp_feature_slide = new Swiper(".tp-text__1-slider-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 10000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
	});

	// text-slider-2
	var tp_feature_slide = new Swiper(".tp-text__2-slider-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		centeredSlides: true,
		allowTouchMove: false,
		speed: 4000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
	});

	// text-slider-3
	var tp_feature_slide = new Swiper(".tp-text__3-slider-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		allowTouchMove: false,
		speed: 10000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
	});

	// text-slider-4
	var tp_feature_slide = new Swiper(".tp-text__4-slider-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		allowTouchMove: false,
		speed: 18000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
	});

	// text-slider-5
	var tp_feature_slide = new Swiper(".tp-text__5-slider-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		allowTouchMove: false,
		speed: 7000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
	});

	// text-slider-6
	var tp_feature_slide = new Swiper(".tp-text__6-slider-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		allowTouchMove: false,
		speed: 6000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
	});

	// text-slider-13
	var tp_feature_slide = new Swiper(".tp-text__13-slider-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		allowTouchMove: false,
		speed: 8000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
	});

	// text-slider-14
	var tp_feature_slide = new Swiper(".tp-text__14-slider-active", {
		loop: true,
		freemode: true,
		slidesPerView: 'auto',
		spaceBetween: 30,
		allowTouchMove: false,
		speed: 8000,
		autoplay: {
			delay: 1,
			disableOnInteraction: true,
		},
	});

	////////////////////////////////////////////////////
	// 10. section-title animation
	let st = $(".tp-split__text");
	if (st.length == 0) return;
	gsap.registerPlugin(SplitText);
	st.each(function (index, el) {
		el.split = new SplitText(el, {
			type: "lines,words,chars",
			linesClass: "tp-split__line"
		});
		gsap.set(el, { perspective: 400 });

		if ($(el).hasClass('tp-split__in-right')) {
			gsap.set(el.split.chars, {
				opacity: 0,
				x: "50",
				ease: "Back.easeOut",
			});
		}
		if ($(el).hasClass('tp-split__in-left')) {
			gsap.set(el.split.chars, {
				opacity: 0,
				x: "-50",
				ease: "circ.out",
			});
		}
		if ($(el).hasClass('tp-split__in-up')) {
			gsap.set(el.split.chars, {
				opacity: 0,
				y: "80",
				ease: "circ.out",
			});
		}
		if ($(el).hasClass('tp-split__in-down')) {
			gsap.set(el.split.chars, {
				opacity: 0,
				y: "-80",
				ease: "circ.out",
			});
		}
		el.anim = gsap.to(el.split.chars, {
			scrollTrigger: {
				trigger: el,
				start: "top 90%",
			},
			x: "0",
			y: "0",
			rotateX: "0",
			scale: 1,
			opacity: 1,
			duration: 0.4,
			stagger: 0.02,
		});
	});


	////////////////////////////////////////////////////
	// 11. Mouse move here

	var moveSection = $(".tp-mouse-move-section");
	var moveSectionElements = $(".tp-mouse-move-element");

	if (moveSection && moveSectionElements) {
		moveSection.on("mousemove", function (e) {
			var x = e.clientX
			var y = e.clientY
			let viewportWidth = window.innerWidth;
			let viewportHeight = window.innerHeight;
			let center = viewportWidth / 2
			let centerHeight = innerHeight / 2

			if (x > center) {
				gsap.to(moveSectionElements, {
					x: 20,
					duration: 2,
					ease: "power4.out"
				})
			}
			else {
				gsap.to(moveSectionElements, {
					x: -20,
					scale: 1.1,
					duration: 2,
					ease: "power4.out"
				})
			}
			if (y > centerHeight) {
				gsap.to(moveSectionElements, {
					y: 5,
					duration: 2,
					ease: "power4.out"
				})
			}
			else {
				gsap.to(moveSectionElements, {
					y: -5,
					duration: 2,
					ease: "power4.out"
				})
			}
		});
	}

	////////////////////////////////////////////////////
	// 12. Button hover animation

	var hoverBtns = gsap.utils.toArray(".tp-hover__btn-wrap");

	const hoverBtnItem = gsap.utils.toArray(".tp-hover__btn-item");
	hoverBtns.forEach((btn, i) => {
		$(btn).mousemove(function (e) {
			callParallax(e);
		});
		function callParallax(e) {
			parallaxIt(e, hoverBtnItem[i], 80);
		}

		function parallaxIt(e, target, movement) {
			var $this = $(btn);
			var relX = e.pageX - $this.offset().left;
			var relY = e.pageY - $this.offset().top;

			gsap.to(target, 0.5, {
				x: ((relX - $this.width() / 2) / $this.width()) * movement,
				y: ((relY - $this.height() / 2) / $this.height()) * movement,
				ease: Power2.easeOut,
			});
		}
		$(btn).mouseleave(function (e) {
			gsap.to(hoverBtnItem[i], 0.5, {
				x: 0,
				y: 0,
				ease: Power2.easeOut,
			});
		});
	});

	////////////////////////////////////////////////////
	// 13. Mouse Custom Cursor 
	function itCursor() {
		var myCursor = jQuery(".mouseCursor");
		if (myCursor.length) {
			if ($("body")) {
				const e = document.querySelector(".cursor-inner"),
					t = document.querySelector(".cursor-outer");
				let n,
					i = 0,
					o = !1;
				(window.onmousemove = function (s) {
					o ||
						(t.style.transform =
							"translate(" + s.clientX + "px, " + s.clientY + "px)"),
						(e.style.transform =
							"translate(" + s.clientX + "px, " + s.clientY + "px)"),
						(n = s.clientY),
						(i = s.clientX);
				}),
					$("body").on("mouseenter", "button, a, .cursor-pointer", function () {
						e.classList.add("active"), t.classList.add("active");
					}),
					$("body").on("mouseleave", "button, a, .cursor-pointer", function () {
						($(this).is("a", "button") &&
							$(this).closest(".cursor-pointer").length) ||
							(e.classList.remove("active"),
								t.classList.remove("active"));
					}),
					(e.style.visibility = "visible"),
					(t.style.visibility = "visible");
			}
		}
	}
	itCursor();

	$(".tp-cursor-point-area").on("mouseenter", function () {
		$(".mouseCursor").addClass("cursor-big");
	});

	$(".tp-cursor-point-area").on("mouseleave", function () {
		$(".mouseCursor").removeClass("cursor-big");
	});

	$(".tp-cursor-point-area-2").on("mouseenter", function () {
		$(".cursor-inner").addClass("active");
	});

	$(".tp-cursor-point-area-2").on("mouseleave", function () {
		$(".cursor-inner").removeClass("active");
	});

	// cursor style-2
	if (!$('body').hasClass("hide-magic-cursor")) {

		var magicCursor = document.getElementById("innerHTML");

		document.addEventListener("mousemove", mousemoveHandler);

		function mousemoveHandler(e) {

			var hideMagicCursor = $('.tp-work__2-item');
			hideMagicCursor.each(function (e) {
				$(this).on("mouseenter", function () {
					gsap.set(magicCursor, { opacity: 0 });
				});

				$(this).on("mouseleave", function () {
					gsap.set(magicCursor, { opacity: 1 });
				});
			})

		}
	}

	////////////////////////////////////////////////////
	// 14. hover reveal for image
	const hoverItem = document.querySelectorAll(".tp-hover__reveal-item");
	function moveImage(e, hoverItem, index) {
		const item = hoverItem.getBoundingClientRect();
		const x = e.clientX - item.x;
		const y = e.clientY - item.y;
		if (hoverItem.children[index]) {
			hoverItem.children[index].style.transform = `translate(${x}px, ${y}px)`;
		}
	}
	hoverItem.forEach((item, i) => {
		item.addEventListener("mousemove", (e) => {
			setInterval(moveImage(e, item, 1), 50);
		});
	});

	////////////////////////////////////////////////////
	// 15. hover reveal for text
	const hoverText = document.querySelectorAll(".tp-hover__reveal-text");
	function moveText(e, hoverText) {
		const item = hoverText.getBoundingClientRect();
		const x = e.clientX - item.x;
		const y = e.clientY - item.y;
		if (hoverText.children[0].children[2]) {
			hoverText.children[0].children[2].style.transform = `translate(${x}px, ${y}px)`;
		}
	}

	hoverText.forEach((item, i) => {
		item.addEventListener("mousemove", (e) => {
			setInterval(moveText(e, item), 100);
		});
	});

	////////////////////////////////////////////////////
	// 16. Scroll animation
	function scrollAnimi() {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				console.log(entry)
				if (entry.isIntersecting) {
					entry.target.classList.add('show');
				} else {
					entry.target.classList.remove('show');
				}
			});
		});

		const hiddenElements = document.querySelectorAll('.tp-section-hidden');
		hiddenElements.forEach((el) => observer.observe(el));

	}
	scrollAnimi();

	////////////////////////////////////////////////////
	// 17. Team Hover-animation
	function hoverWidget_animation() {
		let active_bg = $(".tp-hover__widget .active-bg");
		let element = $(".tp-hover__widget .current");
		$(".tp-hover__widget .tp-widget__item").on("mouseenter", function () {
			let e = $(this);
			activeHover(active_bg, e);
		});
		$(".tp-hover__widget").on("mouseleave", function () {
			element = $(".tp-hover__widget .current");
			activeHover(active_bg, element);
			element.closest(".tp-widget__item").siblings().removeClass("mleave");
		});
		activeHover(active_bg, element);
	}
	hoverWidget_animation();

	function activeHover(active_bg, e) {
		if (!e.length) {
			return false;
		}
		let topOff = e.offset().top;
		let height = e.outerHeight();
		let menuTop = $(".tp-hover__widget").offset().top;
		e.closest(".tp-widget__item").removeClass("mleave");
		e.closest(".tp-widget__item").siblings().addClass("mleave");
		active_bg.css({ top: topOff - menuTop + "px", height: height + "px" });
	}

	$(".tp-hover__widget .tp-widget__item").on("click", function () {
		$(".tp-hover__widget .tp-widget__item").removeClass("current");
		$(this).addClass("current");
	});

	////////////////////////////////////////////////////
	// 18. Start back to Top 
	function back_to_top() {
		var btn = $('#back_to_top');
		var btn_wrapper = $('.back-to-top-wrapper');

		windowOn.scroll(function () {
			if (windowOn.scrollTop() > 300) {
				btn_wrapper.addClass('back-to-top-btn-show');
			} else {
				btn_wrapper.removeClass('back-to-top-btn-show');
			}
		});

		btn.on('click', function (e) {
			e.preventDefault();
			$('html, body').animate({ scrollTop: 0 }, '300');
		});
	}
	back_to_top();

	////////////////////////////////////////////////////
	// 19. MagnificPopup img view
	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	////////////////////////////////////////////////////
	// 20. MagnificPopup video view
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	////////////////////////////////////////////////////
	// 21. Wow Js
	new WOW().init();

	////////////////////////////////////////////////////
	// 22. Counter Js
	new PureCounter();
	new PureCounter({
		filesizing: true,
		selector: ".filesizecount",
		pulse: 2,
	});

	////////////////////////////////////////////////////
	// 23. Video Play Js
	var play = false;
	$('.tp-video-toggle-btn').on('click', function () {

		if (play === false) {
			$('.tp-slider-video').addClass('full-width');
			$(this).addClass('hide');
			play = true;

			$('.tp-slider-video').find('video').each(function () {
				$(this).get(0).play();
			});
		} else {
			$('.tp-slider-video').removeClass('full-width');
			$(this).removeClass('hide');
			play = false;
			$('.tp-slider-video').find('video').each(function () {
				$(this).get(0).pause();
			});
		}

	});

	////////////////////////////////////////////////////
	// 24. header height
	if ($('.tp-header-height').length > 0) {
		var headerHeight = document.querySelector(".tp-header-height");
		var setHeaderHeight = headerHeight.offsetHeight;

		$(".tp-header-height").each(function () {
			$(this).css({
				'height': setHeaderHeight + 'px'
			});
		});
	}

	////////////////////////////////////////////////////
	// 25.Jquery Appear raidal
	if (typeof ($.fn.knob) != 'undefined') {
		$('.knob').each(function () {
			var $this = $(this),
				knobVal = $this.attr('data-rel');

			$this.knob({
				'draw': function () {
					$(this.i).val(this.cv + '%')
				}
			});

			$this.appear(function () {
				$({
					value: 0
				}).animate({
					value: knobVal
				}, {
					duration: 2000,
					easing: 'swing',
					step: function () {
						$this.val(Math.ceil(this.value)).trigger('change');
					}
				});
			}, {
				accX: 0,
				accY: -150,
			});
		});
	}

	////////////////////////////////////////////////////
	// 26. Blog Gallery Post Activation
	var tpgallerypost = new Swiper('.tp-blog-gallery-post-active', {
		speed: 1000,
		loop: true,
		slidesPerView: 1,
		spaceBetween: 0,
		autoplay: true,
		effect: 'slide',
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		navigation: {
			prevEl: '.tp-blog-gallery-post-arrow-prev',
			nextEl: '.tp-blog-gallery-post-arrow-next',
		},
	});


})(jQuery);