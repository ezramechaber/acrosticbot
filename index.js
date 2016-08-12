var twitterAPI = require('node-twitter-api');
var fs = require('fs');
var util = require('util');
var word = "benghazi";
var poem = "";

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

function writePoem () {
	for (var i = 0, len = word.length; i < len; i++) {
		poem = poem + lookupWord(word[i]) + "\n";
	}
	return poem;
}

function main() {
    var accessToken = process.env.ACCESS_TOKEN;
    var tokenSecret = process.env.TOKEN_SECRET;

    var twitter = new twitterAPI({
        consumerKey: process.env.APP_KEY,
        consumerSecret: process.env.APP_SECRET});
    // var accessToken = process.argv[4];
    // var tokenSecret = process.argv[5];

    // var twitter = new twitterAPI({
    //     consumerKey: process.argv[2],
    //     consumerSecret: process.argv[3]});

    twitter.statuses("update",
        {"status": writePoem()},
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