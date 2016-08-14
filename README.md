# AcrosticBot

A node.js twitter script that generates an acrostic for the word of your choice and tweets it out. 

### Installation
Clone this repository, create a new Heroku app, and link your github respotiory.

Create a new app on apps.twitter.com. Grab your keys, go to https://dashboard.heroku.com/apps/YOURAPP/settings, and create some custom Heroku config variables:
-accessToken
-tokenSecret
-consumerKey
-consumerSecret

Then, choose your starting word and create another config variable with key myWord.

### Initializing
Use Heroku Scheduler to run the script once a day. Use:
```
node index.js --app YOURAPPNAME
```
