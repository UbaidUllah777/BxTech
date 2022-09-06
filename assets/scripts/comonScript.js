const AllNavbar = document.getElementById("MyNavList");

let Links = AllNavbar.querySelectorAll("a");

for (var i = 0; i < Links.length; i++) {
  Links[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace("active", "");
    this.className += " active";
  });
}
