let btn = document.querySelectorAll(".xo");

let x = true;

// check the winner.
let winner = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let alert = document.querySelector(".alert");

// required help to do this...

let winnerCheck = () => {
  for (let combo of winner) {
    if (
      btn[combo[0]].innerText != "" &&
      btn[combo[1]].innerText != "" &&
      btn[combo[2]].innerText != ""
    ) {
      if (
        btn[combo[0]].innerText == btn[combo[1]].innerText &&
        btn[combo[1]].innerText == btn[combo[2]].innerText
      ) {
        console.log("winner is: " + btn[combo[0]].innerText);
        for (let buttons of btn) {
          buttons.disabled = true;
          alert.style.visibility = "visible";
          alert.innerText =
            "Winner of this Game is: " + btn[combo[0]].innerText;
          setTimeout(() => {
            alert.style.visibility = "hidden";
          }, 1500);
        }
      }
    }
  }
};

for (let val of btn) {
  val.addEventListener("click", e => {
    if (x === true) {
      val.innerText = "X";
      x = false;
    } else {
      val.innerText = "O";
      x = true;
    }

    val.disabled = true;
    winnerCheck();
  });
}

// Reset button funciton
let reset = document.querySelector(".resetbtn");

reset.addEventListener("click", () => {
  for (let val of btn) {
    val.innerText = "";
    val.disabled = false;
  }
});
