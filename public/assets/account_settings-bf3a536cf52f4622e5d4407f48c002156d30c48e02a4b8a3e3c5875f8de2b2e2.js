$(document).ready(function(){function t(t){t.preventDefault();const e=$("#accountSettingCity").val(),n=$("#accountSettingState").val(),a=$("#accountSettingUserID").val(),i=$("#accountSettingCountry").val(),c=$("#accountSettingLastName").val(),u=$("#accountSettingFirstName").val(),o=$("#accountSettingPhoneNumber").val(),r=$("#accountSettingCompanyName").val(),s=$("#accountSettingPostalCode").val(),d=$("#accountSettingAddressLine1").val(),l=$("#accountSettingAddressLine2").val();return $.ajax({url:`/account_settings/${a}`,type:"PUT",data:{account_setting:{city:e,state:n,country:i,last_name:c,first_name:u,postal_code:s,phone_number:o,company_name:r,address_line_one:d,address_line_two:l}},success:function(){},error:function(){}}),!1}function e(t){$.ajax({url:`/account_settings/${t}`,type:"DELETE",data:{account_setting:{id:t}},success:function(t){!0===t.success&&$("#BillingDetailNotice").show().append(t.message).delay(2e3).fadeOut(300),location.reload()},error:function(){}})}$(function(){$("form[name='personal_info']").validate({rules:{"accountSetting[City]":{required:!0},"accountSetting[State]":{required:!0},"accountSetting[Country]":{required:!0},"accountSetting[LastName]":{required:!0},"accountSetting[FirstName]":{required:!0},"accountSetting[PostalCode]":{required:!0},"accountSetting[PhoneNumber]":{required:!0},"accountSetting[AddressLine1]":{required:!0}},messages:{"accountSetting[City]":"City is required","accountSetting[State]":"State is required","accountSetting[Country]":"Country is required","accountSetting[LastName]":"Last Name is required","accountSetting[FirstName]":"First Name is required","accountSetting[PostalCode]":"Postal Code is required","accountSetting[PhoneNumber]":"Phone Number is required","accountSetting[AddressLine1]":"Address Line 1 is required"},submitHandler:function(e,n){t(n)}})}),$("#DeleteBillingDetails").click(function(){e($(this).data("user-id"))})});