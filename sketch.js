let mySong; //canzone
let monospace; //font1 - dei testini piccoli in alto
let helvetica; //font2 - del titolo del poster
const colorList = ["#BF3E16", "#DC402F", "#DB7631", "#EDD456"]; //array che definisce i colori del sole che può assumere
var yPos = -300; //il sole parte da su
var rad = 200; //grandezza del sole

function preload() {
  //inserisco i file esterni che voglio caricare
  soundFormats("mp3", "ogg"); //formato del suono

  monospace = loadFont("./assets/Monospace 821 Regular.otf"); //font1
  helvetica = loadFont("./assets/HelveticaNeue-Light-08.ttf"); //font2

  mySong = loadSound("./assets/song_natura.mp3"); //canzone
}

function setup() {
  createCanvas(568, 800);
  frameRate(32); //velocità
}

function draw() {
  background(150);
  rectMode(CENTER);
  translate(width / 2, height / 2);

  //titolo
  textFont(helvetica);
  textSize(40);
  textAlign(CENTER, CENTER);
  text("POSTER INTERATTIVO", -70, -212);

  //testi in alto
  textFont(monospace);
  textSize(14);
  textAlign(LEFT);
  //primo blocchetto
  text("ascolta", -264, -363);
  text("la natura", -264, -349);
  text("tasto sinistro", -264, -335);
  //secondo blocchetto

  text("fai tornare", -130, -363);
  text("il sole in alto", -130, -349);
  text("barra spaziatrice", -130, -335);
  //terzo blocchetto

  text("muoviti", 93, -363);
  text("tra i puntini", 93, -349);
  text("puntatore", 93, -335);

  //Linee
  stroke(1);
  strokeWeight(3);
  line(-285, -240, 285, -240);
  line(-285, -376, 285, -376);
  strokeWeight(1);
  fill(0);
  noStroke();

  //sole
  fill(random(colorList)); //definisco un colore random tra la colorlist prima definita
  yPos = yPos + 5; //la sua posizione y iniziale è stata definita nelle varibili inizali

  //definisco che dopo una certa coordinata y il sole si ferma
  if (yPos < 140) {
    ellipse(61, yPos, rad, rad);
  } else {
    ellipse(61, 140, rad, rad);
  }

  //punti
  //data una grandezza di spazio e una griglia sulla quale disegno i punti
  for (var x = -260; x < 260; x += 25) {
    for (var y = -150; y < 400; y += 25) {
      // definisco che la grandezza dei puntini cambi a seconda di dove si trovi il puntatore del mouse
      let distance = dist(x + 300, y + 400, mouseX, mouseY);
      let remap = map(distance, 0, width, 0, 25);
      fill(0);
      ellipse(x, y, remap);
    }
  }
  //suono
  if (mouseButton == LEFT) {
    if (mySong.isPlaying() == false) {
      mySong.play();
    }
  } else if (mouseButton == RIGHT) {
    if (mySong.isPlaying() == true) {
      mySong.stop();
    }
  }
}

//tornare in alto
function keyPressed() {
  if (keyCode === 32) {
    yPos = -300;
    draw();
  }
  return false;
}

//Giuliana Concialini
