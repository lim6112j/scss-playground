const btn = document.getElementById("setting-btn");
const body = document.getElementById("body");
const themes = ["", "theme-1", "theme-2"];
let currentIdx = 0;
btn.addEventListener('click', (e) => {
  console.log(currentIdx)
  currentIdx < themes.length-1 ? currentIdx += 1 
  : currentIdx = 0
  body.setAttribute("class", themes[currentIdx])
})