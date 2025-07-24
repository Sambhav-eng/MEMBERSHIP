fetch("Assets/Navbar/index.html")
  .then(res => res.text())
  .then(data =>  {
    document.getElementById("navbar-container").innerHTML = data;
  });
  console.log(window.location.href)