console.log('this is loaded');

//twitter personal key & token
exports.twitterKeys = {
  consumer_key: '<l3rT9HQZZwHW4nEiQpJpLESub>',
  consumer_secret: '<JNQiJ7L8wjVYqcDjF1OxLH6HlKBN5wHaJv5IwDy303Fg4SCsOO>',
  access_token_key: '< 214564089-w6Y3IQgSh48ViBJvPAYDbtkzQsbPLjgEs1rqQ0C6>',
  access_token_secret: '< 97HytOkqrRdvVdziWei29bEilewjE1XIVZBSqPobxx63P>',
}
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

//spotify 
var spotifyApi = new SpotifyWebApi({
  clientId : 'fcecfc72172e4cd267473117a17cbd4d',
  clientSecret : 'a6338157c9bb5ac9c71924cb2940e1a7',
  redirectUri : 'http://www.example.com/callback'
});

//imbd