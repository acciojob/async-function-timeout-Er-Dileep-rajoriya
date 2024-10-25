//your JS code here. If required.
// Function to create a delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Async function to handle the button click
const displayMessage = async () => {
  // Retrieve user input values
  const text = document.getElementById('text').value;
  const delayTime = parseInt(document.getElementById('delay').value, 10);

  // Check if the delay value is a valid number
  if (isNaN(delayTime) || delayTime < 0) {
    alert('Please enter a valid non-negative number for the delay.');
    return;
  }

  // Introduce the specified delay
  await delay(delayTime);

  // Display the message in the output div
  document.getElementById('output').innerText = text;
};

// Attach the displayMessage function to the button's click event
document.getElementById('btn').addEventListener('click', displayMessage);
