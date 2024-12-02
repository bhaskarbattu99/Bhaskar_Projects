// Select all buttons
let buttons = document.querySelectorAll(".btn");

// Select the value display element
let value = document.getElementById("value");

// Initial counter value
let count = 0;

// Add event listeners to all buttons
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let classList = e.currentTarget.classList;

    // Check which button is clicked
    if (classList.contains("decrease")) {
      count--;
    } else if (classList.contains("increase")) {
      count++;
    } else if (classList.contains("reset")) {
      count = 0;
    }

    // Update the counter display
    value.textContent = count;

    // Change the color based on the count
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
  });
});
