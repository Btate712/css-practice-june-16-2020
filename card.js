let frontShowing = true;

function flip() {
  const card = document.getElementById("card").style;
  const front = document.getElementById("card-front").style;
  const back = document.getElementById("card-back").style;

  frontShowing = !frontShowing;
  
  setTimeout(() => {
    front.display = frontShowing ? "block" : "none";
    back.display = frontShowing ? "none" : "block";
    card.backgroundColor = frontShowing ? "rgb(232, 245, 249)" : "lightYellow";
  }, 250);
  
  card.boxShadow = frontShowing ? "10px 10px darkGray" : "-10px 10px darkGray";
  card.transform = frontShowing ? "rotateY(0deg)" : "rotateY(180deg)";
}

document.addEventListener('keypress', e => {
  if(e.code === "Space") {
    flip();
  }
});