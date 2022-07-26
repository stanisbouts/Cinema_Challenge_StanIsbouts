import MovieList from './reservation.json' assert {type: 'json'}

// init chair objects
let chairs = [];
for(let i = 1; i<= 50; i++){
    chairs.push({number: i, occupied: false});
}

// occupy the given seat
function occupy(seat_number){
    chairs[seat_number -1].occupied = true;
}

// exercise 3
occupyExample();


// draw chaires on screen
showMovieSeats();


function resetOccupation(){
    for(let i =0; i< chairs.length; i++){
        chairs[i].occupied = false;
    }
}

// get movieList from json
let movielist = document.getElementById("movie_list");
// on diffrent movie chosen
movielist.addEventListener('change', function handleChange(event) {
    resetOccupation();

    MovieList.Movies.forEach(function(movie){

        // check how much tickets are reserved
        let amount_reserved = 0;
        if(movie.name == event.target.value){
            movie.Reservations.forEach(function(reservarion){
                amount_reserved = amount_reserved + reservarion.amount;
            })
        }
        console.log(amount_reserved);

        // occupy the seats in order
        for(let i =1; i< amount_reserved + 1; i++){
            occupy(i);
        }
    });

    showMovieSeats();
  });



function showMovieSeats(movie){
    // clear seats list on screen
    document.getElementById("Lists").replaceChildren();
    // for each chair check availability
    chairs.forEach(function (chair){
        let temp_chair = document.getElementById("chair").content.cloneNode(true)
        temp_chair.querySelector("p").innerHTML = chair.number;
    
        if(chair.occupied){
            temp_chair.getElementById("seat_number").classList.add('occupied');
        }
        else{
            temp_chair.getElementById("seat_number").classList.add('free');
            
        }
    
        document.getElementById("Lists").append(temp_chair);
    });
}


// occupies the seats from assignment 3
function occupyExample(){
    let occupied_chaires = [1,2,11,12,13,20,21,22,23,24,25,32,33];

    occupied_chaires.forEach(function (chair){
        occupy(chair);
    });
}


///// reservation functions ////


// Fill dropdown with each movie in json
MovieList.Movies.forEach(function(movie){
    let movie_dropdown = document.getElementById("movie_list")
    var option = document.createElement("option");
    option.value = movie.name;
    option.text = movie.name;
    movie_dropdown.add(option);
});


/// onclick for reservation
document.getElementById("reserve").onclick = function(){
    let date = document.getElementById("date").value
    let people_amount = document.getElementById("amount").value
    let movie = document.getElementById("movie_list").value
 

    console.log(MovieList.Movies[1].name);
    MovieList.Movies[1].name = "test";
    console.log(MovieList.Movies[1].name);

    // check if occupy is not over max amount
    
    console.log(date);
    console.log(people_amount);
    console.log(movie);
}
