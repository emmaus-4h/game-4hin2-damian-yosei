/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 600; // x-positie van speler
var spelerY = 600; // y-positie van speler
var aantal = 9;

var vijandX = 600;
var vijandY = 100;

var kogelX = spelerX - 15;
var kogelY = spelerY - 45;

/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // speler
  if (keyIsDown(68)) {
spelerX = spelerX +3;
  }
  if (keyIsDown(65)) {
spelerX = spelerX -3;
  }
  if (keyIsDown(87)) {
spelerY = spelerY -3;
  }
  if (keyIsDown(83)) {
spelerY = spelerY +3;
  }
  // vijand
  vijandX = vijandX -5;
  if (vijandX < 0){
    vijandX=1280;
  }

  // kogel
if (mouseIsPressed) {
  kogelY= spelerY;
  kogelX=spelerX;
}
  kogelY = kogelY -9;
  if (kogelY < 0) {
    kogelY=0;
  }
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten dingen
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand

  // botsing kogel tegen vijand
    if (kogelX - vijandX < 50 &&
      kogelX - vijandX >-50 &&
      kogelY - vijandY <50 &&
      kogelY - vijandY > -50) {
    console.log("Botsing");
      }
  // update punten en health

};

/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  fill("blue")
  rect(0,0,1280,720)
  // vijand
  fill("red");
  rect(vijandX - 25, vijandY - 25, 50, 50)
  
  
  // kogel
  fill("black");
  rect(kogelX, kogelY, 30, 30)
  // speler
  fill("white");
  rect(spelerX - 25, spelerY - 25, 50, 50);
  fill("black");
  ellipse(spelerX, spelerY, 10, 10);
  
  // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */
var checkGameOver = function () {
    if (spelerX - vijandX < 50 &&
      spelerX - vijandX >-50 &&
      spelerY - vijandY <50 &&
      spelerY - vijandY > -50) {
    console.log("Botsing");
      return true;
      }
  
  
  // check of HP 0 is , of tijd op is, of ...
  return false;
};

/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (checkGameOver()) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    console.log("game over")
    // teken game-over scherm

  }
}
