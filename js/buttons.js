res = 1;

function mid() {
	$('.color_set-1').animate({width:'75vw'});
	res = 1;
}

function max() {
	$('.color_set-1').animate({width:'90vw'});
	res = 2;
}

function half() {
	$('.color_set-1').animate({width:'50vw'});
	res = 3;
}

$( document ).ready(function() {
	$('.givcrsr').mouseover(function() {
		$('.givcrsr').css( 'cursor' , 'pointer')
	});
	$('.palette_1').click(function() {
		$('html, body').animate({
		    scrollTop: $("#yellows_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_1_mb').click(function() {
		$('html, body').animate({
		    scrollTop: $("#yellows_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_1_xs').click(function() {
		$('html, body').animate({
		    scrollTop: $("#yellows_headings").offset().top - 300
		}, 2000);
	});

	$('.palette_2').click(function() {
		$('html, body').animate({
		    scrollTop: $("#greens_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_2_mb').click(function() {
		$('html, body').animate({
		    scrollTop: $("#greens_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_2_xs').click(function() {
		$('html, body').animate({
			scrollTop: $("#greens_headings").offset().top - 300
		}, 2000);
	});

	$('.palette_3').click(function() {
		$('html, body').animate({
		    scrollTop: $("#lightturq_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_3_mb').click(function() {
		$('html, body').animate({
		    scrollTop: $("#lightturq_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_3_xs').click(function() {
		$('html, body').animate({
			scrollTop: $("#lightturq_headings").offset().top - 300
		}, 2000);
	});

	$('.palette_4').click(function() {
		$('html, body').animate({
		    scrollTop: $("#darkturq_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_4_mb').click(function() {
		$('html, body').animate({
		    scrollTop: $("#darkturq_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_4_xs').click(function() {
		$('html, body').animate({
			scrollTop: $("#darkturq_headings").offset().top - 300
		}, 2000);
	});

	$('.palette_5').click(function() {
		$('html, body').animate({
		    scrollTop: $("#bluegreen_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_5_mb').click(function() {
		$('html, body').animate({
		    scrollTop: $("#bluegreen_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_5_xs').click(function() {
		$('html, body').animate({
			scrollTop: $("#bluegreen_headings").offset().top - 300
		}, 2000);
	});

	$('.palette_6').click(function() {
		$('html, body').animate({
		    scrollTop: $("#skyblue_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_6_mb').click(function() {
		$('html, body').animate({
		    scrollTop: $("#skyblue_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_6_xs').click(function() {
		$('html, body').animate({
			scrollTop: $("#skyblue_headings").offset().top - 300
		}, 2000);
	});

	$('.palette_7').click(function() {
		$('html, body').animate({
		    scrollTop: $("#cyan_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_7_mb').click(function() {
		$('html, body').animate({
		    scrollTop: $("#cyan_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_7_xs').click(function() {
		$('html, body').animate({
			scrollTop: $("#cyan_headings").offset().top - 300
		}, 2000);
	});

	$('.palette_8').click(function() {
		$('html, body').animate({
		    scrollTop: $("#white_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_8_mb').click(function() {
		$('html, body').animate({
		    scrollTop: $("#white_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_8_xs').click(function() {
		$('html, body').animate({
			scrollTop: $("#white_headings").offset().top - 300
		}, 2000);
	});

	$('.palette_9').click(function() {
		$('html, body').animate({
		    scrollTop: $("#purples_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_9_mb').click(function() {
		$('html, body').animate({
		    scrollTop: $("#purples_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_9_xs').click(function() {
		$('html, body').animate({
			scrollTop: $("#purples_headings").offset().top - 300
		}, 2000);
	});

	$('.palette_10').click(function() {
		$('html, body').animate({
		    scrollTop: $("#pinks_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_10_mb').click(function() {
		$('html, body').animate({
		    scrollTop: $("#pinks_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_10_xs').click(function() {
		$('html, body').animate({
			scrollTop: $("#pinks_headings").offset().top - 300
		}, 2000);
	});

	$('.palette_11').click(function() {
		$('html, body').animate({
		    scrollTop: $("#red_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_11_mb').click(function() {
		$('html, body').animate({
		    scrollTop: $("#red_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_11_xs').click(function() {
		$('html, body').animate({
			scrollTop: $("#red_headings").offset().top - 300
		}, 2000);
	});

	$('.palette_12').click(function() {
		$('html, body').animate({
		    scrollTop: $("#amber_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_12_mb').click(function() {
		$('html, body').animate({
		    scrollTop: $("#amber_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_12_xs').click(function() {
		$('html, body').animate({
			scrollTop: $("#amber_headings").offset().top - 300
		}, 2000);
	});

	$('.palette_13').click(function() {
		$('html, body').animate({
		    scrollTop: $("#orange_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_13_mb').click(function() {
		$('html, body').animate({
		    scrollTop: $("#orange_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_13_xs').click(function() {
		$('html, body').animate({
			scrollTop: $("#orange_headings").offset().top - 300
		}, 2000);
	});

	$('.palette_14').click(function() {
		$('html, body').animate({
		    scrollTop: $("#brown_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_14_mb').click(function() {
		$('html, body').animate({
		    scrollTop: $("#brown_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_14_xs').click(function() {
		$('html, body').animate({
			scrollTop: $("#brown_headings").offset().top - 300
		}, 2000);
	});

	$('.palette_15').click(function() {
		$('html, body').animate({
		    scrollTop: $("#blacks_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_15_mb').click(function() {
		$('html, body').animate({
		    scrollTop: $("#blacks_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_15_xs').click(function() {
		$('html, body').animate({
			scrollTop: $("#blacks_headings").offset().top - 300
		}, 2000);
	});

	$('.palette_16').click(function() {
		$('html, body').animate({
		    scrollTop: $("#darkgreys_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_16_mb').click(function() {
		$('html, body').animate({
		    scrollTop: $("#darkgreys_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_16_xs').click(function() {
		$('html, body').animate({
			scrollTop: $("#darkgreys_headings").offset().top - 300
		}, 2000);
	});

	$('.palette_17').click(function() {
		$('html, body').animate({
		    scrollTop: $("#beige_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_17_mb').click(function() {
		$('html, body').animate({
		    scrollTop: $("#beige_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_17_xs').click(function() {
		$('html, body').animate({
			scrollTop: $("#beige_headings").offset().top - 300
		}, 2000);
	});

	$('.palette_18').click(function() {
		$('html, body').animate({
		    scrollTop: $("#greys_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_18_mb').click(function() {
		$('html, body').animate({
		    scrollTop: $("#greys_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_18_xs').click(function() {
		$('html, body').animate({
			scrollTop: $("#greys_headings").offset().top - 300
		}, 2000);
	});

	$('.palette_19').click(function() {
		$('html, body').animate({
		    scrollTop: $("#blues_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_19_mb').click(function() {
		$('html, body').animate({
		    scrollTop: $("#blues_headings").offset().top - 300
		}, 2000);
	});
	$('.palette_19_xs').click(function() {
		$('html, body').animate({
			scrollTop: $("#blues_headings").offset().top - 300
		}, 2000);
	});

});


// $('.color_set-1').css({width:'50vh'});
// left:50%;
// transform: translate(-50%, -50%);
