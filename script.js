"use strict"
let counterClick = 0;
let ObjMatrix = {     
    zero: [[],[],[],[],[],[],[],[],],  
    crosses: [[],[],[],[],[],[],[],[],]        
  };
let player1 =  localStorage.getItem('player1'),
    player2 =  localStorage.getItem('player2');

document.addEventListener("click", function(e) {
    if (e.target.id == 'buttRest') {
        location.reload();
    } 
});
document.addEventListener("click", function(e) {
    if (e.target.id == 'buttClear') {
        localStorage.clear();
        location.reload();
    } 
});

document.addEventListener("click", function(e) {
    if (e.target.id <= 9 && document.getElementById(e.target.id).className !== "blocked") {
       
        counterClick++;
        console.log(counterClick);
    } 

    if (counterClick % 2 == 0 && e.target.id <= 9 && document.getElementById(e.target.id).className !== "blocked"){
        document.getElementById(e.target.id).insertAdjacentHTML('afterbegin', `<img id = 'img' src="img/2.png" alt="">`);
        document.getElementById(e.target.id).className = "blocked";
        document.getElementById(`winner`).textContent = 'ХОДЯТ КРЕСТИКИ';
        switch(e.target.id) {
            case '1':
                ObjMatrix.zero[0].push(e.target.id);
                ObjMatrix.zero[6].push(e.target.id);
                ObjMatrix.zero[3].push(e.target.id);
                break;
            case '2':
                ObjMatrix.zero[0].push(e.target.id);
                ObjMatrix.zero[4].push(e.target.id);
                break;
            case '3':
                ObjMatrix.zero[0].push(e.target.id);
                ObjMatrix.zero[5].push(e.target.id);
                ObjMatrix.zero[7].push(e.target.id);
                break;
            case '4':
                ObjMatrix.zero[1].push(e.target.id);
                ObjMatrix.zero[3].push(e.target.id);
                break;
             case '5':
                ObjMatrix.zero[1].push(e.target.id);
                ObjMatrix.zero[4].push(e.target.id);
                ObjMatrix.zero[6].push(e.target.id);
                ObjMatrix.zero[7].push(e.target.id);
                break;
            case '6':
                ObjMatrix.zero[1].push(e.target.id);
                ObjMatrix.zero[5].push(e.target.id);
                break;
            case '7':
                ObjMatrix.zero[2].push(e.target.id);
                ObjMatrix.zero[3].push(e.target.id);
                ObjMatrix.zero[7].push(e.target.id);
                break;
            case '8':
                ObjMatrix.zero[2].push(e.target.id);
                ObjMatrix.zero[4].push(e.target.id);
                break;
            case '9':
                ObjMatrix.zero[2].push(e.target.id);
                ObjMatrix.zero[5].push(e.target.id);
                ObjMatrix.zero[6].push(e.target.id);
                break;
            default:
                alert('psina');
                console.log('zero',e.target.id);
        }
            

        
    }else if (counterClick % 1 == 0 && e.target.id <= 9 && document.getElementById(e.target.id).className !== "blocked"){
        document.getElementById(e.target.id).insertAdjacentHTML('afterbegin', `<img id = 'img' src="img/1.png" alt="">`);
        document.getElementById(e.target.id).className = "blocked";
        document.getElementById(`winner`).textContent = 'ХОДЯТ НОЛИКИ';
        switch(e.target.id) {
            case '1':
                ObjMatrix.crosses[0].push(e.target.id);
                ObjMatrix.crosses[6].push(e.target.id);
                ObjMatrix.crosses[3].push(e.target.id);
                break;
            case '2':
                ObjMatrix.crosses[0].push(e.target.id);
                ObjMatrix.crosses[4].push(e.target.id);
                break;
            case '3':
                ObjMatrix.crosses[0].push(e.target.id);
                ObjMatrix.crosses[5].push(e.target.id);
                ObjMatrix.crosses[7].push(e.target.id);
                break;
            case '4':
                ObjMatrix.crosses[1].push(e.target.id);
                ObjMatrix.crosses[3].push(e.target.id);
                break;
             case '5':
                ObjMatrix.crosses[1].push(e.target.id);
                ObjMatrix.crosses[4].push(e.target.id);
                ObjMatrix.crosses[6].push(e.target.id);
                ObjMatrix.crosses[7].push(e.target.id);
                break;
            case '6':
                ObjMatrix.crosses[1].push(e.target.id);
                ObjMatrix.crosses[5].push(e.target.id);
                break;
            case '7':
                ObjMatrix.crosses[2].push(e.target.id);
                ObjMatrix.crosses[3].push(e.target.id);
                ObjMatrix.crosses[7].push(e.target.id);
                break;
            case '8':
                ObjMatrix.crosses[2].push(e.target.id);
                ObjMatrix.crosses[4].push(e.target.id);
                break;
            case '9':
                ObjMatrix.crosses[2].push(e.target.id);
                ObjMatrix.crosses[5].push(e.target.id);
                ObjMatrix.crosses[6].push(e.target.id);
                break;
            default:
                alert('psina');
                console.log('crosses',e.target.id);
        }

    } 
    CheckWinner();
    nechJa ();
  });
  function CheckWinner() {
   for(let i = 0; i < 8; i++ ) {
    if (ObjMatrix.crosses[i].length == 3 && document.getElementById(`winner`).textContent != "Победили КРЕСТИКИ!") {
        document.getElementById(`winner`).textContent = '';
        document.getElementById('winner').insertAdjacentHTML('beforeend',"Победили КРЕСТИКИ!");
        BlockedAll();
        player1 ++;
        localStorage.setItem("player1",player1);
        document.getElementById(`player1`).textContent = `ПОБЕД КРЕСТИКИ: ${player1}`;
    } if (ObjMatrix.zero[i].length == 3 && document.getElementById(`winner`).textContent != "Победили НОЛИКИ!") {
        document.getElementById(`winner`).textContent = '';
        document.getElementById('winner').insertAdjacentHTML('beforeend',"Победили НОЛИКИ!");
        BlockedAll();
        player2 ++;
        localStorage.setItem("player2",player2);
        document.getElementById(`player2`).textContent = `ПОБЕД НОЛИКИ: ${player2}`;
    }//else 
   }
};
 function BlockedAll(){
    for(let a = 1; a <= 9; a++) {
        document.getElementById(`${a}`).className = "blocked";
    }
 };

 window.onload = function CreateScore() {
    if(player1 == null) {
        document.getElementById(`player1`).textContent = `ПОБЕД КРЕСТИКИ: 0`;
    } else {
        document.getElementById(`player1`).textContent = `ПОБЕД КРЕСТИКИ: ${player1}`;
    };
    if(player2 == null) {
        document.getElementById(`player2`).textContent = `ПОБЕД НОЛИКИ: 0`; 
    } else {
        document.getElementById(`player2`).textContent = `ПОБЕД НОЛИКИ: ${player2}`; 
    };
    document.getElementById(`winner`).textContent = 'ХОДЯТ КРЕСТИКИ';
 };

 function nechJa () {
    if (counterClick == 9 && document.getElementById('winner').textContent == "ХОДЯТ НОЛИКИ") {
             document.getElementById(`winner`).textContent = '';
             document.getElementById('winner').insertAdjacentHTML('beforeend',"НИЧЬЯ!");
             BlockedAll();
           
        }
 }

   

  