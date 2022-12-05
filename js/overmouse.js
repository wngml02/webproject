var timerID = null;
function startTimer(time){
  timerID = setTimeout("load('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=%ED%95%9C%EB%A5%98')",time);
  document.getElementById("culimg").title = "타이머 시작.."
}
function cancelTimer(){
  if(timerID != null)
    clearTimeout(timerID);
  
}
function load(url){
  window.open(url, "myWin", "left=300,top=300,width=700,height=500") ;
}