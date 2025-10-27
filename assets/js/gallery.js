(function (window, document) {
  var Gallery = function (root) {
    this.root = root;
    this.list = [
      {
        caption: "Spatial MultiSpecies Basal Ganglia",
        src: "/assets/papers/HMBAViewers/Gradient_Surfer.gif",
        id: "hmba-spatial-multi-species-basal-ganglia",
      },
      {
        caption: "ATACSeq Marmoset Subcortex",
        src: "/assets/papers/HMBAViewers/ATAC_Viewer.gif",
        id: "hmba-atacseq-marmoset-subcortex",
      },
      {
        caption: "RNASeq MultiSpecies Basal Ganglia",
        src: "/assets/papers/HMBAViewers/RNASeq_MultiSpecies.gif",
        id: "hmba-rnaseq-multi-species-basal-ganglia",
      },
      {
        caption: "PatchSeq Human Neocortex",
        src: "/assets/papers/HMBAViewers/PatchSeq_Human.gif",
        id: "hmba-patchseq-human-neocortex",
      },
      {
        caption: "PatchSeq Macaque Basal Ganglia",
        src: "/assets/papers/HMBAViewers/PatchSeq_Macaque.gif",
        id: "hmba-patchseq-macaque-basal-ganglia",
      },
      {
        caption: "Evo Viewer",
        src: "/assets/papers/Evo_Viewer.gif",
        id: "simianevo-evo-viewer",
      },
      {
        caption: "Simian Viewer",
        src: "/assets/papers/Simian_Viewer.gif",
        id: "simianevo-simian-viewer",
      },
      {
        caption: "Classic MTG Viewer",
        src: "/assets/papers/MTG_Viewer.gif",
        id: "cortex-mtg-multi-species",
      },
    ];

    this.idx = 4;

    this.img = root.querySelector("#gallery-image");
    this.caption = root.querySelector("#gallery-caption");
    this.thumbs = root.querySelector("#gallery-thumbs");
    this.nextBtn = root.querySelector("#gallery-next");
    this.prevBtn = root.querySelector("#gallery-prev");
    this.live = root.querySelector("#gallery-live");
    this._initialLoad = true;
  };

  Gallery.prototype.show = function (i) {
    if (i < 0) i = this.list.length - 1;
    if (i >= this.list.length) i = 0;
    this.idx = i;
    var self = this;

    if (this.img) {
      this.img.classList.add("gallery-img--hidden");
      setTimeout(function () {
        self.img.src = self.list[i].src;
        self.img.alt = self.list[i].caption || "";
        self.img.classList.remove("gallery-img--hidden");
      }, 220);
    }

    if (this.caption) {
      this.caption.textContent = this.list[i].caption || "";
      // store target project id for navigation
      if (this.list[i] && this.list[i].id) {
        this.caption.dataset.projectId = this.list[i].id;
        this.caption.setAttribute("role", "link");
        this.caption.setAttribute("tabindex", "0");
        this.caption.style.cursor = "pointer";
      } else {
        // remove any previously set navigation attributes
        this.caption.removeAttribute("data-project-id");
        this.caption.removeAttribute("role");
        this.caption.removeAttribute("tabindex");
        this.caption.style.cursor = "";
      }
    }

    // update thumbnail states
    if (this.thumbs) {
      var children = this.thumbs.querySelectorAll("img");
      children.forEach(function (t) {
        t.removeAttribute("aria-current");
        t.classList.remove("active");
      });
      if (children[i]) {
        children[i].setAttribute("aria-current", "true");
        children[i].classList.add("active");
        if (!self._initialLoad) {
          try {
            children[i].scrollIntoView({
              behavior: "smooth",
              inline: "center",
              block: "nearest",
            });
          } catch (err) {
            if (self.thumbRow && self.thumbs) {
              var thumb = children[i];
              var container = self.thumbs;
              var containerRect = container.getBoundingClientRect();
              var thumbRect = thumb.getBoundingClientRect();
              var offset =
                thumbRect.left -
                containerRect.left -
                container.clientWidth / 2 +
                thumb.clientWidth / 2;
              container.scrollLeft += offset;
            }
          }
        }
      }
    }

    if (this.live)
      this.live.textContent =
        (this.list[i].caption || "") +
        " — slide " +
        (i + 1) +
        " of " +
        this.list.length;
  };

  Gallery.prototype.scrollThumbIntoView = function (index) {
    if (!this.thumbs) return;
    var imgs = this.thumbs.querySelectorAll("img");
    if (!imgs[index]) return;
    try {
      imgs[index].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    } catch (e) {
      var container = this.thumbs;
      var thumb = imgs[index];
      var containerRect = container.getBoundingClientRect();
      var thumbRect = thumb.getBoundingClientRect();
      var offset =
        thumbRect.left -
        containerRect.left -
        container.clientWidth / 2 +
        thumb.clientWidth / 2;
      container.scrollLeft += offset;
    }
  };

  Gallery.prototype.next = function () {
    this.show(this.idx + 1);
  };
  Gallery.prototype.prev = function () {
    this.show(this.idx - 1);
  };

  Gallery.prototype.buildThumbs = function () {
    var self = this;
    if (!this.thumbs) return;
    this.thumbs.innerHTML = "";
    var row = document.createElement("div");
    row.className = "thumb-row";
    row.setAttribute("role", "list");
    this.list.forEach(function (item, i) {
      var t = document.createElement("img");
      t.dataset.src = item.src;
      t.alt = item.caption || "thumb " + (i + 1);
      t.setAttribute("role", "listitem");
      t.addEventListener("click", function () {
        self.show(i);
      });
      row.appendChild(t);
    });
    this.thumbRow = row;
    this.thumbs.appendChild(row);
    setTimeout(function () {
      var imgs = self.thumbs.querySelectorAll("img");
      imgs.forEach(function (im) {
        im.src = im.dataset.src;
      });
    }, 120);
  };

  Gallery.prototype.isSmallScreen = function () {
    try {
      return (
        window.matchMedia && window.matchMedia("(max-width: 520px)").matches
      );
    } catch (e) {
      return false;
    }
  };

  Gallery.prototype.updateControlsForViewport = function () {
    var small = this.isSmallScreen();
    if (small) {
      if (this.prevBtn) {
        this.prevBtn.style.display = "none";
        this.prevBtn.setAttribute("aria-hidden", "true");
      }
      if (this.nextBtn) {
        this.nextBtn.style.display = "none";
        this.nextBtn.setAttribute("aria-hidden", "true");
      }
    } else {
      if (this.prevBtn) {
        this.prevBtn.style.display = "inline-block";
        this.prevBtn.setAttribute("aria-hidden", "false");
      }
      if (this.nextBtn) {
        this.nextBtn.style.display = "inline-block";
        this.nextBtn.setAttribute("aria-hidden", "false");
      }
    }
  };

  Gallery.prototype.init = function () {
    var self = this;
    if (this.nextBtn)
      this.nextBtn.addEventListener("click", function (e) {
        e.preventDefault();
        self.next();
      });
    if (this.prevBtn)
      this.prevBtn.addEventListener("click", function (e) {
        e.preventDefault();
        self.prev();
      });
    // play/pause removed; prev/next retained for keyboard nav

    // keyboard support
    if (this.root)
      this.root.addEventListener("keydown", function (e) {
        if (e.key === "ArrowRight") {
          self.next();
        }
        if (e.key === "ArrowLeft") {
          self.prev();
        }
      });

    // make caption clickable / keyboard-activatable to open project page
    if (this.caption) {
      this.caption.addEventListener("click", function (e) {
        var id = self.caption.dataset.projectId;
        if (id) window.location.href = "/projects/#" + id;
      });
      this.caption.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
          e.preventDefault();
          var id = self.caption.dataset.projectId;
          if (id) window.location.href = "/projects/#" + id;
        }
      });
    }

    // build thumbnails and show initial slide
    this.buildThumbs();
    if (this.prevBtn) {
      this.prevBtn.style.display = "inline-block";
      this.prevBtn.setAttribute("aria-hidden", "false");
    }
    if (this.nextBtn) {
      this.nextBtn.style.display = "inline-block";
      this.nextBtn.setAttribute("aria-hidden", "false");
    }
    this.updateControlsForViewport();

    // listen for viewport changes and update controls when crossing the breakpoint
    if (window.matchMedia) {
      try {
        var mq = window.matchMedia("(max-width: 520px)");
        // re-evaluate controls when breakpoint changes
        var mqHandler = function () {
          self.updateControlsForViewport();
        };
        // add listener (modern and legacy)
        if (mq.addEventListener) mq.addEventListener("change", mqHandler);
        else if (mq.addListener) mq.addListener(mqHandler);
      } catch (e) {
        // ignore matchMedia errors
      }
    }

    // pick a random initial slide
    try {
      if (this.list && this.list.length > 0)
        this.idx = Math.floor(Math.random() * this.list.length);
    } catch (e) {
      // ignore and fall back to configured default
    }
    // show initial slide but skip scrolling thumbs this first time
    this.show(this.idx);
    this._initialLoad = false;
  };

  // init galleries on DOMContentLoaded
  document.addEventListener("DOMContentLoaded", function () {
    var roots = document.querySelectorAll(".actionvideo-wrapper.gallery");
    roots.forEach(function (r) {
      var g = new Gallery(r);
      g.init();
    });
  });

  // expose to window for manual control if needed
  window.SimpleGallery = Gallery;
})(window, document);
