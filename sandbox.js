//var Promise = require("bluebird");
var fs = require('fs');
var b;
var e;
var n;
var gword;
var hword;
var aword;
var zword;
var iword;
var poem;

//Promise.promisifyAll(fs);

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

function lookupWord(letter,words,word) {
	var randomnumber = Math.floor(Math.random() * 2) === 0;
	if (randomnumber == 0) {
	    //true
		var dict = fs.readFileSync('words.txt', 'utf8');
		var regEx = new RegExp('(\\b' + letter + ')\\w+', 'g');
		words = dict.match(regEx);
		word = words[Math.floor(Math.random() * words.length)].toProperCase();
		//console.log(word);
		// fs.readFile('words.txt', 'utf8', function lookup(error, data) {
		// 	    var regEx = new RegExp('(\\b' + letter + ')\\w+', 'g');
		// 	    //console.log(data);
		// 	    var words = data.match(regEx);
		// 	    var word = words[Math.floor(Math.random() * words.length)].toProperCase();
		// 	    console.log(word);
		// 	});
		return word;
	}


	else { 
	    //false
	    word = letter.toProperCase();
	    return word;
	}

 }

// Letter B
poem = lookupWord('b') + "\n" + lookupWord('e') + "\n" + lookupWord('n') + "\n" + lookupWord('g') + "\n" + lookupWord('h') + "\n" + lookupWord('a') + "\n" + lookupWord('z') + "\n" + lookupWord('i');
console.log(poem);