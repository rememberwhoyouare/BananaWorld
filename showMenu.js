function mobileMenuSwitch() {
    let menu = document.getElementsByClassName("nav-menu")[0];
  
    menu.className = 
      menu.className.includes("show") ?
      "nav-menu":
      "nav-menu show";
}