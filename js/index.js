$(function(){
	var index=0
			$(".nav-item").hover(function(){
				$(this).find("ul").stop().slideDown(400,"elasticBoth")
				//,"elasticBoth"
			},function(){
				$(this).find("ul").stop().slideUp(400,"elasticBoth")
				//,"elasticBoth"
			})
			$(".ban-btn").on({'mouseover':function(){
				$(this).stop().addClass("animated rubberBand")
			},'mouseout':function(){
				$(".ban-btn").removeClass("animated rubberBand")
			}})
			function bannermove(){
				$(".banner").hide()
				$(".banner").eq(index).show()
				$(".banner").find("div").removeClass("animated")
				$(".banner").eq(index).find("div").addClass("animated")
			}
			$("#banner-wrap .point-middle span").click(function(){
				index=$(this).index()
				$(this).addClass("now").siblings().removeClass("now")
				bannermove()
			})
			$("#banner-wrap .banner-change .prev").click(function(){
				index--
				if(index<0){
					index=$("#banner-wrap .point-middle span").length-1
				}
				bannermove()
					$("#banner-wrap .point-middle span").eq(index).addClass("now").siblings().removeClass("now")
			})
			$("#banner-wrap .banner-change .next").click(function(){
				index++
				if(index>$("#banner-wrap .point-middle span").length-1){
					index=0
				}
				bannermove()
				$("#banner-wrap .point-middle span").eq(index).addClass("now").siblings().removeClass("now")
			})
//			产品开始
			$(".pro-change span").on({'mouseover':function(){
				$(this).stop().addClass("animated rubberBand")
			},'mouseout':function(){
				$(".pro-change span").removeClass("animated rubberBand")
			}})
			function proDuctmove(animate){
				$(".pro-point").eq(proIndex).addClass("on").siblings().removeClass("on")
				$(".pro-item").find("*").removeClass("animated fadeInLeft fadeInRight")
				$(".pro-item").eq(proIndex).find("*").addClass(animate)
				$(".pro-item").eq(proIndex).addClass("now").siblings().removeClass("now")
			}
			var proIndex=0
			$(".pro-point").click(function(){
				if(proIndex<$(this).index()){
					proIndex=$(this).index()
					proDuctmove("animated fadeInRight")
				}else{
					proIndex=$(this).index()
					proDuctmove("animated fadeInLeft")
				}
			})
			$(".pro-change span").eq(0).click(function(){
				proIndex--
				if(proIndex<0){
					proIndex=$(".pro-point").length-1
				}
				proDuctmove("animated fadeInLeft")
			})
			$(".pro-change span").eq(1).click(function(){
				proIndex++
				if(proIndex>$(".pro-point").length-1){
					proIndex=0
				}
				proDuctmove("animated fadeInRight")
			})
			//业务开始
			$(".work-i-img").hover(function(){
				$(this).stop().addClass("animated tada")
			},function(){
				$(this).removeClass("animated tada")
			})
			$(".work-i-btn").hover(function(){
				$(this).stop().addClass("animated tada")
			},function(){
				$(this).removeClass("animated tada")
			})
			$(".work-i-btn").click(function(){
				$(".work-i-btn").removeClass("on")
				$(this).addClass("on")
				if ($(this).parent().parent().find(".work-i-hide").css("display")=="none") {
					$(".work-i-btn").parent().parent().find(".work-i-hide").slideUp()
					$(this).parent().parent().find(".work-i-hide").slideDown()
				}else{
					$(".work-i-btn").removeClass("on")
					$(this).parent().parent().find(".work-i-hide").slideUp()
				}
			})
			$(".work-i-img").click(function(){
				$(".work-i-btn").removeClass("on")
				$(this).parent().find(".work-i-btn").addClass("on")
				if ($(this).parent().parent().find(".work-i-hide").css("display")=="none") {
					$(".work-i-btn").parent().parent().find(".work-i-hide").slideUp()
					$(this).parent().parent().find(".work-i-hide").slideDown()
				}else{
					$(".work-i-btn").removeClass("on")
					$(this).parent().parent().find(".work-i-hide").slideUp()
				}
			})
			//团队
			var teamIndex=0
			var teamtimer=null
			function teammove(){
				teamIndex++
				if(teamIndex>$(".team-wrap .point-middle span").length-1){
					teamIndex=0
				}
				$(".team-wrap .point-middle span").eq(teamIndex).addClass("now").siblings().removeClass("now")
				$(".team-move-main").stop().animate({left:150},200,function(){
					$(".team-move-main").animate({left:-1130},500,function(){
						$(".team-move-main").append($(".team-move-main").find(".team-item").eq(0))
						$(".team-move-main").css({left:0})
					})
				})
			}
			teamtimer=setInterval(teammove,3000)
			$(".team-wrap .next").click(function(){
				clearInterval(teamtimer)
				 teammove()
				 setTimeout(function(){
				 	clearInterval(teamtimer)
				 	teamtimer=setInterval(teammove,3000)
				 },3000)
			})
			$(".team-wrap .prev").click(function () {
				clearInterval(teamtimer)
				teamIndex--
				if(teamIndex<0){
					teamIndex=$(".team-wrap .point-middle span").length-1
				}
				$(".team-wrap .point-middle span").eq(teamIndex).addClass("now").siblings().removeClass("now")
				$(".team-move-main").prepend($(".team-move-main").find(".team-item").eq(2))
				$(".team-move-main").css({left:-1130})
				$(".team-move-main").stop().animate({left:250},200,function(){
					$(".team-move-main").animate({left:0},500,function(){
					})
				})
                 setTimeout(function(){
				 	clearInterval(teamtimer)
				 	teamtimer=setInterval(teammove,3000)
				 },3000)
			})
			//音乐
			$(".music span").hover(function(){
				$(this).addClass("animated rubberBand")
				var musicNow=$(this).index()
				$(this).append('<audio src="sound0'+musicNow+'.mp3" autoplay="autoplay"></audio>')
			},function(){
				$(this).removeClass("animated rubberBand")
				$(this).html("")
			})
			
			$(".contant-emli").hover(function(){
				$(this).addClass("animated rubberBand")
			},function(){
				$(this).removeClass("animated rubberBand")
			})
			$(".scroll").click(function() {
				$('baby,html').animate({
					scrollTop: 0
				}, 1000);
				return false;
			})
			$(window).scroll(function(){
				if ($('baby,html').scrollTop()>=900) {
					$(".scrolltop").fadeIn()
				} else{
					$(".scrolltop").fadeOut()
				}
			})
})
