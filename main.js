function createGame(player1, player2, hour) {
  return `
  <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}">
  </li>
`;
}

function createCard(date, day, games) {
  return `
  <div class="card">
    <h2>${date} <span>${day}</span></h2>
    <ul>
      ${games}
    </ul>
  </div>
  `;
}

document.querySelector("#app").innerHTML = `
<header> <img src="./assets/header.svg" alt="Logo da NLW"> </header>
<main class="cards">
  ${createCard(
    "24/11",
    "quinta",
    createGame("brazil", "cameroon", "16:00") +
      createGame("hungary", "argentina", "13:00")
  )}
  ${createCard(
    "24/11",
    "segunda",
    createGame("switzarland", "brazil", "07:00")
  )}
</main>
`;
