function menuToggle() {
    var navbar_menu = document.getElementById("navbar-menu");
    if (navbar_menu.style.display === "block") {
      navbar_menu.style.display = "none";
    } else {
      navbar_menu.style.display = "block";
    }
  }