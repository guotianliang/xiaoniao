$(function(){
	$("#header").load("header.html");
	$(".foot").load("footer.html");
	setTimeout(function(){
		$(".pen").animate({"width":"100%"},1500)
	});
	var global=global||{}
   global.loadStart=0
   loadArticleList()
function loadArticleList(){
	if (global.loadStart==0) {
		$(".center-main").html("")
	}
	var result=listData['listData0'+global.loadStart]
	var list=result.data.list
    if (!list||!list.length) {
    	$(".center-main").html("您请求的数据不存在")
    } else{
    	for(var i=0;i<list.length;i++){
			 var htmlModel=$('#itemHtml').html()
			 htmlModel=htmlModel.replace('articeId',list[i].sysId)
			 htmlModel=htmlModel.replace("img/images/list_img01.jpg",list[i].coverImg)
			 htmlModel=htmlModel.replace("$artcleTitle$",list[i].title)
			 htmlModel=htmlModel.replace("$updateTime$",list[i].creatAt)
			 htmlModel=htmlModel.replace("$describe$",list[i].describe)
			 $('.center-main').append(htmlModel)
			}
    }
     global.loadStart++;
//   console.log(global.loadStart)
     global.loadCount=Math.ceil(result.data.count/result.data.pageSize)
     if(global.loadStart>=global.loadCount){
	   $('.list-more').fadeTo(200,0);
	   $('.scroollon img').attr('src','img/images/list_gomore_bg_nomore.jpg')
	 }
    }
 $('.list-more').click(function(){
		loadArticleList()
	})
    $(".center-main").delegate('.center-item','click',function(){
    	var articleId=$(this).attr('articeId')
    	window.open('article.html?news=xiaoniaoNews'+articleId)
    })
})

