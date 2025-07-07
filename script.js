//your JS code here. If required.
let status=document.getElementById("status");
let btn=document.getElementById("enterBtn");
btn.addEventListener("click",()=>{
	status.outerHTML='<h1 id="status">Entered Metaverse</h1>';
});