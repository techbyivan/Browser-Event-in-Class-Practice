
// Create a button that logs "You Left Clicked" to the console when clicked.

// #2 small
<button id='register btn'>Register</button>
    
const button = document.getElementById('#register btn')
    button.addEventListener('click', (event) => {
      if (event.button === '0') {
          console.log('Register Button Clicked')
      }
    })


///////////////////////////////////////////////////////////////////////

