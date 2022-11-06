function createGame(player1, player2, hour) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}">
  </li>
`;
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
  `;
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",
    createGame("brazil", "cameroon", "16:00") +
      createGame("hungary", "argentina", "13:00")
  ) +
  createCard("24/11", "segunda", createGame("switzarland", "brazil", "07:00"));
