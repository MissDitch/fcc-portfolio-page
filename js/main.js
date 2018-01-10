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


// http://codetheory.in/change-active-state-links-sticky-navigation-scroll/

var sections = $('section')
  , nav = $('#myNavbar')
  , nav_height = nav.outerHeight();

$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
// from	jquery-scroll-bottom.js
	var scrollHeight = $(document).height();
var scrollPosition = $(window).height() + $(window).scrollTop();
// 	end code jquery-scroll-bottom.js
	
// // https://gist.github.com/toshimaru/6102647	
// $(window).on("scroll", function() {
// 	var scrollHeight = $(document).height();
// 	var scrollPosition = $(window).height() + $(window).scrollTop();
// 	if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
// 	    // when scroll to bottom of the page
// 	}
// });
  
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
    
    if (cur_pos >= top && cur_pos <= bottom || 
				// when scoll to bottom of page:
			 (scrollHeight - scrollPosition) / scrollHeight === 0) {
      nav.find('a').parent().removeClass('active');
      sections.removeClass('active');
      
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
    }
  });
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);
  
  return false;
});
