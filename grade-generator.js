function calculateGrade(results) {
  if (results > 79) {
    return 'A';

  } else if (results >= 60 && results <= 79) {
    return 'B';

  } else if(results >= 49 && results <= 59) {
    return 'C';

  } else if(results >= 40 && results <= 49) {
    return 'D';

  } else {
    return 'E';
  }
   
  

}

  function grade() {
    let results  = parseFloat("Enter student results");


      // Check if the input is a number and within the valid range

      if(results >= 0 && results <= 100) {
      let grade = calculateGrade(results);
  
    }
  }

  grade();

  
  // Testing the code:

  console.log(calculateGrade(56)); // Console Output: C
  console.log(calculateGrade(20)); // Console Output: E
  console.log(calculateGrade(67)); // Console Output: B
  console.log(calculateGrade(85)); // Console Output: A
  console.log(calculateGrade(45)); // Console Output: D
  

  // The code is running correctly after testing.
