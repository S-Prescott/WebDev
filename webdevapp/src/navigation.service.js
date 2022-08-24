// export function toggletoMT() {
//     var x = document.getElementById("min/max");
//     var y = document.getElementById("mostTradedSym");
//     if (y.style.display === "none"){
//         y.style.display = "block";
//         x.style.display = "none";
//     } 
// }

// export function toggleMinMax() {
//     var x = document.getElementById("min/max");
//     var y = document.getElementById("mostTradedSym");
//     if (x.style.display === "none"){
//         x.style.display = "block";
//         y.style.display = "none";
//     }
// }

export function toggleMovingAvgG() {
    var x = document.getElementById("MovingAvgG");
    var y = document.getElementById("VolatilityG");
    var z = document.getElementById("CurrentPrice");
    if (x.style.display === "none"){
        x.style.display = "block";
        y.style.display = "none";
        z.style.display = "none";
    }
}

export function toggleVolatilityG() {
    var x = document.getElementById("MovingAvgG");
    var y = document.getElementById("VolatilityG");
    var z = document.getElementById("CurrentPrice");
    if (y.style.display === "none"){
        y.style.display = "block";
        x.style.display = "none";
        z.style.display = "none";
    } 
}

export function toggleCurrentPrice() {
    var x = document.getElementById("MovingAvgG");
    var y = document.getElementById("VolatilityG");
    var z = document.getElementById("CurrentPrice");
    if (z.style.display === "none"){
        x.style.display = "none";
        y.style.display = "none";
        z.style.display = "block";
    }
}

// export function toggleValueCache() {
//     var x = document.getElementById("CurrentPrice");
//     var y = document.getElementById("ValueCache");
//     if (y.style.display === "none"){
//         y.style.display = "block";
//         x.style.display = "none";
//     } 
// }

