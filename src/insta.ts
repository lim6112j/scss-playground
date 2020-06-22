const btn = document.getElementById("setting-btn");
const body = document.getElementById("body");
const themes = ["", "theme-1", "theme-2"];
let currentIdx = 0;
btn.addEventListener('click', (e) => {
  console.log(currentIdx)
  if (currentIdx < themes.length) {
     body.setAttribute("class", themes[currentIdx])
     currentIdx += 1;
   } else {
    currentIdx = 0;  }
})