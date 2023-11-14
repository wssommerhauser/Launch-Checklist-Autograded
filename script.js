// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        const planetChosen = pickPlanet(listedPlanetsResponse);
        addDestinationInfo(document, planetChosen.name, planetChosen.diameter, planetChosen.star, planetChosen.distance, planetChosen.moons, planetChosen.imageUrl);
        //formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
    })

 });