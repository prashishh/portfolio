

$(function() {
	$(".payclip_more").hide();

	$(".payclip_button").on('click', function() {
		var displayProp = $(".payclip_more").css("display");
		if(displayProp == "none")
			moreLess = 'Less'
		else 
			moreLess = 'More';
		
		console.log(displayProp);
		$(this).text(moreLess);

		$(".payclip_more").slideToggle();
		});
});