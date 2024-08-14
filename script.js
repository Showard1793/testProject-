// RUN FORM SUBMISSION AND PLANET TRAVEL +++
window.addEventListener("load", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();

    // Get values from the form +++
        let pilotName = document.querySelector("input[name='pilotName']").value;
        let copilotName = document.querySelector("input[name='copilotName']").value;
        let fuelLevel = document.querySelector("input[name='fuelLevel']").value;
        let cargoMass = document.querySelector("input[name='cargoMass']").value;

    // Call formSubmission with these values
        formSubmission(document, pilotName, copilotName, fuelLevel, cargoMass);
              
    //Display Random Planet Data
        (async function() {
            const planets = await myFetch();
            const selectedPlanet = pickPlanet(planets);
            
            addDestinationInfo(
                document,
                selectedPlanet.name,
                selectedPlanet.diameter,
                selectedPlanet.star,
                selectedPlanet.distance,
                selectedPlanet.moons,
                selectedPlanet.image
            );
        })();
});
});