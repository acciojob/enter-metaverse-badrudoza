let status = document.getElementById("status");
let btn = document.getElementById("enterBtn");

btn.addEventListener("click", () => {
  status.outerHTML = '<div id="status"><h1>Entered Metaverse</h1></div>';
});
