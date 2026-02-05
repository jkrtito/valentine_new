let yesClickCount = 0;
let allowNoClick = false;

const yesMessages = [
  "Yes 💖",
  "Are you sure? 😅",
  "Think again 😂",
  "Wrong answer 😏",
  "Stop clicking YES 💀",
  "No is the only option 😈"
];

function handleYesClick() {
  const yesButton = document.querySelector(".yes-button");
  const noButton = document.querySelector(".no-button");

  // Update YES text
  yesButton.textContent =
    yesMessages[Math.min(yesClickCount, yesMessages.length - 1)];

  yesClickCount++;

  // Make NO button bigger
  const currentSize = parseFloat(
    window.getComputedStyle(noButton).fontSize
  );
  noButton.style.fontSize = `${currentSize * 1.1}px`;

  // FINAL STAGE
  if (yesClickCount >= yesMessages.length) {
    allowNoClick = true;

    // Stop YES completely
    yesButton.style.display = "none";

    // Lock NO in place
    noButton.textContent = "NO 😈";
    noButton.style.left = "50%";
    noButton.style.top = "50%";
    noButton.style.transform = "translate(-50%, -50%)";
  }
}

function handleNoClick() {
  // Only allow click at final stage
  if (allowNoClick) {
    window.location.href = "no_page.html";
  }
}

// NO button chases cursor until final stage
document.addEventListener("mousemove", (e) => {
  if (allowNoClick) return;

  const noButton = document.querySelector(".no-button");
  const container = document.querySelector(".buttons");
  const rect = container.getBoundingClientRect();

  // OFFSET so it doesn't block clicks
  const offset = 60;

  const x = e.clientX - rect.left + offset;
  const y = e.clientY - rect.top + offset;

  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

