$(document).ready(function(){

	var people = [
		[
			"Dr. Lourdes Agapito",
			"agapito",
			"http://www.cs.ucl.ac.uk/people_new/L.Agapito.html/",
			"Reader",
			"Computer Vision, 3D Reconstruction from Video, Non-Rigid Shape Modelling"
		],[
			"Professor Danny Alexander",
			"alex",
			"http://www.cs.ucl.ac.uk/people_new/D.Alexander.html/",
			"Professor in Imaging Science",
			"Colour imaging, segmentation and tracking, medical imaging, MRI, tensor image processing, audio processing."
		],[
			"Professor Simon Arridge",
			"arridge",
			"http://www.cs.ucl.ac.uk/people/S.Arridge",
			"Professor of Image Processing",
			"Inverse Problems, Medical Imaging, Finite Elements, Bayesian Methods"
		],[
			"Dr. Marta Betcke",
			"betcke",
			"http://www0.cs.ucl.ac.uk/people/M.Betcke.html",
			"Lecturer",
			"Inverse Problems, Numerical Analysis and High Performance Computing"
		],[
			"Dr. Gabriel Brostow",
			"brostow",
			"http://www.cs.ucl.ac.uk/people_new/G.Brostow.html/",
			"Lecturer",
			'Computer vision, data-driven graphics and animation, "smart capture."'
		],[
			"Dr. Ivana Drobnjak",
			"drobnjak",
			"http://www.cs.ucl.ac.uk/people/I.Drobnjak.html",
			"Leverhulme Trust Fellow and Proleptic Lecturer",
			"Microstructure Imaging"
		],[
			"Dr. Lewis Griffin",
			"griffin",
			"http://www.cs.ucl.ac.uk/people/L.Griffin",
			"Senior Lecturer",
			"image structure; image statistics; models of V1; colour vision and cognition."
		],[
			"Professor David Hawkes",
			"hawkes",
			"http://www.cs.ucl.ac.uk/people/D.Hawkes",
			"Professor of Medical Image Computing",
			"Medical Image Computing"
		],[
			"Dr. Bangti Jin",
			"jin",
			"http://www.cs.ucl.ac.uk/people_new/B.Jin.html/",
			"Lecturer",
			"Computational methods for inverse problems (regularization methods,\
			 parameter identification, and Bayesian inversion), numerical analysis of fractional differential equation."
		],[
			"Dr. Dan Stoyanov",
			"stoyanov",
			"http://www.cs.ucl.ac.uk/people/Dan.Stoyanov.html",
			"Royal Academy of Engineering/EPSRC Research Fellow",
			"Surgical Vision"
		],[
			"Dr. Gary Zhang",
			"zhang",
			"http://www.cs.ucl.ac.uk/people_new/Gary.Zhang.html/",
			"Lecturer",
			"Medical Image Computing, Diffusion MRI, Microstructure Imaging, Computational Modelling"
		],
	]
	var colours = [
		["#0575e6","#021B79"],
		["#4568DC","#B06AB3"],
		["#43C6AC","#191654"],
		["#093028","#237A57"],
		["#43C6AC","#F8FFAE"],
		["#FFAFBD","#ffc3a0"],
		["#DCE35B","#45B649"],
		["#c0c0aa","#1cefff"],
		["#3494E6","#EC6EAD"],
		["#F3904F","#3B4371"],
		["#A770EF","#FDB99B"]
	]

	var cardTemplate = $('.team-card');
	var cardSection = $('.card-section');

	for(var i = 0; i < people.length; i++){
		var person = people[i]
		tmpCard = cardTemplate.clone()
		tmpCard.find('img').attr('src','img/people/'+person[1]+'.jpg');
		tmpCard.find('h4').html(person[0]);
		tmpCard.find('.card-title').html(person[3]);
		tmpCard.find('.card-interests').html(person[4]);
		tmpCard.find('.card-up').css({"background": "linear-gradient(to bottom right, "+ colours[i][0] +", "+ colours[i][1] +")"})
		cardSection.children("div").append(tmpCard)
	}

	cardTemplate.remove()
})
