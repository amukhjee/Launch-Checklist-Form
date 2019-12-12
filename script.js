// Write your JavaScript code here!

      window.addEventListener("load", function() {
         let form = document.querySelector("form");
         form.addEventListener("submit", function(event) {
            let pilotnameInput = document.querySelector("input[name=pilotName]");
            let copilotNameInput =document.querySelector("input[name=copilotName]");
            let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
            let cargoMassInput = (document.querySelector("input[name=cargoMass]"));
            
            if (pilotnameInput.value.length=== 0 || copilotNameInput.value.length===0 || cargoMassInput.value.length===0 || fuelLevelInput.value.length===0){
               alert("All fields are required!");
               event.preventDefault();
            }
            
            else{
               //alert(isNaN(fuelLevelInput.value));
               if (!isNaN(pilotnameInput.value)|| !isNaN(copilotNameInput.value) || isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)){
                 // console.log(typeof(pilotnameInput.value));
                 // console.log(isNaN(fuelLevelInput.value));
                  alert("Make sure to enter the valid information for each field!");
                  event.preventDefault();
               }
               
               else{
                  
                  document.getElementById("pilotStatus").innerHTML=`<li value=1 style="visibility: visible"> Pilot ${pilotnameInput.value} is ready</li>`;
                  event.preventDefault();
                  document.getElementById("copilotStatus").innerHTML=`<li value=2 style="visibility: visible"> Co-pilot ${copilotNameInput.value} is ready</li>`;
                  event.preventDefault();
                     if(fuelLevelInput.value>10000 && cargoMassInput.value<10000){
                        document.getElementById("fuelStatus").innerHTML="<li value=3 style='visibility: visible'> Fuel level high enough for launch</li>";
                        document.getElementById("cargoStatus").innerHTML="<li value=4 style='visibility: visible'> Cargo mass low enough for launch</li>";
                        document.getElementById("launchStatus").innerHTML="<span style='color: green;'> Shuttle Is Ready For Launch</span>"; 
                     }
                     else{
                        if(fuelLevelInput.value<10000){
                           document.getElementById("fuelStatus").innerHTML="<li value=3 style='visibility: visible'> There is not enough fuel for the journey</li>";
                           event.preventDefault();
                           document.getElementById("launchStatus").innerHTML="<span style='color: red'> Shuttle is not ready for launch</span>"}
                           else{
                              document.getElementById("fuelStatus").innerHTML="<li value=3 style='visibility: visible'> Fuel level high enough for launch</li>";
                              event.preventDefault();
                              document.getElementById("launchStatus").innerHTML="<span style='color: red'> Shuttle is not ready for launch</span>"}

                          if(cargoMassInput.value>10000){
                           document.getElementById("cargoStatus").innerHTML="<li value=4 style='visibility: visible'> There is too much mass for the shuttle to take off</li>";
                           event.preventDefault();
                           document.getElementById("launchStatus").innerHTML="<span style='color: red'> Shuttle not ready for launch</span>"
                           }else{
                              document.getElementById("cargoStatus").innerHTML="<li value=4 style='visibility: visible'> Cargo mass low enough for launch</li></ol>";
                              event.preventDefault();
                              document.getElementById("launchStatus").innerHTML="<span style='color: red'> Shuttle not ready for launch</span>"
                        }
                     }               
            }               
   }
});
      });    
         
   
//This block of code shows how to format the HTML once you fetch some planetary JSON!

window.addEventListener("load", function() {
   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then( function(json) {
      const div = document.getElementById("missionTarget");
      for (i=0; i<json.length; i++){
         let randNum = Math.floor(Math.random()*json.length);
         //console.log(randNum);
      div.innerHTML=`
      <h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[randNum].name}</li>
   <li>Diameter: ${json[randNum].diameter}</li>
   <li>Star: ${json[randNum].star}</li>
   <li>Distance from Earth: ${json[randNum].distance}</li>
   <li>Number of Moons: ${json[randNum].moons}</li>
</ol>
<img src="${json[randNum].image}">
`;
break;
      }
      });
   });
});