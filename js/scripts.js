$(window).scroll(scrolling);
var viewed = false;

function isScrolledIntoView(elem) {
	var docViewTop = $(window).scrollTop();
	var docViewBottom = docViewTop + $(window).height();

	var elemTop = $(elem).offset().top;
	var elemBottom = elemTop + $(elem).height();

	return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function scrolling() {
	if (isScrolledIntoView($(".numbers")) && !viewed) {
		viewed = true;

		$('.bigNumber').each(function () {
			$(this).prop('Counter', 0).animate({
				Counter: $(this).text()
			}, {
				duration: 2000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		});


	}
}


$(window).load(function () {

	$('.nav_slide_button').click(function () {
		$('.pull').slideToggle();
	});

});

$(function () {

	$('a[href*=#]:not([href=#])').click(function () {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});

});

document.querySelector("#nav-toggle").addEventListener("click", function () {
	this.classList.toggle("active");
});


$(document).ready(function () {
	if (Modernizr.touch) {
		$(".close-overlay").removeClass("hidden");
		$(".img").click(function (e) {
			if (!$(this).hasClass("hover")) {
				$(this).addClass("hover");
			}
		});
		$(".close-overlay").click(function (e) {
			e.preventDefault();
			e.stopPropagation();
			if ($(this).closest(".img").hasClass("hover")) {
				$(this).closest(".img").removeClass("hover");
			}
		});
	} else {
		$(".img").mouseenter(function () {
			$(this).addClass("hover");
		})
			.mouseleave(function () {
				$(this).removeClass("hover");
			});
	}
});

