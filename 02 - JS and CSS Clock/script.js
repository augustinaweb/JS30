document.addEventListener("DOMContentLoaded", function(event) {

    const hourHand = document.querySelector("div.hand.hour-hand");
    const minuteHand = document.querySelector("div.hand.min-hand");
    const secondHand = document.querySelector("div.hand.second-hand");

    let currentTime = new Date();

    let hours = currentTime.getHours();
    if (hours > 12) {
        hours = hours % 12;
    }
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    console.log("it is " + hours + " hours " + minutes + " minutes and " + seconds + " seconds!");

    // By default origin is set to (50% 50% 0) - (x y z)
    function transformOrigin(x) {
        return x.style.transformOrigin = "100% 50% 0";
    }

    // Set transformOrigin to clock center
    transformOrigin(hourHand);
    transformOrigin(minuteHand);
    transformOrigin(secondHand);

    function rotateHandle(x, y) {    
        return x.style.transform = `rotate(${y}deg)`;
    }

    // initial rotation degrees
    let hourDeg = (hours * 360 / 12) + (360 * minutes / (60 * 60)) + (360 * seconds / (60 * 60 * 60)) + 90;
    let minuteDeg = (360 * minutes / 60) + (360 * seconds / (60 * 60)) + 90;
    let secondDeg = (360 * seconds / 60) + 90;

    // rubber duck method

    // incrementally rotation degrees
    let hourDegInc = 360 / (60 * 60 * 12);
    let minuteDegInc = 360 / (60 * 60);
    let secondDegInc = 360 / 60;

    // initial rotation action
    rotateHandle(hourHand, hourDeg);
    rotateHandle(minuteHand, minuteDeg);
    rotateHandle(secondHand, secondDeg);

    // further incremental rotation
    setInterval(intervalSet, 1000);

    function intervalSet() {
        secondDeg += secondDegInc;
        minuteDeg += minuteDegInc;
        hourDeg += hourDegInc;
        rotateHandle(secondHand, secondDeg); 
        rotateHandle(minuteHand, minuteDeg);  
        rotateHandle(hourHand, hourDeg);  
    }

});

//  traukuliai nuo "transition-timing-function"