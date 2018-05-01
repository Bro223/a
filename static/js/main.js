;
// Начинать писать отсюда!!!!

$(document).ready(function() {

})

$(document).ready(function() {
	$('.js-top-banner').bxSlider({
			controls:false,
			captions: true,
			pagerCustom: '.top-banner__pag',
		});	

	$('.all-works').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			tCounter: '<span class="mfp-counter">%curr% из %total%</span>' // markup of counter
		}
	});
});