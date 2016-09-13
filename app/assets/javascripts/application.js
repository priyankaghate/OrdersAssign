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

/*
$(document).ready(function(){
	$('form a').first().hide();
});
*/


function add_fields(link, association, content) {
		var info=0;

		var new_id = new Date().getTime();
		var regexp = new RegExp("new_" + association, "g");
		$(link).before(content.replace(regexp, new_id));

		if(association=='book_info')
		{
			$(link).hide();
		}
		
}

