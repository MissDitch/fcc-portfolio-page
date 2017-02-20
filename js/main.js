$(document).ready(function() {
	$(".control-label").hide();
	$(".form-control").focus(showLabel);
	$(".form-control").keyup(clearedInput);
	$("#submitBtn").click(showMessage);
	$("li").click(function() {
      	// remove classes from all
    	$("li").removeClass("active");
      	// add class to the one we clicked
      	$(this).addClass("active");
  	});
	   // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
	
	
})


//Function to the css rule
function checkSize(){
    if ($(".name").css("white-space") == "nowrap" ){
       $("h3 span").removeClass("text-nowrap");
    }
	else {
		 $("h3 span").addClass("text-nowrap");
	}
}




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
		var n =	$("#notify").append('<p>Form is not really submitted</p>');
n.fadeOut(5000 );
	$(".form-control").val("");
	$(".form-control").removeClass("white-placeholder");
}