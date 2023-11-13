// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
    //     response.json().then(function(json){
    //         for(i = 0; i < json.length; i++){
                const list = document.getElementById("missionTarget");

                list.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">
                `;

                /*list.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${json[i].name}</li>
                    <li>Diameter: ${json[i].diameter}</li>
                    <li>Star: ${json[i].star}</li>
                    <li>Distance from Earth: ${json[i].distance}</li>
                    <li>Number of Moons: ${json[i].moons}</li>
                </ol>
                <img src="${json[i].imageUrl}">
                `;*/
    //         }
    //     });
    // });
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
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
    fuelLevel = fuelLevel;
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
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;