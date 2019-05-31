$(document).ready(function () {
	$('input[type="email"]').on('change', function(){
		if($(this).val().length){
			$(this).siblings().css({'display' : 'none'})
		} else {
			$(this).siblings().css({'display' : ''});
		}
	});
});//DOC.READY