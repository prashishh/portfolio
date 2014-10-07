

$(function() {
	$(".payclip_more").hide();
	$(".remo_more").hide();
	$(".mic_more").hide();
	$(".fortystones_more").hide();
	$(".scoop_more").hide();
	$(".shrii_more").hide();


	$(".payclip_button").on('click', function() {
		var payclip_displayProp = $(".payclip_more").css("display");
		if(payclip_displayProp == "none")
			payclip_moreLess = 'Less'
		else 
			payclip_moreLess = 'More';
		
		$(this).text(payclip_moreLess);

		$(".payclip_more").slideToggle();
	});

	$(".remo_button").on('click', function() {
		var remo_displayProp = $(".remo_more").css("display");
		if(remo_displayProp == "none")
			remo_moreLess = 'Less'
		else 
			remo_moreLess = 'More';
		
		$(this).text(remo_moreLess);

		$(".remo_more").slideToggle();
	});

	$(".mic_button").on('click', function() {
		var mic_displayProp = $(".mic_more").css("display");
		if(mic_displayProp == "none")
			mic_moreLess = 'Less'
		else 
			mic_moreLess = 'More';
		
		$(this).text(mic_moreLess);

		$(".mic_more").slideToggle();
	});

	$(".fortystones_button").on('click', function() {
		var fortystones_displayProp = $(".fortystones_more").css("display");
		if(fortystones_displayProp == "none")
			fortystones_moreLess = 'Less'
		else 
			fortystones_moreLess = 'More';
		
		$(this).text(fortystones_moreLess);

		$(".fortystones_more").slideToggle();
	});
});