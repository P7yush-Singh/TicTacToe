let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let matchturn = document.querySelector(".matchturn");

let turn_player1 = true;

const pattern = [
  [0, 1, 2], // horizontal top row
  [3, 4, 5], // horizontal middle row
  [6, 7, 8], // horizontal bottom row
  [0, 3, 6], // vertical left column
  [1, 4, 7], // vertical middle column
  [2, 5, 8], // vertical right column
  [0, 4, 8], // diagonal top-left to bottom-right
  [2, 4, 6]  // diagonal top-right to bottom-left
];

const showTurn = () => {
    if (turn_player1) {
      matchturn.innerText = "Current turn: O";
    } else {
      matchturn.innerText = "Current turn: X";
    }
  }
  resetbtn.addEventListener('click', () => {
    boxes.forEach(box => {
      box.innerText = "";
      box.disabled = false;
    });
    turn_player1 = true;
    msgContainer.classList.add("hide");
    matchturn.innerText = "Current turn: O";
  });

newBtn.addEventListener('click', () => {
    boxes.forEach(box => {
      box.innerText = "";
      box.disabled = false;
    });
    turn_player1 = true;
    msgContainer.classList.add("hide");
    matchturn.innerText = "Current turn: O";
  });


boxes.forEach(box => {
  box.addEventListener('click', () => {
    if (turn_player1) {
      box.innerText = "O";
    } else {
      box.innerText = "X";
    }
    turn_player1 = !turn_player1;
    box.disabled = true;
    whowins();
    showTurn();
  });
});

const whowins = () => {
  for (let patt of pattern) {
    let pos1 = boxes[patt[0]].innerText;
    let pos2 = boxes[patt[1]].innerText;
    let pos3 = boxes[patt[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 == pos2 && pos2 == pos3) {
        showWinner(pos1);
        pos1.disabled = true;
        disBoxes();
      }
      
    }
  }
};

const disBoxes = () => {
    boxes.forEach(box => {
        box.disabled = true;
        });
}
const showWinner = (player_win) => {
    msg.innerText = `Winner is ${player_win}`
    msgContainer.classList.remove("hide");
}


  