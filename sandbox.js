var fs = require('fs');
var bword = "B";
var eword = "E";
var nword = "N";
var gword = "G";
var hword = "H";
var aword = "A";
var zword = "Z";
var iword = "I";
var poem = "";

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

function lookupWord(letter,words,word) {
	var randomnumber = Math.floor(Math.random() * 2) === 0;
	if (randomnumber == 0) {
	    //true
	    fs.readFile('words.txt', 'utf8', function(error, data) {
	    // console.log(data);
	    var regExs = new RegExp('/(\\b', letter, ')\\w+/', 'g');
	    var words = data.match(regExs);
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