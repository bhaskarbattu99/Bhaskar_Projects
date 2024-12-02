// Calculate Age Function:
function calculateAge() {
    const birthYear = document.getElementById('birthYear').value.trim();
    const currentYear = new Date().getFullYear();
  
    if (!birthYear || isNaN(birthYear) || birthYear > currentYear ||currentYear- birthYear>100 ) {
                                                                      //  limit's are 100 here... 
      alert('Please enter a valid your birth year..');
      return;
    }
  
    const age = currentYear - parseInt(birthYear);
    document.getElementById('ageResult').textContent = age;
  }
  
  // String Manipulator Function:
  function manipulateString() {
    const inputString = document.getElementById('inputString').value.trim();
  
    if (!inputString !== !isNaN(Number(inputString))) {
        // Check if inputString is falsy (e.g., empty, null, undefined, etc.)
        // OR
         // Check if inputString can be converted into a valid number using Number().
         // If either condition is true, display the alert and stop execution
      alert('Please enter a valid string.');
      return;
    }
    
  
    // String Reversal:
    const reversedString = inputString.split('').reverse().join('');
  
    // Convert to Uppercase:
    const uppercaseString = inputString.toUpperCase();
  
    // Convert to Lowercase:
    const lowercaseString = inputString.toLowerCase();
  
    // Display Results:
    document.getElementById('reversedString').textContent = reversedString;
    document.getElementById('uppercaseString').textContent = uppercaseString;
    document.getElementById('lowercaseString').textContent = lowercaseString;
  }
  
  // Event Listeners:
  document.getElementById('calculateAge').addEventListener('click', calculateAge);
  document.getElementById('manipulateString').addEventListener('click', manipulateString);
  