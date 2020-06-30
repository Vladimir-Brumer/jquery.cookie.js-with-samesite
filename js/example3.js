jQuery(document).ready(function($){
/*example 3:*/
	var CooseScheme_id=jQuery.cookie('colorScheme'),colorScheme;
	if(CooseScheme_id){$('#'+CooseScheme_id).addClass('ActiveScheme');$('html').addClass(CooseScheme_id);}
	$('.button').click(function(){
			colorScheme=$('div#buttons').find('.ActiveScheme');
			$.cookie('colorScheme',$(this).attr('id'),{expires:2*365,path:'/',samesite:'Lax',secure:false});
			$(this).addClass('ActiveScheme').siblings().removeClass('ActiveScheme');
			$('html').removeClass(colorScheme.attr("id")).addClass($(this).attr("id"));
		});
	$('.buttonReset').click(function(){$.cookie('colorScheme',$('html').attr('class'),{expires:2*(-365),path:'/',samesite:'Lax',secure:false});});
/*example 3 END*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	var body_class=$.cookie('Session');if(body_class){$('body').attr('class',body_class);}
	$('.buttonSession').click(function(){/*Sessional cookie*/
		$('body').addClass('Session');
		$.cookie('Session',$('body').attr('class'),{samesite:'Lax'});
	});
});