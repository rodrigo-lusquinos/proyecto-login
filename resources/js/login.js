
$( "#submit-button" ).click(function() {
	$('form-signin').submit(false);
	var email = $("#inputEmail").val();
	var pass = $("#inputPassword").val();

	if(email == "juan@activity.com.ar" && pass == "pass"){
		$("#msg-ok").show();
		$("#msg-error").hide();
	}else{
		$("#msg-error").show();
		$("#msg-ok").hide();
	}
});