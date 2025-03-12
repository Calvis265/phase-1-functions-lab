// Code your solution in this file!
// HQ is at block 42
const hqBlock = 42;
const feetPerBlock = 264;

// Function to calculate distance in blocks
function distanceFromHqInBlocks(pickup) {
  return Math.abs(pickup - hqBlock);
}

// Function to calculate distance in feet
function distanceFromHqInFeet(pickup) {
  return distanceFromHqInBlocks(pickup) * feetPerBlock;
}

// Function to calculate total distance travelled in feet
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * feetPerBlock;
}

// Function to calculate fare price
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; // Free ride for first 400 feet
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02; // 2 cents per foot after 400 feet
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat rate of $25 for rides over 2000 feet but within 2500 feet
  } else {
    return "cannot travel that far"; // Reject rides over 2500 feet
  }
}

 