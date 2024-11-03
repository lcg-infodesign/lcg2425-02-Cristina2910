let righe = 12; // numero di righe
let colonne = 12; // numero di colonne
let cellWidth, cellHeight;

// la dimensione del canvas dipende dalla dimensione della finestra
function setup() {
  createCanvas(windowWidth, windowHeight); 
  cellWidth = width / colonne;
  cellHeight = height / righe;
  noLoop();
}

function draw() {
  background("white");
  for (let row = 0; row < righe; row++) {
    for (let col = 0; col < colonne; col++) {
      // coordinate della cella corrente
      let x = col * cellWidth + cellWidth / 2;
      let y = row * cellHeight + cellHeight / 2;
      push();
      translate(x, y);
      
      // applico una trasformazione ad ogni glifo
      let rotation = random(TWO_PI);
      let scaleFactor = random(0.5, 1);
      rotate(rotation);
      scale(scaleFactor);
      
      // disegno il glifo principale con le trasformazioni
      drawGlyph();
      pop();
    }
  }
}

function drawGlyph() {
  //mette un colore casuale come riempimento
  fill(random(255), random(255), random(255));
  
  stroke(200, 162, 200); //lilla
  strokeWeight(2);
  //linea centrale
  line(-10, 0, 10, 0);

  //cerchi agli estremi
  fill(random(255), random(255), random(255)); //mette un colore casuale nei cerchi
  ellipse(-10, 0, 5, 5);
  ellipse(10, 0, 5, 5);

  //linea verticale
  line(0, -10, 0, 10);
}

//il canvas si ridimensiona quando si ridimensiona la finestra
function windowResized() {
  resizeCanvas(windowWidth, windowHeight); //ridimensiona il canvas
  cellWidth = width / colonne; //ricalcola la larghezza delle celle
  cellHeight = height / righe; //ricalcola l'altezza delle celle
  redraw(); //ridisegna il canvas
}

//il disegno si aggiorna al click del mouse
function mousePressed() {
  redraw();
}
