fetch("/IIFARD/Assets/Navbar/index.html")
    .then(res => res.text())
    .then(data =>  {
      document.getElementById("navbar-container").innerHTML = data;
    });
    console.log(window.location.href)

    /*Script begins for issue dropdown*/

    /*Volume - 1 Begins*/
    let heading1 = document.getElementById("heading1")

    let issuebox1 = document.getElementById("issue-box1");
    let isOpen1=false;
    heading1.addEventListener("click" , ()=>{
      isOpen1= !isOpen1;
      issuebox1.style.display= isOpen1 ? "block":
  "none";
    })  
    /*Volume - 1 Ends*/

    
    /*Volume - 2 Begins*/
    let heading2 = document.getElementById("heading2")

    let issuebox2 = document.getElementById("issue-box2");
    let isOpen2=false;
    heading2.addEventListener("click" , ()=>{
      isOpen2= !isOpen2;
      issuebox2.style.display= isOpen2 ? "block":
  "none";
    })  
    /*Volume - 2 Ends*/

    /*Volume - 3 Begins*/
    let heading3 = document.getElementById("heading3")

    let issuebox3 = document.getElementById("issue-box3");
    let isOpen3=false;
    heading3.addEventListener("click" , ()=>{
      isOpen3= !isOpen2;
      issuebox3.style.display= isOpen3 ? "block":
  "none";
    })  
    /*Volume - 3 Ends*/