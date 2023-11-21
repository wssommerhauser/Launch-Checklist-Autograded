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
        
        if (validateInput(pilot) === "Is a Number" || validateInput(pilot) === "Empty"){
            alert("pilot name must be a string.");
            event.preventDefault();
        }
        else if (validateInput(copilot) === "Is a Number" || validateInput(copilot) === "Empty"){
            alert("copilot name must be a string.");
            event.preventDefault();
        }
        else if (validateInput(fuelLevel) === "Not a Number" || validateInput(fuelLevel) === "Empty"){
            alert("fuel level must be a number.");
            event.preventDefault();
        }
        else if (validateInput(cargoLevel) === "Not a Number" || validateInput(cargoLevel) === "Empty"){
            alert("cargo name must be a number.");
            event.preventDefault();
        }
       else{
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
       }
     })
     
 });