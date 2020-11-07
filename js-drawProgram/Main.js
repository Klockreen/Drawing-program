window.addEventListener('load' , () => {
  //const
  
  /* const greenBtn = document.querySelector(".green");
  const blueBtn = document.querySelector(".blue");
  const orangeBtn = document.querySelector(".orange"); */
  const pen = document.querySelector(".pen");
  const clearBtn = document.querySelector(".clear");
  const eraserBtn = document.querySelector(".erase");
 
  //varibles canvas
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  document.getElementById("color").onchange = change;
  const sliderBar = document.querySelector("slider");

  
   
  

    //EventListeners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);
  
    eraserBtn.addEventListener('click',erase)
   /*  pen.addEventListener('click',pentool); */
    clearBtn.addEventListener('click',clear); 

   
  //Resizing
/*   canvas.width  = 800;
     canvas.height = 600; */
  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;


 //variables
  let painting = false;
  var color = "rgb(0,0,0)";
  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");
  

  

  function startPosition(e){
    painting = true;
    draw(e);
  }

  function endPosition(){
    painting = false;
    ctx.beginPath();
    
  }

  function draw(e)
  {
    if (!painting) return;
    ctx.lineCap = "round";
    ctx.globalAlpha  = alpha ;
    ctx.strokeStyle = color;
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
    ctx.fill()
  }

 /*  function pentool ()
  {
    painting = true;
    ctx.stroke();
    console.log(painting)
    
  } */


    function change(e)
    {
     color = this.value;    
     console.log(color)
    }
    

   function erase(){
     /* var bgColor; */
     /* document.getElementById(".canvas").style.'background-Color' = color; */
     /* color = bgColor; */
     color =  '#d3d3d3';
     }
      
  

    function clear(){
      painting = false;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    slider.oninput = function() 
    {
      output.innerHTML = this.value;
      ctx.lineWidth = this.value;
      
    }
  
  /*
  //rectangle 
  ctx.fillStyle = "red";
  ctx.fillRect(50,100, 200, 200 );
  ctx.fillStyle = "orange";
  ctx.fillRect(200,200, 200, 200 );
*/


});