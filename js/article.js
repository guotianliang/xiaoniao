$(function(){
	$(".header").load("header.html")
	$(".foot").load("footer.html")
	setTimeout(function(){
		$(".pen").animate({"width":"100%"},1500)
	});
	var news=getUrlParams('news');
//	console.log(news)
	var data=articleData[news].data;
	$(".tit>h1").html(data.typeTitle)
	$(".tit>h2").html(data.typeEntitle)
	$(".pen p").html(data.title)
	$(".con-p").html(data.content)
	$(".data").html(data.creatAt)
	$(".author").html(data.creatByFullName)
	//search ?  hash #   article.html?articleId=3&name=22&
    $(".con_main img").attr("src",data.coverImg)
    function getUrlParams(name){
    	var reg=new RegExp('(^|&)'+name+'=([^&]*)(&|$)')
    	var r=window.location.search.substr(1).match(reg)
    	if (r!=null) {
    		console.log(r)
    		return r[2]
    	} else{
    		return ""
    	}
    }
    $(".like").hover(function(){
    	$(".like").stop().addClass("animated rubberBand")
    },function(){
    	$(".like").removeClass("animated rubberBand")
    })
    var arr=["皇上万岁，万万岁","爱死你啦、MUA~","再点我试试","抱抱"]
    var anum=0
    var alike=true
 $(".like").click(function(){
 	if(alike){
 		$(".like").addClass("on")
      alike=false
 	}
 	anum=parseInt(Math.random()*4)
 	$(".like-tips-wrap").removeClass("animated bounceOutLeft bounceInDown")
 	 $(".like-tips-wrap").fadeTo(1,500)
 	 $(".like-tips-wrap").addClass("animated bounceInDown")
     $(".like-tips").html(arr[anum])
       setTimeout(function(){
       	$(".like-tips-wrap").animate()
       	$(".like-tips-wrap").addClass("animated bounceOutLeft")
       },1500)
     })
})
