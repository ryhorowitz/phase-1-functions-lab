// Code your solution in this file!
function distanceFromHqInBlocks(value) {

  return Math.abs(42 - value)
}

function distanceFromHqInFeet(value) {
  return distanceFromHqInBlocks(value) * 264

}

function distanceTravelledInFeet(start, destination) {
  const blocksTravelled = Math.abs(start - destination)
  return blocksTravelled * 264
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)
  
  if (distance < 401) {
    return 0
  } else if (distance > 2500) {
    return 'cannot travel that far'
  } else if (distance > 2000 && distance < 2500) {
    return 25
  } else {
    return (distance - 400) * 2 / 100
  }
}


