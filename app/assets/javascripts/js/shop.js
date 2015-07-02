$( document ).ready(function() {
    	$('#shop_id').on('change', function (e) {
    	$('#shop_shop_name').val($('option:selected', this).attr('data-shop_view_name'));
	});
});