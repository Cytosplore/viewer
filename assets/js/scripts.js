$(document).ready(init);
$(window).resize(sizeContent);
$(window).scroll(scroller);

function init() {
    sizeContent();
    setupNavigation();
    setupDownloadLinks();
    setupStyles();
    scroller();
}

function setupNavigation() {
    var navHeight = $(".nav-background").height();
    $('a[href*=\\#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top - navHeight;
                $('html,body').animate({ scrollTop: targetOffset }, 1000);
                return false;
            }
        }
    });

    $("#nav-cytosplore").addClass("nav-active-indicator");

    document.querySelector("#nav-toggle").addEventListener("click", toggleResponsiveNav);

    var navitems = document.querySelectorAll(".nav-item");
    navitems.forEach(function(item) {
        item.addEventListener("click", function() {
            if ($(window).width() < 710) {
                toggleResponsiveNav();
            }
        });
    });
}

function setupDownloadLinks() {
    var version = '3.4.0';
    var downloadCv = document.getElementById("download-cv");
    if (downloadCv) {
        let link, icon;
        if (navigator.appVersion.indexOf("Mac") != -1) {
            link = 'https://sec.lumc.nl/mtg-viewer/viewer/mac/CytosploreViewer.' + version + '.dmg';
            icon = '<i class="fab fa-apple" style="font-size: 1.5em; margin-right: 5px;"></i> ';
        } else {
            link = 'https://sec.lumc.nl/mtg-viewer/viewer/win/' + version + '/install_cytosplore_viewer.exe';
            icon = '<i class="fab fa-windows" style="font-size: 1.5em; margin-right: 5px;"></i> ';
        }
        if (link === ""){
            downloadSv.disabled = true;
            downloadSv.style.color = 'gray';
            downloadSv.classList.add('disabled-button');
            downloadSv.style.transform = 'scale(1)';
        }
        downloadCv.innerHTML = icon + 'Viewer';
        downloadCv.href = link;
    }

    var downloadSv = document.getElementById("download-sv");
    if (downloadSv) {
        let link, icon;
        if (navigator.appVersion.indexOf("Mac") !== -1) {
            link="";
            icon = '<i class="fab fa-apple" style="font-size: 1.5em; margin-right: 5px;"></i> ';

        } else {
            link = 'https://sec.lumc.nl/mtg-viewer/viewer/win/SV/install_cytosplore_simian_viewer_offline.exe';
            icon = '<i class="fab fa-windows" style="font-size: 1.5em; margin-right: 5px;"></i> ';
        }
        if (link === ""){
            downloadSv.disabled = true;
            downloadSv.style.color = 'gray';
            downloadSv.classList.add('disabled-button');
            downloadSv.style.transform = 'scale(1)';
        }
        downloadSv.innerHTML = icon + 'Simian Viewer';
        downloadSv.href = link;
    }

    var downloadEv = document.getElementById("download-ev");
    if (downloadEv) {
        let link, icon;
        if (navigator.appVersion.indexOf("Mac") !== -1) {
            link="";
            icon = '<i class="fab fa-apple" style="font-size: 1.5em; margin-right: 5px;"></i> ';

        } else {
            link = '';
            icon = '<i class="fab fa-windows" style="font-size: 1.5em; margin-right: 5px;"></i> ';
        }
        if (link === ""){
            downloadEv.disabled = true;
            downloadEv.style.color = 'gray';
            downloadEv.classList.add('disabled-button');
            downloadEv.style.transform = 'scale(1)';
        }
        downloadEv.innerHTML = icon + 'EvoViewer';
        downloadEv.href = link;
    }
}

function setupStyles() {
    $('.btn-download-os').css({
        'width': '125px',
        'height': '25px',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'center',
        'cursor': 'pointer'
    });

    $('.centered').css({
        'display': 'flex',
        'justify-content': 'center'
    });

    $('.download-buttons').css({
        'display': 'flex',
        'justify-content': 'center',
        'gap': '10px'
    });
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
    $('#actionvideo').width(w);
    $('#actionvideo').height(w * 9 / 16);

    resetResponsiveNav();

    if ($(window).width() < 710) {
        var hamburger = ($(window).width() * 0.95 - 45) + "px";
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
    if (ga.hasOwnProperty("loaded") && ga.loaded == true) {
        ga('send', 'event', {
            eventCategory: 'Outbound Link',
            eventAction: 'click',
            eventLabel: e.target.parentNode.href,
            transport: 'beacon'
        });
    }
}

var elements = document.getElementsByTagName('a');
for (var i = 0, len = elements.length; i < len; i++) {
    var link = elements[i].href;
    if (link.indexOf("/documentation") < 0 && link.indexOf("#") < 0) {
        elements[i].onclick = handleOutboundLinkClicks;
    }
}
