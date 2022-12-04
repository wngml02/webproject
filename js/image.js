let imageIndex = 0;
let position = 0;
const IMAGE_WIDTH = 800;
const btnPrevious = document.querySelector(".previous")
const btnNext = document.querySelector(".next")
const images = document.querySelector(".images")

function prev(){
  if(imageIndex > 0){
    btnNext.removeAttribute("disabled")
    position += IMAGE_WIDTH;
    images.style.transform = `translateX(${position}px)`;
    imageIndex = imageIndex - 1;
  }
  if(imageIndex ==0){
    btnPrevious.setAttribute('disabled','true')
  }
}
function next(){
  if(imageIndex < 5){
    btnPrevious.removeAttribute("disabled")
    position -= IMAGE_WIDTH;
    images.style.transform = `translateX(${position}px)`;
    imageIndex = imageIndex + 1;
  }
  if(imageIndex == 5){
    btnNext.setAttribute('disabled','true')
  }
}
function imginit(){
  btnPrevious.setAttribute('disabled', 'true')
  btnPrevious.addEventListener("click", prev)
  btnNext.addEventListener("click", next)
}

imginit();