var fs = require('fs');
var poem;

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

function lookupWord(letter,wordList,wordPick) {
	var randomnumber = Math.floor(Math.random() * 2) === 0;
	if (randomnumber == 0) {
	    //true
		var dict = fs.readFileSync('words.txt', 'utf8');
		var regEx = new RegExp('(\\b' + letter + ')\\w+', 'g');
		wordList = dict.match(regEx);
		wordPick = wordList[Math.floor(Math.random() * wordList.length)].toProperCase();
		return wordPick;
	}


	else { 
	    //false
	    wordPick = letter.toProperCase();
	    return wordPick;
	}

 }

// Letter B
poem = lookupWord('b') + "\n" + lookupWord('e') + "\n" + lookupWord('n') + "\n" + lookupWord('g') + "\n" + lookupWord('h') + "\n" + lookupWord('a') + "\n" + lookupWord('z') + "\n" + lookupWord('i');
console.log(poem);