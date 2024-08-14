// MAKE VALIDATE INPUT FUNCTION+++

function validateInput(input) {
    input = input.trim(); 

    if (input === "") {
        return "Empty"; 
    } else if (isNaN(parseFloat(input))) {
        return "Not a Number";
    } else if (!isNaN(parseFloat(input))) {
        return "Is a Number";
    } else {
        return "Invalid";
    }
}

// MAKE FORM SUBMISSION FUNCTION

function formSubmission(document, pilot, copilot, fuelLevel, cargoMass) {

    // Validate inputs
    let pilotStatus = validateInput(pilot);
    let copilotStatus = validateInput(copilot);
    let fuelStatus = validateInput(fuelLevel);
    let cargoStatus = validateInput(cargoMass);

    //Create JS variables
    let launchStatus = document.getElementById("launchStatus");
    let faultyItems = document.getElementById("faultyItems");

    //Send alerts if requirements are not met
        if (pilotStatus === "Empty" || copilotStatus === "Empty" || fuelStatus === "Empty" || cargoStatus === "Empty") {
            alert("All fields are required.");
            return;
        }

        if (pilotStatus === "Is a Number" || copilotStatus === "Is a Number") {
            alert("Pilot and Co-pilot names must be strings.");
            return;
        }        

        if (fuelStatus === "Not a Number" || cargoStatus === "Not a Number") {
            alert("Fuel level and cargo mass must be numbers.");
            return;
        }            

              
//CHECK FUEL LEVEL AND CARGOMASS AND UPDATE STATUS

        if (fuelLevel < 10000) {
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} Ready`;
            document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} Ready`;
            document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch.`;
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";

        } else if (cargoMass > 10000) {
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} Ready`;
            document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} Ready`;
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for launch.";
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle not ready for launch";
            launchStatus.style.color = "red";

        } else{
            document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} Ready`;
            document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} Ready`;
            faultyItems.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle is ready for launch";
            launchStatus.style.color = "green";
        }
}

          

//TASK 3: Planet Travel
            
    //Fetch Planet JSON +++
    
    async function myFetch() {
        const response = await fetch("https://handlers.education.launchcode.org/static/planets.json"); 
        const planetsReturned = await response.json();       
            return planetsReturned;
    }
                
    //Randomly Select Planet +++
            
    function pickPlanet(planets) {
        const randomIndex = Math.floor(Math.random() * planets.length);
            return planets[randomIndex];
    }
                
    //Add Destination Info           
    
    function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
        const missionTargetDiv = document.getElementById("missionTarget");
        
        missionTargetDiv.innerHTML = `
                    
                    <h2>Mission Destination</h2>
                    <ol>
                        <li>Name: ${name}</li>
                        <li>Diameter: ${diameter}</li>
                        <li>Star: ${star}</li>
                        <li>Distance from Earth: ${distance}</li>
                        <li>Number of Moons: ${moons}</li>
                    </ol>
                    <img src="${imageUrl}" alt="Image of ${name}">
                `;
    }