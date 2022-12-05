//This is a function invoked by the submit button
function submit() {
  // it returns an  Element object representing the element whose id property matches the specified string(marks)
    const marks = document.getElementById("marks").value;
    // If used to specify the conditions to be met
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
      //it returns the element object which in this case is the output grade
  
      const output = document.getElementById("grade");
      output.textContent = grade;
    // This function outputs the alert invalid input just incase the value is not  (>= 0 && marks <= 100)
    } else {
      alert("Invalid input");
    }
  }