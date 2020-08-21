/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleMenu() {
    var x = document.getElementById("navigation");
    if (x.className === "") {
      x.className = "open";
    } else {
      x.className = "";
    }
  }