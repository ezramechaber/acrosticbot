var fs = require('fs');
var bword;
var eword;
var nword;
var gword;
var hword;
var aword;
var zword;
var iword;
var poem;

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

function lookupWord(letter,words,word) {
	var randomnumber = Math.floor(Math.random() * 2) === 0;
	if (randomnumber == 0) {
	    //true
		fs.readFile('words.txt', 'utf8', function lookup(error, data) {
		    var regExE = new RegExp('(\\b' + letter + ')\\w+', 'g');
		    var words = data.match(regExE);
		    var word = words[Math.floor(Math.random() * words.length)].toProperCase();
		    console.log(word);
			});
		return word;
	}


	else { 
	    //false
	    word = letter;
	    return word;
	}

 }

// Letter B
bword = lookupWord('b');
console.log(bword);