$(function(){
	$(".navList").on("click",function(){
		var href= ($(this).attr("href"))
		window.location.href=href;
	});
	//滚动效果
	 $(document).ready(function(){
	    var a,b,c;
	    a=$(window).height();   
	    $(window).scroll(function(){        
	        var b=$(this).scrollTop();
	        $(".scrollContainer").each(function(){
	            c=$(this).offset().top;     
	            if(c>a){
	            	if(a+b>c){
		                $(this).addClass("fadeInUp animated");
		            }
		            else{
		                $(this).removeClass("fadeInUp animated");
		            }
	            }                    
	        }); 
	    });
	});
})