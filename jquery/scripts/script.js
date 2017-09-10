$(document).ready(function(){
	//alert("Schowaj mnie!!!");

	$("h1").fadeOut();

/*
	$("#zapisz").click(function(){
	//alert($("#imie").val());
	var value=($("#imie").val());
	$("#text").html(value);
	});
*/	
/*
	$("#imie").keydown(function(){
	var value=($("#imie").val());
	$("#text").html(value);
	});
*/
	$("#imie").keyup(function(){
	var value=($("#imie").val());
	$("#text").html(value);
	});
	
});



