slowestKey = (keyTimes) => {
  let result = [], resultTimes = 0, startTime = 0, countTimes = 0
  for (i in keyTimes) {
      if (i == 0) {
          resultTimes = keyTimes[i][1]
      }
      countTimes = keyTimes[i][1] - startTime
      if (countTimes <= resultTimes) {
          resultTimes = countTimes
          result = keyTimes[i]
      }
  }
  return String.fromCharCode(result[0] + 97)
  // +97 digunakan untuk menampilkan alfabet a~z
}

const result = slowestKey([[0, 2], [1, 5], [0, 9], [2, 15]])
console.log("Result :",result)