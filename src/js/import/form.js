

$( window ).on( 'load', () => {
	function initSelectsLikeAnketaPage(){
		$( '.js-example-form:not(.select2-hidden-accessible)' ).select2( {
			theme: "custom-theme",
			language: 'ru',
			width: '100%',
			minimumResultsForSearch: Infinity,
			dropdownAutoWidth: true,
			dropdownCssClass: 'select2-named-example-form__dd',
			selectionCssClass: 'select2-named-example-form',
			placeholder: 'Выбрать'
		} );
	}

	initSelectsLikeAnketaPage();

	function yearsGenerator( startYear ){
		var currentYear = new Date().getFullYear(), years = [];
		startYear = startYear || 1980;
		while( startYear <= currentYear ){
			years.push( startYear++ );
		}
		return years.reverse();
	}


	function initDatePicker(){

		if( $( '#date-picker' ).length > 0 ){
			const datePickerInput = document.getElementById( 'date-picker' );
			// Initialize the date picker
			if( !$( datePickerInput ).hasClass( 'js-flag-init-dp' ) ){

				var flatpickrOptions = {
					enableTime: true,
					dateFormat: 'Y-m-d',
					minDate: '01.01.1900',
					static: true,
					locale: 'ru',
					disableMobile: true,
					onOpen: [
						function( selectedDates, dateStr, instance ){
							var container = $( instance.calendarContainer );

							var cal_year = false;
							var cal_month = false;
							var cal_custom_year = false;
							var cal_custom_month = false;


							if( container.find( '.datepicker-btns' ).length < 1 ){
								container.find( '.flatpickr-innerContainer' ).after( '<div class="datepicker-btns"><div class="datepicker-btn datepicker-btn--reject js-datepicker-btn-reject"><span>отмена</span></div><div class="datepicker-btn datepicker-btn--accept js-datepicker-btn-accept"><span>выбрать</span></div></div>' );

								var years = yearsGenerator( 1900 );
								var years_opt_list = '';
								var currentYear = new Date().getFullYear()
								years.forEach( year => {
									if( year === currentYear ){
										years_opt_list += '<option  value="' + year + '" selected>' + year + '</option>';

									}else{
										years_opt_list += '<option  value="' + year + '">' + year + '</option>';
									}
								} );

								var months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

								container.find( '.flatpickr-months' ).before( '<div class="flatpickr-custom-selects"><div class="flatpickr-custom-select flatpickr-custom-select--month">' +
									'<select class="js-example-form">' + '<option class="flatpickr-monthDropdown-month" value="0" tabindex="-1">Январь</option><option class="flatpickr-monthDropdown-month" value="1" tabindex="-1">Февраль</option><option class="flatpickr-monthDropdown-month" value="2" tabindex="-1">Март</option><option class="flatpickr-monthDropdown-month" value="3" tabindex="-1">Апрель</option><option class="flatpickr-monthDropdown-month" value="4" tabindex="-1">Май</option><option class="flatpickr-monthDropdown-month" value="5" tabindex="-1">Июнь</option><option class="flatpickr-monthDropdown-month" value="6" tabindex="-1">Июль</option><option class="flatpickr-monthDropdown-month" value="7" tabindex="-1">Август</option><option class="flatpickr-monthDropdown-month" value="8" tabindex="-1">Сентябрь</option><option class="flatpickr-monthDropdown-month" value="9" tabindex="-1">Октябрь</option><option class="flatpickr-monthDropdown-month" value="10" tabindex="-1">Ноябрь</option><option class="flatpickr-monthDropdown-month" value="11" tabindex="-1">Декабрь</option>' + '</select><div class="simple-select2-items-wrapper"></div>' +
									'</div><div class="flatpickr-custom-select flatpickr-custom-select--year">' +
									'<select class="js-example-form">' + years_opt_list + '</select><div class="simple-select2-items-wrapper"></div>' +
									'</div></div>' );


								dropdownParent: $( this ).siblings( '.simple-select2-items-wrapper' )

								var cal_year = container.find( '.numInput.cur-year' );
								var cal_month = container.find( '.flatpickr-monthDropdown-months' );
								var cal_custom_year = container.find( '.flatpickr-custom-select--year select' );
								var cal_custom_month = container.find( '.flatpickr-custom-select--month select' );

								cal_custom_year.on( 'change', function(){
									console.log( $( this ).val() );
									//cal_year.val($(this).val());

									flatpickrItem.jumpToDate( new Date( cal_custom_year.val(), cal_custom_month.val(), 1 ) );

								} );
								cal_custom_month.on( 'change', function(){
									console.log( $( this ).val() );
									cal_month.val( $( this ).val() );
									flatpickrItem.changeMonth( parseInt( $( this ).val() ), false );
								} );


								container.find( '.js-example-form' ).each( function( index ){
									var select = $( this );
									select.select2( {
										theme: "custom-theme",
										language: 'ru',
										width: '100%',
										minimumResultsForSearch: Infinity,
										dropdownAutoWidth: true,
										dropdownParent: $( this ).siblings( '.simple-select2-items-wrapper' )
									} );
								} );


								//'<select class="js-example-form"><option  value="" selected>Экология и рациональное природопользование</option></select>'
							}


							cal_custom_year.val( cal_year.val() ).trigger( 'change' )
							cal_custom_month.val( cal_month.val() ).trigger( 'change' )

						}
					],
				};

				var inp = $( datePickerInput );
				var val = inp.val();
				if( typeof (val) === 'string' && val.length > 2 ){
					flatpickrOptions.defaultDate = val;
				}

				var flatpickrItem = flatpickr( datePickerInput, flatpickrOptions );
				$( datePickerInput ).addClass( 'js-flag-init-dp' );
				window.flatpickrItem = flatpickrItem;


				$( 'body' ).on( 'click', '.js-datepicker-btn-reject, .js-datepicker-btn-accept', function( e ){
					e.preventDefault();
					e.stopPropagation();
					window.flatpickrItem.close();
				} );
			}
		}
	}

	initDatePicker();


	$( 'body' ).on( 'click', '.js-datepicker-btn-reject, .js-datepicker-btn-accept', function(){
		window.flatpickrItem.close();
	} );

	$( '.js-mask-phone' ).mask( '+7(000)000-00-00' );
	$( '.js-mask-snils' ).mask( '000-000-000 00' );

	tippy( '.label--tooltips', {
		theme: 'tomato',
		content: 'Global content',
		arrow: tippy.roundArrow,
	} );
	$( 'body' ).on( 'reinitAnketaFormCompomnents', function(){
		initSelectsLikeAnketaPage();
		initDatePicker();
		$( '.js-mask-phone' ).mask( '+7(000)000-00-00' );
		$( '.js-mask-snils' ).mask( '000-000-000 00' );

		tippy( '.label--tooltips', {
			theme: 'tomato',
			content: 'Global content',
			arrow: tippy.roundArrow,
		} );
		if( typeof (statesOfInputs) !== "undefined" ){
			for( var inpName in statesOfInputs ){
				if( statesOfInputs.hasOwnProperty( inpName ) ){
					var inpVals = statesOfInputs[inpName];
					var inp = $( '.interlabs-feedbackform__container form input[name="' + inpName + '"], .interlabs-feedbackform__container form input[name="' + inpName + '[]"]' );
					var inptype = inp.first().attr( 'type' );
					if( inp.length > 0 && typeof (inptype) !== 'undefined' ){
						if( inptype === 'checkbox' ){
							if(inp.attr('name')!=='AGREE_PROCESSING'){
								inp.prop('checked', false).trigger('change');
								if( typeof (inpVals) === 'object' ){
									for( var active_val_key in inpVals ){
										if( inpVals.hasOwnProperty( active_val_key ) ){
											inp.filter('[value="'+inpVals[active_val_key]+'"]').prop('checked', true).trigger('change');
										}
									}
								}
							}
						}else if( inptype === 'radio' ){

							inp.filter('[value="'+inpVals+'"]').prop('checked', true).trigger('change');
						}
					}
				}
			}
		}

		$( 'body' ).trigger( 'afterReinitAnketaFormCompomnents' );
		$( '.interlabs-feedbackform__container form select' ).trigger( 'change' );


	} );


	// $('body').on('change', '.interlabs-feedbackform__container form checkbox, .interlabs-feedbackform__container form radio
	/* {
    "bitrix_include_areas": "Y",
      "clear_cache": "Y",
      "AJAX_CALL": "N",
      "interlabs__feedbackform": "Y",
      "interlabs__feedbackform_FORM_ID": "anketa_ch_form",
      "sec_1_prog_name": "Очно-заочные (вечерние) подготовительные курсы",
      "sec_1_prog_checkbox": {
    "0": "математика",
        "1": "русский язык"
  },
    "sec_listener_surname": "Koch",
      "sec_listener_name": "Cassady Crawford",
      "sec_listener_patronimyc": "Odit minim ut natus ",
      "sec_listener_birthday": "2023-01-12",
      "sec_listener_address": "Esse eiusmod quia sa",
      "sec_listener_email": "rite@mailinator.com",
      "sec_listener_phone": "+7(171)396-23-55",
      "sec_listener_educational_institution": "Dolores ea et aliqua",
      "sec_listener_educational_class": "Aliquip earum repreh",
      "sec_listener_is_customer": "",
      "sec_delegate_surname": "Ball",
      "sec_delegate_name": "Christopher Cobb",
      "sec_delegate_patronimyc": "Sint nulla natus mag",
      "sec_cust_email": "tunepa@mailinator.com",
      "sec_cust_phone": "+1 (552) 133-4331",
      "AGREE_PROCESSING": "Y"
  }*/

  	function fileFieldInit() {
		const fieldLabels = document.querySelectorAll('[data-js="fieldFile"]');

		if(fieldLabels.length < 1) return

		fieldLabels.forEach(fieldLabel => {
			let field = fieldLabel.querySelector('input');
			let fileName = fieldLabel.querySelector('[data-js="fileName"]');
			let fieldPlaceholder = fileName.innerHTML;
			let fullIcon = fieldLabel.querySelector('[data-js="iconFull"]');

			field.addEventListener('change', () => {
				if(field.files.length > 0) {
					fieldLabel.classList.add('field-file--full');
					fileName.innerHTML = field.files[0].name;
				} else {
					fieldLabel.classList.remove('field-file--full')
					fileName.innerHTML = fieldPlaceholder;
				}
			})

			fullIcon.addEventListener('click', (e) => {
				e.preventDefault()
				e.stopPropagation()
				field.value = '';
				fieldLabel.classList.remove('field-file--full')
				fileName.innerHTML = fieldPlaceholder;
			})
		})
	}

	fileFieldInit()

});



