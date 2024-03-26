let menuList = document.getElementById("menuList");

menuList.style.maxHeight = "0px";

function toggle() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "100vh";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

let input = document.getElementById("input");

input.style.opacity = "0";

function press() {
  if (input.style.opacity == "0") {
    input.style.opacity = "1";
  } else {
    input.style.opacity = "0";
  }
}

function scrollToTop() {
  window.scrollTo(0, 0);
}
