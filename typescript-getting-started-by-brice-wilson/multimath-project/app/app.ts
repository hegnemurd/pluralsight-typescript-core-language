function startGame() {
  // starting a new game

  let playerName: string = "Audrey";
  logPlayer(playerName);

  var messagesElement = document.getElementById("messages");
  messagesElement!.innerText = "Welcome to MultiMath! Starting new game...";
}

function logPlayer(name: string): void {
  console.log(`New game starting for player: ${name}`);
}

function getInputValue(elementID: string): string | undefined {
  const inputElement: HTMLInputElement = <HTMLInputElement>(
    document.getElementById(elementID)
  );

  if (inputElement.value === "") {
    return undefined;
  } else {
    return inputElement.value;
  }
}

function postScore(score: number, playerName: string): void {
  const scoreElement: HTMLElement | null = document.getElementById(
    "postedScores"
  );
  scoreElement!.innerText = `${score} - ${playerName}`;
}

document.getElementById("startGame")!.addEventListener("click", startGame);
