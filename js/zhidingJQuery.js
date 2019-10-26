$(function(){
	$(window).scroll(function(){
		var scroll=	$(document).scrollTop();
	     if(scroll>=200){
	     	$('.menu').css({
                        position:'fixed',
                        left:'50%',
                        top:0,
                        marginLeft:-635
                    });
                    $('.menu').show();	
	     }else{
	     	$('.menu').css({
                        position:'static',  
                    });
                    $('.menu').hide();
	     }
		if(scroll>=400){
               $('.totop').fadeIn();
		          }
		          else{
		              $('.totop').fadeOut();
		          }
		       });
		$('.totop').click(function() {                
                $('html,body').animate({'scrollTop':0});
                $('.menu').hide()
            });      
	})
	