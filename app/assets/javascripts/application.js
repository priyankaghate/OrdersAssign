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
//= require jquery-ui
//= require bootstrap-sprockets
//= require jquery_ujs
//= require turbolinks
//= require_tree .


$(document).ready(function(){
	$('.lineItemForm').hide();
	$('center > a').addClass('btn-sm btn-info');

	/*$('#search').autocomplete({
	    source: '/orders/search_product',
	    minLength: 2
	});*/

	$("#search").autocomplete(
    {
    minLength: 1,
    source: function (request, response)
    {
    $.ajax(
    {
        url: "/orders/search_product",
        data: {term: request.term},
        dataType: "json",
        success: function (data)
        {
        //alert (JSON.stringify (jsonDataReceivedFromServer));
        // console.log (jsonDataReceivedFromServer);
        response (data.map(function (value)
            {
            return {
                        'label': value.name ,
                        'value': value.name
                    }; 
            }));
        }
      });
     },
   });

	/*$( "#search" ).autocomplete({
        minLength: 2,
        source: function( request, response ) {
            var term = request.term;                
            if (term in cache) {
                 response(cache[ term ]);
                 return;
            }

            $.getJSON("/orders/search_product", request, function (data, status, xhr) {
                // Add a `label` property to each item 
                $.each(data, function (_, item) {
                    item.label = item.name;
                });

                cache[term] = data;
                response(data);
            });
        }
    });*/
	
});

/*
$('#search').autocomplete({
     source: '/orders/search_product', //?seller_id='+ seller_id,
     minLength: 2,
     select: function (event, ui) {
         $("#product_fulfilment_stock_id").val(ui.item.id);
         $.ajax({
             type: 'GET',
             url: "/admin/products/get_mapped_sku",
             data: {seller_id: $('#product_seller_id').val()},
             success: function(r){
                 console.log(r);

             }
         });

*/




var i=1;
var new_id=0;

	function myFunction()
	{
		var product_name = $("#search").val();
		
        $.ajax({
		   type: 'get',
		   url: '/orders/search_product',
		   data: {
		   	       term:  product_name
		         },
		   success: function(data){
			  
			   		//$('#order_line_items_attributes_'+new_id+'_quantity').val(data[0]['quantity']);
			   		$('#order_line_items_attributes_'+new_id+'_sku').val(data[0]['sku']);
			   		$('#order_line_items_attributes_'+new_id+'_cost').val(data[0]['cost']);
			   		$('#order_line_items_attributes_'+new_id+'_product_id').val(data[0]['id']);

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

