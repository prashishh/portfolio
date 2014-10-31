

$(function() {
	$(".payclip_more").hide();
	$(".remo_more").hide();
	$(".mic_more").hide();
	$(".fortystones_more").hide();
	$(".scoop_more").hide();
	$(".shrii_more").hide();
	$(".graph_more").hide();
	$(".dialoguesys_more").hide();
	$(".semanticweb_more").hide();

	$(window).scroll(arrowVisible);
	arrowVisible();

	var $root = $('html, body');
	$('a#expr_btn').click(function() {
	    $root.animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});

	$('a#project_btn').click(function() {
	    $root.animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});

	$('a#life_btn').click(function() {
	    $root.animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});

	$('a#contact_btn').click(function() {
	    $root.animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});

	$('a#link_btn').click(function() {
	    $root.animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});

	$(".payclip_button").on('click', function() {

		var remo_displayProp = $(".payclip_more").css("display");
		if(remo_displayProp == "none") {

			remo_moreLess = 'Less';
			$(".payclip_summary").hide();
	    
			$root.animate({
	        scrollTop: $( $.attr(this, 'more') ).offset().top
	    }, 1000);

		} else {
			remo_moreLess = 'More';
			$(".payclip_summary").show();

	    $root.animate({
	        scrollTop: $( $.attr(this, 'less') ).offset().top
	    }, 1000);
		}

		$(this).text(remo_moreLess);

		$(".payclip_more").slideToggle(1000);
	});

	$(".remo_button").on('click', function() {

		var remo_displayProp = $(".remo_more").css("display");
		if(remo_displayProp == "none") {
			
			remo_moreLess = 'Less';
			$(".remo_summary").hide();

	    $root.animate({
	      scrollTop: $( $.attr(this, 'more') ).offset().top
	    }, 1000);

		} else {
			remo_moreLess = 'More';
			$(".remo_summary").show();

	    $root.animate({
	      scrollTop: $( $.attr(this, 'less') ).offset().top
	    }, 1000);
		} 
		
		$(this).text(remo_moreLess);

		$(".remo_more").slideToggle(1000);
	});

	$(".mic_button").on('click', function() {
    
		var mic_displayProp = $(".mic_more").css("display");
		$(".mic_summary").hide();

		if(mic_displayProp == "none") {
			mic_moreLess = 'Less';
			$(".mic_summary").hide();

	    $root.animate({
	      scrollTop: $( $.attr(this, 'more') ).offset().top
	    }, 1000);
		} else {
			mic_moreLess = 'More';
			$(".mic_summary").show();
	    $root.animate({
	      scrollTop: $( $.attr(this, 'less') ).offset().top
	    }, 1000);
		}
		
		$(this).text(mic_moreLess);

		$(".mic_more").slideToggle();
	});

	$(".fortystones_button").on('click', function() {
    

		var fortystones_displayProp = $(".fortystones_more").css("display");
		$(".fortystones_summary").hide();

		if(fortystones_displayProp == "none") {
			fortystones_moreLess = 'Less';
			$(".fortystones_summary").hide();

	    $root.animate({
	      scrollTop: $( $.attr(this, 'more') ).offset().top
	    }, 1000);
		} else {
			fortystones_moreLess = 'More';
			$(".fortystones_summary").show();

	    $root.animate({
	      scrollTop: $( $.attr(this, 'less') ).offset().top
	    }, 1000);
		}
		
		$(this).text(fortystones_moreLess);

		$(".fortystones_more").slideToggle();
	});

	$('.masterTooltip').hover(function(){
  // Hover over code
  var title = $(this).attr('title');
  $(this).data('tipText', title).removeAttr('title');
  $('<p class="tooltip"></p>')
  .text(title)
  .appendTo('body')
  .fadeIn('slow');
	}, function() {
    // Hover out code
    $(this).attr('title', $(this).data('tipText'));
    $('.tooltip').remove();
}).mousemove(function(e) {
    var mousex = e.pageX + 5; //Get X coordinates
    var mousey = e.pageY + 5; //Get Y coordinates
    $('.tooltip')
    .css({ top: mousey, left: mousex })
	});

});

function arrowVisible() {

	var $cache = $('.ui.up.arrow'); 
  if ($(window).scrollTop() < 100) {
    $cache.css('visibility', 'hidden'); 
    console.log('hidden');
  } else {
    $cache.css('visibility', 'visible');
  	console.log('visible');
  }

}