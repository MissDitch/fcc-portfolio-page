$(document).ready(function() {
	$(".control-label").hide();
	$(".form-control").focus(showLabel);
	$(".form-control").keyup(clearedInput);
	$("#submitBtn").click(showMessage);
	
	
})

function showLabel(e) {
	var label = $("label[for='"+$(this).attr('id')+"']");
	label.show("slow");
}

function clearedInput() {
    if (!this.value) {
			var label = $("label[for='"+$(this).attr('id')+"']");
			label.hide("slow");
		}	
}
function showMessage(e) {	
		e.preventDefault();	
		$(".control-label").hide();
		var n =	$("#notify").append('<p>form is not really submitted</p>');
n.fadeOut(5000, function() {	$(".form-control").val(""); });
}