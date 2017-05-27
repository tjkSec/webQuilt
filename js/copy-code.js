function rgb2hex(rgb) {
    rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}


$( document ).ready(function() {
	$('#blue_row_one_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_one_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_one_0').css("fill"));
			new Clipboard('.blue_row_one_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_one_0').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_one_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_one_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_one_1').css("fill"));
			new Clipboard('.blue_row_one_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_one_1').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_one_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_one_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_one_2').css("fill"));
			new Clipboard('.blue_row_one_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_one_2').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_one_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_one_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_one_3').css("fill"));
			new Clipboard('.blue_row_one_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_one_3').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_one_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_one_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_one_4').css("fill"));
			new Clipboard('.blue_row_one_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_one_4').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_one_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_one_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_one_5').css("fill"));
			new Clipboard('.blue_row_one_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_one_5').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_two_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_two_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_two_0').css("fill"));
			new Clipboard('.blue_row_two_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_two_0').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_two_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_two_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_two_1').css("fill"));
			new Clipboard('.blue_row_two_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_two_1').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_two_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_two_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_two_2').css("fill"));
			new Clipboard('.blue_row_two_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_two_2').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_two_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_two_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_two_3').css("fill"));
			new Clipboard('.blue_row_two_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_two_3').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_two_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_two_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_two_4').css("fill"));
			new Clipboard('.blue_row_two_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_two_4').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_two_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_two_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_two_5').css("fill"));
			new Clipboard('.blue_row_two_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_two_5').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_three_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_three_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_three_0').css("fill"));
			new Clipboard('.blue_row_three_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_three_0').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_three_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_three_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_three_1').css("fill"));
			new Clipboard('.blue_row_three_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_three_1').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_three_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_three_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_three_2').css("fill"));
			new Clipboard('.blue_row_three_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_three_2').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_three_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_three_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_three_3').css("fill"));
			new Clipboard('.blue_row_three_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_three_3').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_three_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_three_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_three_4').css("fill"));
			new Clipboard('.blue_row_three_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_three_4').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_three_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_three_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_three_5').css("fill"));
			new Clipboard('.blue_row_three_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_three_5').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_four_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_four_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_four_0').css("fill"));
			new Clipboard('.blue_row_four_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_four_0').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_four_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_four_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_four_1').css("fill"));
			new Clipboard('.blue_row_four_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_four_1').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_four_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_four_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_four_2').css("fill"));
			new Clipboard('.blue_row_four_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_four_2').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_four_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_four_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_four_3').css("fill"));
			new Clipboard('.blue_row_four_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_four_3').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_four_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_four_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_four_4').css("fill"));
			new Clipboard('.blue_row_four_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_four_4').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_four_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_four_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_four_5').css("fill"));
			new Clipboard('.blue_row_four_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_four_5').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_five_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_five_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_five_0').css("fill"));
			new Clipboard('.blue_row_five_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_five_0').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_five_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_five_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_five_1').css("fill"));
			new Clipboard('.blue_row_five_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_five_1').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_five_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_five_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_five_2').css("fill"));
			new Clipboard('.blue_row_five_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_five_2').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_five_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_five_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_five_3').css("fill"));
			new Clipboard('.blue_row_five_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_five_3').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_five_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_five_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_five_4').css("fill"));
			new Clipboard('.blue_row_five_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_five_4').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_five_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_five_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_five_5').css("fill"));
			new Clipboard('.blue_row_five_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_five_5').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_six_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_six_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_six_0').css("fill"));
			new Clipboard('.blue_row_six_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_six_0').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_six_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_six_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_six_1').css("fill"));
			new Clipboard('.blue_row_six_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_six_1').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_six_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_six_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_six_2').css("fill"));
			new Clipboard('.blue_row_six_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_six_2').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_six_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_six_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_six_3').css("fill"));
			new Clipboard('.blue_row_six_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_six_3').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_six_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_six_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_six_4').css("fill"));
			new Clipboard('.blue_row_six_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_six_4').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_six_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#blue_row_six_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.blue_row_six_5').css("fill"));
			new Clipboard('.blue_row_six_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#blue_row_six_5').animate({'opacity':'1'});
			}, 2500);
		});$('#blue_row_seven_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#blue_row_seven_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.blue_row_seven_0').css("fill"));
		new Clipboard('.blue_row_seven_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#blue_row_seven_0').animate({'opacity':'1'});
		}, 2500);
	});$('#blue_row_seven_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#blue_row_seven_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.blue_row_seven_1').css("fill"));
		new Clipboard('.blue_row_seven_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#blue_row_seven_1').animate({'opacity':'1'});
		}, 2500);
	});$('#blue_row_seven_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#blue_row_seven_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.blue_row_seven_2').css("fill"));
		new Clipboard('.blue_row_seven_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#blue_row_seven_2').animate({'opacity':'1'});
		}, 2500);
	});$('#blue_row_seven_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#blue_row_seven_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.blue_row_seven_3').css("fill"));
		new Clipboard('.blue_row_seven_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#blue_row_seven_3').animate({'opacity':'1'});
		}, 2500);
	});$('#blue_row_seven_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#blue_row_seven_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.blue_row_seven_4').css("fill"));
		new Clipboard('.blue_row_seven_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#blue_row_seven_4').animate({'opacity':'1'});
		}, 2500);
	});$('#blue_row_seven_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#blue_row_seven_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.blue_row_seven_5').css("fill"));
		new Clipboard('.blue_row_seven_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#blue_row_seven_5').animate({'opacity':'1'});
		}, 2500);
	});$('#blue_row_eight_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#blue_row_eight_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.blue_row_eight_0').css("fill"));
		new Clipboard('.blue_row_eight_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#blue_row_eight_0').animate({'opacity':'1'});
		}, 2500);
	});$('#blue_row_eight_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#blue_row_eight_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.blue_row_eight_1').css("fill"));
		new Clipboard('.blue_row_eight_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#blue_row_eight_1').animate({'opacity':'1'});
		}, 2500);
	});$('#blue_row_eight_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#blue_row_eight_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.blue_row_eight_2').css("fill"));
		new Clipboard('.blue_row_eight_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#blue_row_eight_2').animate({'opacity':'1'});
		}, 2500);
	});$('#blue_row_eight_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#blue_row_eight_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.blue_row_eight_3').css("fill"));
		new Clipboard('.blue_row_eight_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#blue_row_eight_3').animate({'opacity':'1'});
		}, 2500);
	});$('#blue_row_eight_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#blue_row_eight_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.blue_row_eight_4').css("fill"));
		new Clipboard('.blue_row_eight_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#blue_row_eight_4').animate({'opacity':'1'});
		}, 2500);
	});$('#blue_row_eight_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#blue_row_eight_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.blue_row_eight_5').css("fill"));
		new Clipboard('.blue_row_eight_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#blue_row_eight_5').animate({'opacity':'1'});
		}, 2500);
	});$('#blue_row_nine_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#blue_row_nine_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.blue_row_nine_0').css("fill"));
		new Clipboard('.blue_row_nine_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#blue_row_nine_0').animate({'opacity':'1'});
		}, 2500);
	});$('#blue_row_nine_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#blue_row_nine_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.blue_row_nine_1').css("fill"));
		new Clipboard('.blue_row_nine_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#blue_row_nine_1').animate({'opacity':'1'});
		}, 2500);
	});$('#blue_row_nine_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#blue_row_nine_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.blue_row_nine_2').css("fill"));
		new Clipboard('.blue_row_nine_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#blue_row_nine_2').animate({'opacity':'1'});
		}, 2500);
	});$('#blue_row_nine_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#blue_row_nine_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.blue_row_nine_3').css("fill"));
		new Clipboard('.blue_row_nine_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#blue_row_nine_3').animate({'opacity':'1'});
		}, 2500);
	});$('#blue_row_nine_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#blue_row_nine_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.blue_row_nine_4').css("fill"));
		new Clipboard('.blue_row_nine_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#blue_row_nine_4').animate({'opacity':'1'});
		}, 2500);
	});$('#blue_row_nine_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#blue_row_nine_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.blue_row_nine_5').css("fill"));
		new Clipboard('.blue_row_nine_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#blue_row_nine_5').animate({'opacity':'1'});
		}, 2500);
	});$('#blue_row_ten_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#blue_row_ten_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.blue_row_ten_0').css("fill"));
		new Clipboard('.blue_row_ten_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#blue_row_ten_0').animate({'opacity':'1'});
		}, 2500);
	});$('#blue_row_ten_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#blue_row_ten_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.blue_row_ten_1').css("fill"));
		new Clipboard('.blue_row_ten_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#blue_row_ten_1').animate({'opacity':'1'});
		}, 2500);
	});$('#blue_row_ten_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#blue_row_ten_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.blue_row_ten_2').css("fill"));
		new Clipboard('.blue_row_ten_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#blue_row_ten_2').animate({'opacity':'1'});
		}, 2500);
	});$('#blue_row_ten_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#blue_row_ten_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.blue_row_ten_3').css("fill"));
		new Clipboard('.blue_row_ten_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#blue_row_ten_3').animate({'opacity':'1'});
		}, 2500);
	});$('#blue_row_ten_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#blue_row_ten_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.blue_row_ten_4').css("fill"));
		new Clipboard('.blue_row_ten_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#blue_row_ten_4').animate({'opacity':'1'});
		}, 2500);
	});$('#blue_row_ten_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#blue_row_ten_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.blue_row_ten_5').css("fill"));
		new Clipboard('.blue_row_ten_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#blue_row_ten_5').animate({'opacity':'1'});
		}, 2500);
	});
	$('#greys_row_one_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_one_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_one_0').css("fill"));
			new Clipboard('.greys_row_one_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_one_0').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_one_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_one_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_one_1').css("fill"));
			new Clipboard('.greys_row_one_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_one_1').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_one_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_one_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_one_2').css("fill"));
			new Clipboard('.greys_row_one_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_one_2').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_one_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_one_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_one_3').css("fill"));
			new Clipboard('.greys_row_one_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_one_3').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_one_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_one_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_one_4').css("fill"));
			new Clipboard('.greys_row_one_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_one_4').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_one_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_one_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_one_5').css("fill"));
			new Clipboard('.greys_row_one_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_one_5').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_two_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_two_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_two_0').css("fill"));
			new Clipboard('.greys_row_two_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_two_0').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_two_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_two_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_two_1').css("fill"));
			new Clipboard('.greys_row_two_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_two_1').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_two_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_two_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_two_2').css("fill"));
			new Clipboard('.greys_row_two_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_two_2').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_two_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_two_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_two_3').css("fill"));
			new Clipboard('.greys_row_two_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_two_3').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_two_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_two_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_two_4').css("fill"));
			new Clipboard('.greys_row_two_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_two_4').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_two_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_two_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_two_5').css("fill"));
			new Clipboard('.greys_row_two_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_two_5').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_three_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_three_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_three_0').css("fill"));
			new Clipboard('.greys_row_three_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_three_0').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_three_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_three_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_three_1').css("fill"));
			new Clipboard('.greys_row_three_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_three_1').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_three_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_three_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_three_2').css("fill"));
			new Clipboard('.greys_row_three_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_three_2').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_three_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_three_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_three_3').css("fill"));
			new Clipboard('.greys_row_three_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_three_3').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_three_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_three_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_three_4').css("fill"));
			new Clipboard('.greys_row_three_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_three_4').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_three_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_three_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_three_5').css("fill"));
			new Clipboard('.greys_row_three_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_three_5').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_four_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_four_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_four_0').css("fill"));
			new Clipboard('.greys_row_four_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_four_0').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_four_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_four_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_four_1').css("fill"));
			new Clipboard('.greys_row_four_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_four_1').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_four_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_four_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_four_2').css("fill"));
			new Clipboard('.greys_row_four_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_four_2').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_four_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_four_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_four_3').css("fill"));
			new Clipboard('.greys_row_four_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_four_3').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_four_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_four_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_four_4').css("fill"));
			new Clipboard('.greys_row_four_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_four_4').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_four_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_four_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_four_5').css("fill"));
			new Clipboard('.greys_row_four_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_four_5').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_five_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_five_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_five_0').css("fill"));
			new Clipboard('.greys_row_five_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_five_0').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_five_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_five_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_five_1').css("fill"));
			new Clipboard('.greys_row_five_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_five_1').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_five_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_five_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_five_2').css("fill"));
			new Clipboard('.greys_row_five_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_five_2').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_five_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_five_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_five_3').css("fill"));
			new Clipboard('.greys_row_five_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_five_3').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_five_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_five_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_five_4').css("fill"));
			new Clipboard('.greys_row_five_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_five_4').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_five_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_five_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_five_5').css("fill"));
			new Clipboard('.greys_row_five_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_five_5').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_six_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_six_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_six_0').css("fill"));
			new Clipboard('.greys_row_six_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_six_0').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_six_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_six_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_six_1').css("fill"));
			new Clipboard('.greys_row_six_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_six_1').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_six_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_six_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_six_2').css("fill"));
			new Clipboard('.greys_row_six_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_six_2').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_six_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_six_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_six_3').css("fill"));
			new Clipboard('.greys_row_six_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_six_3').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_six_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_six_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_six_4').css("fill"));
			new Clipboard('.greys_row_six_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_six_4').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_six_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greys_row_six_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greys_row_six_5').css("fill"));
			new Clipboard('.greys_row_six_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greys_row_six_5').animate({'opacity':'1'});
			}, 2500);
		});$('#greys_row_seven_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greys_row_seven_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greys_row_seven_0').css("fill"));
		new Clipboard('.greys_row_seven_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greys_row_seven_0').animate({'opacity':'1'});
		}, 2500);
	});$('#greys_row_seven_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greys_row_seven_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greys_row_seven_1').css("fill"));
		new Clipboard('.greys_row_seven_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greys_row_seven_1').animate({'opacity':'1'});
		}, 2500);
	});$('#greys_row_seven_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greys_row_seven_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greys_row_seven_2').css("fill"));
		new Clipboard('.greys_row_seven_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greys_row_seven_2').animate({'opacity':'1'});
		}, 2500);
	});$('#greys_row_seven_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greys_row_seven_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greys_row_seven_3').css("fill"));
		new Clipboard('.greys_row_seven_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greys_row_seven_3').animate({'opacity':'1'});
		}, 2500);
	});$('#greys_row_seven_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greys_row_seven_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greys_row_seven_4').css("fill"));
		new Clipboard('.greys_row_seven_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greys_row_seven_4').animate({'opacity':'1'});
		}, 2500);
	});$('#greys_row_seven_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greys_row_seven_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greys_row_seven_5').css("fill"));
		new Clipboard('.greys_row_seven_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greys_row_seven_5').animate({'opacity':'1'});
		}, 2500);
	});$('#greys_row_eight_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greys_row_eight_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greys_row_eight_0').css("fill"));
		new Clipboard('.greys_row_eight_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greys_row_eight_0').animate({'opacity':'1'});
		}, 2500);
	});$('#greys_row_eight_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greys_row_eight_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greys_row_eight_1').css("fill"));
		new Clipboard('.greys_row_eight_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greys_row_eight_1').animate({'opacity':'1'});
		}, 2500);
	});$('#greys_row_eight_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greys_row_eight_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greys_row_eight_2').css("fill"));
		new Clipboard('.greys_row_eight_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greys_row_eight_2').animate({'opacity':'1'});
		}, 2500);
	});$('#greys_row_eight_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greys_row_eight_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greys_row_eight_3').css("fill"));
		new Clipboard('.greys_row_eight_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greys_row_eight_3').animate({'opacity':'1'});
		}, 2500);
	});$('#greys_row_eight_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greys_row_eight_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greys_row_eight_4').css("fill"));
		new Clipboard('.greys_row_eight_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greys_row_eight_4').animate({'opacity':'1'});
		}, 2500);
	});$('#greys_row_eight_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greys_row_eight_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greys_row_eight_5').css("fill"));
		new Clipboard('.greys_row_eight_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greys_row_eight_5').animate({'opacity':'1'});
		}, 2500);
	});$('#greys_row_nine_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greys_row_nine_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greys_row_nine_0').css("fill"));
		new Clipboard('.greys_row_nine_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greys_row_nine_0').animate({'opacity':'1'});
		}, 2500);
	});$('#greys_row_nine_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greys_row_nine_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greys_row_nine_1').css("fill"));
		new Clipboard('.greys_row_nine_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greys_row_nine_1').animate({'opacity':'1'});
		}, 2500);
	});$('#greys_row_nine_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greys_row_nine_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greys_row_nine_2').css("fill"));
		new Clipboard('.greys_row_nine_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greys_row_nine_2').animate({'opacity':'1'});
		}, 2500);
	});$('#greys_row_nine_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greys_row_nine_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greys_row_nine_3').css("fill"));
		new Clipboard('.greys_row_nine_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greys_row_nine_3').animate({'opacity':'1'});
		}, 2500);
	});$('#greys_row_nine_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greys_row_nine_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greys_row_nine_4').css("fill"));
		new Clipboard('.greys_row_nine_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greys_row_nine_4').animate({'opacity':'1'});
		}, 2500);
	});$('#greys_row_nine_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greys_row_nine_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greys_row_nine_5').css("fill"));
		new Clipboard('.greys_row_nine_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greys_row_nine_5').animate({'opacity':'1'});
		}, 2500);
	});$('#greys_row_ten_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greys_row_ten_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greys_row_ten_0').css("fill"));
		new Clipboard('.greys_row_ten_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greys_row_ten_0').animate({'opacity':'1'});
		}, 2500);
	});$('#greys_row_ten_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greys_row_ten_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greys_row_ten_1').css("fill"));
		new Clipboard('.greys_row_ten_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greys_row_ten_1').animate({'opacity':'1'});
		}, 2500);
	});$('#greys_row_ten_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greys_row_ten_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greys_row_ten_2').css("fill"));
		new Clipboard('.greys_row_ten_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greys_row_ten_2').animate({'opacity':'1'});
		}, 2500);
	});$('#greys_row_ten_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greys_row_ten_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greys_row_ten_3').css("fill"));
		new Clipboard('.greys_row_ten_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greys_row_ten_3').animate({'opacity':'1'});
		}, 2500);
	});$('#greys_row_ten_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greys_row_ten_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greys_row_ten_4').css("fill"));
		new Clipboard('.greys_row_ten_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greys_row_ten_4').animate({'opacity':'1'});
		}, 2500);
	});$('#greys_row_ten_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greys_row_ten_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greys_row_ten_5').css("fill"));
		new Clipboard('.greys_row_ten_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greys_row_ten_5').animate({'opacity':'1'});
		}, 2500);
	});
	$('#beige_row_one_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_one_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_one_0').css("fill"));
			new Clipboard('.beige_row_one_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_one_0').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_one_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_one_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_one_1').css("fill"));
			new Clipboard('.beige_row_one_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_one_1').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_one_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_one_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_one_2').css("fill"));
			new Clipboard('.beige_row_one_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_one_2').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_one_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_one_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_one_3').css("fill"));
			new Clipboard('.beige_row_one_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_one_3').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_one_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_one_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_one_4').css("fill"));
			new Clipboard('.beige_row_one_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_one_4').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_one_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_one_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_one_5').css("fill"));
			new Clipboard('.beige_row_one_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_one_5').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_two_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_two_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_two_0').css("fill"));
			new Clipboard('.beige_row_two_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_two_0').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_two_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_two_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_two_1').css("fill"));
			new Clipboard('.beige_row_two_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_two_1').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_two_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_two_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_two_2').css("fill"));
			new Clipboard('.beige_row_two_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_two_2').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_two_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_two_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_two_3').css("fill"));
			new Clipboard('.beige_row_two_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_two_3').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_two_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_two_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_two_4').css("fill"));
			new Clipboard('.beige_row_two_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_two_4').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_two_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_two_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_two_5').css("fill"));
			new Clipboard('.beige_row_two_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_two_5').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_three_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_three_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_three_0').css("fill"));
			new Clipboard('.beige_row_three_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_three_0').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_three_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_three_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_three_1').css("fill"));
			new Clipboard('.beige_row_three_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_three_1').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_three_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_three_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_three_2').css("fill"));
			new Clipboard('.beige_row_three_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_three_2').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_three_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_three_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_three_3').css("fill"));
			new Clipboard('.beige_row_three_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_three_3').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_three_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_three_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_three_4').css("fill"));
			new Clipboard('.beige_row_three_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_three_4').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_three_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_three_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_three_5').css("fill"));
			new Clipboard('.beige_row_three_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_three_5').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_four_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_four_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_four_0').css("fill"));
			new Clipboard('.beige_row_four_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_four_0').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_four_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_four_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_four_1').css("fill"));
			new Clipboard('.beige_row_four_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_four_1').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_four_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_four_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_four_2').css("fill"));
			new Clipboard('.beige_row_four_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_four_2').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_four_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_four_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_four_3').css("fill"));
			new Clipboard('.beige_row_four_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_four_3').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_four_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_four_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_four_4').css("fill"));
			new Clipboard('.beige_row_four_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_four_4').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_four_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_four_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_four_5').css("fill"));
			new Clipboard('.beige_row_four_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_four_5').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_five_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_five_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_five_0').css("fill"));
			new Clipboard('.beige_row_five_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_five_0').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_five_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_five_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_five_1').css("fill"));
			new Clipboard('.beige_row_five_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_five_1').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_five_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_five_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_five_2').css("fill"));
			new Clipboard('.beige_row_five_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_five_2').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_five_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_five_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_five_3').css("fill"));
			new Clipboard('.beige_row_five_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_five_3').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_five_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_five_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_five_4').css("fill"));
			new Clipboard('.beige_row_five_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_five_4').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_five_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_five_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_five_5').css("fill"));
			new Clipboard('.beige_row_five_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_five_5').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_six_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_six_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_six_0').css("fill"));
			new Clipboard('.beige_row_six_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_six_0').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_six_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_six_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_six_1').css("fill"));
			new Clipboard('.beige_row_six_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_six_1').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_six_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_six_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_six_2').css("fill"));
			new Clipboard('.beige_row_six_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_six_2').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_six_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_six_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_six_3').css("fill"));
			new Clipboard('.beige_row_six_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_six_3').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_six_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_six_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_six_4').css("fill"));
			new Clipboard('.beige_row_six_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_six_4').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_six_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#beige_row_six_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.beige_row_six_5').css("fill"));
			new Clipboard('.beige_row_six_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#beige_row_six_5').animate({'opacity':'1'});
			}, 2500);
		});$('#beige_row_seven_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#beige_row_seven_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.beige_row_seven_0').css("fill"));
		new Clipboard('.beige_row_seven_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#beige_row_seven_0').animate({'opacity':'1'});
		}, 2500);
	});$('#beige_row_seven_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#beige_row_seven_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.beige_row_seven_1').css("fill"));
		new Clipboard('.beige_row_seven_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#beige_row_seven_1').animate({'opacity':'1'});
		}, 2500);
	});$('#beige_row_seven_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#beige_row_seven_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.beige_row_seven_2').css("fill"));
		new Clipboard('.beige_row_seven_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#beige_row_seven_2').animate({'opacity':'1'});
		}, 2500);
	});$('#beige_row_seven_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#beige_row_seven_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.beige_row_seven_3').css("fill"));
		new Clipboard('.beige_row_seven_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#beige_row_seven_3').animate({'opacity':'1'});
		}, 2500);
	});$('#beige_row_seven_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#beige_row_seven_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.beige_row_seven_4').css("fill"));
		new Clipboard('.beige_row_seven_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#beige_row_seven_4').animate({'opacity':'1'});
		}, 2500);
	});$('#beige_row_seven_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#beige_row_seven_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.beige_row_seven_5').css("fill"));
		new Clipboard('.beige_row_seven_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#beige_row_seven_5').animate({'opacity':'1'});
		}, 2500);
	});$('#beige_row_eight_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#beige_row_eight_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.beige_row_eight_0').css("fill"));
		new Clipboard('.beige_row_eight_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#beige_row_eight_0').animate({'opacity':'1'});
		}, 2500);
	});$('#beige_row_eight_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#beige_row_eight_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.beige_row_eight_1').css("fill"));
		new Clipboard('.beige_row_eight_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#beige_row_eight_1').animate({'opacity':'1'});
		}, 2500);
	});$('#beige_row_eight_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#beige_row_eight_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.beige_row_eight_2').css("fill"));
		new Clipboard('.beige_row_eight_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#beige_row_eight_2').animate({'opacity':'1'});
		}, 2500);
	});$('#beige_row_eight_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#beige_row_eight_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.beige_row_eight_3').css("fill"));
		new Clipboard('.beige_row_eight_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#beige_row_eight_3').animate({'opacity':'1'});
		}, 2500);
	});$('#beige_row_eight_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#beige_row_eight_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.beige_row_eight_4').css("fill"));
		new Clipboard('.beige_row_eight_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#beige_row_eight_4').animate({'opacity':'1'});
		}, 2500);
	});$('#beige_row_eight_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#beige_row_eight_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.beige_row_eight_5').css("fill"));
		new Clipboard('.beige_row_eight_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#beige_row_eight_5').animate({'opacity':'1'});
		}, 2500);
	});$('#beige_row_nine_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#beige_row_nine_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.beige_row_nine_0').css("fill"));
		new Clipboard('.beige_row_nine_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#beige_row_nine_0').animate({'opacity':'1'});
		}, 2500);
	});$('#beige_row_nine_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#beige_row_nine_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.beige_row_nine_1').css("fill"));
		new Clipboard('.beige_row_nine_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#beige_row_nine_1').animate({'opacity':'1'});
		}, 2500);
	});$('#beige_row_nine_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#beige_row_nine_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.beige_row_nine_2').css("fill"));
		new Clipboard('.beige_row_nine_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#beige_row_nine_2').animate({'opacity':'1'});
		}, 2500);
	});$('#beige_row_nine_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#beige_row_nine_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.beige_row_nine_3').css("fill"));
		new Clipboard('.beige_row_nine_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#beige_row_nine_3').animate({'opacity':'1'});
		}, 2500);
	});$('#beige_row_nine_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#beige_row_nine_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.beige_row_nine_4').css("fill"));
		new Clipboard('.beige_row_nine_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#beige_row_nine_4').animate({'opacity':'1'});
		}, 2500);
	});$('#beige_row_nine_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#beige_row_nine_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.beige_row_nine_5').css("fill"));
		new Clipboard('.beige_row_nine_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#beige_row_nine_5').animate({'opacity':'1'});
		}, 2500);
	});$('#beige_row_ten_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#beige_row_ten_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.beige_row_ten_0').css("fill"));
		new Clipboard('.beige_row_ten_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#beige_row_ten_0').animate({'opacity':'1'});
		}, 2500);
	});$('#beige_row_ten_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#beige_row_ten_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.beige_row_ten_1').css("fill"));
		new Clipboard('.beige_row_ten_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#beige_row_ten_1').animate({'opacity':'1'});
		}, 2500);
	});$('#beige_row_ten_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#beige_row_ten_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.beige_row_ten_2').css("fill"));
		new Clipboard('.beige_row_ten_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#beige_row_ten_2').animate({'opacity':'1'});
		}, 2500);
	});$('#beige_row_ten_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#beige_row_ten_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.beige_row_ten_3').css("fill"));
		new Clipboard('.beige_row_ten_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#beige_row_ten_3').animate({'opacity':'1'});
		}, 2500);
	});$('#beige_row_ten_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#beige_row_ten_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.beige_row_ten_4').css("fill"));
		new Clipboard('.beige_row_ten_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#beige_row_ten_4').animate({'opacity':'1'});
		}, 2500);
	});$('#beige_row_ten_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#beige_row_ten_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.beige_row_ten_5').css("fill"));
		new Clipboard('.beige_row_ten_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#beige_row_ten_5').animate({'opacity':'1'});
		}, 2500);
	});
	$('#darkgrey_row_one_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_one_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_one_0').css("fill"));
			new Clipboard('.darkgrey_row_one_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_one_0').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_one_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_one_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_one_1').css("fill"));
			new Clipboard('.darkgrey_row_one_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_one_1').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_one_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_one_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_one_2').css("fill"));
			new Clipboard('.darkgrey_row_one_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_one_2').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_one_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_one_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_one_3').css("fill"));
			new Clipboard('.darkgrey_row_one_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_one_3').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_one_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_one_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_one_4').css("fill"));
			new Clipboard('.darkgrey_row_one_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_one_4').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_one_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_one_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_one_5').css("fill"));
			new Clipboard('.darkgrey_row_one_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_one_5').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_two_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_two_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_two_0').css("fill"));
			new Clipboard('.darkgrey_row_two_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_two_0').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_two_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_two_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_two_1').css("fill"));
			new Clipboard('.darkgrey_row_two_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_two_1').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_two_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_two_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_two_2').css("fill"));
			new Clipboard('.darkgrey_row_two_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_two_2').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_two_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_two_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_two_3').css("fill"));
			new Clipboard('.darkgrey_row_two_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_two_3').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_two_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_two_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_two_4').css("fill"));
			new Clipboard('.darkgrey_row_two_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_two_4').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_two_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_two_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_two_5').css("fill"));
			new Clipboard('.darkgrey_row_two_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_two_5').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_three_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_three_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_three_0').css("fill"));
			new Clipboard('.darkgrey_row_three_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_three_0').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_three_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_three_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_three_1').css("fill"));
			new Clipboard('.darkgrey_row_three_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_three_1').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_three_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_three_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_three_2').css("fill"));
			new Clipboard('.darkgrey_row_three_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_three_2').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_three_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_three_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_three_3').css("fill"));
			new Clipboard('.darkgrey_row_three_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_three_3').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_three_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_three_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_three_4').css("fill"));
			new Clipboard('.darkgrey_row_three_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_three_4').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_three_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_three_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_three_5').css("fill"));
			new Clipboard('.darkgrey_row_three_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_three_5').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_four_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_four_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_four_0').css("fill"));
			new Clipboard('.darkgrey_row_four_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_four_0').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_four_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_four_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_four_1').css("fill"));
			new Clipboard('.darkgrey_row_four_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_four_1').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_four_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_four_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_four_2').css("fill"));
			new Clipboard('.darkgrey_row_four_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_four_2').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_four_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_four_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_four_3').css("fill"));
			new Clipboard('.darkgrey_row_four_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_four_3').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_four_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_four_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_four_4').css("fill"));
			new Clipboard('.darkgrey_row_four_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_four_4').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_four_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_four_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_four_5').css("fill"));
			new Clipboard('.darkgrey_row_four_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_four_5').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_five_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_five_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_five_0').css("fill"));
			new Clipboard('.darkgrey_row_five_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_five_0').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_five_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_five_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_five_1').css("fill"));
			new Clipboard('.darkgrey_row_five_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_five_1').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_five_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_five_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_five_2').css("fill"));
			new Clipboard('.darkgrey_row_five_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_five_2').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_five_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_five_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_five_3').css("fill"));
			new Clipboard('.darkgrey_row_five_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_five_3').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_five_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_five_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_five_4').css("fill"));
			new Clipboard('.darkgrey_row_five_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_five_4').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_five_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_five_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_five_5').css("fill"));
			new Clipboard('.darkgrey_row_five_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_five_5').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_six_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_six_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_six_0').css("fill"));
			new Clipboard('.darkgrey_row_six_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_six_0').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_six_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_six_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_six_1').css("fill"));
			new Clipboard('.darkgrey_row_six_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_six_1').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_six_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_six_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_six_2').css("fill"));
			new Clipboard('.darkgrey_row_six_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_six_2').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_six_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_six_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_six_3').css("fill"));
			new Clipboard('.darkgrey_row_six_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_six_3').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_six_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_six_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_six_4').css("fill"));
			new Clipboard('.darkgrey_row_six_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_six_4').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_six_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkgrey_row_six_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkgrey_row_six_5').css("fill"));
			new Clipboard('.darkgrey_row_six_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkgrey_row_six_5').animate({'opacity':'1'});
			}, 2500);
		});$('#darkgrey_row_seven_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkgrey_row_seven_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkgrey_row_seven_0').css("fill"));
		new Clipboard('.darkgrey_row_seven_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkgrey_row_seven_0').animate({'opacity':'1'});
		}, 2500);
	});$('#darkgrey_row_seven_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkgrey_row_seven_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkgrey_row_seven_1').css("fill"));
		new Clipboard('.darkgrey_row_seven_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkgrey_row_seven_1').animate({'opacity':'1'});
		}, 2500);
	});$('#darkgrey_row_seven_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkgrey_row_seven_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkgrey_row_seven_2').css("fill"));
		new Clipboard('.darkgrey_row_seven_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkgrey_row_seven_2').animate({'opacity':'1'});
		}, 2500);
	});$('#darkgrey_row_seven_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkgrey_row_seven_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkgrey_row_seven_3').css("fill"));
		new Clipboard('.darkgrey_row_seven_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkgrey_row_seven_3').animate({'opacity':'1'});
		}, 2500);
	});$('#darkgrey_row_seven_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkgrey_row_seven_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkgrey_row_seven_4').css("fill"));
		new Clipboard('.darkgrey_row_seven_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkgrey_row_seven_4').animate({'opacity':'1'});
		}, 2500);
	});$('#darkgrey_row_seven_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkgrey_row_seven_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkgrey_row_seven_5').css("fill"));
		new Clipboard('.darkgrey_row_seven_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkgrey_row_seven_5').animate({'opacity':'1'});
		}, 2500);
	});$('#darkgrey_row_eight_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkgrey_row_eight_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkgrey_row_eight_0').css("fill"));
		new Clipboard('.darkgrey_row_eight_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkgrey_row_eight_0').animate({'opacity':'1'});
		}, 2500);
	});$('#darkgrey_row_eight_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkgrey_row_eight_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkgrey_row_eight_1').css("fill"));
		new Clipboard('.darkgrey_row_eight_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkgrey_row_eight_1').animate({'opacity':'1'});
		}, 2500);
	});$('#darkgrey_row_eight_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkgrey_row_eight_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkgrey_row_eight_2').css("fill"));
		new Clipboard('.darkgrey_row_eight_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkgrey_row_eight_2').animate({'opacity':'1'});
		}, 2500);
	});$('#darkgrey_row_eight_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkgrey_row_eight_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkgrey_row_eight_3').css("fill"));
		new Clipboard('.darkgrey_row_eight_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkgrey_row_eight_3').animate({'opacity':'1'});
		}, 2500);
	});$('#darkgrey_row_eight_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkgrey_row_eight_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkgrey_row_eight_4').css("fill"));
		new Clipboard('.darkgrey_row_eight_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkgrey_row_eight_4').animate({'opacity':'1'});
		}, 2500);
	});$('#darkgrey_row_eight_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkgrey_row_eight_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkgrey_row_eight_5').css("fill"));
		new Clipboard('.darkgrey_row_eight_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkgrey_row_eight_5').animate({'opacity':'1'});
		}, 2500);
	});$('#darkgrey_row_nine_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkgrey_row_nine_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkgrey_row_nine_0').css("fill"));
		new Clipboard('.darkgrey_row_nine_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkgrey_row_nine_0').animate({'opacity':'1'});
		}, 2500);
	});$('#darkgrey_row_nine_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkgrey_row_nine_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkgrey_row_nine_1').css("fill"));
		new Clipboard('.darkgrey_row_nine_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkgrey_row_nine_1').animate({'opacity':'1'});
		}, 2500);
	});$('#darkgrey_row_nine_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkgrey_row_nine_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkgrey_row_nine_2').css("fill"));
		new Clipboard('.darkgrey_row_nine_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkgrey_row_nine_2').animate({'opacity':'1'});
		}, 2500);
	});$('#darkgrey_row_nine_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkgrey_row_nine_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkgrey_row_nine_3').css("fill"));
		new Clipboard('.darkgrey_row_nine_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkgrey_row_nine_3').animate({'opacity':'1'});
		}, 2500);
	});$('#darkgrey_row_nine_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkgrey_row_nine_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkgrey_row_nine_4').css("fill"));
		new Clipboard('.darkgrey_row_nine_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkgrey_row_nine_4').animate({'opacity':'1'});
		}, 2500);
	});$('#darkgrey_row_nine_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkgrey_row_nine_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkgrey_row_nine_5').css("fill"));
		new Clipboard('.darkgrey_row_nine_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkgrey_row_nine_5').animate({'opacity':'1'});
		}, 2500);
	});$('#darkgrey_row_ten_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkgrey_row_ten_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkgrey_row_ten_0').css("fill"));
		new Clipboard('.darkgrey_row_ten_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkgrey_row_ten_0').animate({'opacity':'1'});
		}, 2500);
	});$('#darkgrey_row_ten_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkgrey_row_ten_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkgrey_row_ten_1').css("fill"));
		new Clipboard('.darkgrey_row_ten_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkgrey_row_ten_1').animate({'opacity':'1'});
		}, 2500);
	});$('#darkgrey_row_ten_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkgrey_row_ten_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkgrey_row_ten_2').css("fill"));
		new Clipboard('.darkgrey_row_ten_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkgrey_row_ten_2').animate({'opacity':'1'});
		}, 2500);
	});$('#darkgrey_row_ten_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkgrey_row_ten_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkgrey_row_ten_3').css("fill"));
		new Clipboard('.darkgrey_row_ten_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkgrey_row_ten_3').animate({'opacity':'1'});
		}, 2500);
	});$('#darkgrey_row_ten_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkgrey_row_ten_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkgrey_row_ten_4').css("fill"));
		new Clipboard('.darkgrey_row_ten_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkgrey_row_ten_4').animate({'opacity':'1'});
		}, 2500);
	});$('#darkgrey_row_ten_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkgrey_row_ten_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkgrey_row_ten_5').css("fill"));
		new Clipboard('.darkgrey_row_ten_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkgrey_row_ten_5').animate({'opacity':'1'});
		}, 2500);
	});
	$('#black_row_one_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#black_row_one_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.black_row_one_0').css("fill"));
			new Clipboard('.black_row_one_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#black_row_one_0').animate({'opacity':'1'});
			}, 2500);
		});$('#black_row_one_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#black_row_one_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.black_row_one_1').css("fill"));
			new Clipboard('.black_row_one_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#black_row_one_1').animate({'opacity':'1'});
			}, 2500);
		});$('#black_row_one_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#black_row_one_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.black_row_one_2').css("fill"));
			new Clipboard('.black_row_one_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#black_row_one_2').animate({'opacity':'1'});
			}, 2500);
		});$('#black_row_one_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#black_row_one_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.black_row_one_3').css("fill"));
			new Clipboard('.black_row_one_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#black_row_one_3').animate({'opacity':'1'});
			}, 2500);
		});$('#black_row_one_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#black_row_one_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.black_row_one_4').css("fill"));
			new Clipboard('.black_row_one_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#black_row_one_4').animate({'opacity':'1'});
			}, 2500);
		});$('#black_row_one_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#black_row_one_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.black_row_one_5').css("fill"));
			new Clipboard('.black_row_one_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#black_row_one_5').animate({'opacity':'1'});
			}, 2500);
		});$('#black_row_two_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#black_row_two_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.black_row_two_0').css("fill"));
			new Clipboard('.black_row_two_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#black_row_two_0').animate({'opacity':'1'});
			}, 2500);
		});$('#black_row_two_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#black_row_two_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.black_row_two_1').css("fill"));
			new Clipboard('.black_row_two_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#black_row_two_1').animate({'opacity':'1'});
			}, 2500);
		});$('#black_row_two_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#black_row_two_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.black_row_two_2').css("fill"));
			new Clipboard('.black_row_two_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#black_row_two_2').animate({'opacity':'1'});
			}, 2500);
		});$('#black_row_two_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#black_row_two_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.black_row_two_3').css("fill"));
			new Clipboard('.black_row_two_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#black_row_two_3').animate({'opacity':'1'});
			}, 2500);
		});$('#black_row_two_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#black_row_two_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.black_row_two_4').css("fill"));
			new Clipboard('.black_row_two_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#black_row_two_4').animate({'opacity':'1'});
			}, 2500);
		});$('#black_row_two_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#black_row_two_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.black_row_two_5').css("fill"));
			new Clipboard('.black_row_two_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#black_row_two_5').animate({'opacity':'1'});
			}, 2500);
		});
		$('#brown_row_one_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_one_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_one_0').css("fill"));
			new Clipboard('.brown_row_one_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_one_0').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_one_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_one_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_one_1').css("fill"));
			new Clipboard('.brown_row_one_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_one_1').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_one_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_one_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_one_2').css("fill"));
			new Clipboard('.brown_row_one_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_one_2').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_one_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_one_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_one_3').css("fill"));
			new Clipboard('.brown_row_one_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_one_3').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_one_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_one_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_one_4').css("fill"));
			new Clipboard('.brown_row_one_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_one_4').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_one_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_one_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_one_5').css("fill"));
			new Clipboard('.brown_row_one_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_one_5').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_two_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_two_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_two_0').css("fill"));
			new Clipboard('.brown_row_two_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_two_0').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_two_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_two_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_two_1').css("fill"));
			new Clipboard('.brown_row_two_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_two_1').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_two_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_two_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_two_2').css("fill"));
			new Clipboard('.brown_row_two_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_two_2').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_two_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_two_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_two_3').css("fill"));
			new Clipboard('.brown_row_two_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_two_3').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_two_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_two_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_two_4').css("fill"));
			new Clipboard('.brown_row_two_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_two_4').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_two_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_two_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_two_5').css("fill"));
			new Clipboard('.brown_row_two_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_two_5').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_three_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_three_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_three_0').css("fill"));
			new Clipboard('.brown_row_three_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_three_0').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_three_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_three_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_three_1').css("fill"));
			new Clipboard('.brown_row_three_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_three_1').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_three_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_three_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_three_2').css("fill"));
			new Clipboard('.brown_row_three_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_three_2').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_three_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_three_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_three_3').css("fill"));
			new Clipboard('.brown_row_three_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_three_3').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_three_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_three_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_three_4').css("fill"));
			new Clipboard('.brown_row_three_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_three_4').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_three_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_three_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_three_5').css("fill"));
			new Clipboard('.brown_row_three_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_three_5').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_four_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_four_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_four_0').css("fill"));
			new Clipboard('.brown_row_four_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_four_0').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_four_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_four_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_four_1').css("fill"));
			new Clipboard('.brown_row_four_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_four_1').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_four_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_four_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_four_2').css("fill"));
			new Clipboard('.brown_row_four_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_four_2').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_four_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_four_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_four_3').css("fill"));
			new Clipboard('.brown_row_four_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_four_3').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_four_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_four_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_four_4').css("fill"));
			new Clipboard('.brown_row_four_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_four_4').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_four_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_four_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_four_5').css("fill"));
			new Clipboard('.brown_row_four_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_four_5').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_five_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_five_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_five_0').css("fill"));
			new Clipboard('.brown_row_five_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_five_0').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_five_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_five_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_five_1').css("fill"));
			new Clipboard('.brown_row_five_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_five_1').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_five_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_five_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_five_2').css("fill"));
			new Clipboard('.brown_row_five_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_five_2').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_five_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_five_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_five_3').css("fill"));
			new Clipboard('.brown_row_five_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_five_3').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_five_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_five_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_five_4').css("fill"));
			new Clipboard('.brown_row_five_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_five_4').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_five_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_five_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_five_5').css("fill"));
			new Clipboard('.brown_row_five_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_five_5').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_six_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_six_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_six_0').css("fill"));
			new Clipboard('.brown_row_six_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_six_0').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_six_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_six_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_six_1').css("fill"));
			new Clipboard('.brown_row_six_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_six_1').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_six_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_six_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_six_2').css("fill"));
			new Clipboard('.brown_row_six_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_six_2').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_six_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_six_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_six_3').css("fill"));
			new Clipboard('.brown_row_six_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_six_3').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_six_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_six_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_six_4').css("fill"));
			new Clipboard('.brown_row_six_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_six_4').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_six_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#brown_row_six_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.brown_row_six_5').css("fill"));
			new Clipboard('.brown_row_six_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#brown_row_six_5').animate({'opacity':'1'});
			}, 2500);
		});$('#brown_row_seven_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#brown_row_seven_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.brown_row_seven_0').css("fill"));
		new Clipboard('.brown_row_seven_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#brown_row_seven_0').animate({'opacity':'1'});
		}, 2500);
	});$('#brown_row_seven_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#brown_row_seven_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.brown_row_seven_1').css("fill"));
		new Clipboard('.brown_row_seven_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#brown_row_seven_1').animate({'opacity':'1'});
		}, 2500);
	});$('#brown_row_seven_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#brown_row_seven_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.brown_row_seven_2').css("fill"));
		new Clipboard('.brown_row_seven_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#brown_row_seven_2').animate({'opacity':'1'});
		}, 2500);
	});$('#brown_row_seven_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#brown_row_seven_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.brown_row_seven_3').css("fill"));
		new Clipboard('.brown_row_seven_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#brown_row_seven_3').animate({'opacity':'1'});
		}, 2500);
	});$('#brown_row_seven_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#brown_row_seven_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.brown_row_seven_4').css("fill"));
		new Clipboard('.brown_row_seven_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#brown_row_seven_4').animate({'opacity':'1'});
		}, 2500);
	});$('#brown_row_seven_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#brown_row_seven_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.brown_row_seven_5').css("fill"));
		new Clipboard('.brown_row_seven_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#brown_row_seven_5').animate({'opacity':'1'});
		}, 2500);
	});$('#brown_row_eight_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#brown_row_eight_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.brown_row_eight_0').css("fill"));
		new Clipboard('.brown_row_eight_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#brown_row_eight_0').animate({'opacity':'1'});
		}, 2500);
	});$('#brown_row_eight_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#brown_row_eight_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.brown_row_eight_1').css("fill"));
		new Clipboard('.brown_row_eight_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#brown_row_eight_1').animate({'opacity':'1'});
		}, 2500);
	});$('#brown_row_eight_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#brown_row_eight_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.brown_row_eight_2').css("fill"));
		new Clipboard('.brown_row_eight_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#brown_row_eight_2').animate({'opacity':'1'});
		}, 2500);
	});$('#brown_row_eight_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#brown_row_eight_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.brown_row_eight_3').css("fill"));
		new Clipboard('.brown_row_eight_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#brown_row_eight_3').animate({'opacity':'1'});
		}, 2500);
	});$('#brown_row_eight_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#brown_row_eight_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.brown_row_eight_4').css("fill"));
		new Clipboard('.brown_row_eight_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#brown_row_eight_4').animate({'opacity':'1'});
		}, 2500);
	});$('#brown_row_eight_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#brown_row_eight_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.brown_row_eight_5').css("fill"));
		new Clipboard('.brown_row_eight_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#brown_row_eight_5').animate({'opacity':'1'});
		}, 2500);
	});$('#brown_row_nine_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#brown_row_nine_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.brown_row_nine_0').css("fill"));
		new Clipboard('.brown_row_nine_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#brown_row_nine_0').animate({'opacity':'1'});
		}, 2500);
	});$('#brown_row_nine_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#brown_row_nine_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.brown_row_nine_1').css("fill"));
		new Clipboard('.brown_row_nine_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#brown_row_nine_1').animate({'opacity':'1'});
		}, 2500);
	});$('#brown_row_nine_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#brown_row_nine_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.brown_row_nine_2').css("fill"));
		new Clipboard('.brown_row_nine_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#brown_row_nine_2').animate({'opacity':'1'});
		}, 2500);
	});$('#brown_row_nine_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#brown_row_nine_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.brown_row_nine_3').css("fill"));
		new Clipboard('.brown_row_nine_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#brown_row_nine_3').animate({'opacity':'1'});
		}, 2500);
	});$('#brown_row_nine_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#brown_row_nine_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.brown_row_nine_4').css("fill"));
		new Clipboard('.brown_row_nine_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#brown_row_nine_4').animate({'opacity':'1'});
		}, 2500);
	});$('#brown_row_nine_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#brown_row_nine_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.brown_row_nine_5').css("fill"));
		new Clipboard('.brown_row_nine_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#brown_row_nine_5').animate({'opacity':'1'});
		}, 2500);
	});$('#brown_row_ten_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#brown_row_ten_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.brown_row_ten_0').css("fill"));
		new Clipboard('.brown_row_ten_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#brown_row_ten_0').animate({'opacity':'1'});
		}, 2500);
	});$('#brown_row_ten_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#brown_row_ten_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.brown_row_ten_1').css("fill"));
		new Clipboard('.brown_row_ten_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#brown_row_ten_1').animate({'opacity':'1'});
		}, 2500);
	});$('#brown_row_ten_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#brown_row_ten_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.brown_row_ten_2').css("fill"));
		new Clipboard('.brown_row_ten_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#brown_row_ten_2').animate({'opacity':'1'});
		}, 2500);
	});$('#brown_row_ten_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#brown_row_ten_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.brown_row_ten_3').css("fill"));
		new Clipboard('.brown_row_ten_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#brown_row_ten_3').animate({'opacity':'1'});
		}, 2500);
	});$('#brown_row_ten_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#brown_row_ten_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.brown_row_ten_4').css("fill"));
		new Clipboard('.brown_row_ten_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#brown_row_ten_4').animate({'opacity':'1'});
		}, 2500);
	});$('#brown_row_ten_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#brown_row_ten_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.brown_row_ten_5').css("fill"));
		new Clipboard('.brown_row_ten_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#brown_row_ten_5').animate({'opacity':'1'});
		}, 2500);
	});
	$('#orange_row_one_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_one_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_one_0').css("fill"));
			new Clipboard('.orange_row_one_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_one_0').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_one_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_one_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_one_1').css("fill"));
			new Clipboard('.orange_row_one_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_one_1').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_one_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_one_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_one_2').css("fill"));
			new Clipboard('.orange_row_one_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_one_2').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_one_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_one_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_one_3').css("fill"));
			new Clipboard('.orange_row_one_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_one_3').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_one_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_one_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_one_4').css("fill"));
			new Clipboard('.orange_row_one_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_one_4').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_one_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_one_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_one_5').css("fill"));
			new Clipboard('.orange_row_one_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_one_5').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_two_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_two_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_two_0').css("fill"));
			new Clipboard('.orange_row_two_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_two_0').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_two_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_two_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_two_1').css("fill"));
			new Clipboard('.orange_row_two_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_two_1').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_two_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_two_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_two_2').css("fill"));
			new Clipboard('.orange_row_two_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_two_2').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_two_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_two_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_two_3').css("fill"));
			new Clipboard('.orange_row_two_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_two_3').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_two_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_two_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_two_4').css("fill"));
			new Clipboard('.orange_row_two_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_two_4').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_two_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_two_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_two_5').css("fill"));
			new Clipboard('.orange_row_two_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_two_5').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_three_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_three_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_three_0').css("fill"));
			new Clipboard('.orange_row_three_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_three_0').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_three_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_three_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_three_1').css("fill"));
			new Clipboard('.orange_row_three_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_three_1').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_three_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_three_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_three_2').css("fill"));
			new Clipboard('.orange_row_three_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_three_2').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_three_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_three_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_three_3').css("fill"));
			new Clipboard('.orange_row_three_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_three_3').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_three_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_three_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_three_4').css("fill"));
			new Clipboard('.orange_row_three_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_three_4').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_three_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_three_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_three_5').css("fill"));
			new Clipboard('.orange_row_three_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_three_5').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_four_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_four_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_four_0').css("fill"));
			new Clipboard('.orange_row_four_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_four_0').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_four_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_four_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_four_1').css("fill"));
			new Clipboard('.orange_row_four_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_four_1').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_four_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_four_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_four_2').css("fill"));
			new Clipboard('.orange_row_four_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_four_2').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_four_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_four_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_four_3').css("fill"));
			new Clipboard('.orange_row_four_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_four_3').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_four_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_four_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_four_4').css("fill"));
			new Clipboard('.orange_row_four_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_four_4').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_four_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_four_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_four_5').css("fill"));
			new Clipboard('.orange_row_four_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_four_5').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_five_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_five_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_five_0').css("fill"));
			new Clipboard('.orange_row_five_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_five_0').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_five_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_five_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_five_1').css("fill"));
			new Clipboard('.orange_row_five_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_five_1').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_five_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_five_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_five_2').css("fill"));
			new Clipboard('.orange_row_five_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_five_2').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_five_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_five_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_five_3').css("fill"));
			new Clipboard('.orange_row_five_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_five_3').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_five_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_five_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_five_4').css("fill"));
			new Clipboard('.orange_row_five_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_five_4').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_five_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_five_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_five_5').css("fill"));
			new Clipboard('.orange_row_five_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_five_5').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_six_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_six_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_six_0').css("fill"));
			new Clipboard('.orange_row_six_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_six_0').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_six_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_six_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_six_1').css("fill"));
			new Clipboard('.orange_row_six_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_six_1').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_six_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_six_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_six_2').css("fill"));
			new Clipboard('.orange_row_six_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_six_2').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_six_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_six_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_six_3').css("fill"));
			new Clipboard('.orange_row_six_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_six_3').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_six_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_six_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_six_4').css("fill"));
			new Clipboard('.orange_row_six_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_six_4').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_six_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#orange_row_six_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.orange_row_six_5').css("fill"));
			new Clipboard('.orange_row_six_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#orange_row_six_5').animate({'opacity':'1'});
			}, 2500);
		});$('#orange_row_seven_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#orange_row_seven_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.orange_row_seven_0').css("fill"));
		new Clipboard('.orange_row_seven_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#orange_row_seven_0').animate({'opacity':'1'});
		}, 2500);
	});$('#orange_row_seven_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#orange_row_seven_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.orange_row_seven_1').css("fill"));
		new Clipboard('.orange_row_seven_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#orange_row_seven_1').animate({'opacity':'1'});
		}, 2500);
	});$('#orange_row_seven_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#orange_row_seven_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.orange_row_seven_2').css("fill"));
		new Clipboard('.orange_row_seven_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#orange_row_seven_2').animate({'opacity':'1'});
		}, 2500);
	});$('#orange_row_seven_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#orange_row_seven_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.orange_row_seven_3').css("fill"));
		new Clipboard('.orange_row_seven_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#orange_row_seven_3').animate({'opacity':'1'});
		}, 2500);
	});$('#orange_row_seven_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#orange_row_seven_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.orange_row_seven_4').css("fill"));
		new Clipboard('.orange_row_seven_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#orange_row_seven_4').animate({'opacity':'1'});
		}, 2500);
	});$('#orange_row_seven_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#orange_row_seven_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.orange_row_seven_5').css("fill"));
		new Clipboard('.orange_row_seven_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#orange_row_seven_5').animate({'opacity':'1'});
		}, 2500);
	});$('#orange_row_eight_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#orange_row_eight_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.orange_row_eight_0').css("fill"));
		new Clipboard('.orange_row_eight_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#orange_row_eight_0').animate({'opacity':'1'});
		}, 2500);
	});$('#orange_row_eight_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#orange_row_eight_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.orange_row_eight_1').css("fill"));
		new Clipboard('.orange_row_eight_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#orange_row_eight_1').animate({'opacity':'1'});
		}, 2500);
	});$('#orange_row_eight_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#orange_row_eight_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.orange_row_eight_2').css("fill"));
		new Clipboard('.orange_row_eight_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#orange_row_eight_2').animate({'opacity':'1'});
		}, 2500);
	});$('#orange_row_eight_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#orange_row_eight_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.orange_row_eight_3').css("fill"));
		new Clipboard('.orange_row_eight_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#orange_row_eight_3').animate({'opacity':'1'});
		}, 2500);
	});$('#orange_row_eight_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#orange_row_eight_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.orange_row_eight_4').css("fill"));
		new Clipboard('.orange_row_eight_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#orange_row_eight_4').animate({'opacity':'1'});
		}, 2500);
	});$('#orange_row_eight_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#orange_row_eight_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.orange_row_eight_5').css("fill"));
		new Clipboard('.orange_row_eight_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#orange_row_eight_5').animate({'opacity':'1'});
		}, 2500);
	});$('#orange_row_nine_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#orange_row_nine_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.orange_row_nine_0').css("fill"));
		new Clipboard('.orange_row_nine_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#orange_row_nine_0').animate({'opacity':'1'});
		}, 2500);
	});$('#orange_row_nine_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#orange_row_nine_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.orange_row_nine_1').css("fill"));
		new Clipboard('.orange_row_nine_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#orange_row_nine_1').animate({'opacity':'1'});
		}, 2500);
	});$('#orange_row_nine_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#orange_row_nine_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.orange_row_nine_2').css("fill"));
		new Clipboard('.orange_row_nine_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#orange_row_nine_2').animate({'opacity':'1'});
		}, 2500);
	});$('#orange_row_nine_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#orange_row_nine_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.orange_row_nine_3').css("fill"));
		new Clipboard('.orange_row_nine_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#orange_row_nine_3').animate({'opacity':'1'});
		}, 2500);
	});$('#orange_row_nine_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#orange_row_nine_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.orange_row_nine_4').css("fill"));
		new Clipboard('.orange_row_nine_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#orange_row_nine_4').animate({'opacity':'1'});
		}, 2500);
	});$('#orange_row_nine_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#orange_row_nine_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.orange_row_nine_5').css("fill"));
		new Clipboard('.orange_row_nine_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#orange_row_nine_5').animate({'opacity':'1'});
		}, 2500);
	});$('#orange_row_ten_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#orange_row_ten_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.orange_row_ten_0').css("fill"));
		new Clipboard('.orange_row_ten_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#orange_row_ten_0').animate({'opacity':'1'});
		}, 2500);
	});$('#orange_row_ten_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#orange_row_ten_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.orange_row_ten_1').css("fill"));
		new Clipboard('.orange_row_ten_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#orange_row_ten_1').animate({'opacity':'1'});
		}, 2500);
	});$('#orange_row_ten_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#orange_row_ten_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.orange_row_ten_2').css("fill"));
		new Clipboard('.orange_row_ten_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#orange_row_ten_2').animate({'opacity':'1'});
		}, 2500);
	});$('#orange_row_ten_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#orange_row_ten_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.orange_row_ten_3').css("fill"));
		new Clipboard('.orange_row_ten_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#orange_row_ten_3').animate({'opacity':'1'});
		}, 2500);
	});$('#orange_row_ten_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#orange_row_ten_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.orange_row_ten_4').css("fill"));
		new Clipboard('.orange_row_ten_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#orange_row_ten_4').animate({'opacity':'1'});
		}, 2500);
	});$('#orange_row_ten_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#orange_row_ten_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.orange_row_ten_5').css("fill"));
		new Clipboard('.orange_row_ten_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#orange_row_ten_5').animate({'opacity':'1'});
		}, 2500);
	});
	$('#amber_row_one_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_one_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_one_0').css("fill"));
			new Clipboard('.amber_row_one_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_one_0').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_one_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_one_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_one_1').css("fill"));
			new Clipboard('.amber_row_one_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_one_1').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_one_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_one_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_one_2').css("fill"));
			new Clipboard('.amber_row_one_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_one_2').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_one_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_one_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_one_3').css("fill"));
			new Clipboard('.amber_row_one_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_one_3').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_one_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_one_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_one_4').css("fill"));
			new Clipboard('.amber_row_one_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_one_4').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_one_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_one_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_one_5').css("fill"));
			new Clipboard('.amber_row_one_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_one_5').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_two_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_two_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_two_0').css("fill"));
			new Clipboard('.amber_row_two_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_two_0').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_two_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_two_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_two_1').css("fill"));
			new Clipboard('.amber_row_two_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_two_1').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_two_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_two_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_two_2').css("fill"));
			new Clipboard('.amber_row_two_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_two_2').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_two_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_two_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_two_3').css("fill"));
			new Clipboard('.amber_row_two_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_two_3').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_two_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_two_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_two_4').css("fill"));
			new Clipboard('.amber_row_two_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_two_4').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_two_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_two_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_two_5').css("fill"));
			new Clipboard('.amber_row_two_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_two_5').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_three_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_three_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_three_0').css("fill"));
			new Clipboard('.amber_row_three_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_three_0').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_three_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_three_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_three_1').css("fill"));
			new Clipboard('.amber_row_three_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_three_1').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_three_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_three_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_three_2').css("fill"));
			new Clipboard('.amber_row_three_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_three_2').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_three_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_three_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_three_3').css("fill"));
			new Clipboard('.amber_row_three_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_three_3').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_three_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_three_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_three_4').css("fill"));
			new Clipboard('.amber_row_three_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_three_4').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_three_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_three_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_three_5').css("fill"));
			new Clipboard('.amber_row_three_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_three_5').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_four_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_four_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_four_0').css("fill"));
			new Clipboard('.amber_row_four_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_four_0').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_four_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_four_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_four_1').css("fill"));
			new Clipboard('.amber_row_four_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_four_1').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_four_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_four_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_four_2').css("fill"));
			new Clipboard('.amber_row_four_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_four_2').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_four_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_four_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_four_3').css("fill"));
			new Clipboard('.amber_row_four_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_four_3').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_four_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_four_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_four_4').css("fill"));
			new Clipboard('.amber_row_four_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_four_4').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_four_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_four_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_four_5').css("fill"));
			new Clipboard('.amber_row_four_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_four_5').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_five_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_five_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_five_0').css("fill"));
			new Clipboard('.amber_row_five_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_five_0').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_five_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_five_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_five_1').css("fill"));
			new Clipboard('.amber_row_five_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_five_1').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_five_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_five_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_five_2').css("fill"));
			new Clipboard('.amber_row_five_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_five_2').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_five_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_five_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_five_3').css("fill"));
			new Clipboard('.amber_row_five_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_five_3').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_five_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_five_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_five_4').css("fill"));
			new Clipboard('.amber_row_five_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_five_4').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_five_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_five_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_five_5').css("fill"));
			new Clipboard('.amber_row_five_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_five_5').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_six_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_six_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_six_0').css("fill"));
			new Clipboard('.amber_row_six_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_six_0').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_six_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_six_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_six_1').css("fill"));
			new Clipboard('.amber_row_six_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_six_1').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_six_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_six_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_six_2').css("fill"));
			new Clipboard('.amber_row_six_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_six_2').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_six_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_six_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_six_3').css("fill"));
			new Clipboard('.amber_row_six_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_six_3').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_six_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_six_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_six_4').css("fill"));
			new Clipboard('.amber_row_six_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_six_4').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_six_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#amber_row_six_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.amber_row_six_5').css("fill"));
			new Clipboard('.amber_row_six_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#amber_row_six_5').animate({'opacity':'1'});
			}, 2500);
		});$('#amber_row_seven_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#amber_row_seven_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.amber_row_seven_0').css("fill"));
		new Clipboard('.amber_row_seven_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#amber_row_seven_0').animate({'opacity':'1'});
		}, 2500);
	});$('#amber_row_seven_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#amber_row_seven_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.amber_row_seven_1').css("fill"));
		new Clipboard('.amber_row_seven_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#amber_row_seven_1').animate({'opacity':'1'});
		}, 2500);
	});$('#amber_row_seven_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#amber_row_seven_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.amber_row_seven_2').css("fill"));
		new Clipboard('.amber_row_seven_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#amber_row_seven_2').animate({'opacity':'1'});
		}, 2500);
	});$('#amber_row_seven_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#amber_row_seven_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.amber_row_seven_3').css("fill"));
		new Clipboard('.amber_row_seven_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#amber_row_seven_3').animate({'opacity':'1'});
		}, 2500);
	});$('#amber_row_seven_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#amber_row_seven_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.amber_row_seven_4').css("fill"));
		new Clipboard('.amber_row_seven_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#amber_row_seven_4').animate({'opacity':'1'});
		}, 2500);
	});$('#amber_row_seven_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#amber_row_seven_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.amber_row_seven_5').css("fill"));
		new Clipboard('.amber_row_seven_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#amber_row_seven_5').animate({'opacity':'1'});
		}, 2500);
	});$('#amber_row_eight_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#amber_row_eight_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.amber_row_eight_0').css("fill"));
		new Clipboard('.amber_row_eight_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#amber_row_eight_0').animate({'opacity':'1'});
		}, 2500);
	});$('#amber_row_eight_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#amber_row_eight_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.amber_row_eight_1').css("fill"));
		new Clipboard('.amber_row_eight_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#amber_row_eight_1').animate({'opacity':'1'});
		}, 2500);
	});$('#amber_row_eight_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#amber_row_eight_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.amber_row_eight_2').css("fill"));
		new Clipboard('.amber_row_eight_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#amber_row_eight_2').animate({'opacity':'1'});
		}, 2500);
	});$('#amber_row_eight_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#amber_row_eight_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.amber_row_eight_3').css("fill"));
		new Clipboard('.amber_row_eight_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#amber_row_eight_3').animate({'opacity':'1'});
		}, 2500);
	});$('#amber_row_eight_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#amber_row_eight_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.amber_row_eight_4').css("fill"));
		new Clipboard('.amber_row_eight_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#amber_row_eight_4').animate({'opacity':'1'});
		}, 2500);
	});$('#amber_row_eight_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#amber_row_eight_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.amber_row_eight_5').css("fill"));
		new Clipboard('.amber_row_eight_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#amber_row_eight_5').animate({'opacity':'1'});
		}, 2500);
	});$('#amber_row_nine_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#amber_row_nine_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.amber_row_nine_0').css("fill"));
		new Clipboard('.amber_row_nine_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#amber_row_nine_0').animate({'opacity':'1'});
		}, 2500);
	});$('#amber_row_nine_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#amber_row_nine_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.amber_row_nine_1').css("fill"));
		new Clipboard('.amber_row_nine_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#amber_row_nine_1').animate({'opacity':'1'});
		}, 2500);
	});$('#amber_row_nine_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#amber_row_nine_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.amber_row_nine_2').css("fill"));
		new Clipboard('.amber_row_nine_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#amber_row_nine_2').animate({'opacity':'1'});
		}, 2500);
	});$('#amber_row_nine_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#amber_row_nine_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.amber_row_nine_3').css("fill"));
		new Clipboard('.amber_row_nine_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#amber_row_nine_3').animate({'opacity':'1'});
		}, 2500);
	});$('#amber_row_nine_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#amber_row_nine_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.amber_row_nine_4').css("fill"));
		new Clipboard('.amber_row_nine_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#amber_row_nine_4').animate({'opacity':'1'});
		}, 2500);
	});$('#amber_row_nine_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#amber_row_nine_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.amber_row_nine_5').css("fill"));
		new Clipboard('.amber_row_nine_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#amber_row_nine_5').animate({'opacity':'1'});
		}, 2500);
	});$('#amber_row_ten_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#amber_row_ten_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.amber_row_ten_0').css("fill"));
		new Clipboard('.amber_row_ten_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#amber_row_ten_0').animate({'opacity':'1'});
		}, 2500);
	});$('#amber_row_ten_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#amber_row_ten_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.amber_row_ten_1').css("fill"));
		new Clipboard('.amber_row_ten_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#amber_row_ten_1').animate({'opacity':'1'});
		}, 2500);
	});$('#amber_row_ten_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#amber_row_ten_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.amber_row_ten_2').css("fill"));
		new Clipboard('.amber_row_ten_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#amber_row_ten_2').animate({'opacity':'1'});
		}, 2500);
	});$('#amber_row_ten_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#amber_row_ten_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.amber_row_ten_3').css("fill"));
		new Clipboard('.amber_row_ten_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#amber_row_ten_3').animate({'opacity':'1'});
		}, 2500);
	});$('#amber_row_ten_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#amber_row_ten_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.amber_row_ten_4').css("fill"));
		new Clipboard('.amber_row_ten_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#amber_row_ten_4').animate({'opacity':'1'});
		}, 2500);
	});$('#amber_row_ten_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#amber_row_ten_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.amber_row_ten_5').css("fill"));
		new Clipboard('.amber_row_ten_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#amber_row_ten_5').animate({'opacity':'1'});
		}, 2500);
	});
	$('#red_row_one_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_one_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_one_0').css("fill"));
			new Clipboard('.red_row_one_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_one_0').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_one_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_one_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_one_1').css("fill"));
			new Clipboard('.red_row_one_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_one_1').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_one_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_one_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_one_2').css("fill"));
			new Clipboard('.red_row_one_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_one_2').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_one_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_one_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_one_3').css("fill"));
			new Clipboard('.red_row_one_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_one_3').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_one_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_one_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_one_4').css("fill"));
			new Clipboard('.red_row_one_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_one_4').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_one_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_one_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_one_5').css("fill"));
			new Clipboard('.red_row_one_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_one_5').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_two_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_two_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_two_0').css("fill"));
			new Clipboard('.red_row_two_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_two_0').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_two_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_two_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_two_1').css("fill"));
			new Clipboard('.red_row_two_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_two_1').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_two_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_two_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_two_2').css("fill"));
			new Clipboard('.red_row_two_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_two_2').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_two_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_two_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_two_3').css("fill"));
			new Clipboard('.red_row_two_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_two_3').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_two_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_two_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_two_4').css("fill"));
			new Clipboard('.red_row_two_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_two_4').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_two_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_two_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_two_5').css("fill"));
			new Clipboard('.red_row_two_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_two_5').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_three_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_three_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_three_0').css("fill"));
			new Clipboard('.red_row_three_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_three_0').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_three_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_three_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_three_1').css("fill"));
			new Clipboard('.red_row_three_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_three_1').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_three_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_three_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_three_2').css("fill"));
			new Clipboard('.red_row_three_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_three_2').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_three_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_three_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_three_3').css("fill"));
			new Clipboard('.red_row_three_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_three_3').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_three_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_three_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_three_4').css("fill"));
			new Clipboard('.red_row_three_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_three_4').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_three_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_three_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_three_5').css("fill"));
			new Clipboard('.red_row_three_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_three_5').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_four_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_four_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_four_0').css("fill"));
			new Clipboard('.red_row_four_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_four_0').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_four_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_four_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_four_1').css("fill"));
			new Clipboard('.red_row_four_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_four_1').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_four_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_four_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_four_2').css("fill"));
			new Clipboard('.red_row_four_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_four_2').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_four_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_four_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_four_3').css("fill"));
			new Clipboard('.red_row_four_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_four_3').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_four_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_four_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_four_4').css("fill"));
			new Clipboard('.red_row_four_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_four_4').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_four_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_four_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_four_5').css("fill"));
			new Clipboard('.red_row_four_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_four_5').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_five_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_five_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_five_0').css("fill"));
			new Clipboard('.red_row_five_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_five_0').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_five_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_five_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_five_1').css("fill"));
			new Clipboard('.red_row_five_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_five_1').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_five_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_five_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_five_2').css("fill"));
			new Clipboard('.red_row_five_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_five_2').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_five_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_five_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_five_3').css("fill"));
			new Clipboard('.red_row_five_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_five_3').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_five_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_five_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_five_4').css("fill"));
			new Clipboard('.red_row_five_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_five_4').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_five_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_five_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_five_5').css("fill"));
			new Clipboard('.red_row_five_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_five_5').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_six_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_six_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_six_0').css("fill"));
			new Clipboard('.red_row_six_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_six_0').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_six_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_six_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_six_1').css("fill"));
			new Clipboard('.red_row_six_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_six_1').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_six_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_six_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_six_2').css("fill"));
			new Clipboard('.red_row_six_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_six_2').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_six_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_six_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_six_3').css("fill"));
			new Clipboard('.red_row_six_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_six_3').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_six_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_six_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_six_4').css("fill"));
			new Clipboard('.red_row_six_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_six_4').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_six_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#red_row_six_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.red_row_six_5').css("fill"));
			new Clipboard('.red_row_six_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#red_row_six_5').animate({'opacity':'1'});
			}, 2500);
		});$('#red_row_seven_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#red_row_seven_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.red_row_seven_0').css("fill"));
		new Clipboard('.red_row_seven_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#red_row_seven_0').animate({'opacity':'1'});
		}, 2500);
	});$('#red_row_seven_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#red_row_seven_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.red_row_seven_1').css("fill"));
		new Clipboard('.red_row_seven_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#red_row_seven_1').animate({'opacity':'1'});
		}, 2500);
	});$('#red_row_seven_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#red_row_seven_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.red_row_seven_2').css("fill"));
		new Clipboard('.red_row_seven_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#red_row_seven_2').animate({'opacity':'1'});
		}, 2500);
	});$('#red_row_seven_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#red_row_seven_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.red_row_seven_3').css("fill"));
		new Clipboard('.red_row_seven_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#red_row_seven_3').animate({'opacity':'1'});
		}, 2500);
	});$('#red_row_seven_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#red_row_seven_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.red_row_seven_4').css("fill"));
		new Clipboard('.red_row_seven_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#red_row_seven_4').animate({'opacity':'1'});
		}, 2500);
	});$('#red_row_seven_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#red_row_seven_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.red_row_seven_5').css("fill"));
		new Clipboard('.red_row_seven_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#red_row_seven_5').animate({'opacity':'1'});
		}, 2500);
	});$('#red_row_eight_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#red_row_eight_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.red_row_eight_0').css("fill"));
		new Clipboard('.red_row_eight_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#red_row_eight_0').animate({'opacity':'1'});
		}, 2500);
	});$('#red_row_eight_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#red_row_eight_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.red_row_eight_1').css("fill"));
		new Clipboard('.red_row_eight_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#red_row_eight_1').animate({'opacity':'1'});
		}, 2500);
	});$('#red_row_eight_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#red_row_eight_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.red_row_eight_2').css("fill"));
		new Clipboard('.red_row_eight_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#red_row_eight_2').animate({'opacity':'1'});
		}, 2500);
	});$('#red_row_eight_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#red_row_eight_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.red_row_eight_3').css("fill"));
		new Clipboard('.red_row_eight_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#red_row_eight_3').animate({'opacity':'1'});
		}, 2500);
	});$('#red_row_eight_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#red_row_eight_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.red_row_eight_4').css("fill"));
		new Clipboard('.red_row_eight_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#red_row_eight_4').animate({'opacity':'1'});
		}, 2500);
	});$('#red_row_eight_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#red_row_eight_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.red_row_eight_5').css("fill"));
		new Clipboard('.red_row_eight_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#red_row_eight_5').animate({'opacity':'1'});
		}, 2500);
	});$('#red_row_nine_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#red_row_nine_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.red_row_nine_0').css("fill"));
		new Clipboard('.red_row_nine_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#red_row_nine_0').animate({'opacity':'1'});
		}, 2500);
	});$('#red_row_nine_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#red_row_nine_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.red_row_nine_1').css("fill"));
		new Clipboard('.red_row_nine_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#red_row_nine_1').animate({'opacity':'1'});
		}, 2500);
	});$('#red_row_nine_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#red_row_nine_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.red_row_nine_2').css("fill"));
		new Clipboard('.red_row_nine_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#red_row_nine_2').animate({'opacity':'1'});
		}, 2500);
	});$('#red_row_nine_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#red_row_nine_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.red_row_nine_3').css("fill"));
		new Clipboard('.red_row_nine_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#red_row_nine_3').animate({'opacity':'1'});
		}, 2500);
	});$('#red_row_nine_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#red_row_nine_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.red_row_nine_4').css("fill"));
		new Clipboard('.red_row_nine_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#red_row_nine_4').animate({'opacity':'1'});
		}, 2500);
	});$('#red_row_nine_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#red_row_nine_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.red_row_nine_5').css("fill"));
		new Clipboard('.red_row_nine_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#red_row_nine_5').animate({'opacity':'1'});
		}, 2500);
	});$('#red_row_ten_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#red_row_ten_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.red_row_ten_0').css("fill"));
		new Clipboard('.red_row_ten_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#red_row_ten_0').animate({'opacity':'1'});
		}, 2500);
	});$('#red_row_ten_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#red_row_ten_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.red_row_ten_1').css("fill"));
		new Clipboard('.red_row_ten_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#red_row_ten_1').animate({'opacity':'1'});
		}, 2500);
	});$('#red_row_ten_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#red_row_ten_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.red_row_ten_2').css("fill"));
		new Clipboard('.red_row_ten_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#red_row_ten_2').animate({'opacity':'1'});
		}, 2500);
	});$('#red_row_ten_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#red_row_ten_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.red_row_ten_3').css("fill"));
		new Clipboard('.red_row_ten_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#red_row_ten_3').animate({'opacity':'1'});
		}, 2500);
	});$('#red_row_ten_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#red_row_ten_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.red_row_ten_4').css("fill"));
		new Clipboard('.red_row_ten_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#red_row_ten_4').animate({'opacity':'1'});
		}, 2500);
	});$('#red_row_ten_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#red_row_ten_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.red_row_ten_5').css("fill"));
		new Clipboard('.red_row_ten_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#red_row_ten_5').animate({'opacity':'1'});
		}, 2500);
	});
	$('#pinks_row_one_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_one_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_one_0').css("fill"));
			new Clipboard('.pinks_row_one_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_one_0').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_one_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_one_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_one_1').css("fill"));
			new Clipboard('.pinks_row_one_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_one_1').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_one_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_one_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_one_2').css("fill"));
			new Clipboard('.pinks_row_one_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_one_2').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_one_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_one_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_one_3').css("fill"));
			new Clipboard('.pinks_row_one_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_one_3').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_one_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_one_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_one_4').css("fill"));
			new Clipboard('.pinks_row_one_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_one_4').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_one_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_one_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_one_5').css("fill"));
			new Clipboard('.pinks_row_one_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_one_5').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_two_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_two_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_two_0').css("fill"));
			new Clipboard('.pinks_row_two_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_two_0').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_two_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_two_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_two_1').css("fill"));
			new Clipboard('.pinks_row_two_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_two_1').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_two_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_two_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_two_2').css("fill"));
			new Clipboard('.pinks_row_two_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_two_2').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_two_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_two_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_two_3').css("fill"));
			new Clipboard('.pinks_row_two_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_two_3').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_two_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_two_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_two_4').css("fill"));
			new Clipboard('.pinks_row_two_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_two_4').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_two_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_two_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_two_5').css("fill"));
			new Clipboard('.pinks_row_two_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_two_5').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_three_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_three_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_three_0').css("fill"));
			new Clipboard('.pinks_row_three_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_three_0').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_three_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_three_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_three_1').css("fill"));
			new Clipboard('.pinks_row_three_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_three_1').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_three_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_three_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_three_2').css("fill"));
			new Clipboard('.pinks_row_three_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_three_2').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_three_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_three_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_three_3').css("fill"));
			new Clipboard('.pinks_row_three_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_three_3').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_three_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_three_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_three_4').css("fill"));
			new Clipboard('.pinks_row_three_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_three_4').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_three_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_three_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_three_5').css("fill"));
			new Clipboard('.pinks_row_three_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_three_5').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_four_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_four_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_four_0').css("fill"));
			new Clipboard('.pinks_row_four_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_four_0').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_four_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_four_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_four_1').css("fill"));
			new Clipboard('.pinks_row_four_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_four_1').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_four_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_four_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_four_2').css("fill"));
			new Clipboard('.pinks_row_four_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_four_2').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_four_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_four_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_four_3').css("fill"));
			new Clipboard('.pinks_row_four_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_four_3').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_four_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_four_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_four_4').css("fill"));
			new Clipboard('.pinks_row_four_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_four_4').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_four_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_four_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_four_5').css("fill"));
			new Clipboard('.pinks_row_four_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_four_5').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_five_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_five_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_five_0').css("fill"));
			new Clipboard('.pinks_row_five_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_five_0').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_five_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_five_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_five_1').css("fill"));
			new Clipboard('.pinks_row_five_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_five_1').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_five_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_five_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_five_2').css("fill"));
			new Clipboard('.pinks_row_five_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_five_2').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_five_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_five_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_five_3').css("fill"));
			new Clipboard('.pinks_row_five_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_five_3').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_five_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_five_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_five_4').css("fill"));
			new Clipboard('.pinks_row_five_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_five_4').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_five_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_five_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_five_5').css("fill"));
			new Clipboard('.pinks_row_five_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_five_5').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_six_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_six_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_six_0').css("fill"));
			new Clipboard('.pinks_row_six_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_six_0').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_six_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_six_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_six_1').css("fill"));
			new Clipboard('.pinks_row_six_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_six_1').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_six_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_six_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_six_2').css("fill"));
			new Clipboard('.pinks_row_six_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_six_2').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_six_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_six_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_six_3').css("fill"));
			new Clipboard('.pinks_row_six_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_six_3').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_six_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_six_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_six_4').css("fill"));
			new Clipboard('.pinks_row_six_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_six_4').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_six_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#pinks_row_six_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.pinks_row_six_5').css("fill"));
			new Clipboard('.pinks_row_six_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#pinks_row_six_5').animate({'opacity':'1'});
			}, 2500);
		});$('#pinks_row_seven_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#pinks_row_seven_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.pinks_row_seven_0').css("fill"));
		new Clipboard('.pinks_row_seven_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#pinks_row_seven_0').animate({'opacity':'1'});
		}, 2500);
	});$('#pinks_row_seven_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#pinks_row_seven_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.pinks_row_seven_1').css("fill"));
		new Clipboard('.pinks_row_seven_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#pinks_row_seven_1').animate({'opacity':'1'});
		}, 2500);
	});$('#pinks_row_seven_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#pinks_row_seven_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.pinks_row_seven_2').css("fill"));
		new Clipboard('.pinks_row_seven_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#pinks_row_seven_2').animate({'opacity':'1'});
		}, 2500);
	});$('#pinks_row_seven_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#pinks_row_seven_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.pinks_row_seven_3').css("fill"));
		new Clipboard('.pinks_row_seven_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#pinks_row_seven_3').animate({'opacity':'1'});
		}, 2500);
	});$('#pinks_row_seven_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#pinks_row_seven_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.pinks_row_seven_4').css("fill"));
		new Clipboard('.pinks_row_seven_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#pinks_row_seven_4').animate({'opacity':'1'});
		}, 2500);
	});$('#pinks_row_seven_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#pinks_row_seven_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.pinks_row_seven_5').css("fill"));
		new Clipboard('.pinks_row_seven_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#pinks_row_seven_5').animate({'opacity':'1'});
		}, 2500);
	});$('#pinks_row_eight_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#pinks_row_eight_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.pinks_row_eight_0').css("fill"));
		new Clipboard('.pinks_row_eight_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#pinks_row_eight_0').animate({'opacity':'1'});
		}, 2500);
	});$('#pinks_row_eight_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#pinks_row_eight_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.pinks_row_eight_1').css("fill"));
		new Clipboard('.pinks_row_eight_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#pinks_row_eight_1').animate({'opacity':'1'});
		}, 2500);
	});$('#pinks_row_eight_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#pinks_row_eight_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.pinks_row_eight_2').css("fill"));
		new Clipboard('.pinks_row_eight_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#pinks_row_eight_2').animate({'opacity':'1'});
		}, 2500);
	});$('#pinks_row_eight_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#pinks_row_eight_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.pinks_row_eight_3').css("fill"));
		new Clipboard('.pinks_row_eight_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#pinks_row_eight_3').animate({'opacity':'1'});
		}, 2500);
	});$('#pinks_row_eight_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#pinks_row_eight_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.pinks_row_eight_4').css("fill"));
		new Clipboard('.pinks_row_eight_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#pinks_row_eight_4').animate({'opacity':'1'});
		}, 2500);
	});$('#pinks_row_eight_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#pinks_row_eight_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.pinks_row_eight_5').css("fill"));
		new Clipboard('.pinks_row_eight_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#pinks_row_eight_5').animate({'opacity':'1'});
		}, 2500);
	});$('#pinks_row_nine_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#pinks_row_nine_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.pinks_row_nine_0').css("fill"));
		new Clipboard('.pinks_row_nine_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#pinks_row_nine_0').animate({'opacity':'1'});
		}, 2500);
	});$('#pinks_row_nine_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#pinks_row_nine_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.pinks_row_nine_1').css("fill"));
		new Clipboard('.pinks_row_nine_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#pinks_row_nine_1').animate({'opacity':'1'});
		}, 2500);
	});$('#pinks_row_nine_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#pinks_row_nine_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.pinks_row_nine_2').css("fill"));
		new Clipboard('.pinks_row_nine_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#pinks_row_nine_2').animate({'opacity':'1'});
		}, 2500);
	});$('#pinks_row_nine_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#pinks_row_nine_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.pinks_row_nine_3').css("fill"));
		new Clipboard('.pinks_row_nine_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#pinks_row_nine_3').animate({'opacity':'1'});
		}, 2500);
	});$('#pinks_row_nine_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#pinks_row_nine_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.pinks_row_nine_4').css("fill"));
		new Clipboard('.pinks_row_nine_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#pinks_row_nine_4').animate({'opacity':'1'});
		}, 2500);
	});$('#pinks_row_nine_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#pinks_row_nine_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.pinks_row_nine_5').css("fill"));
		new Clipboard('.pinks_row_nine_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#pinks_row_nine_5').animate({'opacity':'1'});
		}, 2500);
	});$('#pinks_row_ten_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#pinks_row_ten_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.pinks_row_ten_0').css("fill"));
		new Clipboard('.pinks_row_ten_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#pinks_row_ten_0').animate({'opacity':'1'});
		}, 2500);
	});$('#pinks_row_ten_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#pinks_row_ten_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.pinks_row_ten_1').css("fill"));
		new Clipboard('.pinks_row_ten_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#pinks_row_ten_1').animate({'opacity':'1'});
		}, 2500);
	});$('#pinks_row_ten_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#pinks_row_ten_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.pinks_row_ten_2').css("fill"));
		new Clipboard('.pinks_row_ten_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#pinks_row_ten_2').animate({'opacity':'1'});
		}, 2500);
	});$('#pinks_row_ten_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#pinks_row_ten_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.pinks_row_ten_3').css("fill"));
		new Clipboard('.pinks_row_ten_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#pinks_row_ten_3').animate({'opacity':'1'});
		}, 2500);
	});$('#pinks_row_ten_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#pinks_row_ten_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.pinks_row_ten_4').css("fill"));
		new Clipboard('.pinks_row_ten_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#pinks_row_ten_4').animate({'opacity':'1'});
		}, 2500);
	});$('#pinks_row_ten_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#pinks_row_ten_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.pinks_row_ten_5').css("fill"));
		new Clipboard('.pinks_row_ten_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#pinks_row_ten_5').animate({'opacity':'1'});
		}, 2500);
	});
	$('#purples_row_one_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_one_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_one_0').css("fill"));
			new Clipboard('.purples_row_one_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_one_0').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_one_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_one_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_one_1').css("fill"));
			new Clipboard('.purples_row_one_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_one_1').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_one_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_one_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_one_2').css("fill"));
			new Clipboard('.purples_row_one_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_one_2').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_one_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_one_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_one_3').css("fill"));
			new Clipboard('.purples_row_one_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_one_3').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_one_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_one_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_one_4').css("fill"));
			new Clipboard('.purples_row_one_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_one_4').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_one_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_one_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_one_5').css("fill"));
			new Clipboard('.purples_row_one_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_one_5').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_two_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_two_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_two_0').css("fill"));
			new Clipboard('.purples_row_two_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_two_0').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_two_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_two_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_two_1').css("fill"));
			new Clipboard('.purples_row_two_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_two_1').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_two_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_two_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_two_2').css("fill"));
			new Clipboard('.purples_row_two_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_two_2').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_two_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_two_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_two_3').css("fill"));
			new Clipboard('.purples_row_two_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_two_3').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_two_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_two_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_two_4').css("fill"));
			new Clipboard('.purples_row_two_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_two_4').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_two_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_two_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_two_5').css("fill"));
			new Clipboard('.purples_row_two_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_two_5').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_three_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_three_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_three_0').css("fill"));
			new Clipboard('.purples_row_three_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_three_0').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_three_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_three_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_three_1').css("fill"));
			new Clipboard('.purples_row_three_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_three_1').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_three_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_three_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_three_2').css("fill"));
			new Clipboard('.purples_row_three_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_three_2').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_three_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_three_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_three_3').css("fill"));
			new Clipboard('.purples_row_three_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_three_3').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_three_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_three_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_three_4').css("fill"));
			new Clipboard('.purples_row_three_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_three_4').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_three_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_three_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_three_5').css("fill"));
			new Clipboard('.purples_row_three_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_three_5').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_four_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_four_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_four_0').css("fill"));
			new Clipboard('.purples_row_four_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_four_0').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_four_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_four_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_four_1').css("fill"));
			new Clipboard('.purples_row_four_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_four_1').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_four_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_four_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_four_2').css("fill"));
			new Clipboard('.purples_row_four_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_four_2').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_four_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_four_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_four_3').css("fill"));
			new Clipboard('.purples_row_four_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_four_3').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_four_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_four_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_four_4').css("fill"));
			new Clipboard('.purples_row_four_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_four_4').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_four_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_four_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_four_5').css("fill"));
			new Clipboard('.purples_row_four_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_four_5').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_five_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_five_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_five_0').css("fill"));
			new Clipboard('.purples_row_five_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_five_0').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_five_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_five_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_five_1').css("fill"));
			new Clipboard('.purples_row_five_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_five_1').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_five_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_five_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_five_2').css("fill"));
			new Clipboard('.purples_row_five_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_five_2').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_five_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_five_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_five_3').css("fill"));
			new Clipboard('.purples_row_five_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_five_3').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_five_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_five_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_five_4').css("fill"));
			new Clipboard('.purples_row_five_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_five_4').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_five_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_five_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_five_5').css("fill"));
			new Clipboard('.purples_row_five_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_five_5').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_six_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_six_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_six_0').css("fill"));
			new Clipboard('.purples_row_six_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_six_0').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_six_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_six_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_six_1').css("fill"));
			new Clipboard('.purples_row_six_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_six_1').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_six_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_six_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_six_2').css("fill"));
			new Clipboard('.purples_row_six_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_six_2').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_six_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_six_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_six_3').css("fill"));
			new Clipboard('.purples_row_six_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_six_3').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_six_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_six_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_six_4').css("fill"));
			new Clipboard('.purples_row_six_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_six_4').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_six_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#purples_row_six_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.purples_row_six_5').css("fill"));
			new Clipboard('.purples_row_six_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#purples_row_six_5').animate({'opacity':'1'});
			}, 2500);
		});$('#purples_row_seven_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#purples_row_seven_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.purples_row_seven_0').css("fill"));
		new Clipboard('.purples_row_seven_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#purples_row_seven_0').animate({'opacity':'1'});
		}, 2500);
	});$('#purples_row_seven_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#purples_row_seven_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.purples_row_seven_1').css("fill"));
		new Clipboard('.purples_row_seven_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#purples_row_seven_1').animate({'opacity':'1'});
		}, 2500);
	});$('#purples_row_seven_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#purples_row_seven_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.purples_row_seven_2').css("fill"));
		new Clipboard('.purples_row_seven_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#purples_row_seven_2').animate({'opacity':'1'});
		}, 2500);
	});$('#purples_row_seven_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#purples_row_seven_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.purples_row_seven_3').css("fill"));
		new Clipboard('.purples_row_seven_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#purples_row_seven_3').animate({'opacity':'1'});
		}, 2500);
	});$('#purples_row_seven_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#purples_row_seven_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.purples_row_seven_4').css("fill"));
		new Clipboard('.purples_row_seven_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#purples_row_seven_4').animate({'opacity':'1'});
		}, 2500);
	});$('#purples_row_seven_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#purples_row_seven_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.purples_row_seven_5').css("fill"));
		new Clipboard('.purples_row_seven_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#purples_row_seven_5').animate({'opacity':'1'});
		}, 2500);
	});$('#purples_row_eight_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#purples_row_eight_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.purples_row_eight_0').css("fill"));
		new Clipboard('.purples_row_eight_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#purples_row_eight_0').animate({'opacity':'1'});
		}, 2500);
	});$('#purples_row_eight_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#purples_row_eight_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.purples_row_eight_1').css("fill"));
		new Clipboard('.purples_row_eight_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#purples_row_eight_1').animate({'opacity':'1'});
		}, 2500);
	});$('#purples_row_eight_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#purples_row_eight_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.purples_row_eight_2').css("fill"));
		new Clipboard('.purples_row_eight_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#purples_row_eight_2').animate({'opacity':'1'});
		}, 2500);
	});$('#purples_row_eight_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#purples_row_eight_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.purples_row_eight_3').css("fill"));
		new Clipboard('.purples_row_eight_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#purples_row_eight_3').animate({'opacity':'1'});
		}, 2500);
	});$('#purples_row_eight_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#purples_row_eight_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.purples_row_eight_4').css("fill"));
		new Clipboard('.purples_row_eight_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#purples_row_eight_4').animate({'opacity':'1'});
		}, 2500);
	});$('#purples_row_eight_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#purples_row_eight_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.purples_row_eight_5').css("fill"));
		new Clipboard('.purples_row_eight_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#purples_row_eight_5').animate({'opacity':'1'});
		}, 2500);
	});$('#purples_row_nine_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#purples_row_nine_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.purples_row_nine_0').css("fill"));
		new Clipboard('.purples_row_nine_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#purples_row_nine_0').animate({'opacity':'1'});
		}, 2500);
	});$('#purples_row_nine_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#purples_row_nine_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.purples_row_nine_1').css("fill"));
		new Clipboard('.purples_row_nine_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#purples_row_nine_1').animate({'opacity':'1'});
		}, 2500);
	});$('#purples_row_nine_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#purples_row_nine_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.purples_row_nine_2').css("fill"));
		new Clipboard('.purples_row_nine_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#purples_row_nine_2').animate({'opacity':'1'});
		}, 2500);
	});$('#purples_row_nine_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#purples_row_nine_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.purples_row_nine_3').css("fill"));
		new Clipboard('.purples_row_nine_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#purples_row_nine_3').animate({'opacity':'1'});
		}, 2500);
	});$('#purples_row_nine_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#purples_row_nine_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.purples_row_nine_4').css("fill"));
		new Clipboard('.purples_row_nine_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#purples_row_nine_4').animate({'opacity':'1'});
		}, 2500);
	});$('#purples_row_nine_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#purples_row_nine_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.purples_row_nine_5').css("fill"));
		new Clipboard('.purples_row_nine_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#purples_row_nine_5').animate({'opacity':'1'});
		}, 2500);
	});$('#purples_row_ten_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#purples_row_ten_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.purples_row_ten_0').css("fill"));
		new Clipboard('.purples_row_ten_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#purples_row_ten_0').animate({'opacity':'1'});
		}, 2500);
	});$('#purples_row_ten_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#purples_row_ten_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.purples_row_ten_1').css("fill"));
		new Clipboard('.purples_row_ten_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#purples_row_ten_1').animate({'opacity':'1'});
		}, 2500);
	});$('#purples_row_ten_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#purples_row_ten_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.purples_row_ten_2').css("fill"));
		new Clipboard('.purples_row_ten_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#purples_row_ten_2').animate({'opacity':'1'});
		}, 2500);
	});$('#purples_row_ten_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#purples_row_ten_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.purples_row_ten_3').css("fill"));
		new Clipboard('.purples_row_ten_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#purples_row_ten_3').animate({'opacity':'1'});
		}, 2500);
	});$('#purples_row_ten_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#purples_row_ten_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.purples_row_ten_4').css("fill"));
		new Clipboard('.purples_row_ten_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#purples_row_ten_4').animate({'opacity':'1'});
		}, 2500);
	});$('#purples_row_ten_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#purples_row_ten_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.purples_row_ten_5').css("fill"));
		new Clipboard('.purples_row_ten_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#purples_row_ten_5').animate({'opacity':'1'});
		}, 2500);
	});
	$('#white_row_one_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_one_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_one_0').css("fill"));
			new Clipboard('.white_row_one_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_one_0').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_one_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_one_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_one_1').css("fill"));
			new Clipboard('.white_row_one_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_one_1').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_one_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_one_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_one_2').css("fill"));
			new Clipboard('.white_row_one_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_one_2').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_one_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_one_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_one_3').css("fill"));
			new Clipboard('.white_row_one_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_one_3').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_one_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_one_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_one_4').css("fill"));
			new Clipboard('.white_row_one_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_one_4').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_one_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_one_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_one_5').css("fill"));
			new Clipboard('.white_row_one_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_one_5').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_two_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_two_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_two_0').css("fill"));
			new Clipboard('.white_row_two_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_two_0').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_two_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_two_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_two_1').css("fill"));
			new Clipboard('.white_row_two_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_two_1').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_two_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_two_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_two_2').css("fill"));
			new Clipboard('.white_row_two_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_two_2').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_two_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_two_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_two_3').css("fill"));
			new Clipboard('.white_row_two_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_two_3').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_two_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_two_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_two_4').css("fill"));
			new Clipboard('.white_row_two_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_two_4').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_two_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_two_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_two_5').css("fill"));
			new Clipboard('.white_row_two_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_two_5').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_three_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_three_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_three_0').css("fill"));
			new Clipboard('.white_row_three_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_three_0').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_three_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_three_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_three_1').css("fill"));
			new Clipboard('.white_row_three_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_three_1').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_three_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_three_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_three_2').css("fill"));
			new Clipboard('.white_row_three_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_three_2').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_three_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_three_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_three_3').css("fill"));
			new Clipboard('.white_row_three_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_three_3').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_three_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_three_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_three_4').css("fill"));
			new Clipboard('.white_row_three_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_three_4').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_three_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_three_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_three_5').css("fill"));
			new Clipboard('.white_row_three_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_three_5').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_four_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_four_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_four_0').css("fill"));
			new Clipboard('.white_row_four_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_four_0').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_four_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_four_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_four_1').css("fill"));
			new Clipboard('.white_row_four_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_four_1').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_four_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_four_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_four_2').css("fill"));
			new Clipboard('.white_row_four_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_four_2').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_four_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_four_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_four_3').css("fill"));
			new Clipboard('.white_row_four_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_four_3').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_four_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_four_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_four_4').css("fill"));
			new Clipboard('.white_row_four_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_four_4').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_four_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_four_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_four_5').css("fill"));
			new Clipboard('.white_row_four_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_four_5').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_five_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_five_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_five_0').css("fill"));
			new Clipboard('.white_row_five_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_five_0').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_five_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_five_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_five_1').css("fill"));
			new Clipboard('.white_row_five_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_five_1').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_five_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_five_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_five_2').css("fill"));
			new Clipboard('.white_row_five_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_five_2').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_five_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_five_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_five_3').css("fill"));
			new Clipboard('.white_row_five_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_five_3').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_five_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_five_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_five_4').css("fill"));
			new Clipboard('.white_row_five_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_five_4').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_five_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_five_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_five_5').css("fill"));
			new Clipboard('.white_row_five_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_five_5').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_six_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_six_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_six_0').css("fill"));
			new Clipboard('.white_row_six_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_six_0').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_six_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_six_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_six_1').css("fill"));
			new Clipboard('.white_row_six_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_six_1').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_six_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_six_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_six_2').css("fill"));
			new Clipboard('.white_row_six_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_six_2').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_six_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_six_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_six_3').css("fill"));
			new Clipboard('.white_row_six_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_six_3').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_six_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_six_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_six_4').css("fill"));
			new Clipboard('.white_row_six_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_six_4').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_six_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#white_row_six_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.white_row_six_5').css("fill"));
			new Clipboard('.white_row_six_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#white_row_six_5').animate({'opacity':'1'});
			}, 2500);
		});$('#white_row_seven_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#white_row_seven_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.white_row_seven_0').css("fill"));
		new Clipboard('.white_row_seven_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#white_row_seven_0').animate({'opacity':'1'});
		}, 2500);
	});$('#white_row_seven_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#white_row_seven_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.white_row_seven_1').css("fill"));
		new Clipboard('.white_row_seven_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#white_row_seven_1').animate({'opacity':'1'});
		}, 2500);
	});$('#white_row_seven_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#white_row_seven_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.white_row_seven_2').css("fill"));
		new Clipboard('.white_row_seven_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#white_row_seven_2').animate({'opacity':'1'});
		}, 2500);
	});$('#white_row_seven_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#white_row_seven_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.white_row_seven_3').css("fill"));
		new Clipboard('.white_row_seven_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#white_row_seven_3').animate({'opacity':'1'});
		}, 2500);
	});$('#white_row_seven_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#white_row_seven_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.white_row_seven_4').css("fill"));
		new Clipboard('.white_row_seven_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#white_row_seven_4').animate({'opacity':'1'});
		}, 2500);
	});$('#white_row_seven_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#white_row_seven_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.white_row_seven_5').css("fill"));
		new Clipboard('.white_row_seven_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#white_row_seven_5').animate({'opacity':'1'});
		}, 2500);
	});$('#white_row_eight_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#white_row_eight_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.white_row_eight_0').css("fill"));
		new Clipboard('.white_row_eight_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#white_row_eight_0').animate({'opacity':'1'});
		}, 2500);
	});$('#white_row_eight_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#white_row_eight_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.white_row_eight_1').css("fill"));
		new Clipboard('.white_row_eight_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#white_row_eight_1').animate({'opacity':'1'});
		}, 2500);
	});$('#white_row_eight_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#white_row_eight_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.white_row_eight_2').css("fill"));
		new Clipboard('.white_row_eight_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#white_row_eight_2').animate({'opacity':'1'});
		}, 2500);
	});$('#white_row_eight_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#white_row_eight_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.white_row_eight_3').css("fill"));
		new Clipboard('.white_row_eight_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#white_row_eight_3').animate({'opacity':'1'});
		}, 2500);
	});$('#white_row_eight_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#white_row_eight_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.white_row_eight_4').css("fill"));
		new Clipboard('.white_row_eight_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#white_row_eight_4').animate({'opacity':'1'});
		}, 2500);
	});$('#white_row_eight_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#white_row_eight_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.white_row_eight_5').css("fill"));
		new Clipboard('.white_row_eight_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#white_row_eight_5').animate({'opacity':'1'});
		}, 2500);
	});$('#white_row_nine_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#white_row_nine_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.white_row_nine_0').css("fill"));
		new Clipboard('.white_row_nine_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#white_row_nine_0').animate({'opacity':'1'});
		}, 2500);
	});$('#white_row_nine_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#white_row_nine_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.white_row_nine_1').css("fill"));
		new Clipboard('.white_row_nine_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#white_row_nine_1').animate({'opacity':'1'});
		}, 2500);
	});$('#white_row_nine_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#white_row_nine_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.white_row_nine_2').css("fill"));
		new Clipboard('.white_row_nine_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#white_row_nine_2').animate({'opacity':'1'});
		}, 2500);
	});$('#white_row_nine_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#white_row_nine_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.white_row_nine_3').css("fill"));
		new Clipboard('.white_row_nine_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#white_row_nine_3').animate({'opacity':'1'});
		}, 2500);
	});$('#white_row_nine_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#white_row_nine_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.white_row_nine_4').css("fill"));
		new Clipboard('.white_row_nine_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#white_row_nine_4').animate({'opacity':'1'});
		}, 2500);
	});$('#white_row_nine_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#white_row_nine_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.white_row_nine_5').css("fill"));
		new Clipboard('.white_row_nine_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#white_row_nine_5').animate({'opacity':'1'});
		}, 2500);
	});$('#white_row_ten_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#white_row_ten_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.white_row_ten_0').css("fill"));
		new Clipboard('.white_row_ten_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#white_row_ten_0').animate({'opacity':'1'});
		}, 2500);
	});$('#white_row_ten_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#white_row_ten_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.white_row_ten_1').css("fill"));
		new Clipboard('.white_row_ten_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#white_row_ten_1').animate({'opacity':'1'});
		}, 2500);
	});$('#white_row_ten_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#white_row_ten_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.white_row_ten_2').css("fill"));
		new Clipboard('.white_row_ten_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#white_row_ten_2').animate({'opacity':'1'});
		}, 2500);
	});$('#white_row_ten_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#white_row_ten_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.white_row_ten_3').css("fill"));
		new Clipboard('.white_row_ten_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#white_row_ten_3').animate({'opacity':'1'});
		}, 2500);
	});$('#white_row_ten_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#white_row_ten_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.white_row_ten_4').css("fill"));
		new Clipboard('.white_row_ten_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#white_row_ten_4').animate({'opacity':'1'});
		}, 2500);
	});$('#white_row_ten_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#white_row_ten_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.white_row_ten_5').css("fill"));
		new Clipboard('.white_row_ten_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#white_row_ten_5').animate({'opacity':'1'});
		}, 2500);
	});
	$('#cyan_row_one_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_one_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_one_0').css("fill"));
			new Clipboard('.cyan_row_one_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_one_0').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_one_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_one_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_one_1').css("fill"));
			new Clipboard('.cyan_row_one_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_one_1').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_one_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_one_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_one_2').css("fill"));
			new Clipboard('.cyan_row_one_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_one_2').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_one_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_one_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_one_3').css("fill"));
			new Clipboard('.cyan_row_one_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_one_3').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_one_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_one_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_one_4').css("fill"));
			new Clipboard('.cyan_row_one_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_one_4').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_one_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_one_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_one_5').css("fill"));
			new Clipboard('.cyan_row_one_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_one_5').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_two_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_two_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_two_0').css("fill"));
			new Clipboard('.cyan_row_two_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_two_0').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_two_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_two_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_two_1').css("fill"));
			new Clipboard('.cyan_row_two_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_two_1').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_two_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_two_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_two_2').css("fill"));
			new Clipboard('.cyan_row_two_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_two_2').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_two_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_two_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_two_3').css("fill"));
			new Clipboard('.cyan_row_two_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_two_3').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_two_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_two_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_two_4').css("fill"));
			new Clipboard('.cyan_row_two_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_two_4').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_two_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_two_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_two_5').css("fill"));
			new Clipboard('.cyan_row_two_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_two_5').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_three_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_three_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_three_0').css("fill"));
			new Clipboard('.cyan_row_three_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_three_0').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_three_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_three_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_three_1').css("fill"));
			new Clipboard('.cyan_row_three_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_three_1').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_three_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_three_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_three_2').css("fill"));
			new Clipboard('.cyan_row_three_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_three_2').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_three_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_three_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_three_3').css("fill"));
			new Clipboard('.cyan_row_three_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_three_3').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_three_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_three_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_three_4').css("fill"));
			new Clipboard('.cyan_row_three_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_three_4').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_three_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_three_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_three_5').css("fill"));
			new Clipboard('.cyan_row_three_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_three_5').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_four_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_four_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_four_0').css("fill"));
			new Clipboard('.cyan_row_four_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_four_0').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_four_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_four_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_four_1').css("fill"));
			new Clipboard('.cyan_row_four_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_four_1').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_four_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_four_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_four_2').css("fill"));
			new Clipboard('.cyan_row_four_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_four_2').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_four_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_four_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_four_3').css("fill"));
			new Clipboard('.cyan_row_four_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_four_3').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_four_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_four_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_four_4').css("fill"));
			new Clipboard('.cyan_row_four_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_four_4').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_four_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_four_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_four_5').css("fill"));
			new Clipboard('.cyan_row_four_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_four_5').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_five_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_five_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_five_0').css("fill"));
			new Clipboard('.cyan_row_five_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_five_0').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_five_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_five_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_five_1').css("fill"));
			new Clipboard('.cyan_row_five_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_five_1').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_five_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_five_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_five_2').css("fill"));
			new Clipboard('.cyan_row_five_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_five_2').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_five_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_five_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_five_3').css("fill"));
			new Clipboard('.cyan_row_five_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_five_3').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_five_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_five_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_five_4').css("fill"));
			new Clipboard('.cyan_row_five_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_five_4').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_five_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_five_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_five_5').css("fill"));
			new Clipboard('.cyan_row_five_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_five_5').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_six_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_six_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_six_0').css("fill"));
			new Clipboard('.cyan_row_six_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_six_0').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_six_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_six_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_six_1').css("fill"));
			new Clipboard('.cyan_row_six_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_six_1').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_six_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_six_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_six_2').css("fill"));
			new Clipboard('.cyan_row_six_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_six_2').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_six_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_six_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_six_3').css("fill"));
			new Clipboard('.cyan_row_six_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_six_3').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_six_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_six_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_six_4').css("fill"));
			new Clipboard('.cyan_row_six_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_six_4').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_six_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#cyan_row_six_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.cyan_row_six_5').css("fill"));
			new Clipboard('.cyan_row_six_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#cyan_row_six_5').animate({'opacity':'1'});
			}, 2500);
		});$('#cyan_row_seven_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#cyan_row_seven_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.cyan_row_seven_0').css("fill"));
		new Clipboard('.cyan_row_seven_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#cyan_row_seven_0').animate({'opacity':'1'});
		}, 2500);
	});$('#cyan_row_seven_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#cyan_row_seven_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.cyan_row_seven_1').css("fill"));
		new Clipboard('.cyan_row_seven_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#cyan_row_seven_1').animate({'opacity':'1'});
		}, 2500);
	});$('#cyan_row_seven_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#cyan_row_seven_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.cyan_row_seven_2').css("fill"));
		new Clipboard('.cyan_row_seven_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#cyan_row_seven_2').animate({'opacity':'1'});
		}, 2500);
	});$('#cyan_row_seven_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#cyan_row_seven_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.cyan_row_seven_3').css("fill"));
		new Clipboard('.cyan_row_seven_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#cyan_row_seven_3').animate({'opacity':'1'});
		}, 2500);
	});$('#cyan_row_seven_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#cyan_row_seven_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.cyan_row_seven_4').css("fill"));
		new Clipboard('.cyan_row_seven_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#cyan_row_seven_4').animate({'opacity':'1'});
		}, 2500);
	});$('#cyan_row_seven_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#cyan_row_seven_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.cyan_row_seven_5').css("fill"));
		new Clipboard('.cyan_row_seven_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#cyan_row_seven_5').animate({'opacity':'1'});
		}, 2500);
	});$('#cyan_row_eight_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#cyan_row_eight_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.cyan_row_eight_0').css("fill"));
		new Clipboard('.cyan_row_eight_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#cyan_row_eight_0').animate({'opacity':'1'});
		}, 2500);
	});$('#cyan_row_eight_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#cyan_row_eight_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.cyan_row_eight_1').css("fill"));
		new Clipboard('.cyan_row_eight_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#cyan_row_eight_1').animate({'opacity':'1'});
		}, 2500);
	});$('#cyan_row_eight_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#cyan_row_eight_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.cyan_row_eight_2').css("fill"));
		new Clipboard('.cyan_row_eight_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#cyan_row_eight_2').animate({'opacity':'1'});
		}, 2500);
	});$('#cyan_row_eight_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#cyan_row_eight_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.cyan_row_eight_3').css("fill"));
		new Clipboard('.cyan_row_eight_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#cyan_row_eight_3').animate({'opacity':'1'});
		}, 2500);
	});$('#cyan_row_eight_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#cyan_row_eight_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.cyan_row_eight_4').css("fill"));
		new Clipboard('.cyan_row_eight_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#cyan_row_eight_4').animate({'opacity':'1'});
		}, 2500);
	});$('#cyan_row_eight_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#cyan_row_eight_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.cyan_row_eight_5').css("fill"));
		new Clipboard('.cyan_row_eight_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#cyan_row_eight_5').animate({'opacity':'1'});
		}, 2500);
	});$('#cyan_row_nine_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#cyan_row_nine_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.cyan_row_nine_0').css("fill"));
		new Clipboard('.cyan_row_nine_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#cyan_row_nine_0').animate({'opacity':'1'});
		}, 2500);
	});$('#cyan_row_nine_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#cyan_row_nine_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.cyan_row_nine_1').css("fill"));
		new Clipboard('.cyan_row_nine_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#cyan_row_nine_1').animate({'opacity':'1'});
		}, 2500);
	});$('#cyan_row_nine_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#cyan_row_nine_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.cyan_row_nine_2').css("fill"));
		new Clipboard('.cyan_row_nine_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#cyan_row_nine_2').animate({'opacity':'1'});
		}, 2500);
	});$('#cyan_row_nine_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#cyan_row_nine_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.cyan_row_nine_3').css("fill"));
		new Clipboard('.cyan_row_nine_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#cyan_row_nine_3').animate({'opacity':'1'});
		}, 2500);
	});$('#cyan_row_nine_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#cyan_row_nine_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.cyan_row_nine_4').css("fill"));
		new Clipboard('.cyan_row_nine_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#cyan_row_nine_4').animate({'opacity':'1'});
		}, 2500);
	});$('#cyan_row_nine_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#cyan_row_nine_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.cyan_row_nine_5').css("fill"));
		new Clipboard('.cyan_row_nine_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#cyan_row_nine_5').animate({'opacity':'1'});
		}, 2500);
	});$('#cyan_row_ten_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#cyan_row_ten_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.cyan_row_ten_0').css("fill"));
		new Clipboard('.cyan_row_ten_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#cyan_row_ten_0').animate({'opacity':'1'});
		}, 2500);
	});$('#cyan_row_ten_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#cyan_row_ten_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.cyan_row_ten_1').css("fill"));
		new Clipboard('.cyan_row_ten_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#cyan_row_ten_1').animate({'opacity':'1'});
		}, 2500);
	});$('#cyan_row_ten_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#cyan_row_ten_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.cyan_row_ten_2').css("fill"));
		new Clipboard('.cyan_row_ten_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#cyan_row_ten_2').animate({'opacity':'1'});
		}, 2500);
	});$('#cyan_row_ten_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#cyan_row_ten_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.cyan_row_ten_3').css("fill"));
		new Clipboard('.cyan_row_ten_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#cyan_row_ten_3').animate({'opacity':'1'});
		}, 2500);
	});$('#cyan_row_ten_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#cyan_row_ten_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.cyan_row_ten_4').css("fill"));
		new Clipboard('.cyan_row_ten_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#cyan_row_ten_4').animate({'opacity':'1'});
		}, 2500);
	});$('#cyan_row_ten_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#cyan_row_ten_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.cyan_row_ten_5').css("fill"));
		new Clipboard('.cyan_row_ten_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#cyan_row_ten_5').animate({'opacity':'1'});
		}, 2500);
	});
	$('#skyblue_row_one_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_one_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_one_0').css("fill"));
			new Clipboard('.skyblue_row_one_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_one_0').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_one_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_one_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_one_1').css("fill"));
			new Clipboard('.skyblue_row_one_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_one_1').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_one_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_one_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_one_2').css("fill"));
			new Clipboard('.skyblue_row_one_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_one_2').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_one_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_one_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_one_3').css("fill"));
			new Clipboard('.skyblue_row_one_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_one_3').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_one_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_one_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_one_4').css("fill"));
			new Clipboard('.skyblue_row_one_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_one_4').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_one_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_one_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_one_5').css("fill"));
			new Clipboard('.skyblue_row_one_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_one_5').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_two_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_two_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_two_0').css("fill"));
			new Clipboard('.skyblue_row_two_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_two_0').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_two_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_two_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_two_1').css("fill"));
			new Clipboard('.skyblue_row_two_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_two_1').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_two_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_two_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_two_2').css("fill"));
			new Clipboard('.skyblue_row_two_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_two_2').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_two_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_two_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_two_3').css("fill"));
			new Clipboard('.skyblue_row_two_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_two_3').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_two_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_two_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_two_4').css("fill"));
			new Clipboard('.skyblue_row_two_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_two_4').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_two_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_two_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_two_5').css("fill"));
			new Clipboard('.skyblue_row_two_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_two_5').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_three_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_three_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_three_0').css("fill"));
			new Clipboard('.skyblue_row_three_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_three_0').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_three_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_three_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_three_1').css("fill"));
			new Clipboard('.skyblue_row_three_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_three_1').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_three_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_three_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_three_2').css("fill"));
			new Clipboard('.skyblue_row_three_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_three_2').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_three_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_three_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_three_3').css("fill"));
			new Clipboard('.skyblue_row_three_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_three_3').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_three_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_three_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_three_4').css("fill"));
			new Clipboard('.skyblue_row_three_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_three_4').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_three_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_three_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_three_5').css("fill"));
			new Clipboard('.skyblue_row_three_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_three_5').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_four_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_four_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_four_0').css("fill"));
			new Clipboard('.skyblue_row_four_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_four_0').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_four_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_four_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_four_1').css("fill"));
			new Clipboard('.skyblue_row_four_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_four_1').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_four_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_four_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_four_2').css("fill"));
			new Clipboard('.skyblue_row_four_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_four_2').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_four_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_four_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_four_3').css("fill"));
			new Clipboard('.skyblue_row_four_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_four_3').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_four_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_four_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_four_4').css("fill"));
			new Clipboard('.skyblue_row_four_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_four_4').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_four_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_four_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_four_5').css("fill"));
			new Clipboard('.skyblue_row_four_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_four_5').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_five_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_five_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_five_0').css("fill"));
			new Clipboard('.skyblue_row_five_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_five_0').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_five_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_five_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_five_1').css("fill"));
			new Clipboard('.skyblue_row_five_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_five_1').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_five_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_five_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_five_2').css("fill"));
			new Clipboard('.skyblue_row_five_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_five_2').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_five_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_five_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_five_3').css("fill"));
			new Clipboard('.skyblue_row_five_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_five_3').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_five_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_five_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_five_4').css("fill"));
			new Clipboard('.skyblue_row_five_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_five_4').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_five_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_five_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_five_5').css("fill"));
			new Clipboard('.skyblue_row_five_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_five_5').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_six_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_six_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_six_0').css("fill"));
			new Clipboard('.skyblue_row_six_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_six_0').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_six_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_six_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_six_1').css("fill"));
			new Clipboard('.skyblue_row_six_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_six_1').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_six_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_six_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_six_2').css("fill"));
			new Clipboard('.skyblue_row_six_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_six_2').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_six_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_six_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_six_3').css("fill"));
			new Clipboard('.skyblue_row_six_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_six_3').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_six_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_six_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_six_4').css("fill"));
			new Clipboard('.skyblue_row_six_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_six_4').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_six_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#skyblue_row_six_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.skyblue_row_six_5').css("fill"));
			new Clipboard('.skyblue_row_six_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#skyblue_row_six_5').animate({'opacity':'1'});
			}, 2500);
		});$('#skyblue_row_seven_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#skyblue_row_seven_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.skyblue_row_seven_0').css("fill"));
		new Clipboard('.skyblue_row_seven_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#skyblue_row_seven_0').animate({'opacity':'1'});
		}, 2500);
	});$('#skyblue_row_seven_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#skyblue_row_seven_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.skyblue_row_seven_1').css("fill"));
		new Clipboard('.skyblue_row_seven_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#skyblue_row_seven_1').animate({'opacity':'1'});
		}, 2500);
	});$('#skyblue_row_seven_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#skyblue_row_seven_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.skyblue_row_seven_2').css("fill"));
		new Clipboard('.skyblue_row_seven_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#skyblue_row_seven_2').animate({'opacity':'1'});
		}, 2500);
	});$('#skyblue_row_seven_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#skyblue_row_seven_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.skyblue_row_seven_3').css("fill"));
		new Clipboard('.skyblue_row_seven_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#skyblue_row_seven_3').animate({'opacity':'1'});
		}, 2500);
	});$('#skyblue_row_seven_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#skyblue_row_seven_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.skyblue_row_seven_4').css("fill"));
		new Clipboard('.skyblue_row_seven_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#skyblue_row_seven_4').animate({'opacity':'1'});
		}, 2500);
	});$('#skyblue_row_seven_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#skyblue_row_seven_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.skyblue_row_seven_5').css("fill"));
		new Clipboard('.skyblue_row_seven_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#skyblue_row_seven_5').animate({'opacity':'1'});
		}, 2500);
	});$('#skyblue_row_eight_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#skyblue_row_eight_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.skyblue_row_eight_0').css("fill"));
		new Clipboard('.skyblue_row_eight_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#skyblue_row_eight_0').animate({'opacity':'1'});
		}, 2500);
	});$('#skyblue_row_eight_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#skyblue_row_eight_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.skyblue_row_eight_1').css("fill"));
		new Clipboard('.skyblue_row_eight_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#skyblue_row_eight_1').animate({'opacity':'1'});
		}, 2500);
	});$('#skyblue_row_eight_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#skyblue_row_eight_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.skyblue_row_eight_2').css("fill"));
		new Clipboard('.skyblue_row_eight_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#skyblue_row_eight_2').animate({'opacity':'1'});
		}, 2500);
	});$('#skyblue_row_eight_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#skyblue_row_eight_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.skyblue_row_eight_3').css("fill"));
		new Clipboard('.skyblue_row_eight_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#skyblue_row_eight_3').animate({'opacity':'1'});
		}, 2500);
	});$('#skyblue_row_eight_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#skyblue_row_eight_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.skyblue_row_eight_4').css("fill"));
		new Clipboard('.skyblue_row_eight_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#skyblue_row_eight_4').animate({'opacity':'1'});
		}, 2500);
	});$('#skyblue_row_eight_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#skyblue_row_eight_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.skyblue_row_eight_5').css("fill"));
		new Clipboard('.skyblue_row_eight_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#skyblue_row_eight_5').animate({'opacity':'1'});
		}, 2500);
	});$('#skyblue_row_nine_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#skyblue_row_nine_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.skyblue_row_nine_0').css("fill"));
		new Clipboard('.skyblue_row_nine_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#skyblue_row_nine_0').animate({'opacity':'1'});
		}, 2500);
	});$('#skyblue_row_nine_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#skyblue_row_nine_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.skyblue_row_nine_1').css("fill"));
		new Clipboard('.skyblue_row_nine_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#skyblue_row_nine_1').animate({'opacity':'1'});
		}, 2500);
	});$('#skyblue_row_nine_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#skyblue_row_nine_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.skyblue_row_nine_2').css("fill"));
		new Clipboard('.skyblue_row_nine_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#skyblue_row_nine_2').animate({'opacity':'1'});
		}, 2500);
	});$('#skyblue_row_nine_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#skyblue_row_nine_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.skyblue_row_nine_3').css("fill"));
		new Clipboard('.skyblue_row_nine_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#skyblue_row_nine_3').animate({'opacity':'1'});
		}, 2500);
	});$('#skyblue_row_nine_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#skyblue_row_nine_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.skyblue_row_nine_4').css("fill"));
		new Clipboard('.skyblue_row_nine_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#skyblue_row_nine_4').animate({'opacity':'1'});
		}, 2500);
	});$('#skyblue_row_nine_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#skyblue_row_nine_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.skyblue_row_nine_5').css("fill"));
		new Clipboard('.skyblue_row_nine_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#skyblue_row_nine_5').animate({'opacity':'1'});
		}, 2500);
	});$('#skyblue_row_ten_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#skyblue_row_ten_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.skyblue_row_ten_0').css("fill"));
		new Clipboard('.skyblue_row_ten_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#skyblue_row_ten_0').animate({'opacity':'1'});
		}, 2500);
	});$('#skyblue_row_ten_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#skyblue_row_ten_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.skyblue_row_ten_1').css("fill"));
		new Clipboard('.skyblue_row_ten_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#skyblue_row_ten_1').animate({'opacity':'1'});
		}, 2500);
	});$('#skyblue_row_ten_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#skyblue_row_ten_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.skyblue_row_ten_2').css("fill"));
		new Clipboard('.skyblue_row_ten_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#skyblue_row_ten_2').animate({'opacity':'1'});
		}, 2500);
	});$('#skyblue_row_ten_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#skyblue_row_ten_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.skyblue_row_ten_3').css("fill"));
		new Clipboard('.skyblue_row_ten_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#skyblue_row_ten_3').animate({'opacity':'1'});
		}, 2500);
	});$('#skyblue_row_ten_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#skyblue_row_ten_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.skyblue_row_ten_4').css("fill"));
		new Clipboard('.skyblue_row_ten_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#skyblue_row_ten_4').animate({'opacity':'1'});
		}, 2500);
	});$('#skyblue_row_ten_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#skyblue_row_ten_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.skyblue_row_ten_5').css("fill"));
		new Clipboard('.skyblue_row_ten_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#skyblue_row_ten_5').animate({'opacity':'1'});
		}, 2500);
	});
	$('#bluegreen_row_one_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_one_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_one_0').css("fill"));
			new Clipboard('.bluegreen_row_one_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_one_0').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_one_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_one_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_one_1').css("fill"));
			new Clipboard('.bluegreen_row_one_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_one_1').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_one_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_one_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_one_2').css("fill"));
			new Clipboard('.bluegreen_row_one_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_one_2').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_one_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_one_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_one_3').css("fill"));
			new Clipboard('.bluegreen_row_one_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_one_3').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_one_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_one_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_one_4').css("fill"));
			new Clipboard('.bluegreen_row_one_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_one_4').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_one_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_one_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_one_5').css("fill"));
			new Clipboard('.bluegreen_row_one_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_one_5').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_two_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_two_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_two_0').css("fill"));
			new Clipboard('.bluegreen_row_two_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_two_0').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_two_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_two_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_two_1').css("fill"));
			new Clipboard('.bluegreen_row_two_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_two_1').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_two_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_two_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_two_2').css("fill"));
			new Clipboard('.bluegreen_row_two_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_two_2').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_two_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_two_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_two_3').css("fill"));
			new Clipboard('.bluegreen_row_two_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_two_3').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_two_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_two_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_two_4').css("fill"));
			new Clipboard('.bluegreen_row_two_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_two_4').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_two_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_two_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_two_5').css("fill"));
			new Clipboard('.bluegreen_row_two_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_two_5').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_three_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_three_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_three_0').css("fill"));
			new Clipboard('.bluegreen_row_three_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_three_0').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_three_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_three_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_three_1').css("fill"));
			new Clipboard('.bluegreen_row_three_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_three_1').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_three_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_three_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_three_2').css("fill"));
			new Clipboard('.bluegreen_row_three_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_three_2').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_three_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_three_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_three_3').css("fill"));
			new Clipboard('.bluegreen_row_three_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_three_3').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_three_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_three_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_three_4').css("fill"));
			new Clipboard('.bluegreen_row_three_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_three_4').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_three_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_three_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_three_5').css("fill"));
			new Clipboard('.bluegreen_row_three_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_three_5').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_four_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_four_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_four_0').css("fill"));
			new Clipboard('.bluegreen_row_four_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_four_0').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_four_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_four_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_four_1').css("fill"));
			new Clipboard('.bluegreen_row_four_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_four_1').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_four_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_four_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_four_2').css("fill"));
			new Clipboard('.bluegreen_row_four_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_four_2').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_four_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_four_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_four_3').css("fill"));
			new Clipboard('.bluegreen_row_four_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_four_3').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_four_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_four_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_four_4').css("fill"));
			new Clipboard('.bluegreen_row_four_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_four_4').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_four_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_four_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_four_5').css("fill"));
			new Clipboard('.bluegreen_row_four_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_four_5').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_five_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_five_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_five_0').css("fill"));
			new Clipboard('.bluegreen_row_five_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_five_0').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_five_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_five_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_five_1').css("fill"));
			new Clipboard('.bluegreen_row_five_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_five_1').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_five_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_five_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_five_2').css("fill"));
			new Clipboard('.bluegreen_row_five_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_five_2').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_five_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_five_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_five_3').css("fill"));
			new Clipboard('.bluegreen_row_five_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_five_3').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_five_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_five_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_five_4').css("fill"));
			new Clipboard('.bluegreen_row_five_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_five_4').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_five_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_five_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_five_5').css("fill"));
			new Clipboard('.bluegreen_row_five_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_five_5').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_six_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_six_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_six_0').css("fill"));
			new Clipboard('.bluegreen_row_six_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_six_0').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_six_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_six_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_six_1').css("fill"));
			new Clipboard('.bluegreen_row_six_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_six_1').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_six_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_six_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_six_2').css("fill"));
			new Clipboard('.bluegreen_row_six_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_six_2').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_six_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_six_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_six_3').css("fill"));
			new Clipboard('.bluegreen_row_six_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_six_3').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_six_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_six_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_six_4').css("fill"));
			new Clipboard('.bluegreen_row_six_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_six_4').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_six_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#bluegreen_row_six_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.bluegreen_row_six_5').css("fill"));
			new Clipboard('.bluegreen_row_six_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#bluegreen_row_six_5').animate({'opacity':'1'});
			}, 2500);
		});$('#bluegreen_row_seven_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#bluegreen_row_seven_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.bluegreen_row_seven_0').css("fill"));
		new Clipboard('.bluegreen_row_seven_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#bluegreen_row_seven_0').animate({'opacity':'1'});
		}, 2500);
	});$('#bluegreen_row_seven_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#bluegreen_row_seven_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.bluegreen_row_seven_1').css("fill"));
		new Clipboard('.bluegreen_row_seven_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#bluegreen_row_seven_1').animate({'opacity':'1'});
		}, 2500);
	});$('#bluegreen_row_seven_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#bluegreen_row_seven_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.bluegreen_row_seven_2').css("fill"));
		new Clipboard('.bluegreen_row_seven_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#bluegreen_row_seven_2').animate({'opacity':'1'});
		}, 2500);
	});$('#bluegreen_row_seven_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#bluegreen_row_seven_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.bluegreen_row_seven_3').css("fill"));
		new Clipboard('.bluegreen_row_seven_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#bluegreen_row_seven_3').animate({'opacity':'1'});
		}, 2500);
	});$('#bluegreen_row_seven_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#bluegreen_row_seven_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.bluegreen_row_seven_4').css("fill"));
		new Clipboard('.bluegreen_row_seven_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#bluegreen_row_seven_4').animate({'opacity':'1'});
		}, 2500);
	});$('#bluegreen_row_seven_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#bluegreen_row_seven_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.bluegreen_row_seven_5').css("fill"));
		new Clipboard('.bluegreen_row_seven_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#bluegreen_row_seven_5').animate({'opacity':'1'});
		}, 2500);
	});$('#bluegreen_row_eight_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#bluegreen_row_eight_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.bluegreen_row_eight_0').css("fill"));
		new Clipboard('.bluegreen_row_eight_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#bluegreen_row_eight_0').animate({'opacity':'1'});
		}, 2500);
	});$('#bluegreen_row_eight_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#bluegreen_row_eight_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.bluegreen_row_eight_1').css("fill"));
		new Clipboard('.bluegreen_row_eight_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#bluegreen_row_eight_1').animate({'opacity':'1'});
		}, 2500);
	});$('#bluegreen_row_eight_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#bluegreen_row_eight_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.bluegreen_row_eight_2').css("fill"));
		new Clipboard('.bluegreen_row_eight_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#bluegreen_row_eight_2').animate({'opacity':'1'});
		}, 2500);
	});$('#bluegreen_row_eight_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#bluegreen_row_eight_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.bluegreen_row_eight_3').css("fill"));
		new Clipboard('.bluegreen_row_eight_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#bluegreen_row_eight_3').animate({'opacity':'1'});
		}, 2500);
	});$('#bluegreen_row_eight_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#bluegreen_row_eight_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.bluegreen_row_eight_4').css("fill"));
		new Clipboard('.bluegreen_row_eight_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#bluegreen_row_eight_4').animate({'opacity':'1'});
		}, 2500);
	});$('#bluegreen_row_eight_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#bluegreen_row_eight_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.bluegreen_row_eight_5').css("fill"));
		new Clipboard('.bluegreen_row_eight_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#bluegreen_row_eight_5').animate({'opacity':'1'});
		}, 2500);
	});$('#bluegreen_row_nine_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#bluegreen_row_nine_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.bluegreen_row_nine_0').css("fill"));
		new Clipboard('.bluegreen_row_nine_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#bluegreen_row_nine_0').animate({'opacity':'1'});
		}, 2500);
	});$('#bluegreen_row_nine_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#bluegreen_row_nine_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.bluegreen_row_nine_1').css("fill"));
		new Clipboard('.bluegreen_row_nine_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#bluegreen_row_nine_1').animate({'opacity':'1'});
		}, 2500);
	});$('#bluegreen_row_nine_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#bluegreen_row_nine_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.bluegreen_row_nine_2').css("fill"));
		new Clipboard('.bluegreen_row_nine_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#bluegreen_row_nine_2').animate({'opacity':'1'});
		}, 2500);
	});$('#bluegreen_row_nine_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#bluegreen_row_nine_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.bluegreen_row_nine_3').css("fill"));
		new Clipboard('.bluegreen_row_nine_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#bluegreen_row_nine_3').animate({'opacity':'1'});
		}, 2500);
	});$('#bluegreen_row_nine_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#bluegreen_row_nine_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.bluegreen_row_nine_4').css("fill"));
		new Clipboard('.bluegreen_row_nine_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#bluegreen_row_nine_4').animate({'opacity':'1'});
		}, 2500);
	});$('#bluegreen_row_nine_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#bluegreen_row_nine_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.bluegreen_row_nine_5').css("fill"));
		new Clipboard('.bluegreen_row_nine_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#bluegreen_row_nine_5').animate({'opacity':'1'});
		}, 2500);
	});$('#bluegreen_row_ten_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#bluegreen_row_ten_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.bluegreen_row_ten_0').css("fill"));
		new Clipboard('.bluegreen_row_ten_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#bluegreen_row_ten_0').animate({'opacity':'1'});
		}, 2500);
	});$('#bluegreen_row_ten_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#bluegreen_row_ten_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.bluegreen_row_ten_1').css("fill"));
		new Clipboard('.bluegreen_row_ten_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#bluegreen_row_ten_1').animate({'opacity':'1'});
		}, 2500);
	});$('#bluegreen_row_ten_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#bluegreen_row_ten_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.bluegreen_row_ten_2').css("fill"));
		new Clipboard('.bluegreen_row_ten_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#bluegreen_row_ten_2').animate({'opacity':'1'});
		}, 2500);
	});$('#bluegreen_row_ten_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#bluegreen_row_ten_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.bluegreen_row_ten_3').css("fill"));
		new Clipboard('.bluegreen_row_ten_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#bluegreen_row_ten_3').animate({'opacity':'1'});
		}, 2500);
	});$('#bluegreen_row_ten_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#bluegreen_row_ten_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.bluegreen_row_ten_4').css("fill"));
		new Clipboard('.bluegreen_row_ten_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#bluegreen_row_ten_4').animate({'opacity':'1'});
		}, 2500);
	});$('#bluegreen_row_ten_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#bluegreen_row_ten_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.bluegreen_row_ten_5').css("fill"));
		new Clipboard('.bluegreen_row_ten_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#bluegreen_row_ten_5').animate({'opacity':'1'});
		}, 2500);
	});
	$('#darkturq_row_one_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_one_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_one_0').css("fill"));
			new Clipboard('.darkturq_row_one_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_one_0').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_one_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_one_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_one_1').css("fill"));
			new Clipboard('.darkturq_row_one_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_one_1').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_one_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_one_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_one_2').css("fill"));
			new Clipboard('.darkturq_row_one_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_one_2').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_one_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_one_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_one_3').css("fill"));
			new Clipboard('.darkturq_row_one_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_one_3').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_one_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_one_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_one_4').css("fill"));
			new Clipboard('.darkturq_row_one_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_one_4').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_one_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_one_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_one_5').css("fill"));
			new Clipboard('.darkturq_row_one_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_one_5').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_two_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_two_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_two_0').css("fill"));
			new Clipboard('.darkturq_row_two_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_two_0').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_two_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_two_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_two_1').css("fill"));
			new Clipboard('.darkturq_row_two_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_two_1').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_two_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_two_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_two_2').css("fill"));
			new Clipboard('.darkturq_row_two_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_two_2').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_two_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_two_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_two_3').css("fill"));
			new Clipboard('.darkturq_row_two_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_two_3').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_two_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_two_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_two_4').css("fill"));
			new Clipboard('.darkturq_row_two_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_two_4').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_two_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_two_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_two_5').css("fill"));
			new Clipboard('.darkturq_row_two_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_two_5').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_three_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_three_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_three_0').css("fill"));
			new Clipboard('.darkturq_row_three_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_three_0').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_three_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_three_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_three_1').css("fill"));
			new Clipboard('.darkturq_row_three_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_three_1').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_three_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_three_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_three_2').css("fill"));
			new Clipboard('.darkturq_row_three_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_three_2').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_three_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_three_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_three_3').css("fill"));
			new Clipboard('.darkturq_row_three_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_three_3').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_three_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_three_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_three_4').css("fill"));
			new Clipboard('.darkturq_row_three_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_three_4').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_three_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_three_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_three_5').css("fill"));
			new Clipboard('.darkturq_row_three_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_three_5').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_four_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_four_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_four_0').css("fill"));
			new Clipboard('.darkturq_row_four_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_four_0').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_four_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_four_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_four_1').css("fill"));
			new Clipboard('.darkturq_row_four_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_four_1').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_four_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_four_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_four_2').css("fill"));
			new Clipboard('.darkturq_row_four_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_four_2').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_four_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_four_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_four_3').css("fill"));
			new Clipboard('.darkturq_row_four_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_four_3').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_four_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_four_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_four_4').css("fill"));
			new Clipboard('.darkturq_row_four_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_four_4').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_four_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_four_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_four_5').css("fill"));
			new Clipboard('.darkturq_row_four_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_four_5').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_five_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_five_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_five_0').css("fill"));
			new Clipboard('.darkturq_row_five_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_five_0').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_five_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_five_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_five_1').css("fill"));
			new Clipboard('.darkturq_row_five_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_five_1').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_five_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_five_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_five_2').css("fill"));
			new Clipboard('.darkturq_row_five_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_five_2').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_five_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_five_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_five_3').css("fill"));
			new Clipboard('.darkturq_row_five_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_five_3').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_five_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_five_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_five_4').css("fill"));
			new Clipboard('.darkturq_row_five_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_five_4').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_five_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_five_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_five_5').css("fill"));
			new Clipboard('.darkturq_row_five_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_five_5').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_six_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_six_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_six_0').css("fill"));
			new Clipboard('.darkturq_row_six_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_six_0').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_six_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_six_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_six_1').css("fill"));
			new Clipboard('.darkturq_row_six_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_six_1').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_six_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_six_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_six_2').css("fill"));
			new Clipboard('.darkturq_row_six_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_six_2').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_six_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_six_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_six_3').css("fill"));
			new Clipboard('.darkturq_row_six_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_six_3').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_six_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_six_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_six_4').css("fill"));
			new Clipboard('.darkturq_row_six_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_six_4').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_six_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#darkturq_row_six_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.darkturq_row_six_5').css("fill"));
			new Clipboard('.darkturq_row_six_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#darkturq_row_six_5').animate({'opacity':'1'});
			}, 2500);
		});$('#darkturq_row_seven_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkturq_row_seven_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkturq_row_seven_0').css("fill"));
		new Clipboard('.darkturq_row_seven_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkturq_row_seven_0').animate({'opacity':'1'});
		}, 2500);
	});$('#darkturq_row_seven_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkturq_row_seven_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkturq_row_seven_1').css("fill"));
		new Clipboard('.darkturq_row_seven_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkturq_row_seven_1').animate({'opacity':'1'});
		}, 2500);
	});$('#darkturq_row_seven_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkturq_row_seven_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkturq_row_seven_2').css("fill"));
		new Clipboard('.darkturq_row_seven_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkturq_row_seven_2').animate({'opacity':'1'});
		}, 2500);
	});$('#darkturq_row_seven_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkturq_row_seven_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkturq_row_seven_3').css("fill"));
		new Clipboard('.darkturq_row_seven_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkturq_row_seven_3').animate({'opacity':'1'});
		}, 2500);
	});$('#darkturq_row_seven_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkturq_row_seven_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkturq_row_seven_4').css("fill"));
		new Clipboard('.darkturq_row_seven_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkturq_row_seven_4').animate({'opacity':'1'});
		}, 2500);
	});$('#darkturq_row_seven_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkturq_row_seven_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkturq_row_seven_5').css("fill"));
		new Clipboard('.darkturq_row_seven_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkturq_row_seven_5').animate({'opacity':'1'});
		}, 2500);
	});$('#darkturq_row_eight_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkturq_row_eight_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkturq_row_eight_0').css("fill"));
		new Clipboard('.darkturq_row_eight_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkturq_row_eight_0').animate({'opacity':'1'});
		}, 2500);
	});$('#darkturq_row_eight_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkturq_row_eight_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkturq_row_eight_1').css("fill"));
		new Clipboard('.darkturq_row_eight_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkturq_row_eight_1').animate({'opacity':'1'});
		}, 2500);
	});$('#darkturq_row_eight_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkturq_row_eight_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkturq_row_eight_2').css("fill"));
		new Clipboard('.darkturq_row_eight_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkturq_row_eight_2').animate({'opacity':'1'});
		}, 2500);
	});$('#darkturq_row_eight_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkturq_row_eight_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkturq_row_eight_3').css("fill"));
		new Clipboard('.darkturq_row_eight_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkturq_row_eight_3').animate({'opacity':'1'});
		}, 2500);
	});$('#darkturq_row_eight_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkturq_row_eight_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkturq_row_eight_4').css("fill"));
		new Clipboard('.darkturq_row_eight_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkturq_row_eight_4').animate({'opacity':'1'});
		}, 2500);
	});$('#darkturq_row_eight_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkturq_row_eight_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkturq_row_eight_5').css("fill"));
		new Clipboard('.darkturq_row_eight_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkturq_row_eight_5').animate({'opacity':'1'});
		}, 2500);
	});$('#darkturq_row_nine_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkturq_row_nine_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkturq_row_nine_0').css("fill"));
		new Clipboard('.darkturq_row_nine_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkturq_row_nine_0').animate({'opacity':'1'});
		}, 2500);
	});$('#darkturq_row_nine_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkturq_row_nine_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkturq_row_nine_1').css("fill"));
		new Clipboard('.darkturq_row_nine_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkturq_row_nine_1').animate({'opacity':'1'});
		}, 2500);
	});$('#darkturq_row_nine_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkturq_row_nine_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkturq_row_nine_2').css("fill"));
		new Clipboard('.darkturq_row_nine_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkturq_row_nine_2').animate({'opacity':'1'});
		}, 2500);
	});$('#darkturq_row_nine_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkturq_row_nine_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkturq_row_nine_3').css("fill"));
		new Clipboard('.darkturq_row_nine_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkturq_row_nine_3').animate({'opacity':'1'});
		}, 2500);
	});$('#darkturq_row_nine_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkturq_row_nine_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkturq_row_nine_4').css("fill"));
		new Clipboard('.darkturq_row_nine_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkturq_row_nine_4').animate({'opacity':'1'});
		}, 2500);
	});$('#darkturq_row_nine_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkturq_row_nine_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkturq_row_nine_5').css("fill"));
		new Clipboard('.darkturq_row_nine_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkturq_row_nine_5').animate({'opacity':'1'});
		}, 2500);
	});$('#darkturq_row_ten_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkturq_row_ten_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkturq_row_ten_0').css("fill"));
		new Clipboard('.darkturq_row_ten_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkturq_row_ten_0').animate({'opacity':'1'});
		}, 2500);
	});$('#darkturq_row_ten_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkturq_row_ten_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkturq_row_ten_1').css("fill"));
		new Clipboard('.darkturq_row_ten_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkturq_row_ten_1').animate({'opacity':'1'});
		}, 2500);
	});$('#darkturq_row_ten_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkturq_row_ten_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkturq_row_ten_2').css("fill"));
		new Clipboard('.darkturq_row_ten_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkturq_row_ten_2').animate({'opacity':'1'});
		}, 2500);
	});$('#darkturq_row_ten_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkturq_row_ten_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkturq_row_ten_3').css("fill"));
		new Clipboard('.darkturq_row_ten_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkturq_row_ten_3').animate({'opacity':'1'});
		}, 2500);
	});$('#darkturq_row_ten_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkturq_row_ten_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkturq_row_ten_4').css("fill"));
		new Clipboard('.darkturq_row_ten_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkturq_row_ten_4').animate({'opacity':'1'});
		}, 2500);
	});$('#darkturq_row_ten_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#darkturq_row_ten_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.darkturq_row_ten_5').css("fill"));
		new Clipboard('.darkturq_row_ten_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#darkturq_row_ten_5').animate({'opacity':'1'});
		}, 2500);
	});
	$('#lightturq_row_one_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_one_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_one_0').css("fill"));
			new Clipboard('.lightturq_row_one_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_one_0').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_one_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_one_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_one_1').css("fill"));
			new Clipboard('.lightturq_row_one_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_one_1').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_one_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_one_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_one_2').css("fill"));
			new Clipboard('.lightturq_row_one_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_one_2').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_one_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_one_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_one_3').css("fill"));
			new Clipboard('.lightturq_row_one_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_one_3').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_one_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_one_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_one_4').css("fill"));
			new Clipboard('.lightturq_row_one_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_one_4').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_one_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_one_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_one_5').css("fill"));
			new Clipboard('.lightturq_row_one_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_one_5').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_two_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_two_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_two_0').css("fill"));
			new Clipboard('.lightturq_row_two_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_two_0').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_two_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_two_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_two_1').css("fill"));
			new Clipboard('.lightturq_row_two_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_two_1').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_two_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_two_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_two_2').css("fill"));
			new Clipboard('.lightturq_row_two_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_two_2').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_two_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_two_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_two_3').css("fill"));
			new Clipboard('.lightturq_row_two_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_two_3').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_two_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_two_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_two_4').css("fill"));
			new Clipboard('.lightturq_row_two_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_two_4').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_two_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_two_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_two_5').css("fill"));
			new Clipboard('.lightturq_row_two_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_two_5').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_three_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_three_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_three_0').css("fill"));
			new Clipboard('.lightturq_row_three_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_three_0').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_three_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_three_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_three_1').css("fill"));
			new Clipboard('.lightturq_row_three_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_three_1').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_three_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_three_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_three_2').css("fill"));
			new Clipboard('.lightturq_row_three_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_three_2').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_three_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_three_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_three_3').css("fill"));
			new Clipboard('.lightturq_row_three_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_three_3').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_three_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_three_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_three_4').css("fill"));
			new Clipboard('.lightturq_row_three_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_three_4').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_three_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_three_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_three_5').css("fill"));
			new Clipboard('.lightturq_row_three_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_three_5').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_four_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_four_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_four_0').css("fill"));
			new Clipboard('.lightturq_row_four_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_four_0').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_four_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_four_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_four_1').css("fill"));
			new Clipboard('.lightturq_row_four_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_four_1').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_four_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_four_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_four_2').css("fill"));
			new Clipboard('.lightturq_row_four_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_four_2').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_four_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_four_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_four_3').css("fill"));
			new Clipboard('.lightturq_row_four_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_four_3').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_four_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_four_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_four_4').css("fill"));
			new Clipboard('.lightturq_row_four_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_four_4').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_four_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_four_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_four_5').css("fill"));
			new Clipboard('.lightturq_row_four_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_four_5').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_five_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_five_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_five_0').css("fill"));
			new Clipboard('.lightturq_row_five_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_five_0').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_five_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_five_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_five_1').css("fill"));
			new Clipboard('.lightturq_row_five_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_five_1').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_five_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_five_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_five_2').css("fill"));
			new Clipboard('.lightturq_row_five_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_five_2').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_five_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_five_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_five_3').css("fill"));
			new Clipboard('.lightturq_row_five_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_five_3').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_five_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_five_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_five_4').css("fill"));
			new Clipboard('.lightturq_row_five_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_five_4').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_five_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_five_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_five_5').css("fill"));
			new Clipboard('.lightturq_row_five_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_five_5').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_six_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_six_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_six_0').css("fill"));
			new Clipboard('.lightturq_row_six_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_six_0').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_six_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_six_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_six_1').css("fill"));
			new Clipboard('.lightturq_row_six_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_six_1').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_six_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_six_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_six_2').css("fill"));
			new Clipboard('.lightturq_row_six_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_six_2').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_six_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_six_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_six_3').css("fill"));
			new Clipboard('.lightturq_row_six_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_six_3').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_six_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_six_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_six_4').css("fill"));
			new Clipboard('.lightturq_row_six_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_six_4').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_six_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#lightturq_row_six_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.lightturq_row_six_5').css("fill"));
			new Clipboard('.lightturq_row_six_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#lightturq_row_six_5').animate({'opacity':'1'});
			}, 2500);
		});$('#lightturq_row_seven_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#lightturq_row_seven_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.lightturq_row_seven_0').css("fill"));
		new Clipboard('.lightturq_row_seven_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#lightturq_row_seven_0').animate({'opacity':'1'});
		}, 2500);
	});$('#lightturq_row_seven_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#lightturq_row_seven_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.lightturq_row_seven_1').css("fill"));
		new Clipboard('.lightturq_row_seven_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#lightturq_row_seven_1').animate({'opacity':'1'});
		}, 2500);
	});$('#lightturq_row_seven_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#lightturq_row_seven_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.lightturq_row_seven_2').css("fill"));
		new Clipboard('.lightturq_row_seven_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#lightturq_row_seven_2').animate({'opacity':'1'});
		}, 2500);
	});$('#lightturq_row_seven_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#lightturq_row_seven_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.lightturq_row_seven_3').css("fill"));
		new Clipboard('.lightturq_row_seven_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#lightturq_row_seven_3').animate({'opacity':'1'});
		}, 2500);
	});$('#lightturq_row_seven_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#lightturq_row_seven_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.lightturq_row_seven_4').css("fill"));
		new Clipboard('.lightturq_row_seven_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#lightturq_row_seven_4').animate({'opacity':'1'});
		}, 2500);
	});$('#lightturq_row_seven_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#lightturq_row_seven_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.lightturq_row_seven_5').css("fill"));
		new Clipboard('.lightturq_row_seven_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#lightturq_row_seven_5').animate({'opacity':'1'});
		}, 2500);
	});$('#lightturq_row_eight_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#lightturq_row_eight_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.lightturq_row_eight_0').css("fill"));
		new Clipboard('.lightturq_row_eight_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#lightturq_row_eight_0').animate({'opacity':'1'});
		}, 2500);
	});$('#lightturq_row_eight_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#lightturq_row_eight_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.lightturq_row_eight_1').css("fill"));
		new Clipboard('.lightturq_row_eight_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#lightturq_row_eight_1').animate({'opacity':'1'});
		}, 2500);
	});$('#lightturq_row_eight_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#lightturq_row_eight_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.lightturq_row_eight_2').css("fill"));
		new Clipboard('.lightturq_row_eight_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#lightturq_row_eight_2').animate({'opacity':'1'});
		}, 2500);
	});$('#lightturq_row_eight_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#lightturq_row_eight_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.lightturq_row_eight_3').css("fill"));
		new Clipboard('.lightturq_row_eight_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#lightturq_row_eight_3').animate({'opacity':'1'});
		}, 2500);
	});$('#lightturq_row_eight_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#lightturq_row_eight_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.lightturq_row_eight_4').css("fill"));
		new Clipboard('.lightturq_row_eight_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#lightturq_row_eight_4').animate({'opacity':'1'});
		}, 2500);
	});$('#lightturq_row_eight_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#lightturq_row_eight_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.lightturq_row_eight_5').css("fill"));
		new Clipboard('.lightturq_row_eight_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#lightturq_row_eight_5').animate({'opacity':'1'});
		}, 2500);
	});$('#lightturq_row_nine_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#lightturq_row_nine_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.lightturq_row_nine_0').css("fill"));
		new Clipboard('.lightturq_row_nine_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#lightturq_row_nine_0').animate({'opacity':'1'});
		}, 2500);
	});$('#lightturq_row_nine_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#lightturq_row_nine_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.lightturq_row_nine_1').css("fill"));
		new Clipboard('.lightturq_row_nine_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#lightturq_row_nine_1').animate({'opacity':'1'});
		}, 2500);
	});$('#lightturq_row_nine_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#lightturq_row_nine_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.lightturq_row_nine_2').css("fill"));
		new Clipboard('.lightturq_row_nine_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#lightturq_row_nine_2').animate({'opacity':'1'});
		}, 2500);
	});$('#lightturq_row_nine_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#lightturq_row_nine_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.lightturq_row_nine_3').css("fill"));
		new Clipboard('.lightturq_row_nine_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#lightturq_row_nine_3').animate({'opacity':'1'});
		}, 2500);
	});$('#lightturq_row_nine_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#lightturq_row_nine_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.lightturq_row_nine_4').css("fill"));
		new Clipboard('.lightturq_row_nine_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#lightturq_row_nine_4').animate({'opacity':'1'});
		}, 2500);
	});$('#lightturq_row_nine_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#lightturq_row_nine_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.lightturq_row_nine_5').css("fill"));
		new Clipboard('.lightturq_row_nine_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#lightturq_row_nine_5').animate({'opacity':'1'});
		}, 2500);
	});$('#lightturq_row_ten_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#lightturq_row_ten_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.lightturq_row_ten_0').css("fill"));
		new Clipboard('.lightturq_row_ten_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#lightturq_row_ten_0').animate({'opacity':'1'});
		}, 2500);
	});$('#lightturq_row_ten_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#lightturq_row_ten_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.lightturq_row_ten_1').css("fill"));
		new Clipboard('.lightturq_row_ten_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#lightturq_row_ten_1').animate({'opacity':'1'});
		}, 2500);
	});$('#lightturq_row_ten_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#lightturq_row_ten_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.lightturq_row_ten_2').css("fill"));
		new Clipboard('.lightturq_row_ten_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#lightturq_row_ten_2').animate({'opacity':'1'});
		}, 2500);
	});$('#lightturq_row_ten_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#lightturq_row_ten_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.lightturq_row_ten_3').css("fill"));
		new Clipboard('.lightturq_row_ten_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#lightturq_row_ten_3').animate({'opacity':'1'});
		}, 2500);
	});$('#lightturq_row_ten_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#lightturq_row_ten_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.lightturq_row_ten_4').css("fill"));
		new Clipboard('.lightturq_row_ten_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#lightturq_row_ten_4').animate({'opacity':'1'});
		}, 2500);
	});$('#lightturq_row_ten_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#lightturq_row_ten_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.lightturq_row_ten_5').css("fill"));
		new Clipboard('.lightturq_row_ten_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#lightturq_row_ten_5').animate({'opacity':'1'});
		}, 2500);
	});
	$('#greens_row_one_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_one_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_one_0').css("fill"));
			new Clipboard('.greens_row_one_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_one_0').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_one_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_one_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_one_1').css("fill"));
			new Clipboard('.greens_row_one_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_one_1').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_one_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_one_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_one_2').css("fill"));
			new Clipboard('.greens_row_one_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_one_2').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_one_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_one_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_one_3').css("fill"));
			new Clipboard('.greens_row_one_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_one_3').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_one_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_one_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_one_4').css("fill"));
			new Clipboard('.greens_row_one_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_one_4').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_one_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_one_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_one_5').css("fill"));
			new Clipboard('.greens_row_one_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_one_5').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_two_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_two_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_two_0').css("fill"));
			new Clipboard('.greens_row_two_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_two_0').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_two_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_two_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_two_1').css("fill"));
			new Clipboard('.greens_row_two_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_two_1').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_two_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_two_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_two_2').css("fill"));
			new Clipboard('.greens_row_two_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_two_2').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_two_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_two_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_two_3').css("fill"));
			new Clipboard('.greens_row_two_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_two_3').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_two_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_two_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_two_4').css("fill"));
			new Clipboard('.greens_row_two_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_two_4').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_two_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_two_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_two_5').css("fill"));
			new Clipboard('.greens_row_two_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_two_5').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_three_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_three_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_three_0').css("fill"));
			new Clipboard('.greens_row_three_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_three_0').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_three_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_three_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_three_1').css("fill"));
			new Clipboard('.greens_row_three_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_three_1').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_three_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_three_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_three_2').css("fill"));
			new Clipboard('.greens_row_three_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_three_2').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_three_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_three_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_three_3').css("fill"));
			new Clipboard('.greens_row_three_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_three_3').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_three_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_three_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_three_4').css("fill"));
			new Clipboard('.greens_row_three_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_three_4').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_three_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_three_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_three_5').css("fill"));
			new Clipboard('.greens_row_three_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_three_5').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_four_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_four_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_four_0').css("fill"));
			new Clipboard('.greens_row_four_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_four_0').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_four_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_four_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_four_1').css("fill"));
			new Clipboard('.greens_row_four_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_four_1').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_four_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_four_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_four_2').css("fill"));
			new Clipboard('.greens_row_four_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_four_2').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_four_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_four_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_four_3').css("fill"));
			new Clipboard('.greens_row_four_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_four_3').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_four_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_four_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_four_4').css("fill"));
			new Clipboard('.greens_row_four_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_four_4').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_four_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_four_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_four_5').css("fill"));
			new Clipboard('.greens_row_four_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_four_5').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_five_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_five_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_five_0').css("fill"));
			new Clipboard('.greens_row_five_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_five_0').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_five_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_five_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_five_1').css("fill"));
			new Clipboard('.greens_row_five_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_five_1').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_five_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_five_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_five_2').css("fill"));
			new Clipboard('.greens_row_five_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_five_2').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_five_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_five_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_five_3').css("fill"));
			new Clipboard('.greens_row_five_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_five_3').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_five_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_five_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_five_4').css("fill"));
			new Clipboard('.greens_row_five_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_five_4').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_five_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_five_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_five_5').css("fill"));
			new Clipboard('.greens_row_five_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_five_5').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_six_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_six_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_six_0').css("fill"));
			new Clipboard('.greens_row_six_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_six_0').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_six_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_six_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_six_1').css("fill"));
			new Clipboard('.greens_row_six_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_six_1').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_six_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_six_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_six_2').css("fill"));
			new Clipboard('.greens_row_six_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_six_2').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_six_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_six_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_six_3').css("fill"));
			new Clipboard('.greens_row_six_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_six_3').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_six_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_six_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_six_4').css("fill"));
			new Clipboard('.greens_row_six_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_six_4').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_six_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#greens_row_six_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.greens_row_six_5').css("fill"));
			new Clipboard('.greens_row_six_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#greens_row_six_5').animate({'opacity':'1'});
			}, 2500);
		});$('#greens_row_seven_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greens_row_seven_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greens_row_seven_0').css("fill"));
		new Clipboard('.greens_row_seven_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greens_row_seven_0').animate({'opacity':'1'});
		}, 2500);
	});$('#greens_row_seven_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greens_row_seven_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greens_row_seven_1').css("fill"));
		new Clipboard('.greens_row_seven_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greens_row_seven_1').animate({'opacity':'1'});
		}, 2500);
	});$('#greens_row_seven_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greens_row_seven_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greens_row_seven_2').css("fill"));
		new Clipboard('.greens_row_seven_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greens_row_seven_2').animate({'opacity':'1'});
		}, 2500);
	});$('#greens_row_seven_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greens_row_seven_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greens_row_seven_3').css("fill"));
		new Clipboard('.greens_row_seven_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greens_row_seven_3').animate({'opacity':'1'});
		}, 2500);
	});$('#greens_row_seven_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greens_row_seven_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greens_row_seven_4').css("fill"));
		new Clipboard('.greens_row_seven_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greens_row_seven_4').animate({'opacity':'1'});
		}, 2500);
	});$('#greens_row_seven_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greens_row_seven_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greens_row_seven_5').css("fill"));
		new Clipboard('.greens_row_seven_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greens_row_seven_5').animate({'opacity':'1'});
		}, 2500);
	});$('#greens_row_eight_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greens_row_eight_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greens_row_eight_0').css("fill"));
		new Clipboard('.greens_row_eight_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greens_row_eight_0').animate({'opacity':'1'});
		}, 2500);
	});$('#greens_row_eight_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greens_row_eight_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greens_row_eight_1').css("fill"));
		new Clipboard('.greens_row_eight_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greens_row_eight_1').animate({'opacity':'1'});
		}, 2500);
	});$('#greens_row_eight_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greens_row_eight_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greens_row_eight_2').css("fill"));
		new Clipboard('.greens_row_eight_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greens_row_eight_2').animate({'opacity':'1'});
		}, 2500);
	});$('#greens_row_eight_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greens_row_eight_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greens_row_eight_3').css("fill"));
		new Clipboard('.greens_row_eight_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greens_row_eight_3').animate({'opacity':'1'});
		}, 2500);
	});$('#greens_row_eight_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greens_row_eight_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greens_row_eight_4').css("fill"));
		new Clipboard('.greens_row_eight_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greens_row_eight_4').animate({'opacity':'1'});
		}, 2500);
	});$('#greens_row_eight_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greens_row_eight_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greens_row_eight_5').css("fill"));
		new Clipboard('.greens_row_eight_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greens_row_eight_5').animate({'opacity':'1'});
		}, 2500);
	});$('#greens_row_nine_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greens_row_nine_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greens_row_nine_0').css("fill"));
		new Clipboard('.greens_row_nine_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greens_row_nine_0').animate({'opacity':'1'});
		}, 2500);
	});$('#greens_row_nine_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greens_row_nine_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greens_row_nine_1').css("fill"));
		new Clipboard('.greens_row_nine_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greens_row_nine_1').animate({'opacity':'1'});
		}, 2500);
	});$('#greens_row_nine_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greens_row_nine_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greens_row_nine_2').css("fill"));
		new Clipboard('.greens_row_nine_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greens_row_nine_2').animate({'opacity':'1'});
		}, 2500);
	});$('#greens_row_nine_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greens_row_nine_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greens_row_nine_3').css("fill"));
		new Clipboard('.greens_row_nine_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greens_row_nine_3').animate({'opacity':'1'});
		}, 2500);
	});$('#greens_row_nine_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greens_row_nine_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greens_row_nine_4').css("fill"));
		new Clipboard('.greens_row_nine_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greens_row_nine_4').animate({'opacity':'1'});
		}, 2500);
	});$('#greens_row_nine_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greens_row_nine_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greens_row_nine_5').css("fill"));
		new Clipboard('.greens_row_nine_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greens_row_nine_5').animate({'opacity':'1'});
		}, 2500);
	});$('#greens_row_ten_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greens_row_ten_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greens_row_ten_0').css("fill"));
		new Clipboard('.greens_row_ten_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greens_row_ten_0').animate({'opacity':'1'});
		}, 2500);
	});$('#greens_row_ten_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greens_row_ten_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greens_row_ten_1').css("fill"));
		new Clipboard('.greens_row_ten_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greens_row_ten_1').animate({'opacity':'1'});
		}, 2500);
	});$('#greens_row_ten_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greens_row_ten_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greens_row_ten_2').css("fill"));
		new Clipboard('.greens_row_ten_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greens_row_ten_2').animate({'opacity':'1'});
		}, 2500);
	});$('#greens_row_ten_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greens_row_ten_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greens_row_ten_3').css("fill"));
		new Clipboard('.greens_row_ten_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greens_row_ten_3').animate({'opacity':'1'});
		}, 2500);
	});$('#greens_row_ten_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greens_row_ten_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greens_row_ten_4').css("fill"));
		new Clipboard('.greens_row_ten_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greens_row_ten_4').animate({'opacity':'1'});
		}, 2500);
	});$('#greens_row_ten_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#greens_row_ten_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.greens_row_ten_5').css("fill"));
		new Clipboard('.greens_row_ten_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#greens_row_ten_5').animate({'opacity':'1'});
		}, 2500);
	});
	$('#yellows_row_one_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_one_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_one_0').css("fill"));
			new Clipboard('.yellows_row_one_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_one_0').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_one_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_one_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_one_1').css("fill"));
			new Clipboard('.yellows_row_one_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_one_1').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_one_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_one_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_one_2').css("fill"));
			new Clipboard('.yellows_row_one_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_one_2').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_one_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_one_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_one_3').css("fill"));
			new Clipboard('.yellows_row_one_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_one_3').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_one_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_one_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_one_4').css("fill"));
			new Clipboard('.yellows_row_one_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_one_4').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_one_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_one_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_one_5').css("fill"));
			new Clipboard('.yellows_row_one_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_one_5').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_two_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_two_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_two_0').css("fill"));
			new Clipboard('.yellows_row_two_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_two_0').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_two_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_two_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_two_1').css("fill"));
			new Clipboard('.yellows_row_two_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_two_1').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_two_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_two_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_two_2').css("fill"));
			new Clipboard('.yellows_row_two_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_two_2').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_two_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_two_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_two_3').css("fill"));
			new Clipboard('.yellows_row_two_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_two_3').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_two_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_two_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_two_4').css("fill"));
			new Clipboard('.yellows_row_two_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_two_4').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_two_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_two_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_two_5').css("fill"));
			new Clipboard('.yellows_row_two_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_two_5').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_three_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_three_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_three_0').css("fill"));
			new Clipboard('.yellows_row_three_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_three_0').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_three_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_three_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_three_1').css("fill"));
			new Clipboard('.yellows_row_three_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_three_1').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_three_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_three_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_three_2').css("fill"));
			new Clipboard('.yellows_row_three_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_three_2').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_three_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_three_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_three_3').css("fill"));
			new Clipboard('.yellows_row_three_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_three_3').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_three_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_three_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_three_4').css("fill"));
			new Clipboard('.yellows_row_three_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_three_4').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_three_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_three_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_three_5').css("fill"));
			new Clipboard('.yellows_row_three_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_three_5').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_four_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_four_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_four_0').css("fill"));
			new Clipboard('.yellows_row_four_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_four_0').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_four_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_four_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_four_1').css("fill"));
			new Clipboard('.yellows_row_four_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_four_1').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_four_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_four_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_four_2').css("fill"));
			new Clipboard('.yellows_row_four_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_four_2').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_four_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_four_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_four_3').css("fill"));
			new Clipboard('.yellows_row_four_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_four_3').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_four_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_four_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_four_4').css("fill"));
			new Clipboard('.yellows_row_four_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_four_4').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_four_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_four_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_four_5').css("fill"));
			new Clipboard('.yellows_row_four_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_four_5').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_five_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_five_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_five_0').css("fill"));
			new Clipboard('.yellows_row_five_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_five_0').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_five_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_five_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_five_1').css("fill"));
			new Clipboard('.yellows_row_five_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_five_1').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_five_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_five_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_five_2').css("fill"));
			new Clipboard('.yellows_row_five_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_five_2').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_five_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_five_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_five_3').css("fill"));
			new Clipboard('.yellows_row_five_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_five_3').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_five_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_five_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_five_4').css("fill"));
			new Clipboard('.yellows_row_five_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_five_4').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_five_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_five_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_five_5').css("fill"));
			new Clipboard('.yellows_row_five_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_five_5').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_six_0').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_six_0').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_six_0').css("fill"));
			new Clipboard('.yellows_row_six_0', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_six_0').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_six_1').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_six_1').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_six_1').css("fill"));
			new Clipboard('.yellows_row_six_1', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_six_1').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_six_2').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_six_2').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_six_2').css("fill"));
			new Clipboard('.yellows_row_six_2', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_six_2').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_six_3').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_six_3').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_six_3').css("fill"));
			new Clipboard('.yellows_row_six_3', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_six_3').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_six_4').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_six_4').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_six_4').css("fill"));
			new Clipboard('.yellows_row_six_4', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_six_4').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_six_5').click(function() {
			$('.copied').css({'left':'0vw'});
			$('#yellows_row_six_5').animate({'opacity':'0.1'});
			var scrollY = window.pageYOffset + 'px'
			$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
			$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
			var hexcode = rgb2hex($('.yellows_row_six_5').css("fill"));
			new Clipboard('.yellows_row_six_5', {
			    text: function(trigger) {
			        return hexcode.toUpperCase();
			    }
			});
			setTimeout(function () {
				$('.copied').animate({'opacity':'0'}, 1000);
			}, 200);
			setTimeout(function () {
				$('.copied').css({'left':'-200vw'});
			}, 1800);
			setTimeout(function () {
				$('.copied').css({'opacity':'1'});
				$('#yellows_row_six_5').animate({'opacity':'1'});
			}, 2500);
		});$('#yellows_row_seven_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#yellows_row_seven_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.yellows_row_seven_0').css("fill"));
		new Clipboard('.yellows_row_seven_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#yellows_row_seven_0').animate({'opacity':'1'});
		}, 2500);
	});$('#yellows_row_seven_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#yellows_row_seven_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.yellows_row_seven_1').css("fill"));
		new Clipboard('.yellows_row_seven_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#yellows_row_seven_1').animate({'opacity':'1'});
		}, 2500);
	});$('#yellows_row_seven_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#yellows_row_seven_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.yellows_row_seven_2').css("fill"));
		new Clipboard('.yellows_row_seven_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#yellows_row_seven_2').animate({'opacity':'1'});
		}, 2500);
	});$('#yellows_row_seven_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#yellows_row_seven_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.yellows_row_seven_3').css("fill"));
		new Clipboard('.yellows_row_seven_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#yellows_row_seven_3').animate({'opacity':'1'});
		}, 2500);
	});$('#yellows_row_seven_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#yellows_row_seven_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.yellows_row_seven_4').css("fill"));
		new Clipboard('.yellows_row_seven_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#yellows_row_seven_4').animate({'opacity':'1'});
		}, 2500);
	});$('#yellows_row_seven_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#yellows_row_seven_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.yellows_row_seven_5').css("fill"));
		new Clipboard('.yellows_row_seven_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#yellows_row_seven_5').animate({'opacity':'1'});
		}, 2500);
	});$('#yellows_row_eight_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#yellows_row_eight_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.yellows_row_eight_0').css("fill"));
		new Clipboard('.yellows_row_eight_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#yellows_row_eight_0').animate({'opacity':'1'});
		}, 2500);
	});$('#yellows_row_eight_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#yellows_row_eight_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.yellows_row_eight_1').css("fill"));
		new Clipboard('.yellows_row_eight_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#yellows_row_eight_1').animate({'opacity':'1'});
		}, 2500);
	});$('#yellows_row_eight_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#yellows_row_eight_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.yellows_row_eight_2').css("fill"));
		new Clipboard('.yellows_row_eight_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#yellows_row_eight_2').animate({'opacity':'1'});
		}, 2500);
	});$('#yellows_row_eight_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#yellows_row_eight_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.yellows_row_eight_3').css("fill"));
		new Clipboard('.yellows_row_eight_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#yellows_row_eight_3').animate({'opacity':'1'});
		}, 2500);
	});$('#yellows_row_eight_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#yellows_row_eight_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.yellows_row_eight_4').css("fill"));
		new Clipboard('.yellows_row_eight_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#yellows_row_eight_4').animate({'opacity':'1'});
		}, 2500);
	});$('#yellows_row_eight_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#yellows_row_eight_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.yellows_row_eight_5').css("fill"));
		new Clipboard('.yellows_row_eight_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#yellows_row_eight_5').animate({'opacity':'1'});
		}, 2500);
	});$('#yellows_row_nine_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#yellows_row_nine_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.yellows_row_nine_0').css("fill"));
		new Clipboard('.yellows_row_nine_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#yellows_row_nine_0').animate({'opacity':'1'});
		}, 2500);
	});$('#yellows_row_nine_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#yellows_row_nine_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.yellows_row_nine_1').css("fill"));
		new Clipboard('.yellows_row_nine_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#yellows_row_nine_1').animate({'opacity':'1'});
		}, 2500);
	});$('#yellows_row_nine_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#yellows_row_nine_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.yellows_row_nine_2').css("fill"));
		new Clipboard('.yellows_row_nine_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#yellows_row_nine_2').animate({'opacity':'1'});
		}, 2500);
	});$('#yellows_row_nine_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#yellows_row_nine_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.yellows_row_nine_3').css("fill"));
		new Clipboard('.yellows_row_nine_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#yellows_row_nine_3').animate({'opacity':'1'});
		}, 2500);
	});$('#yellows_row_nine_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#yellows_row_nine_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.yellows_row_nine_4').css("fill"));
		new Clipboard('.yellows_row_nine_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#yellows_row_nine_4').animate({'opacity':'1'});
		}, 2500);
	});$('#yellows_row_nine_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#yellows_row_nine_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.yellows_row_nine_5').css("fill"));
		new Clipboard('.yellows_row_nine_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#yellows_row_nine_5').animate({'opacity':'1'});
		}, 2500);
	});$('#yellows_row_ten_0').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#yellows_row_ten_0').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.yellows_row_ten_0').css("fill"));
		new Clipboard('.yellows_row_ten_0', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#yellows_row_ten_0').animate({'opacity':'1'});
		}, 2500);
	});$('#yellows_row_ten_1').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#yellows_row_ten_1').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.yellows_row_ten_1').css("fill"));
		new Clipboard('.yellows_row_ten_1', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#yellows_row_ten_1').animate({'opacity':'1'});
		}, 2500);
	});$('#yellows_row_ten_2').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#yellows_row_ten_2').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.yellows_row_ten_2').css("fill"));
		new Clipboard('.yellows_row_ten_2', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#yellows_row_ten_2').animate({'opacity':'1'});
		}, 2500);
	});$('#yellows_row_ten_3').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#yellows_row_ten_3').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.yellows_row_ten_3').css("fill"));
		new Clipboard('.yellows_row_ten_3', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#yellows_row_ten_3').animate({'opacity':'1'});
		}, 2500);
	});$('#yellows_row_ten_4').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#yellows_row_ten_4').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.yellows_row_ten_4').css("fill"));
		new Clipboard('.yellows_row_ten_4', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#yellows_row_ten_4').animate({'opacity':'1'});
		}, 2500);
	});$('#yellows_row_ten_5').click(function() {
		$('.copied').css({'left':'0vw'});
		$('#yellows_row_ten_5').animate({'opacity':'0.1'});
		var scrollY = window.pageYOffset + 'px'
		$('.pt_sans_giant').css({'transform':'translateY(' + scrollY + ')'})
		$('.pt_sans_giant-mb').css({'transform':'translateY(' + scrollY + ')'})
		var hexcode = rgb2hex($('.yellows_row_ten_5').css("fill"));
		new Clipboard('.yellows_row_ten_5', {
			text: function(trigger) {
				return hexcode.toUpperCase();
			}
		});
		setTimeout(function () {
			$('.copied').animate({'opacity':'0'}, 1000);
		}, 200);
		setTimeout(function () {
			$('.copied').css({'left':'-200vw'});
		}, 1800);
		setTimeout(function () {
			$('.copied').css({'opacity':'1'});
			$('#yellows_row_ten_5').animate({'opacity':'1'});
		}, 2500);
	});

});
