window.addEventListener('load' , () => {
  //colorsBtn
  const redBtn = document.querySelector(".red");
  const greenBtn = document.querySelector(".green");
  const blueBtn = document.querySelector(".blue");
  const orangeBtn = document.querySelector(".orange");
  const blackBtn = document.querySelector(".black");
  const whiteBtn = document.querySelector(".white");

  const sliderBar = document.querySelector("slider");

  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  output.innerHTML = slider.value;
  



  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  //const changeColor = document.querySelector("button");

  //Resizing
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  
/*
  //rectangle 
  ctx.fillStyle = "red";
  ctx.fillRect(50,100, 200, 200 );
  ctx.fillStyle = "orange";
  ctx.fillRect(200,200, 200, 200 );
*/

/* 
 //Draw line
 ctx.beginPath();
 ctx.moveTo(100,100);
 ctx.lineTo(200,100);
 ctx.lineTo(200,150);
 ctx.lineTo(300,150);
 ctx.closePath();
 ctx.stroke();
*/

 //variables
  let painting = false;



  function startPosition(e){
    painting = true;
    draw(e);
  }

  function endPosition(){
    painting = false;
    ctx.beginPath();
    
  }

  function draw(e){
    if (!painting) return;
   /*  ctx.lineWidth = 5; */
    ctx.lineCap = "round";
    
    
    

    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);

  }
  function changeToRed (){
   
    ctx.strokeStyle = "red";
  }
  function changeToGreen (){
   
    ctx.strokeStyle = "green";
  }
  function changeToBlue (){
   
    ctx.strokeStyle = "blue";
  }
  function changeToOrange (){
   
    ctx.strokeStyle = "orange";
  }
  function changeToBlack (){
   
    ctx.strokeStyle = "black";
  }
  function changeToWhite (){
   
    ctx.strokeStyle = "white";
  }
    

  slider.oninput = function() {
    output.innerHTML = this.value;
    ctx.lineWidth = this.value;
    console.log(ctx.lineWidth)
  
  }



  //EventListeners
  canvas.addEventListener('mousedown', startPosition);
  canvas.addEventListener('mouseup', endPosition);
  canvas.addEventListener('mousemove', draw);
  redBtn.addEventListener('click',changeToRed);
  greenBtn.addEventListener('click',changeToGreen);
  blueBtn.addEventListener('click',changeToBlue);
  orangeBtn.addEventListener('click',changeToOrange);
  whiteBtn.addEventListener('click',changeToWhite);
  blackBtn.addEventListener('click',changeToBlack);


});