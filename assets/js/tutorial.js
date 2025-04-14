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
