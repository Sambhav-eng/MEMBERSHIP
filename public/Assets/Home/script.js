fetch("Assets/Navbar/index.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("navbar-container").innerHTML = data;
  });
  console.log(window.location.href)

  
  /*Script begins for issue dropdown*/
  let heading = document.getElementById("heading")

  let issuebox = document.getElementById("issue-box");
  let isOpen=false;
  heading.addEventListener("click" , ()=>{
    isOpen= !isOpen;
    issuebox.style.display= isOpen ? "block":
"none";
  })