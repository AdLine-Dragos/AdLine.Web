$(function() {
var getWindowWidth = $(window).width();
var inputwidth = $('#form_name').width();
var textareaW = $('#form_message');
var errobox = $('#form_errorbox');
var formbutton = $('#form_button');
var socialnetworks = $('#socialnetworks');

if (getWindowWidth <= 767 && getWindowWidth >= 361) {
	$('.shortInfo').css('display', 'block');
	$('.shortInfo div').removeClass("pagination-centered");
	$('.mobile-wwd').css('display', 'none');
    textareaW.width(inputwidth - 15);
    errobox.width(inputwidth - 15);
    formbutton.width(inputwidth + 3);
    socialnetworks.width(inputwidth/2);
}
else if (getWindowWidth <=360)
	{
		$('.shortInfo').css('display', 'none');
		$('.mobile-wwd').css('display', 'block');
        textareaW.width(inputwidth - 15);
        errobox.width(inputwidth - 15);
        formbutton.width(inputwidth + 3);
        socialnetworks.width(inputwidth/2);
	}
else {
	$('.shortInfo').css('display', 'block');
	$('.shortInfo div').addClass("pagination-centered");
	$('.mobile-wwd').css('display', 'none');
    textareaW.width(inputwidth - 15);
    errobox.width(inputwidth - 15);
    formbutton.width(inputwidth + 3);
}
	

$(window).resize(function () {
var windowwidth = $(window).width();
var inputwidth = $('#form_name').width();
var textareaW = $('#form_message');
var errobox = $('#form_errorbox');
var formbutton = $('#form_button');
var socialnetworks = $('#socialnetworks');
function fixSlide() {
	if (windowwidth <= 767 && windowwidth >= 361) {
		$('.shortInfo').css('display', 'block');
		$('.shortInfo div').removeClass("pagination-centered");
		$('.mobile-wwd').css('display', 'none');
        textareaW.width(inputwidth - 15);
        errobox.width(inputwidth - 15);
        formbutton.width(inputwidth + 3);
        socialnetworks.width(inputwidth/2);
	}
	else if (windowwidth <=360)
	{
		$('.shortInfo').css('display', 'none');
		$('.mobile-wwd').css('display', 'block');
        textareaW.width(inputwidth - 15);
        errobox.width(inputwidth - 15);
        formbutton.width(inputwidth + 3);
        socialnetworks.width(inputwidth/2);
	}
	else {
	$('.shortInfo').css('display', 'block');
	$('.shortInfo div').addClass("pagination-centered");
	$('.mobile-wwd').css('display', 'none');
    textareaW.width(inputwidth - 15);
    errobox.width(inputwidth-15);
    formbutton.width(inputwidth + 3);
	}
}

fixSlide();	
});

	$("#back-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 1200,'easeInOutCubic');
			return false;
		});
	});

// CONTACT FORM

var submitButton = $('#form_button');
    var sender = $('#form_name');
    var email = $('#form_email');
    var message = $('#form_message');
    var error = $('#form_errorbox');

