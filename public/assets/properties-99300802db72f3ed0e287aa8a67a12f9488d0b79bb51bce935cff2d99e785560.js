$(document).ready(function(){function e(e){e.preventDefault(),t();const r=$("#propertyCity").val(),a=$("#propertySAL1").val(),p=$("#propertySAL2").val(),d=$("#propertyState").val(),n=$("#PropertyUserID").val(),l=$(".currently-leased").val(),y=$("#propertyBedroomA").val(),i=$("#propertyBedroomB").val(),s=$("#propertyPostalCode").val(),u=$(".asked-for-property").val(),c=$("#propertyPropertyType").val(),m=$("#propertyLandlordInfo").val(),_=$("#propertyNewTenantName").val(),v=$("#propertyNewTenantPhone").val(),q=$("#propertyNewTenantEmail").val(),C=$("#propertyNewLeaseEndDate").val(),L=$("#propertyNewLeaseStartDate").val(),f=$("#propertyLandlordContactName").val(),P=$("#propertyLandlordContactPhone").val(),S=$("#propertyLandlordContactEmail").val();return $.ajax({url:"/properties",type:"POST",data:{property:{city:r,state:d,user_id:n,bed_one:y,bed_two:i,postal_code:s,property_type:c,saved_landlord:m,address_line_one:a,address_line_two:p,currently_leased:l,property_for_notice:u,landlord_contact_name:f,landlord_contact_phone:P,landlord_contact_email:S},tenant:{name:_,email:q,phone_number:v,lease_end_date:C,lease_start_date:L}},success:function(e){o(e)},error:function(){}}),!1}function r(){$("#SavePropertyBtn").prop("disabled",!1)}function t(){$("#SavePropertyBtn").prop("disabled",!0)}function o(e){r(),!0===e.success&&($("form[name='property_form']")[0].reset(),$("html, body").animate({scrollTop:0},"slow"),$(".success_alert").text("").show().append(e.message).delay(3e3).fadeOut(300))}$(function(){$("form[name='property_form']").validate({rules:{"property[City]":{required:!0},"property[SAL1]":{required:!0},"property[State]":{required:!0},"property[PostalCode]":{required:!0},"property[property_type]":{required:!0},"property[LandlordContactName]":{required:!0},"property[LandlordContactPhone]":{required:!0},"property[LandlordContactEmail]":{required:!0}},messages:{"property[State]":{required:"Please select state"},"property[City]":{required:"City name is required"},"property[PostalCode]":{required:"Postal Code is required"},"property[property_type]":{required:"Please select property type"},"property[LandlordContactName]":{required:"Landlord Contact Name is required"},"property[SAL1]":{required:"Street Address Line 1 is required"},"property[LandlordContactEmail]":{required:"Landlord Contact Email is required"},"property[LandlordContactPhone]":{required:"Landlord Contact Phone is required"}},submitHandler:function(r,t){e(t)}})})});