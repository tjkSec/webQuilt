$( document ).ready(function(){
	refresh_data();
	setInterval(function () {
	refresh_data();
}, 6000);
});


function refresh_data() {
		$("#overlapping_Tri").animate({left:"-170px"}, 4000).css('overflow', 'visible');
		setTimeout(function () {
		$("#overlapping_Tri").animate({left:"-100px"}, 4000).css('overflow', 'visible');
		}, 3000);
};
