// APPROACH: Bitwise '&' operator (between (number) & (number-1)) => Right most SET bit of "number" will be unset.
// REASON: More effecient than looping through all bits.
// CAVEAT: Bitwise operators only work for a maximum of 32 bits

function Count (input) {
  console.time('performance')

  if (isRangeError(input)) {
    throw new RangeError('Error: Input must be positive integer')
  } else {
    let count = 0
    let number = input
    let positionArray = []
    if (number > 0) {
      while (number > 0) {
        let bitPostion = Math.log2(number ^ (number & (number - 1)))
        positionArray.push(bitPostion)

        // right most poitive bit is set to 0 and count incremented
        number &= (number - 1)
        count++
      }
    }

    positionArray.unshift(count)

    console.timeEnd('performance')
    return positionArray
  }
}

function isRangeError (x) {
  return !((typeof x === 'number') && (x % 1 === 0) && x >= 0)
}

module.exports = { Count }
