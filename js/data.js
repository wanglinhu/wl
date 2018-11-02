$(function(){
	$(".header .nav ul li").click(function(){
		$(this).parents(".header").siblings(".content").children().eq($(this).index()).show().siblings().hide();
		$(".nav ul li").children().removeClass("active");
		$(this).children().addClass("active");
	})
})
