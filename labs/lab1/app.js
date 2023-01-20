function setup() {

    createCanvas(400,300);
    strokeWeight(8) //drawings will have 8px stroke
}

function draw() {
    smiley(width / 2, height / 2, 300);
  }
  function smiley(x, y, diameter) 
    {
    background(209);
    //made background grey
    
    let c= color ('pink'); 
    
    fill(c); 
    circle(190, 120, 365); 
    //created a pink circle
    
    stroke(0,0,230)
    //made outline of circle blue

    circle(180,70,10)// create eye inside original circle
    circle(230,70,10)//created another eye inside original circle
   
     // Smile
  var startAngle = 0.1 * PI;          
  var endAngle = 0.9 * PI;            
  var smilediameter = 0.4 * diameter;  
  arc(x, y, smilediameter, smilediameter, startAngle, endAngle);//created a smile with arc
}