console.log('Welcome to tic toc toe game')
let music = new Audio("")
let audioTurn = new Audio("touch.mp3")
let gameover = new Audio("winning.wav")
let turn = "x"
let isgameover =false;
// function to change turn
const changeTurn = () =>{
    return turn ==="x"?"0":"x"
}
//function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "150px"
            gameover.play();
        }
    })
}


//game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach( Element =>{
    let boxtext = Element.querySelector('.boxtext');
    Element.addEventListener('click', () =>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn ;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText = "turn for "+ turn;
            }
           

        }
    })
}

)

//reset button
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(Element =>{
        Element.innerText =""
    })
    turn ="x";
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "turn for "+ turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    gameover.pause();
})