// 3 számláló {win,draw,lose}
// 3 gomb {rock,paper,scissors}
// 2 változó UserInput és RandomNum
// Id-k alapján vélaszt a randnum és a felhasználó
// Szabályok

const btns = document.querySelectorAll('.btns')
const count_win = document.querySelector('#count-win');
const count_draw = document.querySelector('#count-draw');
const count_lose = document.querySelector('#count-lose');
const history = document.querySelector('#history');

let UserInput = 0;
let num = 0;
let win = 0;
let lose = 0;
let draw = 0;
let name2= [];


btns.forEach((btn) =>{
    btn.addEventListener('click',(e) =>{
        const styles = e.currentTarget.classList;

        num = Math.floor(Math.random() * 3)+1;

        if(num == 1) {
            name2[0] = 'rock';
        }
        else if(num == 2) {
            name2[0] = 'paper';
        }
        else if(num == 3) {
            name2[0] = 'scissors';
        }

        if(styles.contains('rock')){
            UserInput = 1;
            name2[1] = 'rock';
        }
        else if(styles.contains('paper')){
            UserInput = 2;
            name2[1] = 'paper';
        }
        else if(styles.contains('scissors')){
            UserInput = 3;
            name2[1] = 'scissors';
        }

        if( (UserInput != 0) &&
            (UserInput == 1 && num == 2) ||
            (UserInput == 2 && num == 3) ||
            (UserInput == 3 && num == 1)){
                lose++;
        }
        else if(UserInput == num){
            draw++;
        }
        else if(UserInput != 0){
            win++;
        }

        count_win.textContent = win;
        count_lose.textContent = lose;
        count_draw.textContent = draw;

        
        history.innerHTML += `<div><p>${name2[1]} against ${name2[0]}</p></div>`
        
    })
})







