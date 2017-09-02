var cartoons = ["SpongeBob", "The Power Puff Girls", "Mario Brothers", "Tom and Jerry", "Barbie", "Care Bears", "Scooby Doo", "Ninja Turtles", "Charlie Brown"];

	 
	function displaycartoonInfo(){
		
		$("#cartoonsView").html("");     
		$("#cartoonsView").empty();     
		var cartoon = $(this).attr("data-name");


		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + cartoon + "&api_key=e70a957107e04cb3914b984791604db5&limit=10";
		$.ajax({
			url: queryURL, 
			method: "GET"
		})


	     .done(function(response) {
	         var results = response.data;
	         	for(var i=0; i < results.length; i++){
	            	if (results[i].rating == "r" || results[i].rating == "pg-13"){
	            	
	            } 

	           	 var gifDiv = $("<div>");
	           	 gifDiv.addClass("gifDiv");


	         	 var rating = $("<p>").text("Rating: " + results[i].rating);
	         	 gifDiv.append(rating);
	         	 
	             
	             var cartoonImage = $("<img>");
	           
	             cartoonImage.attr("src", results[i].images.fixed_height_still.url);
	             cartoonImage.attr("data-still", results[i].images.fixed_height_still.url);
	             cartoonImage.attr("data-animate", results[i].images.fixed_height.url);
	             cartoonImage.attr("data-state", "still");
	 			 cartoonImage.addClass("image");
	             gifDiv.append(cartoonImage);
	             
	             

				 $("#cartoonsView").prepend(gifDiv);

	          
	           
	         }
        
    	}); 	
	};




	       
 		$(document.body).on("click", '.image', function(){

			var state = $(this).attr('data-state');

            if ( state === "still"){
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
            }else{
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-animate", "still");
            }
            
		});
	




	function renderButtons(){ 
	
		$('#buttonsView').empty();
		
		for (var i = 0; i < cartoons.length; i++){
		
		    var b = $("<button>")
		    b.addClass("cartoon");  
		    b.attr("data-name", cartoons[i]); 
		    b.text(cartoons[i]); 
		    $("#buttonsView").append(b);
		}
	}
	
	
	

	$("#addcartoon").on("click", function(){
	
		$('#cartoonsView').html("");     

		var cartoon = $("#cartoon-input").val().trim();
	
		cartoons.push(cartoon);
		

		renderButtons();
		
		return false;
	})
	
	$(document).on("click", ".cartoon", displaycartoonInfo);
	
	renderButtons();
	






