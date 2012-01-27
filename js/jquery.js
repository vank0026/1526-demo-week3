// JavaScript Document

$(document).ready(function () {
	// all yquery goes in here, similar to the body tag in html
	
	
/*	all jquery goes through the $() funcion:
	1. everything we select is done with a css selector
	2. we do something to that element
	
	se can write any scc selector you can thing of in the $()function
	$("#thing")
	$(".thing")
	$("div p")
	$("div p:first-child")
	
*/

	$("a").on("click", function (ev) {
		
		//	the preventDefault(); will stof the usual element form doing waht they want, eg. links dont link, forms dont submit
		
		ev.preventDefault();
		console.log("Hello");
		
		/* "$(this)" gives us referense to the element this event listener is attached to
		.attr() lets us get and set element attribuetes
		*/
		
		console.log($(this).attr("href"));
		
		// with .css() we get css properties, and the css will be written css-like
		$(this).css("background-color", "#f33");
	});
	
	$("form").on("submit", function(ev) {
		ev.preventDefault();
		
		var newLi = $(document.createElement("li"));
		
		if($("#item").val() != ""){
			newLi.html($("#item").val());
			$("ul").append(newLi);
			$("#item").val("");
		}
	});
	
	$("ul").on("click", "li", function (ev) {
//		$(this).addClass("done");
		$(this).toggleClass("done");	// somehow this works to remove or add the class.
	});


//		**********************
//		http://api.jquery.com/
//		**********************

//		the above is the place to go for all jquery syntax stuff


});