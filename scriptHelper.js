// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {

                const list = document.getElementById("missionTarget");

                list.innerHTML = `
                <h2>Mission Destination</h2>
                <ul>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ul>
                <img src="${imageUrl}">
                `;
 }
 
 function validateInput(testInput) {
    if(testInput === ""){
        return "Empty";
    }
    if(!isNaN(Number(testInput))){
        return "Is a Number";
    }
    else{
        return "Not a Number";
    }
 }

 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    //fuelLevel = fuelLevel;
    const head = document.getElementById("launchStatus");
    
    document.getElementById("pilotStatus").innerHTML =`Pilot ${pilot} is ready for launch`;
    document.getElementById("copilotStatus").innerHTML =`Co-pilot ${copilot} is ready for launch`;

    if(fuelLevel < 10000){
        document.getElementById("faultyItems").style.visibility = `visible`;
        document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
        head.innerHTML = `Shuttle Not Ready for Launch`;
        head.style.color = "red";
    }
    else{
        document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch";
    }
    if(cargoLevel > 10000){
        document.getElementById("faultyItems").style.visibility = `visible`;
        document.getElementById("cargoStatus").innerHTML = `Cargo mass too heavy for launch`;
        head.innerHTML = `Shuttle Not Ready for Launch`;
        head.style.color = "red";
    }
    else{
        document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
    }
    if(cargoLevel <= 10000 && fuelLevel >= 10000){
        head.innerHTML = `Shuttle is Ready for Launch`;
        head.style.color = "green";
    }
 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    return planets[Math.floor(Math.random()*planets.length)]; 
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;