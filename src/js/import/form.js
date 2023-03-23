$(window).on('load', () => {
	$('.js-example-form').select2({
		theme: "custom-theme",
		language: 'ru',
		width: '100%',
		minimumResultsForSearch: Infinity,
		dropdownAutoWidth: true,
	});

	const datePickerInput = document.getElementById('date-picker');

	// Initialize the date picker
	var flatpickrItem=flatpickr(datePickerInput, {
	  enableTime: true,
	  dateFormat: 'Y-m-d',
	  onOpen: [
			function(selectedDates, dateStr, instance){
			  var container=$(instance.calendarContainer);
			  if(container.find('.datepicker-btns').length<1){
			   container.find('.flatpickr-innerContainer').after('<div class="datepicker-btns"><div class="datepicker-btn datepicker-btn--reject js-datepicker-btn-reject">отменить</div><div class="datepicker-btn datepicker-btn--accept js-datepicker-btn-accept">выбрать</div></div>');
			  }
			}
		],
	});

	$('body').on('click','.js-datepicker-btn-reject, .js-datepicker-btn-accept', function(){
	 flatpickrItem.close();
	});




});

