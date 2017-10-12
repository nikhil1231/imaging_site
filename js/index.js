$(document).ready(function(){
	var animationDuration = 500;
	/*
	Animating the title and navigation bar, with a delay at
	the start and between the title, subtitle, and nav bar
	*/
	setTimeout(function(){
		$('#title').animate({
			opacity: 1.0,
			margin: 0
		},{
			duration: animationDuration,
			queue: false,
			complete: function(){
				$('#subtitle').animate({
					opacity: 1.0,
					margin: 0
				},{
					duration: animationDuration,
					queue: false,
					complete: function(){
						$('#navbar').animate({
							left: 0
						},{
							duration: animationDuration,
							queue: false
						})
					}
				})
			}
		});
	}, animationDuration);
});