$("document").ready(function() {

	$('.butt').on('click', function(){
		var num_1, num_2;

		num_1 = jQuery('#num_1').val();
		num_2 = jQuery('#num_2').val();

		num_1 = Number(num_1);
		num_2 = Number(num_2);

		var res;

		res = num_1 + num_2;

		alert(num_1 + ' + ' + num_2 + ' =' + ' ' + res)

		$('.num_2').hide();
	});

});