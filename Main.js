window.addEventListener('load' , () => {
  //verebles
  const pen = document.querySelector(".pen");
  /* const greenBtn = document.querySelector(".green");
  const blueBtn = document.querySelector(".blue");
  const orangeBtn = document.querySelector(".orange"); */
  const clearBtn = document.querySelector(".clear");
  const eraserBtn = document.querySelector(".erase");
 
  //varibles canvas
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");

  document.getElementById("color").onchange = change;


  const sliderBar = document.querySelector("slider");

  var slider = document.getElementById("myRange");
  var output = document.getElementById("demo");

    //EventListeners
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);
  
  
     pen.addEventListener('click',pentool);
  /*   greenBtn.addEventListener('click',changeToGreen);
    blueBtn.addEventListener('click',changeToBlue);
    orangeBtn.addEventListener('click',changeToOrange); */
    eraserBtn.addEventListener('click',eraserBtn);
    clearBtn.addEventListener('click',clear); 

  
  output.innerHTML = slider.value;
  

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




 //variables
  let painting = false;
  var color = "rgb(0,0,0)";

  

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
    /* ctx.globalAlpha = 1; */
    ctx.strokeStyle = color;
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);
    ctx.fill()
  }
      

  function pentool ()
  {
    painting = true;
    ctx.stroke();
    console.log(painting)
  }


    function change(e)
    {
     color = this.value;    
     console.log(color)
    }
    

/*      function eraserBtn  ()
    {
      console.log(painting)
      console.log("eraser")
      ctx.globalCompositeOperation = 'source-out';   
      painting = fasle;
      
    }
 */
    function clear(){
      painting = false;
      console.log(painting)
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }


/*     
    function changeToBlack (){
   
      color = "black";
    }

 
  function changeToGreen (){
   
    color = "green";
  }
  function changeToBlue (){
   
    color = "blue";
  }
  function changeToOrange (){
   
    color = "orange";
  }
  */

    

  slider.oninput = function() 
  {
    output.innerHTML = this.value;
    ctx.lineWidth = this.value;
    
  }



  
   




  


});