(function($) {
	$.fn.foldpanel = function(options) {

		var _init = options.init || false,
			_initIndex = options.init_index || 0;
		_time = options.time || 300,
			_dbclose = options.dbclose && true,
			_flag = false;
		// return 
		this.each(function() {
			var $dts = $(this).children('dt');
			$dts.click(onClick);
			$dts.each(resetFalse);

			//初始化
			if (_init) {
				$dts.eq(_initIndex).next().slideDown(_time);
				$dts.eq(_initIndex).data('flag', true);
			}

		});

		function onClick() {
			_this = $(this);
			_this.siblings('dt').each(hide);


			if (_dbclose) {
				if (_this.data('flag')) {
					_this.next().slideUp(_time);
					_this.data('flag', false);
				} else {
					_this.next().slideDown(_time);
					_this.data('flag', true);
				}
				return;
			} else {
				_this.next().slideDown(_time);
			}
		}

		function hide() {
			$(this).next().slideUp(_time);
			$(this).data('flag', false);
		}

		function resetFalse() {
			_this = $(this);
			_this.data('flag', false);
		}
	}
})(jQuery);
