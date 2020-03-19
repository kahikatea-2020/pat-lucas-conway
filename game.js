module.exports =  {
  runGame
}

function runGame (arr) {
  console.log(arr)
  for (let index = 0; index < 2; index++) { // 50 generations
    for (let index in arr) {
      if (arr[index] == 1) { // is alive
        if (neighbourCount(index, arr) < 2) { // underpop
          arr[index] = 0
        } else if (neighbourCount(index, arr) < 3) { // livesOn
          arr[index] = 1
        } else if (neighbourCount(index, arr) < 4) { // overpop
          arr[index] = 0
        }
      } else if (neighbourCount(index, arr) == 3) {
        arr[index] = 1
      }
    } console.log(arr)
  }
}

function neighbourCount (index, arr) {
  let count = 0

  let currentCoord = getCoord(index)
  console.log(currentCoord)
  count += isAlive(getIndex([currentCoord[0] - 1, currentCoord[1] - 1]), arr) // top left
  count += isAlive(getIndex([currentCoord[0], currentCoord[1] - 1]), arr) // top mid
  count += isAlive(getIndex([currentCoord[0] + 1, currentCoord[1] - 1]), arr) // top righ t
  count += isAlive(getIndex([currentCoord[0] - 1, currentCoord[1]]), arr) // left
  count += isAlive(getIndex([currentCoord[0] + 1, currentCoord[1]]), arr) // right
  count += isAlive(getIndex([currentCoord[0] - 1, currentCoord[1] + 1]), arr) // bottom left
  count += isAlive(getIndex([currentCoord[0], currentCoord[1] + 1]), arr) // bottom
  count += isAlive(getIndex([currentCoord[0] + 1, currentCoord[1] + 1]), arr) // bottom right
  return count
}

function getCoord (index) {
  let coords = []
  coords[0] = Math.floor(index / 4)
  coords[1] = index % 4
  console.log(coords);
  
  return coords
}

function getIndex (coords) { 

  let index = 0
  index += coords[0]
  index += 4 * coords[1]
  console.log(index);
  return index
}

function isAlive (index, arr) {
  if (index < 0 && index > 15) {
    return 0
  }
  if (arr[index] == 0) {
    return 0
  } else return 1
}
