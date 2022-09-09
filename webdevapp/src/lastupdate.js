export function dateTimeNow() {
    
let nodeDate = require('date-and-time');
let now = nodeDate.format(new Date(), 'DD-MMMM-YYYY, HH:mm:ss');
document.getElementById("serverConnection").innerHTML = "last updated: " + now + " (Local Time)"
}