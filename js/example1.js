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
				path:'/',/*html адрес определенной страницы*/
				samesite:'Lax',/*samesite:'Strict'or'Lax'*/
				secure:false/*для сайтов на https (с SSL) можно поставить true. в этом случае samesite не обязателен*/
			});
	}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*example1:*/
	$('.buttonWhite').click(function(){//жмем на button с классом buttonWhite
		/*сначало проверим у html тега наличие не нужных классов. Если есть, удаляем*/
		if($('html').hasClass('Black')){$('html').removeClass('Black');}
		if($('html').hasClass('Blue')){$('html').removeClass('Blue');}
		if($('html').hasClass('Brown')){$('html').removeClass('Brown');}
		if($('html').hasClass('Beige')){$('html').removeClass('Beige');}
		/*Теперь добавляем html тегу нужный класс*/
		$('html').addClass('White');
		/*устанавливаем печеньку*/
		SetCookie();
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
	$('.buttonReset').click(function(){
		if($('html').hasClass('White')){$('html').removeClass('White');}
		if($('html').hasClass('Black')){$('html').removeClass('Black');}
		if($('html').hasClass('Blue')){$('html').removeClass('Blue');}
		if($('html').hasClass('Brown')){$('html').removeClass('Brown');}
		if($('html').hasClass('Beige')){$('html').removeClass('Beige');}
		$.cookie('colorScheme',$('html').attr('class'),{expires:2*(-365),path:'/',samesite:'Lax',secure:false});
	});
/*example 1 END*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	var body_class=$.cookie('Session');if(body_class){$('body').attr('class',body_class);}
	$('.buttonSession').click(function(){/*Sessional cookie*/
		$('body').addClass('Session');
		$.cookie('Session',$('body').attr('class'),{samesite:'Lax'});
	});
});