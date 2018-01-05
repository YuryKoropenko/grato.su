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

	/*fancybox вызовы*/
	$('.p-catslider__item').fancybox();

});