let guestCount = 0;
let homeCount = 0;

let timeEl = document.getElementById("time");  // This is for GUEST
let timeS = document.getElementById("times"); // This is for HOME

function incrementGuest(value) {
    guestCount += value;
    timeEl.textContent = guestCount;
}

function incrementHome(value) {
    homeCount += value;
    timeS.textContent = homeCount;
}
