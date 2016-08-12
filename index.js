var twitterAPI = require('node-twitter-api');
var fs = require('fs');
var util = require('util');
//define the acrostic word (create a Heroku environmental variable with key 'myWord' and value set to your word)
var word = process.env.myWord;
var acrostic = "";

String.prototype.toProperCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

//decide whether to find a random word for a given value or just return the letter
function lookupWord(letter,wordList,wordPick) {
    //flips a coin for whether to fill in the word or leave a letter
	var randomnumber = Math.floor(Math.random() * 2) === 0;
    if (randomnumber == 0) {
        //true
        //look through the dictionary to find all words that start with our letter
		var dict = fs.readFileSync('words.txt', 'utf8');
		var regEx = new RegExp('(\\b' + letter + ')\\w+', 'g');
		wordList = dict.match(regEx);
        //pick a random word from our selected list
		wordPick = wordList[Math.floor(Math.random() * wordList.length)].toProperCase();
		return wordPick;
	}

	else { 
        //false
        //store our letter as the value for this line of the acrostic
	    wordPick = letter.toProperCase();
	    return wordPick;
	}

 }

//write our acrostic by taking our base word and then running our lookupWord function for each letter of that word.
function writeAcrostic () {
	for (var i = 0, len = word.length; i < len; i++) {
		//this function technically adds an extra "\n" to the end, should be replaced with a "while" that prevents applying for the last letter
        acrostic = acrostic + lookupWord(word[i]) + "\n";
	}
	return acrostic;
}

//post to twitter
function main() {
    var accessToken = process.env.accessToken;
    var tokenSecret = process.env.tokenSecret;

    var twitter = new twitterAPI({
        consumerKey: process.env.appKey,
        consumerSecret: process.env.appSecret});
    // var accessToken = process.argv[4];
    // var tokenSecret = process.argv[5];

    // var twitter = new twitterAPI({
    //     consumerKey: process.argv[2],
    //     consumerSecret: process.argv[3]});

    twitter.statuses("update",
        {"status": writeAcrostic()},
        accessToken,
        tokenSecret,
        function(error, data, response) {
            if (error) {
                console.log("something went wrong: " + util.inspect(error));
            }
        }
    );
}

main();