document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("main");
  const main = document.getElementById("main-div");

  hamburger.addEventListener("click", function() {
    menu.classList.toggle("active");
    if (main.style.marginTop === "200px") {
      main.style.marginTop = "0";
    } else {
      main.style.marginTop = "200px"; 
    }
  });
});
