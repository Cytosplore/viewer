$(document).ready(init);

$(window).resize(sizeContent);

$(window).scroll(scroller);

function init() {

	sizeContent();

	var navHeight = $(".nav-background").height();
    $('a[href*=\\#]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
				if(true) targetOffset -= navHeight;
                $('html,body').animate({scrollTop: targetOffset}, 1000);
                return false;
            }
        }
    });

	$("#nav-cytosplore").addClass("nav-active-indicator");

    document.querySelector( "#nav-toggle" ).addEventListener( "click", function() {
        toggleResponsiveNav();
    });

    var navitems = document.querySelectorAll( ".nav-item" )
    for (var i = 0, len = navitems.length; i < len; i++) {
        navitems[i].addEventListener( "click", function() {
            if( $( window ).width() < 725 ){ toggleResponsiveNav(); }
        });
    }

    scroller();
}

function toggleResponsiveNav() {
    $('#nav-toggle').toggleClass( "active" );
    $('#nav-full').slideToggle(250);
    $('.nav-background').toggleClass("nav-toggled");
}

function resetResponsiveNav() {
    $('#nav-toggle').removeClass( "active" );
    $('#nav-full').hide();
    $('.nav-background').removeClass("nav-toggled");
}

function sizeContent() {

	var w = $('.main-wrapper').width() - 65;
	if( $( window ).width() >= 640 ) w -= 35;
	$('#actionvideo').width(w);
	$('#actionvideo').height(w*9/16);

    resetResponsiveNav();

    if($( window ).width() < 640)
    {
        var hamburger = ($( window ).width() * 0.95 - 45) + "px";
        $('#nav-hamburger').css("left", hamburger);

        $('#nav-hamburger').show();
        $('#nav-full').hide();

    } else {
        $('#nav-hamburger').hide();
        $('#nav-full').show();
    }
}
function scroller() {

  var url = window.location.href;
  if( url.indexOf('documentation') >= 0 )
  {
    $("#nav-cytosplore").removeClass("nav-active-indicator");
    $("#nav-team").removeClass("nav-active-indicator");
    $("#nav-publications").removeClass("nav-active-indicator");
    $("#nav-download").removeClass("nav-active-indicator");
    $("#nav-documentation").addClass("nav-active-indicator");
  }
  else {

  	var scrollPosition = $(window).scrollTop() + 100;

  	var p0 = 0;
  	var p1 = $("#team").offset().top;
  	var p2 = $("#publications").offset().top;
  	var p3 = $("#get").offset().top;

  	if( scrollPosition > p3 || $(window).scrollTop() + $(window).height() > $(document).height() - 100 )
  	{
  		$("#nav-cytosplore").removeClass("nav-active-indicator");
  		$("#nav-team").removeClass("nav-active-indicator");
  		$("#nav-publications").removeClass("nav-active-indicator");
  		$("#nav-download").addClass("nav-active-indicator");
  		$("#nav-documentation").removeClass("nav-active-indicator");
  	}
  	else if( scrollPosition > p2 )
  	{
  		$("#nav-cytosplore").removeClass("nav-active-indicator");
  		$("#nav-team").removeClass("nav-active-indicator");
  		$("#nav-publications").addClass("nav-active-indicator");
  		$("#nav-download").removeClass("nav-active-indicator");
  		$("#nav-documentation").removeClass("nav-active-indicator");
  	}
  	else if( scrollPosition > p1 )
  	{
  		$("#nav-cytosplore").removeClass("nav-active-indicator");
  		$("#nav-team").addClass("nav-active-indicator");
  		$("#nav-publications").removeClass("nav-active-indicator");
  		$("#nav-download").removeClass("nav-active-indicator");
  		$("#nav-documentation").removeClass("nav-active-indicator");
  	}
  	else
  	{
  		$("#nav-cytosplore").addClass("nav-active-indicator");
  		$("#nav-team").removeClass("nav-active-indicator");
  		$("#nav-publications").removeClass("nav-active-indicator");
  		$("#nav-download").removeClass("nav-active-indicator");
  		$("#nav-documentation").removeClass("nav-active-indicator");
  	}
  }
}

function handleOutboundLinkClicks(e) {
	if (ga.hasOwnProperty("loaded") && ga.loaded == true)
	{
	  ga('send', 'event', {
	    eventCategory: 'Outbound Link',
	    eventAction: 'click',
	    eventLabel: e.target.parentNode.href,
	    transport: 'beacon'
	  });
	}
}

var elements = document.getElementsByTagName('a');
for(var i = 0, len = elements.length; i < len; i++) {
	var link = elements[i].href;
	if(link.indexOf("/documentation") < 0 && link.indexOf("#") < 0 )
	{
		console.log(elements[i].href);
		elements[i].onclick = function (e) {
	  	handleOutboundLinkClicks(e);
	  }
	}
}
