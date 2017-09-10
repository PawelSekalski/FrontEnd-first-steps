$(document).ready(function(){
	$("#logo").keyup(function(){
		var value=$("#logo").val();
		$("#content-logo").html("<img src='"+(value)+"'>");
	});
	
	$("#zawartoscStrony").keyup(function(){
		var value=$("#zawartoscStrony").val();
		$("#content-zawartoscStrony").html(value);
	});
	
	$("#stopka").keyup(function(){
		var value=$("#stopka").val();
		$("#content-stopka").html(value);
	});
	
	$("#tekstPowitalny").keyup(function(){
		var value=$("#tekstPowitalny").val();
		$("#content-tekstPowitalny").html(value);
	});
	
	$("#menu").keyup(function(){
		value=$("#menu").val();
		menuTab = value.split(';');
		html="";
		
		html += "<ul>"; //doklejanie stringów "+=" i ich zamknięcie
		for (v = 0; v < menuTab.length; v++)
		{
			html += "<li>";
				if (menuTab[v].indexOf("|") !== -1) //kreska |
				{
						submenuTab = menuTab[v].split("|");
						
						html += submenuTab[0];
						html += "<div class='submenu'>"+
						submenuTab[1]+"</div>";
				}	
					else
						html += menuTab[v];
					
			html += "</li>";
		}
		html += "</ul>";
		
		$("#content-menu").html(html);
	});
	
	$("#content-menu").on("mouseenter", "li", function(){
		$("#content-menu").children(".submenu").fadeIn();
	});
	
	$("#content-menu").on("mouseleave", "li", function(){
		$("#content-menu").children(".submenu").fadeOut();
	});
	
});



















