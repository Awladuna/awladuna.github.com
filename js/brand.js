$(document).ready(function() {
	$('.brand-region').append('<div class="brand">obadakadri.com</brand>');
	$('.brand').click(function(e){
		e.preventDefault()
		$(location).attr('href','http://obadakadri.com');
	});
});
