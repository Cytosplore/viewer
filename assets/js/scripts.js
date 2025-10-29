$(document).ready(init);
$(window)
  .on("resize", function () {
    sizeContent();
    setupStyles();
    setupDownloadLinks();
  })
  .on("scroll", scroller);

function init() {
  sizeContent();
  setupNavigation();
  setupDownloadLinks();
  setupStyles();
  scroller();
}

function setupNavigation() {
  var navHeight = $(".nav-background").height();
  $("a[href*=\\#]").on("click", function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var $target = $(this.hash);
      $target =
        ($target.length && $target) || $("[name=" + this.hash.slice(1) + "]");
      if ($target.length) {
        $("html,body").animate(
          { scrollTop: $target.offset().top - navHeight },
          1000
        );
        return false;
      }
    }
  });

  $("#nav-cytosplore").addClass("nav-active-indicator");
  $("#nav-toggle").on("click", toggleResponsiveNav);

  $(".nav-item").on("click", function () {
    if ($(window).width() < 710) {
      toggleResponsiveNav();
    }
  });
}

function setupDownloadLinks() {
  $(".btn-download-os").remove();

  const buttons = [
    {
      id: "download-combined",
      version: "1.0.0",
      label: "Cytosplore Viewer",
      macLink:
        "https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/Installers/HMBA/Cytosplore_Viewer_Mac.dmg",
      winLink:
        "https://sec.lumc.nl/mtg-viewer/MV_data/CytosploreViewer/Installers/HMBA/Cytosplore_Viewer_Windows.exe",
      linLink: "",
      tooltip: "Download Cytosplore Viewer",
      container: "#get-Manivault-cytosplore-installer .download-buttons",
    },
  ];

  buttons.forEach((buttonItem) => {
    const button = $("<a>", {
      id: buttonItem.id,
      class: "btn-download-os",
      href: "#",
      title: buttonItem.tooltip,
    });

    $(buttonItem.container).append(button);

    setupDownloadLink(
      buttonItem.id,
      buttonItem.version,
      buttonItem.label,
      buttonItem.macLink,
      buttonItem.winLink,
      buttonItem.linLink,
      buttonItem.tooltip
    );
  });
}

function setupDownloadLink(
  elementId,
  version,
  label,
  macLink,
  winLink,
  linLink,
  tooltip
) {
  var element = $("#" + elementId);
  if (element.length) {
    let userAgent = navigator.userAgent.toLowerCase();
    let isMac =
      userAgent.indexOf("mac") !== -1 || userAgent.indexOf("darwin") !== -1;
    let isLinux =
      userAgent.indexOf("linux") !== -1 && userAgent.indexOf("android") === -1;
    let isWindows =
      userAgent.indexOf("windows") !== -1 ||
      userAgent.indexOf("win32") !== -1 ||
      userAgent.indexOf("win64") !== -1 ||
      userAgent.indexOf("wow64") !== -1;

    let link = isMac ? macLink : isLinux ? linLink : isWindows ? winLink : "";
    let icon = isMac
      ? '<i class="fab fa-apple" style="font-size: 1.5em; margin-right: 5px;"></i> '
      : isLinux
      ? '<i class="fab fa-linux" style="font-size: 1.5em; margin-right: 5px;"></i> '
      : isWindows
      ? '<i class="fab fa-windows" style="font-size: 1.5em; margin-right: 5px;"></i> '
      : "";

    if (!link) {
      element
        .prop("disabled", true)
        .css("color", "gray")
        .addClass("disabled-button")
        .css("transform", "scale(1)")
        .attr("title", "Unsupported operating system");
    } else {
      element
        .prop("disabled", false)
        .removeClass("disabled-button")
        .css("color", "")
        .css("transform", "")
        .attr("title", tooltip);

      // Fix for Windows Firefox text color visibility
      if (
        navigator.userAgent.toLowerCase().indexOf("windows") !== -1 &&
        navigator.userAgent.toLowerCase().indexOf("firefox") !== -1
      ) {
        element.css("color", "white");
      }
    }
    element.html(icon + label).attr("href", link);
  }
}

function setupStyles() {
  const commonStyles = {
    display: "flex",
    "justify-content": "center",
    "align-items": "center",
  };

  $(".btn-download-os").css({
    width: "220px", // Updated width
    height: "40px",
    cursor: "pointer",
    "margin-top": "5px",
    "font-weight": "normal",
    ...commonStyles,
  });

  $(".centered, .download-buttons").css(commonStyles);

  $(".download-buttons").css("gap", "10px");

  if ($(window).width() < 710) {
    $(".download-buttons").css({
      "flex-direction": "column",
      "align-items": "center",
    });
  } else {
    $(".download-buttons").css("flex-direction", "row");
  }
}

function toggleResponsiveNav() {
  $("#nav-toggle").toggleClass("active");
  $("#nav-full").slideToggle(250);
  $(".nav-background").toggleClass("nav-toggled");
}

function resetResponsiveNav() {
  $("#nav-toggle").removeClass("active");
  $("#nav-full").hide();
  $(".nav-background").removeClass("nav-toggled");
}

function sizeContent() {
  var w = $(".main-wrapper").width() - 65;
  if ($(window).width() >= 710) w -= 35;
  $("#actionvideo")
    .width(w)
    .height((w * 9) / 16);

  resetResponsiveNav();

  if ($(window).width() < 710) {
    $("#nav-hamburger")
      .css("left", $(window).width() * 0.95 - 45 + "px")
      .show();
    $("#nav-full").hide();
  } else {
    $("#nav-hamburger").hide();
    $("#nav-full").show();
  }
  setupDownloadLinks();
  setupStyles();
}

function scroller() {
  var url = window.location.href;
  if (url.indexOf("documentation") >= 0) {
    setActiveNav("#nav-documentation");
    return;
  }

  var scrollPosition = $(window).scrollTop() + 100;

  var positions = [
    {
      id: "#nav-download",
      pos: $("#get").length ? $("#get").offset().top : -Infinity,
    },
    {
      id: "#nav-publications",
      pos: $("#publications").length
        ? $("#publications").offset().top
        : -Infinity,
    },
    {
      id: "#nav-projects",
      pos: $("#projects").length ? $("#projects").offset().top : -Infinity,
    },
    {
      id: "#nav-team",
      pos: $("#team").length ? $("#team").offset().top : -Infinity,
    },
    { id: "#nav-cytosplore", pos: 0 },
  ];

  positions.sort((a, b) => b.pos - a.pos);

  var atBottom =
    $(window).scrollTop() + $(window).height() >= $(document).height() - 10;

  for (let i = 0; i < positions.length; i++) {
    if (positions[i].pos === -Infinity) continue;
    if (scrollPosition >= positions[i].pos || (atBottom && i === 0)) {
      setActiveNav(positions[i].id);
      break;
    }
  }
}

function setActiveNav(selector) {
  $(".nav-active-indicator").removeClass("nav-active-indicator");
  $(selector).addClass("nav-active-indicator");
}

function handleOutboundLinkClicks(e) {
  if (ga.hasOwnProperty("loaded") && ga.loaded) {
    ga("send", "event", {
      eventCategory: "Outbound Link",
      eventAction: "click",
      eventLabel: e.target.parentNode.href,
      transport: "beacon",
    });
  }
}

$("a").each(function () {
  var link = this.href;
  if (link.indexOf("/documentation") < 0 && link.indexOf("#") < 0) {
    $(this).on("click", handleOutboundLinkClicks);
  }
});
