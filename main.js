//create color boxes
//create color cards
//init game - reset colors & choose 3 random colors


//create 3 cards for memory game
function initCards(cardsnum){
    for (i = 0; i < cardsnum; i++) { 
    let div = document.createElement("div");
    div.className ='card'+i;
    cards.appendChild(div);
      };
  };

//Define color boxes colors
   let colors = [ '#0303b7',
                     '#b7039b',
                     '#07f219',
                     '#ff6c00',
                     '#ff0000',
                     '#ffff07',
                     '#ff00e2',
                     '#00e2ff',
                     '#000000',
                     '#797a70',
                     '#09f2b2',
                     '#07b1f2'];

//Randomize colors
  function randomize(min,max){
              return Math.round( Math.random() * (max - min) + min )  ;       
        }
  let randomcards = [];

  while( randomcards.length < 3){
            //get random color
            let r = randomize( 0 , colors.length - 1 );
            let randomColor = colors[r];
            if( !randomcards.includes(randomColor) ){
                randomcards.push(randomColor)
            }
        }
//Create color boxes
  function initboxes(boxesnum){
    for (i = 0; i < boxesnum; i++) { 
    let div = document.createElement("div");
    div.className ='box';
    div.style.backgroundColor = colors[i];
    div.hexBgColor = colors[i];
    colorBoxes.appendChild(div);
                   };
            };
//Choose 3 random new cards
function displayNewcards(cardsnum){
    for (i = 0; i < cardsnum; i++) { 
    document.querySelector('.card'+i).style.backgroundColor=randomcards[i];
      };
    }

let userChoice = [];
let cardC=0;
function chooseColor(cardC){
    document.querySelector('.card'+cardC).style.border="5px solid #FF0000";
    colorBoxes.addEventListener('click', function (a) {
        userChoice.push(window.getComputedStyle(a.target).backgroundColor);
        console.log(userChoice,randomcards)
        console.log(convertToHex(userChoice[0]))
        console.log(convertToHex(userChoice[0]),randomcards[0])
        if (convertToHex(userChoice[0])==randomcards[0]){ console.log(userChoice,randomcards);}
        document.querySelector('.card'+cardC).style.backgroundColor=window.getComputedStyle(a.target).backgroundColor},true);
    };

function convertToHex(str){
  var raw = str.match(/(\d+)/g);
  var hexr = parseInt(raw[0]).toString(16);
  var hexg = parseInt(raw[1]).toString(16);
  var hexb = parseInt(raw[2]).toString(16);
      hexr = hexr.value == 1 ? '0' + hexr: hexr;
      hexg = hexg.length == 1 ? '0' + hexg: hexg;
      hexb = hexb.length == 1 ? '0' + hexb: hexb;
  var hex = '#'+ hexr + hexg + hexb;
  return hex;
}

//Start Game
initCards(3);
initboxes(12);
displayNewcards(3);
//hide cards after 4 seconds
setTimeout(function(){ 
   for (i = 0; i < 3; i++) { 
    document.querySelector('.card'+i).style.backgroundColor='rgb(255,255,255)';
};
 }, 4000);
//User's turn: choose a color to the marked card with delay
 setTimeout(chooseColor(cardC),4001);