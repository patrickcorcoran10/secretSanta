const fs = require('fs');
let givers = [];
let getters = [];
function Pair(giver, getter) {
  this.giver = giver;
  this.getter = getter;
}
fs.readFile("./Conway Family - Secret Santa.csv", 'utf8', (error, data) => {
  if (error) {
    console.log(err)
  } else {
    givers = data.split('\r\n');
    getters = data.split('\r\n');
    givers.shift();
    getters.shift()
    shuffle(getters)
    matching()
  }
})
function matching() {
  for (var i = 0; i < givers.length; i++) {
    if (givers[i] === getters[i]) {
      // const pair1 = new Pair(givers[i], getters[i])
      // console.log(pair1)
      // console.log("stop")
      console.log("___---------------------------------")
      // shuffle(getters)
      // matching()
    } else {
      const pair1 = new Pair(givers[i], getters[i])
      console.log(pair1)
    }
    
  }
}
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}


