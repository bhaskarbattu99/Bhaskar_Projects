// Array of colors
let colors = ["red", "Green", "Blue", "Yellow", "Orange", "Purple", "Cyan", "Pink", "Brown"];

// Get the button and color span elements
const btn = document.getElementById("btn");
const colorSpan = document.getElementById("color");

// Add event listener to the button
btn.addEventListener("click", () => {
  // Generate a random index
  const randomIndex = Math.floor(Math.random() * colors.length);

  // Get the random color
  const randomColor = colors[randomIndex];

  // Update the background color and color name
  document.body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});
