let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetBtn");
let newGame = document.querySelector("#newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;
let count = 0;

const winPattern=[
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7],[2,5,8],[2,4,6],
    [3,4,5],[6,7,8]
];

const resetGame = () => {
    turn0 = true;
    enableBox();
    msgContainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        count++;
        if(turn0){
            box.innerText="O";
            box.classList.add("O");
            turn0=false;
        }
        else{
            box.innerText="X";
            box.classList.add("X");
            turn0=true;
        }
        box.disabled = true;

        checkWinners();
    });
});


const disableBox = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBox = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
}

const checkWinners = () => {
    for(let pattern of winPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }
        if(count === 9){
            msg.innerText = "Match Drawn";
            msgContainer.classList.remove("hide");
            disableBox();
        }
    }
}

resetbtn.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);  