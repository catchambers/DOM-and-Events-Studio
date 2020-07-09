// Write your JavaScript code here.
// Remember to pay attention to page loading!

//everything in this function will execute onload event
function init() {
    //reference buttons
    let landButton = document.getElementById("landing");
    let takeoffButton = document.getElementById("takeoff");
    let missionAbortButton = document.getElementById("missionAbort");
    let upButton = document.getElementById("up");
    let downButton = document.getElementById("down");
    let leftButton = document.getElementById("left");
    let rightButton = document.getElementById("right");

    let rocket = document.getElementById("rocket")
    let positionX = 0;
    let positionY = 0;

    //will return boolean
    let response = window.confirm("Confirm that the shuttle is ready for takeoff.")
    if (response === true) {
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
        document.getElementById("shuttleBackground").style.backgroundColor = "blue";
        document.getElementById("spaceShuttleHeight").innerHTML = "10000";  
    };

    landButton.addEventListener("click", function() {
        window.alert("The shuttle has landed.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = "0";
    });

    missionAbortButton.addEventListener("click", function() {
        let response = window.confirm("Confirm that you want to abort the mission.")
        if (response === true) {
        document.getElementById("flightStatus").innerHTML = "Mission aborted.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = "0";
        }
    });

    upButton.addEventListener("click", function() {
        let shuttleHeight = Number(document.getElementById("spaceShuttleHeight").innerHTML);
        shuttleHeight += 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = String(shuttleHeight);
        //let move = parseInt(rocket.style.bottom) + 10 + "px";
        moveRocket(0,-10);
    });

    downButton.addEventListener("click", function() {
        let shuttleHeight = Number(document.getElementById("spaceShuttleHeight").innerHTML);
        shuttleHeight -= 10000;
        document.getElementById("spaceShuttleHeight").innerHTML = String(shuttleHeight);
        moveRocket(0,10);
    });

    leftButton.addEventListener("click", function() {
        moveRocket(-10,0);
    });

    rightButton.addEventListener("click", function() {
        moveRocket(10,0);
    });

    function moveRocket(moveX, moveY) {
        positionX += moveX;
        positionY += moveY;
        rocket.style.transform = `translate(${positionX}px, ${positionY}px)`;
    }

}


window.onload = init;

