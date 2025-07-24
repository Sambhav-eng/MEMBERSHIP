


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
// Resume File
const resumeInput = document.getElementById("resume-upload");
const resumeFileName = document.getElementById("file-name");

if (resumeInput && resumeFileName) {
  resumeInput.addEventListener("change", () => {
    resumeFileName.textContent = resumeInput.files[0]?.name || "No file chosen";
  });
}

// Photo File
const photoInput = document.getElementById("photo-upload");
const photoFileName = document.getElementById("photo-file-name");

if (photoInput && photoFileName) {
  photoInput.addEventListener("change", () => {
    photoFileName.textContent = photoInput.files[0]?.name || "No file chosen";
  });
}
