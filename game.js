module.exports =  {
  runGame
}

function runGame (arr) {
  console.log(arr)
  for (let index = 0; index < 50; index++) { // 50 generations
    for (let index in arr) {
      if (arr[index] == 1) { // is alive
        if (neighbourCount(index, arr) < 2) { // underpop
          arr[index] = 0
        } else if (neighbourCount(index, arr) < 4) { // livesOn
          arr[index] = 1
        } else if (neighbourCount(index, arr) > 3) { // overpop
          arr[index] = 0
        }
      } else if (neighbourCount(index, arr) == 3) {
        arr[index] = 1
      }
    } console.log(arr[0], arr[1], arr[2], arr[3], "\n",arr[4], arr[5], arr[6], arr[7], "\n",arr[8], arr[9], arr[10], arr[11], "\n", arr[12], arr[13], arr[14], arr[15])
  }
}

function neighbourCount (index, arr) {
  let count = 0

  let currentCoord = getCoord(index)
  count += isAlive(getIndex([currentCoord[0] - 1, currentCoord[1] - 1]), arr) // top left
  count += isAlive(getIndex([currentCoord[0], currentCoord[1] - 1]), arr) // top mid
  count += isAlive(getIndex([currentCoord[0] + 1, currentCoord[1] - 1]), arr) // top righ t
  count += isAlive(getIndex([currentCoord[0] - 1, currentCoord[1]]), arr) // left
  count += isAlive(getIndex([currentCoord[0] + 1, currentCoord[1]]), arr) // right
  count += isAlive(getIndex([currentCoord[0] - 1, currentCoord[1] + 1]), arr) // bottom left
  count += isAlive(getIndex([currentCoord[0], currentCoord[1] + 1]), arr) // bottom
  count += isAlive(getIndex([currentCoord[0] + 1, currentCoord[1] + 1]), arr) // bottom right
  console.log(count);
  
  return count
}

function getCoord (index) {
  let coords = []
  coords[0] = Math.floor(index / 4)
  coords[1] = index % 4
  
  return coords
}

function getIndex (coords) {
  if (coords[0] < 0 || coords[0] > 3 || coords[1] < 0 || coords[1] > 3) {
    return false
  }
  let index = 0
  index += coords[0]
  index += 4 * coords[1]
  return index
}

function isAlive (index, arr) {
  if (index == false) {
    return 0
  }
  if (arr[index] == 0) {
    return 0
  } else return 1
}
