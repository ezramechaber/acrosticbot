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

function lookupWord(letter,words,word) {
		flag = 'g';
	    var regEx = new RegExp('(\\b' + letter + ')\\w+/', flag);
	    var strEx = string(regEx)
	    console.log(strEx);
		}