//This is a function invoked by the submit button
function submit() {
  //HTML DOM element to read speed value in text box
    const speed = document.getElementById("speed").value;
  
    let status = 0;
     // if statement to sort assign points to grade
  
    if (speed < 70) {
      status = "OK";
    } else {
      const excessSpeed = speed - 70;
      let points = parseInt(excessSpeed / 5);
  
      if (points <= 12) {
        status = `Points: ${points}`;
      } else {
        status = "License suspended";
        alert('Licence Suspended')
      }
    }
  ////it returns the element object which in this case is the status
    const output = document.getElementById("status");
    output.textContent = status;
  }