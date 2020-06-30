# jquery.cookie.js-with-samesite
Репозиторий создан для примера, как можно работать с jquery.cookie.js
В jquery.cookie.js добавлена поддержка атрибута samesite.
Написано несколько вариантов переключения на js для более легкого понимания.
В качестве примера создан функционал переключения цветовых схем как в версииях для слабовидящих.
На самом деле примеров можно придумать очень много. Можно работать с классами, как в примерах, но можно создавать и data атрибуты и далее задавать стили через них. например, добавить тегу body атрибут image со значением hide и задать стили
<pre>
body[image="hide"] img {display: none !important;}
</pre>
Тем самым отключить показ изображений. Либо по аналогии с представленным функционалом добавить класс noimg и добавить стили
<pre>
.noimg img {display: none;}
</pre>
Ограничение лишь одно - Ваша креативность.

Как работать с jquery.cookie.js?
Сама функция с добавленой поддержкой атрибута «samesite»:
<pre>
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') {
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString();
        }
        var path = options.path ? '; path=' + (options.path) : '';
	var samesite=options.samesite?'; samesite='+(options.samesite):'';
	//var samesite=options.samesite?'; samesite='+(options.samesite):'; samesite=Lax';//для установки опции samesite со значением Lax автоматически
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, samesite, path, domain, secure].join('');
    } else {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};
</pre>
для создания/перезаписи печеньки необходимо вызвать эту функцию и передать в круглые скобки необходимые параметры
<pre>
jQuery.cookie(тут необходимо указать параметры);
</pre>
«jQuery» можно заменить символом «$»
<pre>
$.cookie(тут необходимо указать параметры);
</pre>
Функция принимает 3 параметра:

name - имя будущей печеньки, либо имя перезаписываемой печеньки;

value - Значение, которое печенька будет хранить (например логин или пароль);

options	- массив опций, где указываются параметры(время жизни печеньки, для какой страницы сайта печенька или для всего сайта, атрибуты «samesite» и «secure»);
пример массива options:

<pre>
expires:2*365,/*время жизни печеньки - не обязытельный параметр.*/

path:'/',/*html адрес определенной страницы. '/' - означает,что печенька будет установлена для всех страниц домена - не обязытельный параметр.*/

samesite:'Lax',/*samesite:'Strict'or'Lax' - не обязытельный параметр, если браузеры научаться сами выставлять его, либо в фукции jQuery.cookie выше раскоментирована строка var samesite=options.samesite?'; samesite='+(options.samesite):'; samesite=Lax';*/

secure:false/*по умолчанию принимает значение «false» - не обязытельный параметр. Для сайтов на https (с SSL) можно установить значение «true». в этом случае samesite не обязателен*/
</pre>
Например:
<pre>
$.cookie('NameCookie','ValueCookie',{samesite:'Strict'});
</pre>
Мы создали печеньку с названием «NameCookie»,которая будет хранить значение «ValueCookie», но не указали время жизни в опциях, следовательно наша печенька будет сессионная и удалиться браузером после закрытия браузера.
Чтобы печенька сохранилась после закрытия браузера необходимо задать ей время жизни.

Например:
<pre>
$.cookie('NameCookie','ValueCookie',{expires:2*365,samesite:'Strict'});
</pre>
Теперь наша печенька будет установлена сроком на два года.

Получение значения печеньки:
<pre>
var chek_NameCookie=$.cookie('NameCookie');//получаем печеньку по имени NameCookie с его значением в переменную
</pre>
Если печенька с именем «NameCookie» существует и имеет какое-то значение, покажем это значение в консоли
<pre>
if(chek_NameCookie){
	console.log(chek_NameCookie);
}
</pre>
Удаление печеньки:

Практика показала, что для удаления печеньки лучше всего перезаписать существующую печеньку с отрицательным сроком жизни. В этом случае браузер корректно удалить её сам как устаревшую.

Например:
<pre>
$('.buttonReset').click(function(){
	$.cookie('colorScheme',$('html').attr('class'),{expires:2*(-365),path:'/',samesite:'Lax',secure:false});
});
</pre>

The repository was created as an example of how to work with jquery.cookie.js
Added support for the samesite attribute in jquery.cookie.js.
Several options for switching to js have been written for easier understanding.
As an example, a functional for switching color schemes has been created, as in versions for the visually impaired.
In fact, you can come up with a lot of examples. You can work with classes, as in the examples, but you can create data attributes and further set styles through them. for example, add the image attribute with the value hide to the body tag and set the body styles 
<pre>
body[image="hide"] img {display: none !important;}
</pre>
Thus, turn off the display of images. Or, by analogy with the presented functionality, add the noimg class and add the 
<pre>
.noimg img {display: none;}
</pre>
styles. The only limitation is your creativity. Thank.
