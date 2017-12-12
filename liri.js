var keys = require('./keys.js');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
// console.log(keys);

console.log(process.argv[2])
var userInput = process.argv[2];
// Make it so liri.js can take in one of the following commands:
// if (userInput === "my-tweets") {
//     getTweets()
// }
// else if (userInput === "spotify-this-song"){

// }

// for(var i = 0; i < 123; i++) {
//     console.log(i);
//     if (i == 21) {
//         break;
//     }
// }


// my-tweets

// spotify-this-song

// movie-this

// do-what-it-says

switch (userInput) {
    case "my-tweets":
         getTweets()
        break;
    case "spotify-this-song":
        getSpotify()
         break;
    case "movie-this":
        getMovies()
        break;
    case "do-what-it-says":
        sayWhat()
        break;


    default:
        console.log("Sorry i cannot do that for you, PLease ask me (my-tweets, spotify-this-song, movie-thisdo-what-it-says)");
        break;
}

function getTweets (){

    var client = new Twitter(keys.tKeys);

    var params = { screen_name: 'realdonaldtrump' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            console.log(tweets.length);
            for(var i = 0; i < tweets.length; i++){
                console.log("======================");
                console.log(tweets[i].user.name);
                console.log(tweets[i].text);

            }
        }
    });

}

function getSpotify () {
    // Artist(s)

    // The song's name

    // A preview link of the song from Spotify

    // The album that the song is from
    var userSongSearch = "";
    for(var i = 3; i < process.argv.length; i++){
        if(userSongSearch == "") {
            userSongSearch = userSongSearch + process.argv[i];
        }else {
            userSongSearch = userSongSearch + " " + process.argv[i];
        }
    }
    console.log(userSongSearch);

    var spotify = new Spotify(keys.sKeys);

    spotify.search({type: 'track', query: userSongSearch }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("Artist: ", data.tracks.items[0].artists[0].name); 
        console.log("Name: ", data.tracks.items[0].name); 
        console.log("Link: ", data.tracks.items[0].external_urls.spotify); 
        console.log("Album: ", data.tracks.items[0].album.name); 
    });
};

function getMovies () {

};

function sayWhat () {

};
