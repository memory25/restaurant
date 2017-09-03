

$(function(){
	//讓header高度隨寬度比例放大 才不會切掉圖片的上下
	var homeHeight =  (420/1049) * $("#home").width();
	$("#home").height(homeHeight);
	$(window).resize(function(){
		var homeHeight =  (420/1049) * $("#home").width();
		$("#home").height(homeHeight);
	})



	//先阻止<a>超連結效果    在取得超連結目的地id的位置
	$(".navTopMenu a").click(function(e){
		e.preventDefault();
		$("body").animate({scrollTop : $($(this).attr("href")).offset().top}, 500)
	})

	//按下選單後 ul滑動
	$("#navTop .bars").click(function(){
		$(".navTopMenu ul").slideToggle();
	})
})
