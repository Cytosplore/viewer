$(document).ready(init);
$(window).on('resize', function() {
    sizeContent();
    setupStyles();
}).on('scroll', scroller);
function init() {
    sizeContent();
    setupNavigation();
    setupDownloadLinks();
    setupStyles();
    scroller();
}

function setupNavigation() {
    var navHeight = $(".nav-background").height();
    $('a[href*=\\#]').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                $('html,body').animate({ scrollTop: $target.offset().top - navHeight }, 1000);
                return false;
            }
        }
    });

    $("#nav-cytosplore").addClass("nav-active-indicator");
    $("#nav-toggle").on("click", toggleResponsiveNav);

    $(".nav-item").on("click", function() {
        if ($(window).width() < 710) {
            toggleResponsiveNav();
        }
    });
}

function setupDownloadLinks() {
    setupDownloadLink("download-cv", "3.4.0", 'Viewer', 'https://sec.lumc.nl/mtg-viewer/viewer/mac/CytosploreViewer.3.4.0.dmg', 'https://sec.lumc.nl/mtg-viewer/viewer/win/3.4.0/install_cytosplore_viewer.exe', 'Download Cytosplore Viewer');
    setupDownloadLink("download-sv", "1.0.0", 'Simian Viewer', '', 'https://sec.lumc.nl/mtg-viewer/viewer/win/SV/install_cytosplore_simian_viewer_offline.exe', 'Download Cytosplore Simian Viewer');
    setupDownloadLink("download-ev", "1.0.0", 'EvoViewer', '', '', 'Download Cytosplore EvoViewer');
}

function setupDownloadLink(elementId, version, label, macLink, winLink, tooltip) {
    var element = $("#" + elementId);
    if (element.length) {
        let link = navigator.appVersion.indexOf("Mac") !== -1 ? macLink : winLink;
        let icon = navigator.appVersion.indexOf("Mac") !== -1 ? '<i class="fab fa-apple" style="font-size: 1.5em; margin-right: 5px;"></i> ' : '<i class="fab fa-windows" style="font-size: 1.5em; margin-right: 5px;"></i> ';
        if (!link) {
            element.prop('disabled', true).css('color', 'gray').addClass('disabled-button').css('transform', 'scale(1)');
        }
        element.html(icon + label).attr('href', link).attr('title', tooltip);
    }
}

function setupStyles() {
    $('.btn-download-os').css({
        'width': '140px',
        'height': '25px',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'cursor': 'pointer',
        'margin-top': '5px',
        'font-weight': 'normal'
    });

    $('.centered, .download-buttons').css({
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center' // Add this line
    });

    $('.download-buttons').css('gap', '10px');

    if ($(window).width() < 710) {
        $('.download-buttons').css({
            'flex-direction': 'column',
            'align-items': 'center'
        });
    } else {
        $('.download-buttons').css('flex-direction', 'row');
    }
}
function toggleResponsiveNav() {
    $('#nav-toggle').toggleClass("active");
    $('#nav-full').slideToggle(250);
    $('.nav-background').toggleClass("nav-toggled");
}

function resetResponsiveNav() {
    $('#nav-toggle').removeClass("active");
    $('#nav-full').hide();
    $('.nav-background').removeClass("nav-toggled");
}

function sizeContent() {
    var w = $('.main-wrapper').width() - 65;
    if ($(window).width() >= 710) w -= 35;
    $('#actionvideo').width(w).height(w * 9 / 16);

    resetResponsiveNav();

    if ($(window).width() < 710) {
        $('#nav-hamburger').css("left", ($(window).width() * 0.95 - 45) + "px").show();
        $('#nav-full').hide();
    } else {
        $('#nav-hamburger').hide();
        $('#nav-full').show();
    }
}

function scroller() {
    var url = window.location.href;
    if (url.indexOf('documentation') >= 0) {
        setActiveNav("#nav-documentation");
    } else {
        var scrollPosition = $(window).scrollTop() + 100;
        var p1 = $("#team").offset().top;
        var p2 = $("#publications").offset().top;
        var p3 = $("#get").offset().top;

        if (scrollPosition > p3 || $(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            setActiveNav("#nav-download");
        } else if (scrollPosition > p2) {
            setActiveNav("#nav-publications");
        } else if (scrollPosition > p1) {
            setActiveNav("#nav-team");
        } else {
            setActiveNav("#nav-cytosplore");
        }
    }
}

function setActiveNav(selector) {
    $(".nav-active-indicator").removeClass("nav-active-indicator");
    $(selector).addClass("nav-active-indicator");
}

function handleOutboundLinkClicks(e) {
    if (ga.hasOwnProperty("loaded") && ga.loaded) {
        ga('send', 'event', {
            eventCategory: 'Outbound Link',
            eventAction: 'click',
            eventLabel: e.target.parentNode.href,
            transport: 'beacon'
        });
    }
}

$('a').each(function() {
    var link = this.href;
    if (link.indexOf("/documentation") < 0 && link.indexOf("#") < 0) {
        $(this).on('click', handleOutboundLinkClicks);
    }
});
