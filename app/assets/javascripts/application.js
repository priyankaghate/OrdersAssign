// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(document).ready(function(){
	$('.lineItemForm').hide();
	$('center > a').addClass('btn-sm btn-info');
});


var i=1;
var new_id=0;
//var sku;
//var cost;
//var quantity;
	function myFunction()
	{
		var product_name = $("#search").val();
		
        $.ajax({
		   type: 'get',
		   url: '/orders/search_product',
		   data: {
		   	       product_name:  product_name
		         },
		   success: function(data){
		   	//alert(data[0]["name"]);
		   	
			   	//sku=data[0]['sku'];
			   	//cost=data[0]['cost'];
			   	//quantity=data[0]['quantity'];

			   	
			  
			   		$('#order_line_items_attributes_'+new_id+'_quantity').val(data[0]['quantity']);
			   		$('#order_line_items_attributes_'+new_id+'_sku').val(data[0]['sku']);
			   		$('#order_line_items_attributes_'+new_id+'_cost').val(data[0]['cost']);
			   		$('#order_line_items_attributes_'+new_id+'_product_id').val(data[0]['id']);
			   

		    	i++;
		   },
		   error: function(data){
		       
		   }
	 	});
 
	}


function add_fields(link, association, content) {
		new_id = new Date().getTime();
		var regexp = new RegExp("new_" + association, "g");
		

		if(association=='line_items')
		{
			//alert(sku+" "+cost+" "+quantity);
			$(this).attr('remote',true);
			$('.search-field').before(content.replace(regexp, new_id));
			myFunction();
		}
		else
		{
			$(link).before(content.replace(regexp, new_id));
		}
		
}

