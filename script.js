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

function shufflelists() {
	var inp1 = document.getElementById("input1");
	var inp2 = document.getElementById("input2");
	var out1 = document.getElementById("output1");
	var out2 = document.getElementById("output2");
	out1.value = shuffle(inp1.value.split('\n')).join('\n')
	out2.value = shuffle(inp2.value.split('\n')).join('\n')
}