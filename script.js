document.addEventListener("DOMContentLoaded", function() {
    const menus = document.querySelector("header nav ul");
    const menusbtn = document.querySelector(".button button");
    const svgIcon = menusbtn.querySelector("svg");
  
    menusbtn.addEventListener("click", function() {
      menus.classList.toggle("displaynav");
    });
  });
