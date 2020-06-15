const btn = document.getElementById("themeBtn");
const body = document.getElementById("body");
btn.addEventListener('click', (e) => {
  body.getAttribute("class") === "theme-1" ? body.setAttribute("class", "theme-2") :body.setAttribute("class", "theme-1") 
})