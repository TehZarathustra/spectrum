(function() {
	// on ready event
	$(function() {
		// Check for phones
		var mobileCheck;
		if (/Android|webOS|iPhone|iPod|iPad|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			mobileCheck = true;
		} else {
			mobileCheck = false;
		};
		// light switch
		(function() {
			var el = $('#light-switch'),
				aEl = $('.service-custom-electrical .fade-in'),
				defaultEl = $('.service-custom-electrical .default'),
				aEld = $('.smart-images');

			// getting bgs
			var fadeSrc = aEl.find('img').attr('src'),
				defaultSrc = defaultEl.find('img').attr('src');

			setTimeout(function() {
				defaultEl.css('background-image', 'url('+defaultSrc+')');
				aEl.css('background-image', 'url('+fadeSrc+')');
			},200);

			$('.switch-button').bind(mobileCheck ? 'touchend' : 'click', function(){
				var el = $(this),
					handle = $('.handle'),
					bg = $('.service-custom-electrical .fade-in');
				el.toggleClass('active');
				if (el.hasClass('active')) {
					handle.fadeOut(300);
					bg.addClass('tran full');
				} else {
					bg.removeClass('full');
					if (!mobileCheck) {
						setTimeout(function() {
							handle.fadeIn(300);
						}, 1000);
						setTimeout(function() {
							bg.removeClass('tran');
						}, 1500);
					}
				}
			});

			$('.switch-button-devices').bind(mobileCheck ? 'touchend' : 'click', function(){
			  el = $(this);
			  if (!el.hasClass('active')) {
			    el.addClass('active');
			    aEld.addClass('nighted');
			  } else {
			    el.removeClass('active');
			    aEld.removeClass('nighted');
			  }
			});
		})();

		// fade-in-text
		(function() {
			var elText = $('.fade-in-text'),
				elTitlte = $('.fade-titles'),
				elButton = $('.service-custom-electrical .btn-cont'),
				elPool = $('.event-gal-wrap');

			function adjust() {
				var dW = $(document).width();
				elText.css({
					'left': (dW/2-((dW/2)/2))+'px',
					'width': dW/2+'px'
				})
				elTitlte.css({
					'left': (dW/2-((dW/2)/2))+'px',
					'width': dW/2+'px'
				})
				elButton.css({
					'left': (dW/2-((dW/2)/2))+'px',
					'width': dW/2+'px'
				})
				if (!mobileCheck) {
					elPool.css({
						'left': (dW/2-((dW/2)/2))+'px',
						'width': dW/2+'px'
					})
				}
			}


			adjust();

			$(window).on('resize', adjust);
		})();

		// about text
		(function() {
			var btn = $('.about-btn'),
				container = $('.index-about'),
				stateOpen = false,
				hideBtn = $('.hide-index');


			btn.bind(mobileCheck ? 'touchend' : 'click', function(){
				if (stateOpen == false) {
					btn.addClass('fadeOutUp');

					setTimeout(function() {
						container.addClass('active');
					},700);

					setTimeout(function() {
						container.find('.text').css({
							'height': '130px'
						});
						setTimeout(function() {
							$('.index-sign').addClass('show-s');
							setTimeout(function() {
								$('.index-sign').addClass('active');
							},500);
						},1000);
					},2000);

					stateOpen = true;
				}
			});

			hideBtn.bind(mobileCheck ? 'touchend' : 'click', function(){
				if (stateOpen == true) {
					container.find('.text').css({
						'height': '0'
					});
					$('.index-sign').removeClass('active show-s');
					setTimeout(function() {
						container.removeClass('active');
					},700);
					setTimeout(function() {
						btn.removeClass('fadeOutUp');
						btn.addClass('fadeInDown');
						stateOpen = false;
					},1500);
				}
			});
		})();

		// exterior
		(function() {
			var DOM = {
				room: '.exterior-rooms',
				area: '.exterior-areas',
				titles: '.exterior-titles',
				devices: '.ex-devices',
				exterior: '.exterior-bgs',
				poolControls: '.pool-controls',
				poolColors: '.exterior-pool',
				btnR: '.btn-return'
			};

			if(!mobileCheck) {
				$('.pool-colors-wrap').append('<div class="pool-gallery owl-carousel">'
					+'<div class="item"><img src="img/p1.jpg" alt=""></div>'
					+'<div class="item"><img src="img/p3.jpg" alt=""></div>'
					+'<div class="item"><img src="img/p4.jpg" alt=""></div>'
					+'<div class="item"><img src="img/p5.jpg" alt=""></div>'
					+'<div class="item"><img src="img/p6.jpg" alt=""></div>'
				+'</div>'
				+'<div class="pool-controls">'
					+'<div class="color_1"></div>'
					+'<div class="color_2"></div>'
					+'<div class="color_3"></div>'
					+'<div class="color_4"></div>'
					+'<div class="color_5"></div>'
					+'<div class="color_6"></div>'
				+'</div>'
				+'<div class="btn-cont about-btn animated pool-more">'
				+'<a class="btn info-button" href="#">'
					+'More info'
					+'<span class="line-1"></span>'
					+'<span class="line-2"></span>'
					+'<span class="line-3"></span>'
					+'<span class="line-4"></span>'
				+'</a></div>');
				$('.exterior-pool').append('<div class="color_1"></div>'
					+'<div class="color_2"></div>'
					+'<div class="color_3"></div>'
					+'<div class="color_4"></div>'
					+'<div class="color_5"></div>'
					+'<div class="color_6"></div>');
				$('.exterior-lamps').append('<div class="e-lamp e-lamp_1"></div>'
					+'<div class="e-lamp e-lamp_2"></div>'
					+'<div class="e-lamp e-lamp_3"></div>'
					+'<div class="e-lamp e-lamp_4"></div>'
					+'<div class="e-lamp e-lamp_5"></div')
			}

			// click
			$(DOM.area).bind(mobileCheck ? 'touchend' : 'click', function() {
				// event.preventDefault();
				var el = $(event.target).context.className;

				if (el == 'ex-devices') {
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
					},1200);
				} else if (el == 'ex-bar') {
					$.fn.fullpage.moveTo('fourthPage', 0);
				} else if (el == 'ex-lutron') {
					$.fn.fullpage.moveTo('fifthPage', 0);
				} else if (el == 'ex-electric') {
					openElectric();
				}
			});

			// close custom electrics
			$('.c-el-overlay').bind(mobileCheck ? 'touchend' : 'click', function(){
				closeElectric();
			});

			// click return
			$(DOM.btnR).bind(mobileCheck ? 'touchend' : 'click', function(){
				$.fn.fullpage.moveTo('secondPage', 1);
			});

			// area hover
			$(DOM.area).hover(function(event) {
				var el = $(event.target).context.className;

				$("[data-enav='" + el + "']").addClass('active');

				if (el == 'ex-bar') {
					$(DOM.exterior).addClass('active');
				} else {
					$(DOM.room+' .'+el).addClass('active');
				}
				$('.exterior-nav').addClass('dimmed');
				$('.exterior-lamps').addClass('disabled');
				$(event.target).find('.pulse').fadeOut(200);
			}, function() {
				$(DOM.room+' .'+$(event.target).context.className).removeClass('active');
				$(DOM.exterior).removeClass('active');
				$('.exterior-nav').removeClass('dimmed');
				$("[data-enav='" + $(event.target).context.className + "']").removeClass('active');
				$('.exterior-lamps').removeClass('disabled');
				$(event.target).find('.pulse').fadeIn(200);
			});

			// exterior nav click
			$('.exterior-nav a').bind(mobileCheck ? 'touchend' : 'click', function(e){
				var el = $(this).data('enav');

				if (el == 'ex-electric') {
					e.preventDefault();
					closePool();
					openElectric();
				}
			});

			$('.pool-nav').bind('click', function(e) {
				e.preventDefault();
				if (!mobileCheck) {
					closeElectric();
					openPool();
				}
			})

			// pool helpers

			function openPool() {
				$('.pool-colors-wrap').addClass('active');
				$(DOM.poolControls).addClass('active');
				$('.pool-gallery').addClass('active');
				$('.exterior-pool > div').removeClass('active overpool');
				setTimeout(function() {
					$('.pool-more').addClass('active');
				},800);
				$('.scroll-down.contact-us').fadeOut(100);
				poolState = 'open';
				$('.exterior-pool').addClass('overpool');
			}

			function closePool() {
				$(DOM.poolControls).removeClass('active');
				$('.pool-gallery').removeClass('active');
				$('.pool-more').removeClass('active');
				$('.pool-colors-wrap').removeClass('active');
				$('.exterior-pool').removeClass('overpool');
				$('.exterior-pool > div').removeClass('active');
				poolState = 'closed';
			}

			// electric helpers
			function openElectric() {
				$('.ex-custom-electrics').show(1000);
				$('.pulse').removeClass('active');
				$('.exterior-bgs').addClass('blur');
				$('.e-lamp').removeClass('active');
				$('.exterior-nav li:first-child a').addClass('active-add');
				localStorage.removeItem('electric');
			}

			function closeElectric() {
				$('.exterior-nav li:first-child a').removeClass('active-add');
				$('.ex-custom-electrics').hide(1000);
				$('.exterior-bgs').removeClass('blur');
				$('.e-lamp').addClass('active');
				$('.pool-colors-wrap').removeClass('active');
				setTimeout(function() {
					$('.pulse').addClass('active');
				},200);
			}

			if (localStorage.electric) {
				setTimeout(function() {
					openElectric();
				},2000);
			}

			$('.el-trigger').click(function() {
				localStorage.setItem('electric', 'true');
			});

			// exterior nav hover
			$('.exterior-nav a').hover(function() {
				$('.exterior-nav').addClass('dimmed');
				$('.exterior-section h2').fadeOut();
				var el = $(this).data('enav');

				if (el == 'ex-bar') {
					$(DOM.exterior).addClass('active');
				} else if (el == 'pool') {
					$('.color_1').addClass('active');
				} else {
					$(DOM.room+' .'+el).addClass('active');
				}

				$('.exterior-lamps').addClass('disabled');
				$(event.target).find('.pulse').fadeOut(200);
			}, function() {
				$('.color_1').removeClass('active');
				$(DOM.room+' .'+$(this).data('enav')).removeClass('active');
				$(DOM.exterior).removeClass('active');
				$('.exterior-nav').removeClass('dimmed');
				$('.exterior-lamps').removeClass('disabled');
				$(event.target).find('.pulse').fadeIn(200);
			}
			);

			// show pool controls
			var poolState = 'closed';

			$('.pool').bind('click', function(){
				if (!mobileCheck) {
					$('.pool-colors-wrap').addClass('active');
					$(DOM.poolControls).addClass('active');
					$('.pool-gallery').addClass('active');
					$('.exterior-pool > div').removeClass('active overpool');
					setTimeout(function() {
						$('.pool-more').addClass('active');
					},800);
					$('.scroll-down.contact-us').fadeOut(100);
					poolState = 'open';
					$('.exterior-pool').addClass('overpool');
				}
			});

			if (poolState == 'closed') {
				$('.pool').hover(function() {
					$(DOM.poolColors+' .color_1').toggleClass('active');
				});
			}

			$('.exterior-pool').bind(mobileCheck ? 'touchend' : 'click', function(){
				closePool();
			});

			// pool colors controls
			$(DOM.poolControls).bind(mobileCheck ? 'touchend' : 'click', function(event){
				var el = $(event.target).context.className;
				$(DOM.poolColors+' div').removeClass('active');

				$(DOM.poolColors+' .'+el).addClass('active');
			})
		})();

		// learn more & tab
		(function() {
			var bg = $('.service-custom-electrical .fade-in'),
				btn = $(".service-custom-electrical .btn-cont"),
				tab = $('.tab-nav'),
				tabContainer = $('.content-tabs'),
				tabContent = $('.tab-content'),
				switchBtn = $('.switch-button'),
				aEl = $('.service-custom-electrical .fade-in'),
				hideBtn = $('.hide-tabs'),
				call = $('.call-to-actions');

			btn.bind(mobileCheck ? 'touchend' : 'click', function(e){
				e.preventDefault();
				btn.addClass('animated fadeOutUp');
				$('.event-gallery').addClass('active');
				$('.event-gal-wrap').addClass('active');
			});

			$('.event-gal-wrap').bind(mobileCheck ? 'touchend' : 'click', function(){
				btn.removeClass('animated');
				$('.event-gallery').removeClass('active');
				$('.event-gal-wrap').removeClass('active');
			})

			$('.event-gallery').bind(mobileCheck ? 'touchend' : 'click', function(e){
				e.stopPropagation();
			})

			hideBtn.bind(mobileCheck ? 'touchend' : 'click', function(e){
				hideTabs();
				return false;
			});

			// show tabs
			function showTabs() {
				btn.hide(0);
				tabContainer.fadeIn(0);

				setTimeout(function() {
					tab.addClass('active');
				},400);

				setTimeout(function() {
					tab.find('a').addClass('animated fadeInDown');
				},800);

				setTimeout(function() {
					tabContent.fadeIn(0);
					var tabHeight = tabContent.height();
					tabContent.height('0');
					tabContent.height(tabHeight.toString());
					tabContent.css('opacity', '1');
				},1000);

				setTimeout(function() {
					call.show(500);
				},1500);
			}

			// hide tabs
			function hideTabs() {
				var tabAnim = 'zoomOutUp',
					animDelay = 800;

				tabContainer.addClass('animated '+tabAnim+'');

				setTimeout(function() {
					tab.removeClass('active');
					tabContainer.removeAttr('style');
					tabContainer.removeClass(''+tabAnim+'');
					tabContent.removeAttr('style');
					tab.find('a').removeClass('fadeInDown');
					switchBtn.removeClass('active');
					aEl.removeClass('active');
					btn.removeAttr('style');
					btn.removeClass('fadeOutUp');
					btn.addClass('fadeInDown');
					call.hide(0);
				},animDelay);
			}

			$('.tab-nav a').bind(mobileCheck ? 'touchend' : 'click', function(e){
				e.preventDefault();
				var thisEl = $(this),
					thisData = thisEl.data();

				if (!thisEl.hasClass('active')) {
					// chaning link appearance
					$('.tab-nav a').removeClass('active');
					thisEl.addClass('active');

					// changing tab
					$('.content-tab').fadeOut(100);
					setTimeout(function() {
						$('.tab-'+thisData.tab).fadeIn(300);
						var thisHeight = $('.tab-'+thisData.tab).height();
						tabContent.css('height', thisHeight);
					},100);
				}
			});
		})();

		// sidebar nav
		(function() {
			var container = document.querySelector('.master-wrap');
			var main = document.querySelector('.page-wrap');

			function toggleSidebar() {
				isShowingSidebar() ? hideSidebar() : showSidebar();
			}

			function showSidebar() {
				container.classList.add('show-sidebar');
			}

			function hideSidebar() {
				container.classList.remove('show-sidebar');
			}

			function isShowingSidebar() {
				return container.classList.contains('show-sidebar');
			}

			document.querySelector('.hamburger').addEventListener('click', toggleSidebar, false);

			container.addEventListener('click', function(e){
				if(isShowingSidebar() && main.contains(e.target)){
					e.preventDefault();
					hideSidebar();
				}
			}, true);
		})();

		// video controls
		(function() {
			var elPlay = $('.playBut'),
				elTrigger = $('.lutron-fourth'),
				elVideo = $('.mb_YTPlayer'),
				overlay = $('.background-overlay'),
				heading = elVideo.find('.heading-row');

			elTrigger.bind(mobileCheck ? 'touchend' : 'click' , function(e) {
				e.preventDefault();

				if (!$(e.target).hasClass('btn')) {
					if (!mobileCheck) {
						if (!elPlay.hasClass('active')) {
							elVideo.YTPGetPlayer().seekTo(0);
							elVideo.YTPPlay();
							elVideo.YTPUnmute();
							elVideo.addClass('playing');
							overlay.css('background-color', 'transparent');
							elPlay.addClass('active');
							heading.addClass('animated fadeOutUp');
						} else {
							elVideo.YTPMute();
							elVideo.YTPPause();
							overlay.removeAttr('style');
							elPlay.removeClass('active');
							elVideo.removeClass('playing');
							heading.removeClass('fadeOutUp');
							heading.addClass('fadeInDown');
						}
					} else {
						var url = 'https:'+$('#event-video')
							.data('property')
							.split(',')[0]
							.split(':')[2]
							.slice(0, -1);
						window.open(url, '_blank').focus();
					}
				}
			})
		})();

		// news letter bg's
		(function() {
			var container = $('.news-letter-bg'),
				active = container.find('.active'),
				elements = container.find('div'),
				current = 0,
				current,
				next;

			setInterval(function() {
				if (active < elements.length - 1) {
					active = active + 1;
				} else {
					active = 0;
				}

				next = elements[active];

				if (active == 0) {
					current = elements[elements.length - 1];
				} else {
					current =  elements[active - 1];
				}

				$(next).addClass('active');
				setTimeout(function() {
					$(current).removeClass('active');
				},4000);
			},5000);

		})();

		// form focus
		(function() {
			// in
			$('input, textarea').focus(function() {
				$(this).parent().find('.text').hide();
			});

			// out
			$('input, textarea').focusout(function() {
				var el = $(this);
				if (el.val().length < 1) {
					el.parent().find('.text').show();
				}
			});
		})();

		// portfolio items
		(function() {
			var firstBg = $('.items-full-slider-1 > div:first-child img').attr('src'),
				firstContainer = $('.items-full-slider-1').closest('.p-preview'),
				secondBg = $('.items-full-slider-2 > div:first-child img').attr('src'),
				secondContainer = $('.items-full-slider-2').closest('.p-preview'),
				thirdBg = $('.items-full-slider-3 > div:first-child img').attr('src'),
				thirdContainer = $('.items-full-slider-3').closest('.p-preview');

			firstContainer.css('background-image', 'url('+firstBg+')');
			secondContainer.css('background-image', 'url('+secondBg+')');
			thirdContainer.css('background-image', 'url('+thirdBg+')');

			$('.p-item').bind(mobileCheck ? 'touchend' : 'click', function(){
				$('.p-item').removeClass('active');
				$(this).addClass('active');
				$('.close-portfolio').fadeIn(200);
				$('.tab-e').removeClass('active');
				$('.tab-e.tab-'+$(this).data('etab')).addClass('active');
			});

			$('.close-portfolio').bind(mobileCheck ? 'touchend' : 'click', function(){
				$('.p-item').removeClass('active');
				$('.close-portfolio').fadeOut(200);
				$('.items-full-slider-strips').trigger('destroy.owl.carousel');
			})

			$('.ex-custom-electrics .close-default').bind(mobileCheck ? 'touchend' : 'click', function(){
				$('.p-item').removeClass('active');
				$('.items-full-slider-strips').trigger('destroy.owl.carousel');
			})


		})();

		// bedroom
		(function() {
			var parent = $('.switch-colors'),
				bg = $('.bedroom-switch');

			parent.bind(mobileCheck ? 'touchend' : 'click', function(){
				var el = $(event.target);
				bg.removeClass('lutron-black lutron-gold lutron-white');

				if (el.hasClass('black')) {
					bg.addClass('lutron-black');
				} else if (el.hasClass('gold')) {
					bg.addClass('lutron-gold');
				} else {
					bg.addClass('lutron-white');
				}
			});

			bg.bind('touchend', function(){
				if (!$('.bedroom-section').hasClass('max')) {
					$('.bedroom-section').addClass('max');
					$('.switch-colors .black').addClass('fadeInLeft');
					$('.switch-colors .gold').addClass('fadeInUp');
					$('.switch-colors .white').addClass('fadeInRight');
				} else {
					$('.bedroom-section').removeClass('max');
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
			});
		})();

		// modals
		(function($) {
			$(function() {
				$(window).on("resize", resizeForm);
				jQuery.fn.center = function(parent) {
					if (parent) {
						parent = this.parent();
					} else {
						parent = window;
					}
					this.css({
						"top": (($(window).height() - $(this).outerHeight()) / 2) + "px",
						"left": (((jQuery(parent).width() - this.outerWidth()) / 2) + jQuery(parent).scrollLeft() + "px")
					});
					return this;
				};

				function resizeForm() {
					jQuery('.pops').center();
				}

				$('.m-close, .page-overlay').bind(mobileCheck ? 'touchend' : 'click', function(){
					$('.page-overlay, .pops').fadeOut(500);
					$.fn.fullpage.setAllowScrolling(true);
				});

				// pops duplicate
				var prevHandler = $('.image-pop .image-prev'),
					nextHandler = $('.image-pop .image-next'),
					owlGlobal = false,
					imageGlobal;

				prevHandler.bind(mobileCheck ? 'touchend' : 'click', function(){
					if (owlGlobal) {
					$('.gallery-slider').trigger('prev.owl.carousel');
					var image = $('.owl-item.active').find('img').attr('src');
					$('.image-pop img').attr('src', image);
					} else {
						if (imageGlobal.parent().prev().find('img').attr('src')) {
							var image = imageGlobal.parent().prev().find('img').attr('src');
							$('.image-pop img').attr('src', image);
							imageGlobal = imageGlobal.parent().prev().find('.caption');
						}
					}

					$('.image-pop').center();
				});

				nextHandler.bind(mobileCheck ? 'touchend' : 'click', function(){
					if (owlGlobal) {
						$('.gallery-slider').trigger('next.owl.carousel');
						var image = $('.owl-item.active').find('img').attr('src');
						$('.image-pop img').attr('src', image);
					} else {
						if (imageGlobal.parent().next().find('img').attr('src')) {
							var image = imageGlobal.parent().next().find('img').attr('src');
							$('.image-pop img').attr('src', image);
							imageGlobal = imageGlobal.parent().next().find('.caption');
						}
					}

					$('.image-pop').center();
				});

				function add_modal(trigger,modal,close,pic) {
					close = (typeof close === 'undefined') ? false : true;
					pic = (typeof pic === 'undefined') ? false : true;
					$(''+trigger+'').bind(mobileCheck ? 'touchend' : 'click', function(e) {

						if ($(event.target).data('gtype') == 'owl') {
							owlGlobal = true;
						} else {
							owlGlobal = false;
							imageGlobal = $(event.target);
						}

						close == true ? $('.pops').fadeOut(100) : close;
						if (pic == true) {
							var image = $(this).find('img').attr('src');
							$('.image-pop img').attr('src', image);
						}

						e.preventDefault();

						$.fn.fullpage.setAllowScrolling(false);
						$('.page-overlay, .'+modal+'').fadeIn(400);
						jQuery('.'+modal+'').center();
						$('.image-pop').center();
					});
				};

				add_modal('.gallery-slider .item','image-pop',false,true);
				add_modal('.add-gallery .item','image-pop',false,true);
				add_modal('.info-button','info-pop',false,false);
				add_modal('.jobs-link','jobs-pop',false,false);
			});
		})(jQuery);

		// devices
		(function() {
			var nav = $('.devices-nav'),
				menu = $('.devices-list'),
				content = $('.devices-content'),
				pic = $('.pic'),
				images = $('.smart-images'),
				item,
				close = $('.close');

			function reset() {
				item.find('.left').addClass('fadeOutUp');
				item.find('.right').addClass('fadeOutDown');
				close.css('opacity', '0');
				setTimeout(function() {
					item.find('.left').removeClass('fadeOutUp fadeInLeft');
					item.find('.right').removeClass('fadeOutDown fadeInRight');
					menu.removeClass('folded');
					images.removeClass('blurred');
					images.removeClass('nighted');
					content.removeClass('active');
					pic.removeClass('active');
					item.removeClass('active');
					close.addClass('hold');
					$('.switch-wrap').fadeIn();
				},1000);
			}

			nav.bind(mobileCheck ? 'touchend' : 'click', function(event){
				event.preventDefault();
				var el = $(event.target),
					data = el.data().dnav;

				if (data > 0) {
					images.addClass('nighted');
					setTimeout(function() {
						close.css('opacity', '1');
						item = content.find('.item-'+data+'');
						menu.addClass('folded');
						images.addClass('blurred');
						content.addClass('active');
						item.addClass('active');
						item.find('.left').addClass('fadeInLeft');
						item.find('.right').addClass('fadeInRight');
						$('.switch-wrap').fadeOut();
						setTimeout(function() {
							close.removeClass('hold');
							setTimeout(function() {
								pic.addClass('active');
							},350);
						},350);
					},650);
				}
			});

			$('.devices-nav a').hover(function() {
				$('.light-'+$(this).data().dnav+'').addClass('active');
			}, function() {
				$('.light').removeClass('active');
			});

			close.bind(mobileCheck ? 'touchend' : 'click', function(){
				reset();
			});
		})();

		// get started
		(function() {
			$('.get-started-nav > a').bind(mobileCheck ? 'touchend' : 'click', function(e){
				e.preventDefault();
				var thisEl = $(this),
					thisData = thisEl.data();

				if (!thisEl.hasClass('active')) {
					// chaning link appearance
					$('.get-started-nav > a').removeClass('active');
					thisEl.addClass('active');

					// changing tab
					$('.gtab').fadeOut(100);
					setTimeout(function() {
						$('.gtab-'+thisData.tab).css('display', 'block');
						$('.gtab-'+thisData.tab).addClass('animated fadeInUp');
						var thisHeight = $('.gtab-'+thisData.tab).height();
						$('.get-started-content').css('height', thisHeight);
					},100);
				}
			});
		})();
	});
})()
