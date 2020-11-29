const fs = require('fs');
indexArr = []

fs.readFile("./Conway Family - Addresses.csv", 'utf8', (error, data) => {
    error
    ? console.log(error)
    : console.log(data)
})
function getRandomInt(max) {
    const a = indexArr[Math.floor(Math.random() * Math.floor(max))]
    const b = indexArr[Math.floor(Math.random() * Math.floor(max))]
    if (a === b) console.log("stop")
    console.log(`secret santa ${a} and ${b}`)
  }

  getRandomInt(indexArr.length);