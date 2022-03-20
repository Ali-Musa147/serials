/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {

	"use strict";

	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 1500);

	
	
	/* Contact-form
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	// $.validator.setDefaults({
	// 	submitHandler: function () {
	// 		alert("submitted!");
	// 	}
	// });

	// $(document).ready(function () {
	// 	$("#contact-form").validate({
	// 		rules: {
	// 			firstname: "required",
	// 			email: {
	// 				required: true,
	// 				email: true
	// 			},
	// 			lastname: "required",
	// 			message: "required",
	// 			agree: "required"
	// 		},
	// 		messages: {
	// 			firstname: "Please enter your firstname",
	// 			email: "Please enter a valid email address",
	// 			lastname: "Please enter your lastname",
	// 			username: {
	// 				required: "Please enter a username",
	// 				minlength: "Your username must consist of at least 2 characters"
	// 			},
	// 			message: "Please enter your Message",
	// 			agree: "Please accept our policy"
	// 		},
	// 		errorElement: "div",
	// 		errorPlacement: function (error, element) {
	// 			// Add the `help-block` class to the error element
	// 			error.addClass("help-block");

	// 			if (element.prop("type") === "checkbox") {
	// 				error.insertAfter(element.parent("input"));
	// 			} else {
	// 				error.insertAfter(element);
	// 			}
	// 		},
	// 		highlight: function (element, errorClass, validClass) {
	// 			$(element).parents(".col-md-4, .col-md-12").addClass("has-error").removeClass("has-success");
	// 		},
	// 		unhighlight: function (element, errorClass, validClass) {
	// 			$(element).parents(".col-md-4, .col-md-12").addClass("has-success").removeClass("has-error");
	// 		}
	// 	});
	// });

	

});