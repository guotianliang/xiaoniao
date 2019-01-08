$(function(){
	$("#start-animate").delay(6000).slideUp()
	setTimeout(function(){
		$("#start-animate .center-box>img").animate({top:0},1500,function(){
		$("#start-animate .start-txt").show().find("*").addClass("animated fadeInUp")
	})
	},2000)
	$("#start-animate").dblclick(function(){
		$("#start-animate").stop().slideUp()
		return false;
	})
			function huximove(){
				$(".light").fadeToggle()
			}
			huxitimer=setInterval(huximove,2000)
			//概述2 轮播
			var gaindex=0
//			console.log($(".gaishu2-mo1").length-1)
			$(".gs-anniu-you").click(function(){
				gaindex++
				if (gaindex>$(".gaishu2-mo1").length-1) {
					gaindex=$(".gaishu2-mo1").length-1
				}else{
					$(".gs-anniu-zuo").css({opacity:1})
					$(".gaishu-box").animate({left:gaindex*-100+"%"},500)
					if(gaindex==$(".gaishu2-mo1").length-1){
						$(".gs-anniu-you").css({opacity:0.4})
					}
				}
			})
			$(".gs-anniu-zuo").click(function(){
				gaindex--
				if (gaindex<0) {
					gaindex=0
				} else{
					$(".gs-anniu-you").css({opacity:1})
					$(".gaishu-box").animate({left:gaindex*-100+"%"},500)
					if(gaindex==0){
						$(".gs-anniu-zuo").css({opacity:0.4})
					}
				}
             })
				var height = $(window).height();
				var width = $(window).width();
				$(".lunbo-warp").height(height);
				$(".lunbo-warp").width(width);
				$(window).resize(function() {
						var height = $(window).height();
						var width = $(window).width();
						$(".lunbo-warp").height(height);
						$(".lunbo-warp").width(width);
			    })		   	
					var index = 0;
					var liIndex=0;
					var isRuning = false;
					function liclick(){
						if (liIndex==0) {
						index=1
						$(".lunbo-box").animate({top:index*-100+"%"})
						indexnum()
					} else if(liIndex<=2&&liIndex>0){
						index=liIndex+1
						$(".lunbo-box").animate({top:index*-100+"%"})
						indexnum()
					}else if(liIndex>2&&liIndex<=4){
						index=4
						indexnum()
						$(".lunbo-box").animate({top:index*-100+"%"})
					}else{
						index=0
                        indexnum()
						$(".lunbo-box").animate({top:index*-100+"%"})
					}
					}
					function indexnum(){
						if (index==1) {
							$(".header-nav li").removeClass("now")
						    $(".header-nav li").eq(index-1).addClass("now")
						} else if(index==2||index==3){
							$(".header-nav li").removeClass("now")
						    $(".header-nav li").eq(index-1).addClass("now")
						}else if(index==4){
							$(".header-nav li").removeClass("now")
						    $(".header-nav li").eq(3).addClass("now")
						    $(".header-nav li").eq(4).addClass("now")
						}else{
							$(".header-nav li").removeClass("now")
						    $(".header-nav li").eq(0).addClass("now")
						}
					}
				$(".header-nav li").click(function(){
					liIndex=$(this).index()
					liclick()
				})
					function scrollUp() {
						if (!isRuning) {
							isRuning=true					
						setTimeout(function () {
							isRuning = false;
						},1000)
						if(index > 0){
							index--;
						}
						$(".lunbo-box").animate({top:index*-100+"%"})
						}
					}
					function scrollDown() {
						if(!isRuning){
							isRuning=true
						    setTimeout(function () {
						    	isRuning = false;
						    },1000)												
						if(index < $(".gaishu").length-1){
							index++;
						}
						$(".lunbo-box").animate({top:index*-100+"%"})
						}
					}
				function mouseWheel(ev) {
					if (ev.wheelDelta) {
						if (ev.wheelDelta > 0) {
							scrollUp()
						} else {
							scrollDown()
						}
					} else {
						if (ev.detail > 0) {
							scrollDown()
						} else {
							scrollUp()
						}
					}
					indexnum()
				}
				window.onmousewheel=mouseWheel
				window.addEventListener("DOMMouseScroll", mouseWheel)
				//anniu
				$(".zhuyun-btn-left").click(function(){
					$(".z-btn-zuo").css({"left":0})
					$(".z-btn-you").css({"left":-78})
					$(".zhuangyun-t1").css("left",0)
				})
				$(".zhuyun-btn-right").click(function(){
					$(".z-btn-zuo").css({"left":78})
					$(".z-btn-you").css({"left":0})
					$(".zhuangyun-t1").css("left",-910)
				})
				$(".anniu").click(function(){
					index=1
					$(".lunbo-box").animate({top:index*-100+"%"})
				})
})
