$(document).ready(function() {
	$(".control-label").hide();
	$(".form-control").focus(showLabel);
	$(".form-control").keyup(clearedInput);
	$("#submitBtn").click(showMessage);
	
	
})

function showLabel(e) {
	var label = $("label[for='"+$(this).attr('id')+"']");
	label.show("slow");
		$(this).addClass("white-placeholder" );
}

function clearedInput() {
    if (!this.value) {
			var label = $("label[for='"+$(this).attr('id')+"']");
			label.hide("slow");
			$(this).removeClass("white-placeholder" );
		}	
}
function showMessage(e) {	
		e.preventDefault();	
		$(".control-label").hide();
		var n =	$("#notify").append('<p>Don\'t worry, form is not really submitted!</p>');
n.fadeOut(5000 );
	$(".form-control").val("");
	$(".form-control").removeClass("white-placeholder");
}