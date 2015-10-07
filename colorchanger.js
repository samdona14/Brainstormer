function ran_col() { //function name
  var color = '#'; // hexadecimal starting symbol
  var letters = ['3e9798','#5c3fb4', '#c8cc7d']; //Set your colors here
  color += letters[Math.floor(Math.random() * letters.length)];
  document.getElementById('changeColorMeth').style.background = color; // Setting the random color on your div element.
           }
