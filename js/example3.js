jQuery(document).ready(function($){
/*example 3:*/
	var CooseScheme_id=jQuery.cookie('colorScheme'),colorScheme;/*получаем значение печеньки «colorScheme» и создаем пустую переменную «colorScheme»*/
	/*если печенька есть то обращаемся к button с идентификатором равным этому значению и добавляем этой кнопке класс «ActiveScheme». тегу html добавляем класс со значением печеньки*/
	if(CooseScheme_id){$('#'+CooseScheme_id).addClass('ActiveScheme');$('html').addClass(CooseScheme_id);}
	$('.button').click(function(){/*жмем на любую кнопку с классом button*/
			/*ищем в блоке div с идентификатором buttons кнопку с классом «ActiveScheme» и сохраняем её в переменной*/
			colorScheme=$('div#buttons').find('.ActiveScheme');
			/*устанавливаем/перезаписываем печеньку с названием «colorScheme». в качестве значения устанавливаем идентификатор кнопки, на которую кликнули - $(this).attr('id')*/
			$.cookie('colorScheme',$(this).attr('id'),{expires:2*365,path:'/',samesite:'Lax',secure:false});
			/*добавим кнопке на которую нажали класс «ActiveScheme», а у соседних удалим - .siblings().removeClass('ActiveScheme')*/
			$(this).addClass('ActiveScheme').siblings().removeClass('ActiveScheme');
			/* удаляем класс, со значением идентификатора старой (из печеньки или из предыдущего клика) кнопки, которую мы сохранили в переменной «colorScheme» сразу после клика $('div#buttons').find('.ActiveScheme') и добавляем класс со значением идентификатора текущей кнопки*/
			$('html').removeClass(colorScheme.attr("id")).addClass($(this).attr("id"));
		});
	$('.buttonReset').click(function(){$.cookie('colorScheme',$('html').attr('class'),{expires:2*(-365),path:'/',samesite:'Lax',secure:false});});
/*example 3 END*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
	var body_class=$.cookie('Session');if(body_class){$('body').attr('class',body_class);}
	$('.buttonSession').click(function(){/*Sessional cookie*/
		$('body').addClass('Session');
		$.cookie('Session',$('body').attr('class'),{samesite:'Lax'});
	});
});
