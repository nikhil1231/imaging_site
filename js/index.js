$(document).ready(function(){
	/*

	Makes sure title and nav bar are only animated the first
	time the site is visited. Does this by saving a variable
	after the first animation and checks for it every time a
	new page is loaded.

	*/
	var shouldAnimate = sessionStorage.getItem('animate') == undefined;

	if(shouldAnimate){
		animateStart(500);
	}else{
		animateStart(0);
	}

	sessionStorage.setItem('animate', false);

});


function animateStart(delay){
	/*

	Animating the title and navigation bar, with a delay at
	the start and between the title, subtitle, and nav bar.

	*/

	setTimeout(function(){
		$('#title').animate({
			opacity: 1.0,
			margin: 0
		},{
			duration: delay,
			queue: false,
			complete: function(){
				$('#subtitle').animate({
					opacity: 1.0,
					margin: 0
				},{
					duration: delay,
					queue: false,
					complete: function(){
						$('#navbar').animate({
							left: 0
						},{
							duration: delay,
							queue: false
						})
					}
				})
			}
		});
	}, delay);

}