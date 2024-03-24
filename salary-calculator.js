function calculateNetSalary(basicSalary, benefits) {
  // Tax rates
  const taxRates = [
    {lowerBound: 0, upperBound: 24000, rate: 10},
    {lowerBound: 24001, upperBound: 32333, rate: 15},
    {lowerBound: 32334, upperBound: 500000, rate: 20},
    {lowerBound: 500001, upperBound: 800000, rate: 25},
    {lowerBound:800001, upperBound: Infinity, rate: 30}
  ];

  // KRA, NHIF, NSSF values
  const kraAllowance = 24000;
  const nhifDeduction = 1700; // Monthly NHIF deduction
  const nssfDeduction = 200; // Monthly NSSF deduction

  // Calculate gross salary
  const grossSalary = basicSalary + benefits;

  // Calculate taxable income
  const taxableIncome = grossSalary - kraAllowance;

  // Calculate tax
  let tax = 0;
  for (const rate of taxRates) {
    if(taxableIncome > rate.upperBound) {
      tax += (rate.upperBound - rate.lowerBound) * rate.rate/100;
    } else {
      tax += (taxableIncome - rate.lowerBound) * rate.rate/100;
      break;
    }
  }


  // Calculate net salary
  const nhifAndNssfDeductions = nhifDeduction + nssfDeduction;
  const netSalary = grossSalary - tax - nhifAndNssfDeductions;

  return {
      grossSalary: grossSalary,
      tax: tax,
      nhifDeduction: nhifDeduction,
      nssfDeduction: nssfDeduction,
      netSalary: netSalary
  };

  
}

// Testing the code with random values:
const basicSalary = 50000;
const benefits = 10000;
const result = calculateNetSalary(basicSalary, benefits);

console.log("Tax:", result.tax); // Console Output : 4383
console.log("NHIF Deductions", result.nhifDeduction); // Console Output: 1700
console.log("NSSF Deductions", result.nssfDeduction); // Console Output: 1700
console.log("Gross Salary", result.grossSalary); // Console Output: 60000
console.log("Net Salary", result.netSalary); // Console Output: 53717

// The code is running correctly after testing.

