let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGame = document.querySelector("#new");
let msgCont = document.querySelector(".msg-cont");
let msg = document.querySelector("#msg");

let turnO = true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turnO = true;
    enabledBtn();
    msgCont.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerHTML = "O";
            box.style.color = "#3498db";
            turnO = false;;
        } else {
            box.innerHTML = "X";
            box.style.color = "#ff2e63";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disabledBtn = () => {
    for(box of boxes){
        box.disabled = true;
    }
}

const enabledBtn = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}

const showWinner = (winner) => {
    msg.innerHTML = `Congratulations, Winner is ${winner}`;
    msgCont.classList.remove("hide");
    disabledBtn();
}

const noWinner = () => {
    let isDraw = true;
    boxes.forEach((box) => {
        if(box.innerHTML === ""){
            isDraw = false;
        }
    });
    if(isDraw) {
        msg.innerHTML = "It's a Draw!";
        msgCont.classList.remove("hide");
        disabledBtn();
    }
}

const checkWinner = () => {
    for(patterns of winPatterns){
        let pos1Val = boxes[patterns[0]].innerHTML;
        let pos2Val = boxes[patterns[1]].innerHTML;
        let pos3Val = boxes[patterns[2]].innerHTML;
        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
            } else {
                noWinner();
            }
        }
    }
};


newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);

