// Step 1: init
var twitterAPI = require('node-twitter-api');
var twitter = new twitterAPI({
    consumerKey: 'your consumer Key',
    consumerSecret: 'your consumer secret',
    callback: 'http://yoururl.tld/something'
});

// Step 2: Getting a request token
twitter.getRequestToken(function(error, requestToken, requestTokenSecret, results){
    if (error) {
        console.log("Error getting OAuth request token : " + error);
    } else {
        //store token and tokenSecret somewhere, you'll need them later; redirect user
    }
});

// Step 3: Getting an Access Token

// Redirect the user to https://twitter.com/oauth/authenticate?oauth_token=[requestToken]. twitter.getAuthUrl(requestToken) also returns that URL. If he allows your app to access his data, Twitter will redirect him to your callback-URL (defined in Step 1) containing the get-parameters: oauth_token and oauth_verifier. You can use oauth_token (which is the requestToken in Step 2) to find the associated requestTokenSecret. You will need requestToken, requestTokenSecret and oauth_verifier to get an Access Token.

twitter.getAccessToken(requestToken, requestTokenSecret, oauth_verifier, function(error, accessToken, accessTokenSecret, results) {
    if (error) {
        console.log(error);
    } else {
        //store accessToken and accessTokenSecret somewhere (associated to the user)
        //Step 4: Verify Credentials belongs here
    }
});

// Update

twitter.statuses("update", {
        status: "Hello world!"
    },
    accessToken,
    accessTokenSecret,
    function(error, data, response) {
        if (error) {
            // something went wrong
        } else {
            // data contains the data sent by twitter
        }
    }
);