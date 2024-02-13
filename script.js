const h1 = document.querySelector('h1');
const playerOne = document.querySelector('.playerOne');
const playerTwo = document.querySelector('.playerTwo');
const dice1 = document.querySelector('.dice1');
const dice2 = document.querySelector('.dice2');
const button_game = document.querySelector('.button_game');
const button_names = document.querySelector('.button_names');

button_names.onclick = function selectNames() {

  let player1 = 'Player 1';
  let player2 = 'Player 2';

  player1 = prompt('Choose your name');
  player2 = prompt('Choose your name');

  playerOne.innerHTML = player1;
  playerTwo.innerHTML = player2;
}

button_game.onclick = function startPlay() {

  setTimeout(function () {

    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    dice1.setAttribute('src', 'dice' + randomNumber1 + '.png'); 
    dice2.setAttribute('src', 'dice' + randomNumber2 + '.png'); 

    if (randomNumber1 === randomNumber2) {
      h1.innerHTML = 'Draw!';
    }
    else if (randomNumber1 < randomNumber2) {
      h1.innerHTML = playerTwo.innerHTML + ' WINS!!!';
    }
    else {
      h1.innerHTML = playerOne.innerHTML + ' WINS!!!';
    }
  }, 100);
};



/*
const demo = document.getElementById('demo');

let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
let f = 0;

let totalTiradas = 0;

function tiradaDado() {
  let dado6Caras = parseInt(6 * Math.random() + 1);
  return dado6Caras;
}

for (let i = 0; i <= 36000; i++) {
  tirada = tiradaDado();
  switch(tirada){
  	case 1:
  	  a++;
  	  break;

  	case 2:
  	  b++;
  	  break;
  	  
  	case 3:
  	  c++;
  	  break;
  	  
  	case 4:
  	  d++;
  	  break;
  	  
  	case 5:
  	  e++;
  	  break;

  	case 6:
  	  f++;
  	  break;             
  }

  totalTiradas = a + b + c + d + e + f;

  demo.innerHTML = ('El 1 ha salido ' + a + ' veces <br>');
  demo.innerHTML += ('El 2 ha salido ' + b + ' veces <br>')
  demo.innerHTML += ('El 3 ha salido ' + c + ' veces <br>')
  demo.innerHTML += ('El 4 ha salido ' + d + ' veces <br>')
  demo.innerHTML += ('El 5 ha salido ' + e + ' veces <br>')
  demo.innerHTML += ('El 6 ha salido ' + f + ' veces <br>')
  demo.innerHTML += ('<br>')
  demo.innerHTML += ('Total de lanzamientos del dado: ' + totalTiradas);
}
*/