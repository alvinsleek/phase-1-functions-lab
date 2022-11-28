const headquaters = 42;

function distanceFromHqInBlocks(passlocation) {
    if (passlocation > 42 )}
        return (passengerlocation - headquaters);
function distanceFromHqInBlocks(passLocation) {
    if (passengerLocation > 42 ){
        return (passLocation - headquaters);
    }

    else{
        return(headquaters - passlocation);
        return(headquaters - passLocation);
    }
}

function distanceFromHqInFeet(passlocation){
    const distanceTravelledInFeet = distanceFromHqInBlocks(passlocation);
function distanceFromHqInFeet(passLocation){
    const distanceTravelledInFeet = distanceFromHqInBlocks(passLocation);
    return distanceTravelledInFeet * 264;
}

@ -27,8 +28,8 @@ function distanceTravelledInFeet(distanceTravelledInFeet, distanceFromHqInBlocks
    return distance * 264;
}

function calculatesFarePrice(start,end){
    const distance = distanceTravelledInFeet(start, end);}
function calculatesFarePrice(start,destination){
    const distance = distanceTravelledInFeet(start, destination);}
    let fare;
    if (distance <= 400) {
        return fare = 0;
    }
