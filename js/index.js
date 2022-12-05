function load(URL){
  newWin=window.open(URL, "myWin", "left=100, top=100, width=1400, height=900");
}

function change(){
  var body = document.getElementById('body');
  body.style.backgroundImage = "url('static/orangeblue.jpg')";
}

function init() {
  var tbody;
  tbody = document.getElementById('a');
  tbody.addEventListener("mouseover", over);
  tbody.addEventListener("mouseout",out);
}
function over(){
  tbody.style.backgroundColor = "lightcoral";
}
function out(){
  tbody.style.backgroundColor = "antiquewhite";
}
function siteload() {
	let select = document.getElementById("site");
	window.location=select.options[select.selectedIndex].value;
}

