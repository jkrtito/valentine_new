let yesClickCount = 0;

const yesMessages = [
  "Yes 💖",
  "Are you sure? 😅",
  "Think again 😂",
  "Wrong answer 😏",
  "You had ONE job 😭",
  "Stop clicking YES 💀",
  "NO is the only option 😈"
];

function handleYesClick() {
  const yesButton = document.querySelector(".yes-button");
  const noButton = document.querySelector(".no-button");

  // Change YES text
  yesButton.textContent =
    yesMessages[Math.min(yesClickCount, yesMessages.length - 1)];

  yesClickCount++;

  // Make NO button bigger
  const currentSize = parseFloat(
    window.getComputedStyle(noButton).fontSize
  );

  noButton.style.fontSize = `${currentSize * 1.3}px`;
}

function handleNoClick() {
  window.location.href = "no_page.html";
}
