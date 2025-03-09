// Highlight Section Function
function highlightSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.style.backgroundColor = "#f0f8ff"; // Light blue background
}

// Update Footer Year Function
function updateFooterYear() {
  const year = new Date().getFullYear();
  document.getElementById("footer-year").textContent = year;
}

// Call the function when the page loads
updateFooterYear();