function displayInput(event) {
      event.preventDefault(); // Prevents the form from refreshing the page
      const name = document.getElementById('nameInput').value; // Gets the input value
      const outputDiv = document.getElementById('output');
      outputDiv.textContent = `Hello, ${name}!`; // Displays the input
    }