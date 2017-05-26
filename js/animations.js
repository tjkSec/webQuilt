$( document ).ready(function(){
	refresh_data();
	uncover();
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


var uncover;
(function () {
	var _$0 = this;

	function _0() {
		_$0.setTimeout(function () {
			var cover1, cover2;
			cover1 = $('#cover-1');
			cover2 = $('#cover-2');
			cover1.animate({
				left: '-50vw'
			}, 1000);
			cover2.animate({
				left: '100vw'
			}, 1000);
		}, 250);
	}

	uncover = _0;
}).call(this);

setInterval(function () {
	$(window).scroll(function() {
	    if ($(this).scrollTop() >= 200) {
	        $('.toTheTop').css({'top':'90px'});
	    }
		else{
			$('.toTheTop').css({'top':'10px'});
		}
	});
}, 5);

function topShop() {
	$('html, body').animate({ scrollTop: 500 }, 'slow');
}



//$('.toTheTop').animate({'top':'90px'});