function checkLanguage(textRO, textEN) {
    if(submitButton.html() == "Trimite mesajul!") {
        error.text(textRO);
    }
    else {
        error.text(textEN);
    }
}
    function validateSender() {
        if (sender.val().length < 4) {
            checkLanguage("Numele trebuie sa aiba minim 3 litere!", "The name should be more than 3 letters!");
            sender.addClass("animated shake alert-error");
            error.addClass("red");
            submitButton.prop('disabled', true);
            return false;

        }
        //if it's valid
        else {
            sender.removeClass("alert-error animated shake");
            error.text("");
            error.addClass("check1");
            error.removeClass("red");
            submitButton.prop('disabled', false);
            return true;
        }
    }


    function validateMessage() {
        //it's NOT valid
        if (message.val().length < 10) {
            checkLanguage("Mesajul trebuie sa contina minim 3 litere!", "The message should contain more than 9 words!");
            message.addClass("animated shake alert-error");
            error.addClass("red");
            submitButton.prop('disabled', true);
            return false;
        }
        //it's valid
        else {
            message.removeClass("alert-error animated shake");
            error.text("");
            error.addClass("check2");
            error.removeClass("red");
            submitButton.prop('disabled', false);
            return true;
        }
    }

    function validateEmail() {
        //testing regular expression
        var a = email.val();
        var filter = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        //if it's valid email
        if (filter.test(a)) {
            email.removeClass("alert-error animated shake");
            error.text("");
            error.addClass("check3");
            error.removeClass("red");
            submitButton.prop('disabled', false);
            return false;
        } else {
            checkLanguage("Email-ul este invalid!", "This is not a valid email!");
            email.addClass("alert-error animated shake");
            error.addClass("red");
            submitButton.prop('disabled', true);
            return true;
        }
    }


    //On blur
    sender.blur(function () {
        validateSender();
        if (error.hasClass("check1") && error.hasClass("check2") && error.hasClass("check3")) {
            checkLanguage("Totul pare in regula. Poti trimite mesajul!", "Everything seems to be fine. You can send the form now!");
            error.removeClass("red");
            error.addClass("alert-success");
            submitButton.prop('disabled', false);
        }

    });
    //On blur
    email.blur(function () {
        validateEmail();
        if (error.hasClass("check1") && error.hasClass("check2") && error.hasClass("check3")) {
            checkLanguage("Totul pare in regula. Poti trimite mesajul!", "Everything seems to be fine. You can send the form now!");
            error.removeClass("red");
            error.addClass("alert-success");
            submitButton.prop('disabled', false);
        }
    });
    //On blur
    message.blur(function () {
        validateMessage();
        if (error.hasClass("check1") && error.hasClass("check2") && error.hasClass("check3")) {
            checkLanguage("Totul pare in regula. Poti trimite mesajul!", "Everything seems to be fine. You can send the form now!");
            error.removeClass("red");
            error.addClass("alert-success");
            submitButton.prop('disabled', false);
        }
    });
    $('#form_message').keyup(function () {

        countKeys = $(this).val().length;

        if (countKeys > 10) {
            validateMessage();
            countKeys = 0;
        }

    });




    //if submit button is clicked
    $('#form_button').click(function () {
    	validateSender();validateEmail();validateMessage();
        if (!error.hasClass("check1") || !error.hasClass("check2") || !error.hasClass("check3")) {
            checkLanguage("Asigura-te ca ai completat toate campurile!", "Please make sure everything is filled correctly!");
            $(this).prop('disabled', true);
        } else {
            //Get the data from all the fields
            var name = $('input[name=name]');
            var email = $('input[name=email]');
            var message = $('textarea[name=message]');

            //organize the data properly
            var data = 'name=' + name.val() + '&email=' + email.val() + '&message=' + encodeURIComponent(message.val());

            //disabled all the text fields
            $('#form_name, #form_email, #form_message').attr('disabled', 'true');

            //show the loading sign
            $('.loading').show();
            //start the ajax
            $.ajax({
                //this is the php file that processes the data and send mail
                url: "../base/sendform.php",

                //GET method is used
                type: "GET",

                //pass the data			
                data: data,

                //Do not cache the page
                cache: false,

                //success
                success: function (html) {
                    //if process.php returned 1/true (send mail success)
                    if (html == 1) {
                        //hide the form
                        $('#contact_form').hide('drop', function () {
                            if(submitButton.html() == "Trimite mesajul!") {
                                $('#form_div').html(
                                    "<div class=\"checkForm animated flipInX\"></div>" +
                                    "<p class=\"white checkedform_msg animated fadeInUp\">Mesajul tau a fost trimis cu succes! Multumim!</p>");
                                $('#form_div').fadeIn('slow');
                            }
                            else {
                                $('#form_div').html(
                                    "<div class=\"checkForm animated flipInX\"></div>" +
                                    "<p class=\"white checkedform_msg animated fadeInUp\">Your message was successfully sent! Thank you!</p>");
                                $('#form_div').fadeIn('slow');
                        }
                        });



                        //if process.php returned 0/false (send mail failed)
                    } else {
                        checkLanguage("Am detectat cateva probleme cu procesarea. Va rugam incercati mai tarziu!", "There are some problems with the server! Please try again later!")
                        $('.loading').hide();
                        $('#form_name, #form_email, #form_message').attr('disabled', '');
                        error.addClass("red");
                        error.text("There are some problems with the server! Please try again later!");
                        submitButton.prop('disabled', true);
                    }
                }
            });

            //cancel the submit button default behaviours
            return false;
        }
    });







/* <![CDATA[ */ /* PLACEHOLDER IN IE */

  var input = document.createElement("input");
    if(('placeholder' in input)==false) { 
    $('[placeholder]').focus(function() {
      var i = $(this);
      if(i.val() == i.attr('placeholder')) {
        i.val('').removeClass('placeholder');
        if(i.hasClass('password')) {
          i.removeClass('password');
          this.type='password';
        }     
      }
    }).blur(function() {
      var i = $(this);  
      if(i.val() == '' || i.val() == i.attr('placeholder')) {
        if(this.type=='password') {
          i.addClass('password');
          this.type='text';
        }
        i.addClass('placeholder').val(i.attr('placeholder'));
      }
    }).blur().parents('form').submit(function() {
      $(this).find('[placeholder]').each(function() {
        var i = $(this);
        if(i.val() == i.attr('placeholder'))
          i.val('');
      })
    });
  }

/* ]]> */

// LOGIN FORM

$('#login_wrapper').show();
$('#signup_form').hide();
$('#login_wrapper').addClass('animated fadeInDown');

$('#login_tabs_signup').click(function() {
    $(this).removeClass('login_tab_inactive');
    $('#login_tabs_login').addClass('login_tab_inactive');
    $('#login_form').hide('fade',function(){
        $('#signup_form').show('fade');
    });

});
$('#login_tabs_login').click(function() {
    $(this).removeClass('login_tab_inactive');
    $('#login_tabs_signup').addClass('login_tab_inactive');
    $('#signup_form').hide('fade', function(){
        $('#login_form').show('fade');
    });

});


// INITIALIZATION ON DOC READY

    $('#slider1').tinycarousel();
    $('.bxslider').bxSlider({
         adaptiveHeight: true,
         preload: 'visible',
         speed: 1000
    });        
    $("img.lazy").lazyload({
      threshold: 150,
      effect : "fadeIn"
    });
   


});


$('.navbar ul li a').not($('#language-bar, #user-buttons div a')).bind('click', function(e) {
   e.preventDefault();
   $('html, body').animate({ scrollTop: $(this.hash).offset().top }, 1200,'easeInOutCubic');

   // edit: Opera requires the "html" elm. animated
});


//Wait for the animation to finish and then switch to login
$('#user-buttons a').click(function() {
    var clickedAnchor = $(this).attr('href');
    $('body').hide('fade', 500, function() {
        location.href = clickedAnchor;
    });
    $('#login_wrapper').hide();
    return false;
});


//Wait for the animation to finish and then switch to index
$('#login-home-link').click(function() {
    var clickedAnchor = $(this).attr('href');
    var logWrap = $('#login_wrapper');
    logWrap.removeClass('fadeInDown');;
    logWrap.addClass('fadeOutUp').bind('animationend webkitAnimationEnd MSAnimationEnd oAnimationEnd', function(e){
    
    location.href= clickedAnchor;

});

    return false;
});
