$(document).ready(function () {
	$('input[type="email"]').on('change', function(){
		if($(this).val().length){
			$(this).siblings().css({'display' : 'none'})
		} else {
			$(this).siblings().css({'display' : ''});
		}
	});

	$('.js-ppp').click(function(e){
		e.preventDefault();
		//close all popup
		$('.ppp').removeClass('is-active');
		$('.ppp__content').removeClass('is-active');
		//open my popup
		var getClass = $(this).data('ppp');
		$('.ppp').addClass('is-active');
		$('#' + getClass).addClass('is-active');

	});

	$('.js-close').click(function(e){
		e.preventDefault();
		//close all popup
		closePpp();
	});

	//carusel
	$('.carusel').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		variableWidth: true,
		arrows: true,
		prevArrow: '.carusel-nav_prev',
		nextArrow: '.carusel-nav_next',
	});


});//DOC.READY



function closePpp(){
	$('.ppp').removeClass('is-active');
	$('.ppp__content').removeClass('is-active');
}

$(document).on('click', function(el){
	var childr = $('.ppp__shadow');

	if($(el.target).is(childr) == true ){
		$('.ppp').removeClass('is-active');
		$('.ppp__content').removeClass('is-active');
	}
});