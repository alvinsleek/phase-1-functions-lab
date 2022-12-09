function distanceFromHqInBlocks(pickupLocation) {
  return Math.abs(pickupLocation - 42);
}

function distanceFromHqInFeet(pickupLocation) {
  var blocks = distanceFromHqInBlocks(pickupLocation);
  return blocks * 264;

function distanceTravelledInFeet(start, destination) {
  return (destination - start) * 264;
}

function calculatesFarePrice(start, destination) {
  var distance = distanceTravelledInFeet(start, destination);
  if (distance > 2500) {
    return "cannot travel that far";
  } 
  else if (distance > 2000) {
    return "$15.00";
  } 
  else if (distance > 400) {
    return "$" + (distance * 0.02).toFixed(2);
  } 
  else {
    return "$0.00";
  }
}
