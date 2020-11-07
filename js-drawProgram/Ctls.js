// brush alpha
/* var setAlpha = function(newAlpha){
  if(newAlpha<minAlpha)
  newAlpha= minAlpha;
  else if (newAlpha>maxAlpha)
  newAlpha= maxAlpha;
  alpha = newAlpha;
}

var minAlpha = 0.1,
    maxAlpha = 1,
    defaultAlpha = 1,
    alphaSpan = document.getElementById('alphactl'),
    decAlpha = document.getElementById('decalpha'),
    inAlpha = document.getElementById('inalpha');

   
 decAlpha.addEventListener('click' ,function(){

 }) */

 // key board ctrls 

 document.addEventListener("keydown",ctlZ , false);
 document.getElementById("brush");

 function ctlZ (key){
  if (key.keyCode == "17" || key.keyCode == "90" ){
    /* alert("ctrlZ"); */
    console.log("ctrlZ");
  }
 }
/* 
 const onMouseMove = (e) => (
   brush.style.left = e pageX
 ) */

 document.addEventListener('mousemove', function(e) {
  
  let brush = document.getElementById('brush');
  let left = e.offsetX;
  let top = e.offsetY;
  brush.style.left = left + 'px';
  brush.style.top = top + 'px';
});

let brush = document.getElementById('brush');
const onMouseMove = (e) =>{
  brush.style.left = e.clientX+ 'px';
  brush.style.right = e.clientY+ 'px';
  
}
document.addEventListener('mousemove', onMouseMove);

document.getElementById("canvas")