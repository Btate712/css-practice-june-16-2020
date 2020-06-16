let frontShowing = true;

function flip() {
  const card = document.getElementById("card");
  const front = document.getElementById("card-front");
  const back = document.getElementById("card-back");

  frontShowing = !frontShowing;
  
  setTimeout(() => {
    front.style.display = frontShowing ? "block" : "none";
    back.style.display = frontShowing ? "none" : "block";
  }, 250);
  
  card.style.boxShadow = frontShowing ? "10px 10px darkGray" : "-10px 10px darkGray";
  card.style.transform = frontShowing ? "rotateY(0deg)" : "rotateY(180deg)";
}