function openSuccessModal(type) {
	$.fancybox.close(); 
	$('#form-success-modal .form-info-modal__group[data-type="'+type+'"]').removeClass('hide');
	$('#form-success-modal .form-info-modal__group:not([data-type="'+type+'"])').addClass('hide');

	$.fancybox.open({
		src: '#form-success-modal',
		type: 'inline',
		opts: {
			//speed: 600,
			//transitionDuration: 700,
			autoFocus: false,
			backFocus: false,
			buttons: false,
			smallBtn: false,
			toolbar: true,
			btnTpl: {
				close: '<button data-fancybox-close class="custom-fancybox-close custom-fancybox-close--outer" title="{{CLOSE}}">' + '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.0623 7.06066C19.6481 6.47487 19.6481 5.52513 19.0623 4.93934C18.4765 4.35355 17.5268 4.35355 16.941 4.93934L12.0016 9.87868L7.31066 5.18771C6.72488 4.60192 5.77513 4.60192 5.18934 5.18771C4.60355 5.77349 4.60355 6.72324 5.18934 7.30903L9.88031 12L5.18934 16.691C4.60355 17.2768 4.60355 18.2265 5.18934 18.8123C5.77513 19.3981 6.72487 19.3981 7.31066 18.8123L12.0016 14.1213L16.941 19.0607C17.5268 19.6464 18.4765 19.6464 19.0623 19.0607C19.6481 18.4749 19.6481 17.5251 19.0623 16.9393L14.123 12L19.0623 7.06066Z" fill="#467C3F"/></svg>' + "</button>"

			},
			baseClass: 'fancybox-form-info-modal',
			touch: false,

			afterShow: function(instance, slide) {/*if(instance['current']['src'] === '#modal-call-you' || instance['current']['src'] === '#modal-request-call'){
					$.ajax({
						url: '/ajax/getForm.php',
						method: 'post',
						data: {'formTemplate': instance['current']['src']},
						success: function(data){
							console.log(data);
							if(instance['current']['src'] === '#modal-call-you'){
								$('.modal-inner.modal-inner--call-you').html(data);
							}
						}
					});
				}*/
			}
		}

	});
};

