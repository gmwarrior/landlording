$(document).ready(function () {

    $(function () {
        $("form[name='personal_info']").validate({
            rules: {
                'accountSetting[City]':         {required: true},
                'accountSetting[State]':        {required: true},
                'accountSetting[Country]':      {required: true},
                'accountSetting[LastName]':     {required: true},
                'accountSetting[FirstName]':    {required: true},
                'accountSetting[PostalCode]':   {required: true},
                'accountSetting[PhoneNumber]':  {required: true},
                'accountSetting[AddressLine1]': {required: true}
            },
            messages: {
                'accountSetting[City]':         'City is required',
                'accountSetting[State]':        'State is required',
                'accountSetting[Country]':      'Country is required',
                'accountSetting[LastName]':     'Last Name is required',
                'accountSetting[FirstName]':    'First Name is required',
                'accountSetting[PostalCode]':   'Postal Code is required',
                'accountSetting[PhoneNumber]':  'Phone Number is required',
                'accountSetting[AddressLine1]': 'Address Line 1 is required'
            },
            submitHandler: function (form, e) {
                ajaxRequest(e);
            }
        });
    });

    $("#DeleteBillingDetails").click(function () {
        const userID = $(this).data('user-id');
        ajaxDeleteReq(userID);
    });

    // Interactive Zipcodes
    $('input.zipcode_interactive').blur(function (data) {
        $('#ASIncorrectZipCode').text('');
        const zipcode = $(this).val();
        const from = $(this).data('from');
        getCityState(zipcode, from)
    });

    function ajaxRequest(e) {
        e.preventDefault();
        disableButton();
        const city         = $('#accountSettingCity').val();
        const state        = $('#accountSettingState').val();
        const user_id      = $('#accountSettingUserID').val();
        const country      = $('#accountSettingCountry').val();
        const last_name    = $('#accountSettingLastName').val();
        const first_name   = $('#accountSettingFirstName').val();
        const phone_number = $('#accountSettingPhoneNumber').val();
        const company_name = $('#accountSettingCompanyName').val();
        const postal_code  = $('#accountSettingPostalCode').val();
        $.ajax({
            url: `/account_settings/${user_id}`,
            type: 'PUT',
            data: {
                account_setting: {
                    city:         city,
                    state:        state,
                    country:      country,
                    last_name:    last_name,
                    first_name:   first_name,
                    postal_code:  postal_code,
                    phone_number: phone_number,
                    company_name: company_name
                }
            },
            success: function (data) {
                response_handler(data);
            },
            error: function (exception) {
            }
        });
        return false;
    }

    function ajaxDeleteReq(id) {
        $.ajax({
            url: `/account_settings/${id}`,
            type: 'DELETE',
            data: {
                account_setting: {
                    id: id
                }
            },
            success: function (data) {
                if (data.success === true) {
                    $('#BillingDetailNotice')
                        .show()
                        .append(data.message)
                        .delay(2000)
                        .fadeOut(300);
                }
                location.reload();
            },
            error: function (exception) {
            }
        });
    }

    function enableButton() {
        $('#AccSettingUpdatePassBtn').prop('disabled', false);
    }

    function disableButton() {
        $('#AccSettingUpdatePassBtn').prop('disabled', true);
    }

    function response_handler(data) {
        if (data.success === true || data.success === false) {
            render_message(data);
        }
    }

    function render_message(data) {
        clearErrors();
        $(data.success === true ? '.success_alert' : '.error_alert')
            .text('')
            .show()
            .append(data.message)
            .delay(2000)
            .fadeOut(300);
        enableButton();
    }

    function clearErrors() {
        $('.error_alert').text('').addClass('display_none');
    }

    function getCityState(zipcode, from) {
        $.ajax({
            url: '/properties/get_zip_data/' + zipcode,
            type: 'GET',
            data: {},
            success: function (data) {
                if (data.success === true) {
                    if (from === 'account_settings') {
                        $('#accountSettingCity').attr('value', data.message.city);
                        $('#accountSettingState').attr('value', data.message.state);
                        $('#accountSettingCountry').attr('value', data.message.county);
                    }
                } else {
                    $('#ASIncorrectZipCode').text('').show().text(data.message);
                }
            },
            error: function (exception) {
            }
        });
    }

});



