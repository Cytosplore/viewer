// Select buttons and all details elements
const expandAllButton = document.getElementById("expand-all");
const collapseAllButton = document.getElementById("collapse-all");
const detailsElements = document.querySelectorAll("details");

// Expand all details
expandAllButton.addEventListener("click", () => {
  detailsElements.forEach((details) => details.setAttribute("open", ""));
});

// Collapse all details
collapseAllButton.addEventListener("click", () => {
  detailsElements.forEach((details) => details.removeAttribute("open"));
});

// Function to load images when a <details> section is expanded
detailsElements.forEach((details) => {
  details.addEventListener("toggle", () => {
    if (details.open) {
      const images = details.querySelectorAll("img[data-src]");
      images.forEach((img) => {
        if (!img.src || img.src !== img.dataset.src) {
          img.src = img.dataset.src; // Ensure src is set from data-src
        }
      });
    }
  });
});
