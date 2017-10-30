$(document).ready(function(){
	var months = ['Jan','Feb','March','May','June','July','Aug','Sept','Oct','Nov','Dec'];

	var dates = [
		[
			"16/01/2014",
			"Something Amazing Happened",
			"http://www.cs.ucl.ac.uk/people_new/L.Agapito.html/",
			"More detail about what actually happened. There isn't anything here yet,\
			but trust me, it's amazing."
		],[
			"16/02/2014",
			"Something Amazing Happened",
			"http://www.cs.ucl.ac.uk/people_new/L.Agapito.html/",
			"More detail about what actually happened. There isn't anything here yet,\
			but trust me, it's amazing."
		],[
			"16/04/2014",
			"Something Amazing Happened",
			"http://www.cs.ucl.ac.uk/people_new/L.Agapito.html/",
			"More detail about what actually happened. There isn't anything here yet,\
			but trust me, it's amazing."
		],[
			"16/07/2014",
			"Something Amazing Happened",
			"http://www.cs.ucl.ac.uk/people_new/L.Agapito.html/",
			"More detail about what actually happened. There isn't anything here yet,\
			but trust me, it's amazing."
		],[
			"16/08/2014",
			"Something Amazing Happened",
			"http://www.cs.ucl.ac.uk/people_new/L.Agapito.html/",
			"More detail about what actually happened. There isn't anything here yet,\
			but trust me, it's amazing."
		],[
			"16/01/2015",
			"Something Amazing Happened",
			"http://www.cs.ucl.ac.uk/people_new/L.Agapito.html/",
			"More detail about what actually happened. There isn't anything here yet,\
			but trust me, it's amazing."
		],[
			"16/05/2015",
			"Something Amazing Happened",
			"http://www.cs.ucl.ac.uk/people_new/L.Agapito.html/",
			"More detail about what actually happened. There isn't anything here yet,\
			but trust me, it's amazing."
		],
	]

	var timelineHeader = $('.timeline-header');
	var timelineList = $('.timeline-list');

	var dateTemplate = $('.date-template');

	for(var i = 0; i < dates.length; i++){
		var date = dates[i];
		var dateParts = date[0].split("/");

		var printDate = dateParts[0] + ' ' + months[parseInt(dateParts[1])]

		var tmpDateHeader = $('.timeline-header li:first-child').clone();
		tmpDateHeader.children().attr("data-date", date[0]);
		tmpDateHeader.children().html(printDate);


		var tmpDate = dateTemplate.clone();
		tmpDate.attr('data-date',date[0])
		tmpDate.children('h2').html(date[1]);
		tmpDate.children("em").html(printDate + ", " + dateParts[2]);
		tmpDate.children("p").html(date[3]);


		if(i > 0){
			tmpDate.attr('class','date-template');
			tmpDateHeader.children().attr('class','');
		}

		timelineHeader.append(tmpDateHeader);
		timelineList.append(tmpDate)
	}

	dateTemplate.remove();
	$('.timeline-header li:first-child').remove();
})