function openErrModal() {
	$.fancybox.close(); 

	$.fancybox.open({
		src: '#form-error-modal',
		type: 'inline',
		opts: {
			//speed: 600,
			//transitionDuration: 700,
			autoFocus: false,
			backFocus: false,
			buttons: false,
			smallBtn: false,
			toolbar: true,
			btnTpl: {
				close: '<button data-fancybox-close class="custom-fancybox-close custom-fancybox-close--outer" title="{{CLOSE}}">' + '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.0623 7.06066C19.6481 6.47487 19.6481 5.52513 19.0623 4.93934C18.4765 4.35355 17.5268 4.35355 16.941 4.93934L12.0016 9.87868L7.31066 5.18771C6.72488 4.60192 5.77513 4.60192 5.18934 5.18771C4.60355 5.77349 4.60355 6.72324 5.18934 7.30903L9.88031 12L5.18934 16.691C4.60355 17.2768 4.60355 18.2265 5.18934 18.8123C5.77513 19.3981 6.72487 19.3981 7.31066 18.8123L12.0016 14.1213L16.941 19.0607C17.5268 19.6464 18.4765 19.6464 19.0623 19.0607C19.6481 18.4749 19.6481 17.5251 19.0623 16.9393L14.123 12L19.0623 7.06066Z" fill="#467C3F"/></svg>' + "</button>"

			},
			baseClass: 'fancybox-form-info-modal',
			touch: false,

			afterShow: function(instance, slide) {/*if(instance['current']['src'] === '#modal-call-you' || instance['current']['src'] === '#modal-request-call'){
					$.ajax({
						url: '/ajax/getForm.php',
						method: 'post',
						data: {'formTemplate': instance['current']['src']},
						success: function(data){
							console.log(data);
							if(instance['current']['src'] === '#modal-call-you'){
								$('.modal-inner.modal-inner--call-you').html(data);
							}
						}
					});
				}*/
			}
		}

	});
};

$(function() {
	/*openSuccessModal('main');
	openSuccessModal('seminar');
	openSuccessModal('conf');
	openErrModal();*/
});