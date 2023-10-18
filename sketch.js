
let s0 = "Harry, Fleur, Victor, Cedrik";
let words;

let chosenIndex = -10;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0,0,0)
  words = s0.split(", ")

}



function draw() {
stroke("lightblue")
noFill()
//insert goblet
ellipse(width/2, height/2, 200, 200)


//names filling the screen randomly
if (chosenIndex > -1) {
  text(words[chosenIndex], random(width) , random(height) );
}

}
function mouseClicked (){
  chosenIndex = floor(random(0, words.length))
}