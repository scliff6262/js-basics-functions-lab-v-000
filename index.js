// Code your solution in this file!
function distanceFromHqInBlocks(street){
  let answer;
  if (street >= 42){
    answer = street - 42
  } else {
    answer = 42 - street
  }
  return answer
}

function distanceFromHqInFeet(street){
  return distanceFromHqInBlocks(street) * 264
}

function distanceTravelledInFeet(street1, street2){
  return Math.abs(street1 - street2) * 264
}

function calculatesFarePrice(start, destination){
  
}
