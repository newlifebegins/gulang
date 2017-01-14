$(document).ready(function(){
	//轮播图
	var mySwiper = new Swiper('.swiper-container',{
		pagination : '.swiper-pagination',
	 	speed:1000,
		autoplay:3000,
		autoplayDisableOnInteraction:false,
		loop : true,//循环
		observer:true,
        observeParents:true,
		paginationClickable :true,//控制器
	})

	// 一站式服务轮播图
	var num=1;
	function move(){
	      if(num==5){
	            num=0;
	      }
	      $('ul.ne li').hide();
	      $(".wenzi ul.xuhao li").removeClass('active');
	      $('ul.ne li').eq(num).show();
	      $(".wenzi ul.xuhao li").eq(num).addClass('active');
	      num++;
	}      
	var t=setInterval(move,3000);
	var index;
	$(".wenzi ul.xuhao li").hover(function(){
		clearInterval(t);
		index = $(this).index();
		$(this).addClass("active").siblings("li").removeClass("active");
		var _this = $(this).parent().siblings("ul.ne");
		_this.find("li").eq(index).show().siblings("li").hide();
	},function(){
		num = index + 1;
		t=setInterval(move,3000);
	})


	$("nav ul li.indexone").click(function(){
		window.location.href="index.html";
	})
	
	$("nav ul li ul li").each(function(){
		var alen = $(this).find("a").length;
		if(alen==2){
			$(this).css("width",260+"px");
			$(this).parent().css("width",260+"px");
		}
	})
	
})
function scroll(obj) {
	var tmp = (obj.scrollLeft)++;
	if (obj.scrollLeft==tmp) obj.innerHTML += obj.innerHTML;
	if (obj.scrollLeft>=obj.firstChild.offsetWidth) obj.scrollLeft=0;
}
var timer =	setInterval("scroll(document.getElementById('scrollobj'))",30);

