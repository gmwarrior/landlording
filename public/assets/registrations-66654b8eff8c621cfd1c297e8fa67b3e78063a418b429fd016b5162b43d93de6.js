$(document).ready(function(){function e(e){e.preventDefault(),t();const s=$("#RegPass").val(),i=$("#RegEmail").val(),a=$("#FullName").val();return $.ajax({url:"/users",type:"POST",data:{user:{email:i,password:s,full_name:a}},success:function(e){r(e)},error:function(){}}),!1}function s(){$("#SignupBtn").prop("disabled",!1).text("Sign Up")}function t(){$("#SignupBtn").prop("disabled",!0).text("Submitting...")}function r(e){!0===e.success&&(i(e),$("#RegistrationForm")[0].reset()),!1===e.success&&a(e)}function i(e){n(),s(),window.location.href=e.url}function a(e){n(),"user_exists?"!==e.method&&"validate_email?"!==e.method||$("#UserExists").show().text(e.message),"password_clashing?"===e.method&&$("#PasswordError").show().text(e.message),"params_missing?"===e.method&&$(".error_alert").text("").show().text(e.message),s()}function n(){$(".error_alert").text("").hide(),$(".success_alert").text("").hide(),$("#UserExists").text("").hide(),$("#PasswordError").text("").hide()}$(function(){$("form[name='registration']").validate({rules:{"user-TOS":{required:!0},"user[FullName]":{required:!0},"user[email]":{required:!0,email:!0},"user[password]":{required:!0,minlength:8}},messages:{"user[email]":"Please enter a valid email address","user[FullName]":{required:"Full Name is required."},"user[password]":{required:"Please provide a password",minlength:"Password is too short (minimum is 8 characters)"},"user-TOS":"Please indicate that you have accepted Terms and Conditions"},submitHandler:function(s,t){e(t)}})}),$("#RegEmail").keyup(function(){$("#UserExists").hide()}),$("#RegPass").keyup(function(){$("#PasswordError").hide()}),$("#registrationEye").click(function(){const e=$(".toggle-password-registration");"password"===e.attr("type")?e.attr("type","text"):e.attr("type","password")})});