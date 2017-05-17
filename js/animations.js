$( document ).ready(function(){
	refresh_data();
	setInterval(function () {
	refresh_data();
}, 6000);
});


var refresh_data;
(function () {
		var _$0 = this;

		function _0() {
				$("#overlapping_Tri").animate({
						left: "-170px"
				}, 4000).css('overflow', 'visible');

				_$0.setTimeout(function () {
						$("#overlapping_Tri").animate({
								left: "-100px"
						}, 4000).css('overflow', 'visible');
				}, 3000);
		}

		refresh_data = _0;
}).call(this);
