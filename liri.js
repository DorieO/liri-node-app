//get keys
// link to keys.js
var liriKey = ("twitter", "spotify", "imbd");

// rquest
var request = require('request');
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) 
  }
})



if(!Object.keys) Object.keys = function(o){
     if (o !== Object(o))
          throw new TypeError('Object.keys called on non-object');
     var ret=[],p;
     for(p in o) if(Object.prototype.hasOwnProperty.call(o,p)) ret.push(p);
     return ret;
}




//twit
client.post('statuses/update', {status: 'I Love Twitter'},  function(error, tweet, response) {
  if(error) throw error;
  console.log(tweet);  // Tweet body. 
  console.log(response);  // Raw response object. 
});


//imbd
	var imdb = require('imdb-api');

	var movie;
	imdb.getReq({ name: 'The Toxic Avenger' }, function(err, things) {
    movie = things;
});

//throwing everything but the kitchen sink into this because I don't know how to put everything together!
var fs = require(‘fs’);
//to read our API results
fs.readFile(‘movies.txt’, ‘utf8’, function(error, data) {
	
	console.log(data);

	var dataArr = data.split(‘, ‘);

	console.log(dataArr);

//to write our API results
var fs = require(‘fs’);

fs.writeField(‘movies.txt, ‘Bambi, Kujo, Cinderella’)

	if(err) {
		return console.log(err);
}

console.log(‘movies.txt was updated’);
});

//Maybe ther eshould be a require too????

