var iframe;
$(function() {
	$(".viewer").height(document.documentElement.clientHeight);
	$(".viewer").append("<iframe id='viewer' frameborder='no'/>");
	iframe = $(".viewer iframe")[0];
	type1();

	$(".btn1").on("click", function(){
		type1();
	})
	$(".btn2").on("click", function(){
		type2();
	})
});
function type1()
{
	iframe.src = "type143.html";
}
function type2()
{
	iframe.src = "type220.html";
}
