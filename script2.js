
fetch("Assets/Navbar/index.html")
  .then(res => {
    if (!res.ok) throw new Error("Failed to load navbar");
    return res.text();
  })
  .then(data => {
    document.getElementById("navbar-container").innerHTML = data;
  })
  .catch(err => console.error("Error loading navbar:", err));
