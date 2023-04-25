
$(window).on('load', () => {
	function initSelectsLikeAnketaPage() {
		$('.js-example-form:not(.select2-hidden-accessible').select2({
			theme: "custom-theme",
			language: 'ru',
			width: '100%',
			minimumResultsForSearch: Infinity,
			dropdownAutoWidth: true,
		});
	}

	initSelectsLikeAnketaPage();

	function yearsGenerator(startYear) {
		var currentYear = new Date().getFullYear(), years = [];
		startYear = startYear || 1980;
		while (startYear <= currentYear) {
			years.push(startYear++);
		}
		return years.reverse();
	}


	function initDatePicker() {

		const datePickerInput = document.getElementById('date-picker');
		// Initialize the date picker
		if (!$(datePickerInput).hasClass('js-flag-init-dp')) {
			var flatpickrItem = flatpickr(datePickerInput, {
				enableTime: true,
				dateFormat: 'Y-m-d',
				minDate: '01.01.1900',
				locale: 'ru',
				disableMobile: true,
				onOpen: [
					function (selectedDates, dateStr, instance) {
						var container = $(instance.calendarContainer);

						var cal_year = false;
						var cal_month = false;
						var cal_custom_year = false;
						var cal_custom_month = false;


						if (container.find('.datepicker-btns').length < 1) {
							container.find('.flatpickr-innerContainer').after('<div class="datepicker-btns"><div class="datepicker-btn datepicker-btn--reject js-datepicker-btn-reject"><span>отмена</span></div><div class="datepicker-btn datepicker-btn--accept js-datepicker-btn-accept"><span>выбрать</span></div></div>');

							var years = yearsGenerator(1900);
							var years_opt_list = '';
							var currentYear = new Date().getFullYear()
							years.forEach(year => {
								if (year === currentYear) {
									years_opt_list += '<option  value="' + year + '" selected>' + year + '</option>';

								}
								else {
									years_opt_list += '<option  value="' + year + '">' + year + '</option>';
								}
							});

							var months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

							container.find('.flatpickr-months').before('<div class="flatpickr-custom-selects"><div class="flatpickr-custom-select flatpickr-custom-select--month">' +
								'<select class="js-example-form">' + '<option class="flatpickr-monthDropdown-month" value="0" tabindex="-1">Январь</option><option class="flatpickr-monthDropdown-month" value="1" tabindex="-1">Февраль</option><option class="flatpickr-monthDropdown-month" value="2" tabindex="-1">Март</option><option class="flatpickr-monthDropdown-month" value="3" tabindex="-1">Апрель</option><option class="flatpickr-monthDropdown-month" value="4" tabindex="-1">Май</option><option class="flatpickr-monthDropdown-month" value="5" tabindex="-1">Июнь</option><option class="flatpickr-monthDropdown-month" value="6" tabindex="-1">Июль</option><option class="flatpickr-monthDropdown-month" value="7" tabindex="-1">Август</option><option class="flatpickr-monthDropdown-month" value="8" tabindex="-1">Сентябрь</option><option class="flatpickr-monthDropdown-month" value="9" tabindex="-1">Октябрь</option><option class="flatpickr-monthDropdown-month" value="10" tabindex="-1">Ноябрь</option><option class="flatpickr-monthDropdown-month" value="11" tabindex="-1">Декабрь</option>' + '</select><div class="simple-select2-items-wrapper"></div>' +
								'</div><div class="flatpickr-custom-select flatpickr-custom-select--year">' +
								'<select class="js-example-form">' + years_opt_list + '</select><div class="simple-select2-items-wrapper"></div>' +
								'</div></div>');


							dropdownParent: $(this).siblings('.simple-select2-items-wrapper')

							var cal_year = container.find('.numInput.cur-year');
							var cal_month = container.find('.flatpickr-monthDropdown-months');
							var cal_custom_year = container.find('.flatpickr-custom-select--year select');
							var cal_custom_month = container.find('.flatpickr-custom-select--month select');

							cal_custom_year.on('change', function () {
								console.log($(this).val());
								//cal_year.val($(this).val());

								flatpickrItem.jumpToDate(new Date(cal_custom_year.val(), cal_custom_month.val(), 1));

							});
							cal_custom_month.on('change', function () {
								console.log($(this).val());
								cal_month.val($(this).val());
								flatpickrItem.changeMonth(parseInt($(this).val()), false);
							});


							container.find('.js-example-form').each(function (index) {
								var select = $(this);
								select.select2({
									theme: "custom-theme",
									language: 'ru',
									width: '100%',
									minimumResultsForSearch: Infinity,
									dropdownAutoWidth: true,
									dropdownParent: $(this).siblings('.simple-select2-items-wrapper')
								});
							});


							//'<select class="js-example-form"><option  value="" selected>Экология и рациональное природопользование</option></select>'
						}


						cal_custom_year.val(cal_year.val()).trigger('change')
						cal_custom_month.val(cal_month.val()).trigger('change')

					}
				],
			});
			$(datePickerInput).addClass('js-flag-init-dp');


			$('body').on('click', '.js-datepicker-btn-reject, .js-datepicker-btn-accept', function () {
				flatpickrItem.close();
			});
		}
	}
	initDatePicker();

	$('body').on('click', '.js-datepicker-btn-reject, .js-datepicker-btn-accept', function () {
		flatpickrItem.close();
	});

	$('body').on('reinitAnketaFormCompomnents', function () {
		initSelectsLikeAnketaPage();
		initDatePicker();

	});

	tippy('.label--tooltips', {
		theme: 'tomato',
		content: 'Global content',
		arrow: tippy.roundArrow,
	});
	$('.js-mask-phone').mask('+7(000)000-00-00');
	$('.js-mask-snils').mask('000-000-000 00');

});

