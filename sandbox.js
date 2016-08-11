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
var flag;

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

function lookupWord(letter,words,word) {
	var randomnumber = Math.floor(Math.random() * 2) === 0;
	if (randomnumber == 0) {
	    //true
	    fs.readFile('words.txt', 'utf8', function(error, data) {
	    // console.log(data);
	    var regExE = new RegExp('(\\b' + letter + ')\\w+', 'g');
	    var words = data.match(regExE);
	    var word = words[Math.floor(Math.random() * words.length)].toProperCase();
	    return word;
		});
	}


	else { 
	    //false
	    word = letter;
	    return word;
	}

 }

// read our text file

// Letter B
bword = lookupWord('b');
console.log(bword);