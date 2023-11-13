// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets = myFetch();
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
        response.json().then(function(json){
            for(i = 0; i < json.length; i++){
                addDestinationInfo(window, json[i].name, json[i].diameter, json[i].star, json[i].distance, json[i].moons, json[i].imageUrl)
            }
        });
    });
    })
    
 });