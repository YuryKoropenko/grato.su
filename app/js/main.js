$(function() {
	
	/*маска для телефонов*/
	$('.p-application__input-phone').mask("+7-999-999-99-99");

	/*скрипт на select*/
	$('.p-application__row select').selectmenu();

	/*банер / форма/ чекбокс*/
	$('.p-application__check label').on('click', function() {
		$(this).children('span').toggle();
	});

	$('.p-application__wishes a').on('click', function() {
		$(this).toggleClass('active');
		$(this).parent().children('.p-application__hidden').toggle();
		$(this).parent().children('.p-application__hidden').children('textarea').focus();
		return false;
	});

	/*owl вызовы*/
	$('.p-catslider').owlCarousel({
		loop:true,
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});
	$('.sliderpopup__slider').owlCarousel({
		loop:true,
		nav:true,
		items:1
	});

	/*fancybox вызовы*/
	$('.p-catslider__item').fancybox();

	/*слайдер hover*/
	$('.p-catslider__item').hover(function() {
		$(this).children('.p-catslider__hover').stop(true, false).fadeIn();
	}, function() {
		$(this).children('.p-catslider__hover').stop(true, false).fadeOut();
	});

	/*якоря*/

	$('.h-nav__link').on('click', function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			&& location.hostname == this.hostname) {
				var $target = $(this.hash);
				$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
				if ($target.length) {
					var targetOffset = $target.offset().top;
					$('html,body').animate({scrollTop: targetOffset}, 500);
					return false;
				}
			}
	});

});