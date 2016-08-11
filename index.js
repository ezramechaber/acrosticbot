String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

// function flip(number) {
// 	return Math.floor(Math.random() * number) === 0;
// }

// function lookupWord(letter, words, word) {
// 		var regEx = /(\bletter)\w+/g;
// 	    var words = data.match(regEx);
// 	    word = words[Math.floor(Math.random() * words.length)].toProperCase();
//  }

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
// var randomnumber = flip(2)


// read our text file
fs.readFile('words.txt', 'utf8', function(error, data) {
	
	// Letter B
	randomnumber = Math.floor(Math.random() * 2) === 0;
	if (randomnumber == 0) {
	    //true
		var regExE = /(\bb)\w+/g;
	    var bletters = data.match(regExE);
	    bword = bletters[Math.floor(Math.random() * bletters.length)].toProperCase();
	}

	else { 
	    //false
	}

	// Letter E
	randomnumber = Math.floor(Math.random() * 2) === 0;
	if (randomnumber == 0) {
	    //true
		regExE = /(\be)\w+/g;
	    var eletters = data.match(regExE);
	    eword = eletters[Math.floor(Math.random() * eletters.length)].toProperCase();
	}

	else { 
	    //false
	}

	// Letter N
	randomnumber = Math.floor(Math.random() * 2) === 0;
	if (randomnumber == 0) {
	    //true
		regExE = /(\bn)\w+/g;
	    var nletters = data.match(regExE);
	    nword = nletters[Math.floor(Math.random() * nletters.length)].toProperCase();
	}

	else { 
	    //false
	}

	// Letter G
	randomnumber = Math.floor(Math.random() * 2) === 0;
	if (randomnumber == 0) {
	    //true
		regExE = /(\bg)\w+/g;
	    var gletters = data.match(regExE);
	    gword = gletters[Math.floor(Math.random() * gletters.length)].toProperCase();
	}

	else { 
	    //false
	}

	// Letter H
	randomnumber = Math.floor(Math.random() * 2) === 0;
	if (randomnumber == 0) {
	    //true
		regExE = /(\bh)\w+/g;
	    var hletters = data.match(regExE);
	    gword = hletters[Math.floor(Math.random() * hletters.length)].toProperCase();
	}

	else { 
	    //false
	}

	// Letter A
	randomnumber = Math.floor(Math.random() * 2) === 0;
	if (randomnumber == 0) {
	    //true
		regExE = /(\ba)\w+/g;
	    var aletters = data.match(regExE);
	    gword = aletters[Math.floor(Math.random() * aletters.length)].toProperCase();
	}

	else { 
	    //false
	}

	// Letter Z
	randomnumber = Math.floor(Math.random() * 2) === 0;
	if (randomnumber == 0) {
	    //true
		regExE = /(\bz)\w+/g;
	    var zletters = data.match(regExE);
	    gword = zletters[Math.floor(Math.random() * zletters.length)].toProperCase();
	}

	else { 
	    //false
	}

	// Letter I
	randomnumber = Math.floor(Math.random() * 2) === 0;
	if (randomnumber == 0) {
	    //true
		regExE = /(\bi)\w+/g;
	    var iletters = data.match(regExE);
	    gword = iletters[Math.floor(Math.random() * iletters.length)].toProperCase();
	}

	else { 
	    //false
	}

	poem = bword + "\n" + eword + "\n" + nword + "\n" + gword + "\n" + hword + "\n" + aword + "\n" + zword + "\n" + iword;
	console.log (poem)

}
);
