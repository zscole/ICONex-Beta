/* eslint-disable */
(function($){
	var defaults = {
		author : "kissyweb@gmail.com"
	};

	$.fn.popUpFx = function(options){
		var I_F 			= {};
		var _class 			= this.attr("class");
		var init = function(){
			I_F.set = $.extend({}, defaults, options);
			loadedFx();
		};

		var loadedFx = function(){
			if( $("div").hasClass(_class) ){
				var _objH = parseInt($(".popup").css("height"));
				var _winH = $(window).height();
				var _top = $(document).scrollTop();
				if(_objH+20 > _winH){
					var _add = (_objH - _winH);
					$("."+_class).css({"position":"absolute"});
					$("."+_class+" .popup").css({"top":(_top + 10)+"px", "bottom":"auto"});
				} else {
					$("."+_class).css("position", "fixed");
					$("."+_class+" .popup").css({"top":"0", "bottom":"0"});
				}
			}
		};

		$(window).resize(function() {
			loadedFx();
		});

		init();
		return this;
	};
})(jQuery);
