(function() {
	// Check for phones
	var mobileCheck;
	if (/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		mobileCheck = true;
	} else {
		mobileCheck = false;
	};

	$(function() {
		setTimeout(function() {
			$('.loading-screen').hide(0);
		},1400);
			var slider = $('.items-full-slider');
			setTimeout(function() {
				slider.owlCarousel({
					items: 1,
					nav: true,
					loop: true,
					autoplayTimeout: 5000,
					navText: [
						"<i class='fa fa-angle-left'></i>",
						"<i class='fa fa-angle-right'></i>"
					]
				});
			},500);
		// });

		setTimeout(function() {
			$('.pool-gallery').owlCarousel({
				items: 1,
				nav: true,
				loop: true,
				autoplay: true,
				autoplayTimeout: 5000,
				navText: [
					"<i class='fa fa-angle-left'></i>",
					"<i class='fa fa-angle-right'></i>"
				]
			});
		},500);

		setTimeout(function() {
			$('.event-gallery').owlCarousel({
				items: 1,
				nav: true,
				loop: true,
				autoplay: true,
				autoplayTimeout: 5000,
				navText: [
					"<i class='fa fa-angle-left'></i>",
					"<i class='fa fa-angle-right'></i>"
				]
			});
		},500);

		$('.p-item-strips').bind(mobileCheck ? 'touchend' : 'click', function(){
			var slider = $(this).find('.items-full-slider-strips');
			setTimeout(function() {
				slider.owlCarousel({
					items: 1,
					nav: true,
					loop: true,
					autoHeight: true,
					height: 400,
					autoplayTimeout: 5000,
					navText: [
						"<i class='fa fa-angle-left'></i>",
						"<i class='fa fa-angle-right'></i>"
					]
				});
			},500);
		});

		$('.pall-slider').owlCarousel({
			items: 1,
			nav: false,
			loop: true,
			autoplay: false,
			animateOut: 'fadeOut',
			mouseDrag: false,
			touchDrag: false,
			pullDrag: false,
			autoplay: true,
			autoplayTimeout: 5000
		});
		$('.pall-slider').trigger('to.owl.carousel', [2,100]);
		$('.pall-nav a').bind(mobileCheck ? 'touchend' : 'click', function(e){
			e.preventDefault();
			$('.pall-slider').trigger('to.owl.carousel', [$(this).data('switch') - 1,100]);
		});

		// right slider
		$('.items-right-slider').owlCarousel({
			items: 2,
			nav: true,
			loop: true,
			autoplay: true,
			autoplayTimeout: 5000,
			navText: [
				"<i class='fa fa-angle-left'></i>",
				"<i class='fa fa-angle-right'></i>"
			]
		});

		// fullpagage
		var oldSlimScroll = $.fn.slimScroll;
		$.fn.slimScroll = function( options ){
			options.wheelStep = mobileCheck ? 40 : 10;
			return oldSlimScroll.apply(this, [options] );
		};
		$('.fullpage').fullpage({
			anchors:['firstPage', 'secondPage',
			'thirdPage', 'fourthPage', 'fifthPage',
			'sixthPage', 'seventhPage', 'eigthPage',
			'ninthPage', 'tenthPage', 'eleventhPage'],
			scrollOverflow: true,
			slidesNavigation: false,
			navigation: false,
			controlArrows: false,
			css3: true,
			scrollingSpeed: 2000,
			touchSensitivity: 20,

			onLeave: function (index, nextIndex, direction) {
				var topArr = $('.unu-top'),
					botArr = $('.unu-bottom');

				if (index == 1 && $('.bedroom-section').length) {
					$('.lutron').removeClass('fadeInDown');
				}

				if (nextIndex == 1 && $('.service-custom-electrical').length) {
					$('.service-custom-electrical .images').removeClass('slide-left');
					setTimeout(function() {
						$('.service-custom-electrical .images').removeClass('tran');
					},1500);
				}

				if (index == 2 && $('.exterior-section').length) {
					$('.exterior-section').addClass('locked-section');
					$('.ex-custom-electrics').hide(1000);
					$('.exterior-bgs').removeClass('blur');
					$('.e-lamp').addClass('active');
					$('.pulse').removeClass('active');
					$('.exterior-nav').removeClass('e-visible');
				}

				if (nextIndex == 2 && $('.smart-section ').length) {
					$('.second-sub').addClass('parallaxing')
				}

				if (index == 2 && $('.smart-section ').length) {
					$('.second-sub').removeClass('parallaxing')
				}

			},

			afterLoad: function(anchorLink, index) {
				var loadedSection = $(this);

				if (loadedSection.hasClass('map-section')) {
					$('.scroll-down').fadeOut();
				} else {
					$('.scroll-down').fadeIn();
				}

				var myVideo = document.getElementById("video1") || document.getElementById("video-fourth");

				if (myVideo) {
					myVideo.play();
					myVideo.loop = true;
				}

				if (index == 1 && $('.bedroom-section')) {
					$('.lutron').addClass('fadeInDown');
				}

				if (index == 1 && $('.service-custom-electrical')) {
					$('.service-custom-electrical .fade-in, .service-custom-electrical .handle')
					.addClass(mobileCheck ? 'tran' : 'tran start');
					setTimeout(function() {
						$('.service-custom-electrical .fade-in, .service-custom-electrical .handle')
							.removeClass('tran');
					},1500);
				}

				if ($('.devices-list').length) {
					$('.devices-list').addClass('animated fadeIn');
					setTimeout(function() {
						$('.sonos').addClass('fadeInDown');

						setTimeout(function() {
						$('.tv').addClass('fadeInDown');
						},600);

						setTimeout(function() {
						$('.apple-tv').addClass('fadeIn');
						$('.nest').addClass('fadeIn');
						},1000);
					},200);
				}

				if (index == 2 && $('.exterior-section').length) {
					function showLamps() {
						var counter = 0;
						var i = setInterval(function() {
							if (counter === 5) {
								clearInterval(i);
							} else {
								$('.e-lamp_'+(counter+1)).addClass('active');
							}
							counter++;
						}, 400);
					}
					if (!mobileCheck) {
						showLamps();
					}

					$('.exterior-nav').addClass('e-visible');

					setTimeout(function() {
						$('.pulse').addClass('active');
					},500);

					$('.exterior-section').removeClass('locked-section');
					$.fn.fullpage.setAllowScrolling(false, 'up');
				}

				if (index == 3 && $('.exterior-section').length) {
					$.fn.fullpage.setAllowScrolling(true, 'up');
				}
			}
		});

		// header video
		setTimeout(function() {
			$('.about-btn').trigger(mobileCheck ? 'touchend' : 'click');
		},200)
		if (!mobileCheck) {
			if ($("#event-video").length) {
				$("#event-video").YTPlayer();
			}
		}

		// event lightning drag
		(function() {
			if ($(".service-custom-electrical").length) {
				$(".service-custom-electrical .handle").draggable({
					axis: "x",
					containment: "parent",
					drag: function() {
						var position = $(this).position();
						var positionExtra = position.left + 6;
						$(".service-custom-electrical .fade-in").width(positionExtra + "px");
					}
				});
			}
		})();

		// scroll (lutron)
		if (!mobileCheck) {
			(function() {
				if ($('.bedroom-images').length) {
				var controller = new ScrollMagic.Controller(),
					bedroomFade = $('.bedroom-images .fade-in'),
					bedroomFadeSecond = $('.bedroom-images .fade-in-second'),
					bedroomBar = $('.switch-bar'),
					sentences = $('.bedroom-sentences p');

				// build scene
				var scene = new ScrollMagic.Scene({triggerElement: ".elements", duration: 4000})
				.addTo(controller)
					.on("update", function (e) {
						// console.log(e.target.controller().info("scrollDirection"));
					})
					.on("enter leave", function (e) {
						// console.log(e.type == "enter" ? "inside" : "outside");
						bedroomBar.css('height', '100%');
						sentences.removeClass('active');
					})
					.on("start end", function (e) {
						// console.log(e.type == "start" ? "top" : "bottom");
						bedroomBar.css('height', '100%');
					})
					.on("progress", function (e) {
						// height
						bedroomBar.css('height', ((e.progress.toFixed(2).substr(2))-15)+'%')
						if (e.progress.toFixed(2).substr(2) == 00) {
							bedroomBar.css('height', '100%');
						}

						// opacity
						bedroomFade.css('opacity', (e.progress.toFixed(3)-0.12)*2);

						if (e.progress.toFixed(2) > 0.6) {
							bedroomFadeSecond.css('opacity', (e.progress.toFixed(3)-0.5)*2);
						} else if (e.progress.toFixed(2) < 0.5) {
							bedroomFadeSecond.css('opacity', '0');
						}

						if (e.progress.toFixed(2) >= 1) {
							if (!$('.switch-colors div').hasClass('fadeInLeft')) {
								// console.log('appear true');
								$('.switch-colors .black').addClass('fadeInLeft');
								$('.switch-colors .gold').addClass('fadeInUp');
								$('.switch-colors .white').addClass('fadeInRight');
							}
						} else if (e.progress.toFixed(2) < 0.9) {
							if ($('.switch-colors div').hasClass('fadeInLeft')) {
								// console.log('hide true');
								$('.switch-colors .black').addClass('fadeOutLeft');
								$('.switch-colors .gold').addClass('fadeOutDown');
								$('.switch-colors .white').addClass('fadeOutRight');
								setTimeout(function() {
									$('.switch-colors div').removeClass('fadeInLeft');
									$('.switch-colors div').removeClass('fadeInUp');
									$('.switch-colors div').removeClass('fadeInRight');
									$('.switch-colors div').removeClass('fadeOutLeft');
									$('.switch-colors div').removeClass('fadeOutDown');
									$('.switch-colors div').removeClass('fadeOutRight');
								},1000);
							}
						}

						// sentences
						if (e.progress.toFixed(2) <= 0.3) {
							sentences.removeClass('active');
							$(sentences[0]).addClass('active');
						} else if (e.progress.toFixed(2) <= 0.5) {
							sentences.removeClass('active');
							$(sentences[1]).addClass('active');
						} else if (e.progress.toFixed(2) <= 0.6) {
							sentences.removeClass('active');
							$(sentences[2]).addClass('active');
						} else if (e.progress.toFixed(2) <= 0.7) {
							sentences.removeClass('active');
							$(sentences[3]).addClass('active');
						} else if (e.progress.toFixed(2) == 1) {
							sentences.removeClass('active');
							$(sentences[4]).addClass('active');
						}
				});
				}
			})();
		}

		// scroll (personalize)
		(function() {
			if ($('.personalize').length) {
			var controller = new ScrollMagic.Controller(),
				parent = $('.personalize'),
				caption = $('.personalize .left'),
				image = $('.personalize .right'),
				duration = $(window).height();

			// build scene
			var scene = new ScrollMagic.Scene({triggerElement: ".personalize", duration: duration*2})
			.addTo(controller)
				.on("update", function (e) {
					// console.log(e.target.controller().info("scrollDirection"));
				})
				.on("enter leave", function (e) {
					// console.log(e.type == "enter" ? "inside" : "outside");
					if (e.type == 'enter') {
						caption.css('opacity', '1');
						image.css('opacity', '1');
					} else {
						caption.css('opacity', '0');
						image.css('opacity', '0');
					}
				})
				.on("start end", function (e) {
				})
				.on("progress", function (e) {
					if (mobileCheck) {
						return;
					}
					var offset = e.progress.toFixed(3) * 100;

					caption.css({
						'top': offset*2+'%',
						'transform': 'translateY(-'+offset*2+'%)'
					})
					image.css({
						'top': offset*2+'%',
						'transform': 'translateY(-'+offset*2+'%)'
					})
				});
			}
		})();

		// scroll (casseta)
		if (!mobileCheck) {
			(function() {
				if ($('.caseta-section').length) {
				var controller = new ScrollMagic.Controller(),
					parent = '.caseta-section .sub-four',
					itemOne = $('.iphone'),
					itemTwo = $('.sub-five .iwatch'),
					itemThree = $('.sub-five .android')
					duration = $(window).height();

				// build scene
				var scene = new ScrollMagic.Scene({triggerElement: parent, duration: 1100})
				.addTo(controller)
					.on("update", function (e) {
						// console.log(e.target.controller().info("scrollDirection"));
					})
					.on("enter leave", function (e) {
						// console.log(e.type == "enter" ? "inside" : "outside");
					})
					.on("start end", function (e) {
						// console.log(e.type == "start" ? "top" : "bottom");
					})
					.on("progress", function (e) {
						var offset = e.progress.toFixed(3) * 100;
						itemOne.css({
							'transform': 'translateY('+offset+'%) translateX('+offset+'%)'
						})
						itemTwo.css({
							'transform': 'translateY(-'+offset+'%)'
						})
						itemThree.css({
							'transform': 'translateY('+offset+'%) translateX(-'+offset+'%)'
						})
					}
				);
				}
			})();
		}

		// google map
		(function() {
			var myLatLng = {lat: 37.775173, lng: -122.41222};

			var style = [{"elementType":"geometry","stylers":[{"hue":"#ff4400"},{"saturation":-68},{"lightness":-4},{"gamma":0.72}]},{"featureType":"road","elementType":"labels.icon"},{"featureType":"landscape.man_made","elementType":"geometry","stylers":[{"hue":"#0077ff"},{"gamma":3.1}]},{"featureType":"water","stylers":[{"hue":"#00ccff"},{"gamma":0.44},{"saturation":-33}]},{"featureType":"poi.park","stylers":[{"hue":"#44ff00"},{"saturation":-23}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"hue":"#007fff"},{"gamma":0.77},{"saturation":65},{"lightness":99}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"gamma":0.11},{"weight":5.6},{"saturation":99},{"hue":"#0091ff"},{"lightness":-86}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"lightness":-48},{"hue":"#ff5e00"},{"gamma":1.2},{"saturation":-23}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"saturation":-64},{"hue":"#ff9100"},{"lightness":16},{"gamma":0.47},{"weight":2.7}]}];

			// Create a map object and specify the DOM element for display.
			var map = new google.maps.Map(document.getElementById('map'), {
				center: myLatLng,
				scrollwheel: false,
				zoom: 15,
				styles: style,
				mapTypeControl: false
			});

			var infowindow = new google.maps.InfoWindow({
				content: "That's us!"
			});

			// Create a marker and set its position.
			var marker = new google.maps.Marker({
				map: map,
				position: myLatLng,
				title: "That's us!"
			});

			marker.addListener('click', function() {
				infowindow.open(map, marker);
			});
		})();
	});
})(jQuery);
