// console.log("This is to confirm my JS file is linked");

// TODO create form to populate buttons.
// Initial array of animals
var animals = ["Cat", "Dogs", "Rabbit", "Panda"];
console.log(animals);

// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayAnimalGif() {

    var animal = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=SDLB8SCsqhI3vVpJjEBiua7kOsGf4ndr&q=" + animals + "&limit=10&offset=0&rating=PG&lang=en";

    // Creates AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        Console.log("This is my Ajax")
        // Creates a div to hold the movie
        $("")
    });
}

// Function for displaying movie data
function renderButtons() {

    // Deletes the movies prior to adding new movies
    // (this is necessary otherwise you will have repeat buttons)
    $("#buttons-view").empty();
    // Loops through the array of movies
    for (var i = 0; i < animals.length; i++) {

        // Then dynamicaly generates buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var a = $("<button>").addClass("btn btn-warning animal").attr("data-name",animals[i]).text(animals[i]);
        // Added a data-attribute
        a.attr("data-name", animals[i]);
        // Provided the initial button text
        a.text(animals[i]);
        // Added the button to the buttons-view div
        $("#buttons-view").append(a);
    }
}

// This function handles events where the add movie button is clicked
$("#add-animal").on("click", function (event) {
    event.preventDefault();
    // This line of code will grab the input from the textbox
    var animal = $("#animal-input").val();

    // The movie from the textbox is then added to our array
    animals.push(animal);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
    console.log(animal)
});

// Adding click event listeners to all elements with a class of "movie"
$(document).on("click", ".movie", displayAnimalGif);

// Calling the renderButtons function to display the intial buttons
renderButtons();

// Enter an animal name.
// When click on submit-button, it generates a button with the animal your entered.
// It alos generates 10 giphies from the APi.
// Displays the rating for each
