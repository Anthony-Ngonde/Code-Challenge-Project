function calculateDemeritPoints(speed) {
  const speedConstant = 70;
  const kmPerDemeritPoint = 5;
  const pointsPerKmAboveConstant = 1;


if (speed <= speedConstant) {
  return "Ok";

} else {

  const kmAboveConstant = speed - speedConstant;
  const demeritPoints = kmAboveConstant / kmPerDemeritPoint;
  
  if (demeritPoints > 12) {
    return "License suspended";
  } else {
    return `Points: ${demeritPoints}`;
  }
}

}

// Testing the code:

let speed = 80;
console.log(calculateDemeritPoints(speed)); // Console Output: Points: 2

// The code is running correctly after testing.





