let hands = ["rock", "paper", "scissors"];
function getHand() {
  let randomIndex = Math.floor(Math.random() * 3);
  return hands[randomIndex];
}
console.log(getHand());
