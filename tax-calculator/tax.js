const nhifRates = [
    { lowerBound: 0, upperBound: 5999, deduction: 150 },
    { lowerBound: 6000, upperBound: 7999, deduction: 300 },
    { lowerBound: 8000, upperBound: 11999, deduction: 400 },
    { lowerBound: 12000, upperBound: 14999, deduction: 500 },
    { lowerBound: 15000, upperBound: 19999, deduction: 600 },
    { lowerBound: 20000, upperBound: 24999, deduction: 750 },
    { lowerBound: 25000, upperBound: 29999, deduction: 850 },
    { lowerBound: 30000, upperBound: 34999, deduction: 900 },
    { lowerBound: 35000, upperBound: 39999, deduction: 950 },
    { lowerBound: 40000, upperBound: 44999, deduction: 1000 },
    { lowerBound: 45000, upperBound: 49999, deduction: 1100 },
    { lowerBound: 50000, upperBound: 59999, deduction: 1200 },
    { lowerBound: 60000, upperBound: 69999, deduction: 1300 },
    { lowerBound: 70000, upperBound: 79999, deduction: 1400 },
    { lowerBound: 80000, upperBound: 89999, deduction: 1500 },
    { lowerBound: 90000, upperBound: 99999, deduction: 1600 },
    { lowerBound: 100000, upperBound: null, deduction: 1700 },
  ];
  
  function calculate() {
    //Get basic salary and benefits
    const basicSalary = parseInt(document.getElementById("basicSalary").value);
    const benefits = parseInt(document.getElementById("benefits").value);
  
    //get labels to be used to ouput info/calculations
    const grossSalaryLabel = document.getElementById("grossSalary");
    const payeLabel = document.getElementById("paye");
    const nhifLabel = document.getElementById("nhif");
    const nssfLabel = document.getElementById("nssf");
    const netSalaryLabel = document.getElementById("netSalary");
  
    //compute and setgross salary
    const grossSalary = basicSalary + benefits;
    grossSalaryLabel.textContent = grossSalary;
  
    const paye = calculatePaye(grossSalary);
    payeLabel.textContent = paye;
  
    const nhif = calculateNhif(grossSalary);
    nhifLabel.textContent = nhif;
  
    const nssf = grossSalary * 0.06;
    nssfLabel.textContent = nssf;
  
    const netSalary = grossSalary - (paye + nhif + nssf);
    netSalaryLabel.textContent = netSalary;
  }
  
  function calculatePaye(grossSalary) {
    let paye = 0;
  
    if (grossSalary <= 24000) {
      paye = parseInt(grossSalary * 0.1);
    } else if (grossSalary <= 32333) {
      paye = parseInt(grossSalary * 0.25);
    } else {
      paye = parseInt(grossSalary * 0.3);
    }
  
    return paye;
  }
  
  function calculateNhif(grossSalary) {
    let nhif = 0;
  
    for (let rate of nhifRates) {
      const { lowerBound, upperBound, deduction } = rate;
      if (grossSalary >= lowerBound && upperBound && grossSalary <= upperBound) {
        return deduction;
      }
      if (grossSalary >= lowerBound && !upperBound) {
        return deduction;
      }
    }
  }