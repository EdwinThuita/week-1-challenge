function submit() {
    const speed = document.getElementById("speed").value;
  
    let status = 0;
  
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
  
    const output = document.getElementById("status");
    output.textContent = status;
  }