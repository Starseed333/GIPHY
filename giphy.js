console.log("inside js");

// initial array of music artists
var topics =["Lindsey Stirling", "Shakira", "Taylor Swift"];


// displayMusicInfo function re-renders the HTML to display the appropirate content

function displayMusicInfo (){

	var music =$(this).attr("data-name");
	var queryURL = "http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=music";

	$.ajax({
		url: queryURL,
		method: "GET"
	})

	.done(function(response){
		


		
	});
}
