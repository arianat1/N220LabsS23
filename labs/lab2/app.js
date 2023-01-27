function setup() {
    createCanvas(400,300);

}

var diameter= 10 //create circle and it's size

function draw() {
    background("tan"); //changed canvas background
    if(mouseX>200)//circle is red if on right side of screen
    {
        fill("red")//circle changes red
        circle(mouseX,mouseY,diameter)
    }
    else// if mouse is not on right side circle changes
    {
        fill("blue");//circle changes blue
        circle(mouseX,mouseY,diameter)
    }

    
}














