// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        const planetChosen = pickPlanet(listedPlanets);
        console.log(planetChosen);
        addDestinationInfo(document, planetChosen.name, planetChosen.diameter, planetChosen.star, planetChosen.distance, planetChosen.moons, planetChosen.image);
    })
    
    let form = document.querySelector("form");
    form.addEventListener("submit", function (event){
        event.preventDefault();
        let list = document.getElementById("launchForm"); 
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;
        
        //would check for blank inputs. (?)
        /*if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoLevel.value === "") {
            alert("All fields are required!");
            event.preventDefault();
        }*/
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
     })
 });