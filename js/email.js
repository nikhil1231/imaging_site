$(document).ready(function(){

	emailjs.init("user_E3jBzLGryHHmXJcOoCBbs");

	$('#send-contact-form').click(function(e){
		e.preventDefault()
		if($('#send-contact-form').hasClass('disabled')){
			return
		}
		var name = $('#form3').val()
		var email = $('#form2').val()
		var subject = $('#form32').val()
		var msg = $('#form8').val()

		if(!name || !subject || !msg || $('#form2').hasClass('invalid')){
			alert("Please complete form.");
			return;
		}
		// emailjs.send("default_service","contact_us",{name: name, email: email, subject: subject, msg: msg});
		alert("Form sent.");

		var name = $('#form3').val('')
		var email = $('#form2').val('')
		var subject = $('#form32').val('')
		var msg = $('#form8').val('')
		$('#send-contact-form').addClass('disabled')
	})
})
