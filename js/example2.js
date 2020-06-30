jQuery(document).ready(function($){
////////////////////////////////////////////////*for example 1 and for example 2:*/////////////////////////////////////////////////
	var html_class=$.cookie('colorScheme');
	if(html_class){$('html').attr('class',html_class);}
	function SetCookie(){$.cookie('colorScheme',$('html').attr('class'),{expires:2*365,path:'/',samesite:'Lax',secure:false});}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*example 2:*/
	function remCL(ClasS){if($('html').hasClass(ClasS)){$('html').removeClass(ClasS);}}
	function Scheme(attrClass){
		remCL('White');remCL('Black');remCL('Blue');remCL('Brown');remCL('Beige');
		if(attrClass!==null){$('html').addClass(attrClass);}
	}
	$('.buttonWhite').click(function(){Scheme('White');SetCookie();});
	$('.buttonBlack').click(function(){Scheme('Black');SetCookie();});
	$('.buttonBlue').click(function(){Scheme('Blue');SetCookie();});
	$('.buttonBrown').click(function(){Scheme('Brown');SetCookie();});
	$('.buttonBeige').click(function(){Scheme('Beige');SetCookie();});
	$('.buttonReset').click(function(){Scheme();$.cookie('colorScheme',$('html').attr('class'),{expires:2*(-365),path:'/',samesite:'Lax',secure:false});});
/*example 2 END*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	var body_class=$.cookie('Session');if(body_class){$('body').attr('class',body_class);}
	$('.buttonSession').click(function(){/*Sessional cookie*/
		$('body').addClass('Session');
		$.cookie('Session',$('body').attr('class'),{samesite:'Lax'});
	});
});