$(document).ready(function()  {
	
	$('.js-section').waypoint(function(direction) {
		
		if (direction == "down")  {
			$('nav').addClass('stickyNav');
			
		}
		else {
			$('nav').removeClass('stickyNav');
			
		}
	
	});
});