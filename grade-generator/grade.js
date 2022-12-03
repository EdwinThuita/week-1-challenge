//This is a function invoked by the submit button
function submit() {
    const marks = document.getElementById("marks").value;
    if (marks >= 0 && marks <= 100) {
      let grade;
  
      if (marks > 79) {
        grade = "A";
      } else if (marks >= 60) {
        grade = "B";
      } else if (marks >= 49) {
        grade = "C";
      } else if (marks >= 40) {
        grade = "D";
      } else {
        grade = "E";
      }
  
      const output = document.getElementById("grade");
      output.textContent = grade;
    } else {
      alert("Invalid input");
    }
  }