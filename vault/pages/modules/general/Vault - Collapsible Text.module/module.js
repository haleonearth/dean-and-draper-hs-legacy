$('.collapsible-text__title').on('click keyup', function (e) {
	if (e.type === 'click' || e.which === 13) {
		var text = $(this).closest('.collapsible-text');
		var body = text.find('.collapsible-text__body-wrapper');
		var wrapper = text.closest('.collapsible-text-wrapper');
		var activeClass = 'collapsible-text--active';

		wrapper.find('.' + activeClass).not(text).find('.collapsible-text__body-wrapper').slideUp();
		wrapper.find('.' + activeClass).not(text).removeClass(activeClass).attr('aria-expanded', false);
		body.stop(true, true);
		if (text.hasClass(activeClass)) {
			body.slideUp();
			text.removeClass(activeClass).attr('aria-expanded', false);
		} else {
			body.slideDown(400);
			text.addClass(activeClass).attr('aria-expanded', true);
		}
	}
});

$('.collapsible-text-section').each(function () {
	var wrapper = $(this);
	var bodies = wrapper.find('.collapsible-text__body');
	var setWidth = window.elementalUtility.debounce(50, function () {
		bodies.width('');
		bodies.width(wrapper.width());
	});
	setWidth();
	$(window).on('load resize', setWidth);
});