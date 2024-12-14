const wheel = document.getElementById("wheel");
const spinButton = document.getElementById("spinButton");
const result = document.getElementById("result");

let roundsPlayed = 0; // Track the number of spins

function getOutcome() {
  const randomDegree = Math.random() * 360; // Generate a random degree
  const totalSpins = 360 * 3 + randomDegree;

  // Rotate the wheel
  wheel.style.transform = `rotate(${totalSpins}deg)`;

  return new Promise((resolve) => {
    setTimeout(() => {
      // Always say "You will not get a job"
      const outcome = "You Will Not Get a Job";
      resolve(outcome);
    }, 3000); // Match the transition duration
  });
}

async function playGame() {
  spinButton.disabled = true; // Disable the button during the spin
  const outcome = await getOutcome();

  roundsPlayed++;

  result.textContent = `Round ${roundsPlayed}: ${outcome}`;

  if (roundsPlayed === 3) {
    // Always display the same result
    result.textContent = `You Will Not Get a Job (3 out of 3 spins)`;

    // Reset the game
    roundsPlayed = 0;
  }

  spinButton.disabled = false; // Re-enable the button after the spin
}

spinButton.addEventListener("click", playGame);
