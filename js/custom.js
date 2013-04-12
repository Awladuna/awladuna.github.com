$(document).ready(function() {
	$('#contactModal')
	  .on('shown', function () {
	    $('body').addClass("modal-open");
		console.log('adding modal-open class');
	  })
	  .on('hidden', function () {
	    $('body').removeClass("modal-open");
	});
	
		$('.contact').click(function(e){
		e.preventDefault()
		$(location).attr('href','mailto:okadri@live.com?body=' + encodeURIComponent("\n\n\n ~ Sent from ObadaKadri.com "));
	});
	$('.linkedin').click(function(e){
		e.preventDefault()
		$(location).attr('href','http://www.linkedin.com/in/obadakadri');
	});
	$('.gplus').click(function(e){
		e.preventDefault()
		$(location).attr('href','https://plus.google.com/100772236268733566326');
	});
	$('.sidebar-nav').scrollspy()
	$('.app-icon').click(function(e){
		e.preventDefault()
		$(location).attr('href', $(this).data('url'));		
	});
});
