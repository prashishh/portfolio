

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

    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);

		var remo_displayProp = $(".payclip_more").css("display");
		if(remo_displayProp == "none")
			remo_moreLess = 'Less'
		else 
			remo_moreLess = 'More';
		
		$(this).text(remo_moreLess);

		$(".payclip_more").slideToggle(1000);
	});

	$(".remo_button").on('click', function() {

    $root.animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);

		var remo_displayProp = $(".remo_more").css("display");
		if(remo_displayProp == "none")
			remo_moreLess = 'Less'
		else 
			remo_moreLess = 'More';
		
		$(this).text(remo_moreLess);

		$(".remo_more").slideToggle(1000);
	});

	$(".mic_button").on('click', function() {

    $root.animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    
		var mic_displayProp = $(".mic_more").css("display");
		if(mic_displayProp == "none")
			mic_moreLess = 'Less'
		else 
			mic_moreLess = 'More';
		
		$(this).text(mic_moreLess);

		$(".mic_more").slideToggle();
	});

	$(".fortystones_button").on('click', function() {
    
    $root.animate({
      scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);

		var fortystones_displayProp = $(".fortystones_more").css("display");
		if(fortystones_displayProp == "none")
			fortystones_moreLess = 'Less'
		else 
			fortystones_moreLess = 'More';
		
		$(this).text(fortystones_moreLess);

		$(".fortystones_more").slideToggle();
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