$(document).ready(function(){function e(e){e.preventDefault(),r();const i=$("#RegPass").val(),a=$("#RegEmail").val(),n=$("#FullName").val();return $.ajax({url:"/users",type:"POST",data:{user:{email:a,password:i,first_name:n}},success:function(e){!0===e.success&&(t(),s(),window.location.href=e.url,$("#RegistrationForm")[0].reset()),!1===e.success&&"Email has already been taken. Try Another"===e.message&&($("#UserExists").removeClass("display_none").show().append(e.message),s())},error:function(){}}),!1}function s(){$("#SignupBtn").prop("disabled",!1).text("Sign Up")}function r(){$("#SignupBtn").prop("disabled",!0).text("Submitting...")}function t(){$(".error_alert").text("").hide(),$(".success_alert").text("").hide(),$("#UserExists").text("").hide(),$("#PasswordError").text("").hide()}$(function(){$("form[name='registration']").validate({rules:{"user-TOS":{required:!0},"user[FullName]":{required:!0},"user[email]":{required:!0,email:!0},"user[password]":{required:!0,minlength:8}},messages:{"user[email]":{required:"Email is required",email:"Email is not valid"},"user[FullName]":{required:"Full Name is required."},"user[password]":{required:"Please provide a password",minlength:"Password is too short (minimum is 8 characters)"},"user-TOS":"Please indicate that you have accepted Terms and Conditions"},submitHandler:function(s,r){e(r)}})}),$("#RegEmail").keyup(function(){$("#UserExists").hide()}),$("#RegPass").keyup(function(){$("#PasswordError").hide()}),$("#registrationEye").click(function(){const e=$(".toggle-password-registration");"password"===e.attr("type")?e.attr("type","text"):e.attr("type","password")})});