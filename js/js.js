jQuery(document).ready(function($){
////////////////////////////////////////////////*for example 1 and for example 2:*/////////////////////////////////////////////////
	var html_class=$.cookie('colorScheme');//получаем печеньку с именем colorScheme
	if(html_class){//если печенька с именем colorScheme существует
		$('html').attr('class',html_class);//то добавляем значение этой печеньки к html тегу в качестве класса
	}
	function SetCookie(){//функция для установки печеньки с именем colorScheme, чтобы не писать длинную строку в каждой клик функции
		$.cookie('colorScheme',/*вызываем функцию jQuery.cookie и задаем будующее название печеньки «colorScheme»*/
			$('html').attr('class'),/*получаем значение атрибута class у html тега. оно будет храниться в печеньке*/
			{
				expires:2*365,/*время жизни печеньки*/
				path:'/',/*html адрес определенной страницы. '/' - означает,что печенька будет установлена для всех страниц домена*/
				samesite:'Lax',/*samesite:'Strict'or'Lax'*/
				secure:false/*для сайтов на https (с SSL) можно поставить true. в этом случае samesite не обязателен*/
			});
	}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*example1:*/
	$('.buttonWhite').click(function(){//жмем на button с классом buttonWhite
		/*сначало проверим у html тега наличие ненужных классов. Если есть, удаляем*/
		if($('html').hasClass('Black')){$('html').removeClass('Black');}/*удаляем класс Black у тега html, если есть*/
		if($('html').hasClass('Blue')){$('html').removeClass('Blue');}/*удаляем класс Blue у тега html, если есть*/
		if($('html').hasClass('Brown')){$('html').removeClass('Brown');}/*удаляем класс Brown у тега html, если есть*/
		if($('html').hasClass('Beige')){$('html').removeClass('Beige');}/*удаляем класс Beige у тега html, если есть*/
		$('html').addClass('White');/*Теперь добавляем html тегу нужный класс*/
		SetCookie();/*устанавливаем печеньку. Печенька получить значение White, кторый Мы добавили в строке выше*/
	});
	/*аналогично для других цветовых схем:*/
	$('.buttonBlack').click(function(){
		if($('html').hasClass('White')){$('html').removeClass('White');}
		if($('html').hasClass('Blue')){$('html').removeClass('Blue');}
		if($('html').hasClass('Brown')){$('html').removeClass('Brown');}
		if($('html').hasClass('Beige')){$('html').removeClass('Beige');}
		$('html').addClass('Black');SetCookie();
	});
	$('.buttonBlue').click(function(){
		if($('html').hasClass('White')){$('html').removeClass('White');}
		if($('html').hasClass('Black')){$('html').removeClass('Black');}
		if($('html').hasClass('Brown')){$('html').removeClass('Brown');}
		if($('html').hasClass('Beige')){$('html').removeClass('Beige');}
		$('html').addClass('Blue');SetCookie();
	});
	$('.buttonBrown').click(function(){
		if($('html').hasClass('White')){$('html').removeClass('White');}
		if($('html').hasClass('Black')){$('html').removeClass('Black');}
		if($('html').hasClass('Blue')){$('html').removeClass('Blue');}
		if($('html').hasClass('Beige')){$('html').removeClass('Beige');}
		$('html').addClass('Brown');SetCookie();
	});
	$('.buttonBeige').click(function(){
		if($('html').hasClass('White')){$('html').removeClass('White');}
		if($('html').hasClass('Black')){$('html').removeClass('Black');}
		if($('html').hasClass('Blue')){$('html').removeClass('Blue');}
		if($('html').hasClass('Brown')){$('html').removeClass('Brown');}
		$('html').addClass('Beige');SetCookie();
	});
	/*проверяем наличие классов у тега html, если есть, удаляем. После чего удаляем печеньку , задав отрицательное время*/
	$('.buttonReset').click(function(){/*кнопка сброса и удаления печеньки*/
		if($('html').hasClass('White')){$('html').removeClass('White');}/*удаляем класс White у тега html, если есть*/
		if($('html').hasClass('Black')){$('html').removeClass('Black');}/*удаляем класс Black у тега html, если есть*/
		if($('html').hasClass('Blue')){$('html').removeClass('Blue');}/*удаляем класс Blue у тега html, если есть*/
		if($('html').hasClass('Brown')){$('html').removeClass('Brown');}/*удаляем класс Brown у тега html, если есть*/
		if($('html').hasClass('Beige')){$('html').removeClass('Beige');}/*удаляем класс Beige у тега html, если есть*/
		$.cookie('colorScheme',$('html').attr('class'),{expires:2*(-365),path:'/',samesite:'Lax',secure:false});/*удаляем печеньку, установив отрицательное значение жизни куки. Браузер корректно её удалит сам как истекшую*/
	});
/*example 1 END*/
	/*example 2:*/
	// function remCL(ClasS){if($('html').hasClass(ClasS)){$('html').removeClass(ClasS);}}
	// function Scheme(attrClass){
		// remCL('White');remCL('Black');remCL('Blue');remCL('Brown');remCL('Beige');
		// if(attrClass!==null){$('html').addClass(attrClass);}
	// }
	// $('.buttonWhite').click(function(){Scheme('White');SetCookie();});
	// $('.buttonBlack').click(function(){Scheme('Black');SetCookie();});
	// $('.buttonBlue').click(function(){Scheme('Blue');SetCookie();});
	// $('.buttonBrown').click(function(){Scheme('Brown');SetCookie();});
	// $('.buttonBeige').click(function(){Scheme('Beige');SetCookie();});
	// $('.buttonReset').click(function(){Scheme();$.cookie('colorScheme',$('html').attr('class'),{expires:2*(-365),path:'/',samesite:'Lax',secure:false});});
	/*example 2 END*/
	/*example 3:*/
	// var CooseScheme_id=jQuery.cookie('colorScheme'),colorScheme;
	// if(CooseScheme_id){$('#'+CooseScheme_id).addClass('ActiveScheme');$('html').addClass(CooseScheme_id);}
	// $('.button').click(function(){
			// colorScheme=$('div#buttons').find('.ActiveScheme');
			// $.cookie('colorScheme',$(this).attr('id'),{expires:2*365,path:'/',samesite:'Lax',secure:false});
			// $(this).addClass('ActiveScheme').siblings().removeClass('ActiveScheme');
			// $('html').removeClass(colorScheme.attr("id")).addClass($(this).attr("id"));
		// });
	// $('.buttonReset').click(function(){$.cookie('colorScheme',$('html').attr('class'),{expires:2*(-365),path:'/',samesite:'Lax',secure:false});});
	/*example 3 END*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	var body_class=$.cookie('Session');if(body_class){$('body').attr('class',body_class);}
	$('.buttonSession').click(function(){/*Sessional cookie*/
		$('body').addClass('Session');
		$.cookie('Session',$('body').attr('class'),{samesite:'Strict'});/*устанавливаем сессию. для этого просто не указываем время жизни куки*/
	});
});