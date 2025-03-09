// section function
function highlightSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.style.backgroundColor = "#f0f8ff"; // Light blue background
}

// footer year
function updateFooterYear() {
  const year = new Date().getFullYear();
  document.getElementById("footer-year").textContent = year;
}

// call the function
updateFooterYear();