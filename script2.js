
fetch("Assets/Navbar/index.html")
  .then(res => {
    if (!res.ok) throw new Error("Failed to load navbar");
    return res.text();
  })
  .then(data => {
    document.getElementById("navbar-container").innerHTML = data;
  })
  .catch(err => console.error("Error loading navbar:", err));


  //For photograph
  // Detect file selection and update the span text
const fileInput = document.getElementById('resume-upload');
const fileNameSpan = document.getElementById('file-name');

fileInput.addEventListener('change', () => {
  if (fileInput.files.length > 0) {
    fileNameSpan.textContent = fileInput.files[0].name;
  } else {
    fileNameSpan.textContent = "No file chosen";
  }
});
