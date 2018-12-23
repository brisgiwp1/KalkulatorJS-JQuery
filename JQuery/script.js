// input data
$('input[type=button]').click(function(){
	if ($(this).attr('id') != 'hasil') {
		$('#write').val($('#write').val() + $(this).val());
	}
});

// deleted data
$("#c").click(function(){
	$("#write").val("");
});

// write data
$("#hasil").click(function(){
	var total = eval($('#write').val());				
	$('#write').val(total);			
});