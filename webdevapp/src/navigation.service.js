
export function toggleMovingAvgGToday() {
    var a1 = document.getElementById("MovingAvgGToday");
    var a2 = document.getElementById("MovingAvgGYesterday");
    var a3 = document.getElementById("MovingAvgGTwoDaysAgo");
    var b1 = document.getElementById("VolatilityGToday");
    // var b2 = document.getElementById("VolatilityGYesterday");
    // var b3 = document.getElementById("VolatilityGTwoDaysAgo");
    var c1 = document.getElementById("CurrentPriceToday");
    var c2 = document.getElementById("CurrentPriceYesterday");
    var c3 = document.getElementById("CurrentPriceTwoDaysAgo");
    if (a1.style.display === "none"){
        a1.style.display = "block";
        a2.style.display = "none";
        a3.style.display = "none";
        b1.style.display = "none";
        // b2.style.display = "none";
        // b3.style.display = "none";
        c1.style.display = "none";
        c2.style.display = "none";
        c3.style.display = "none";
    }
}
export function toggleMovingAvgGYesterday() {
    var a1 = document.getElementById("MovingAvgGToday");
    var a2 = document.getElementById("MovingAvgGYesterday");
    var a3 = document.getElementById("MovingAvgGTwoDaysAgo");
    var b1 = document.getElementById("VolatilityGToday");
    // var b2 = document.getElementById("VolatilityGYesterday");
    // var b3 = document.getElementById("VolatilityGTwoDaysAgo");
    var c1 = document.getElementById("CurrentPriceToday");
    var c2 = document.getElementById("CurrentPriceYesterday");
    var c3 = document.getElementById("CurrentPriceTwoDaysAgo");
    if (a2.style.display === "none"){
        a1.style.display = "none";
        a2.style.display = "block";
        a3.style.display = "none";
        b1.style.display = "none";
        // b2.style.display = "none";
        // b3.style.display = "none";
        c1.style.display = "none";
        c2.style.display = "none";
        c3.style.display = "none";
    }
}

export function toggleMovingAvgGTwoDaysAgo() {
    var a1 = document.getElementById("MovingAvgGToday");
    var a2 = document.getElementById("MovingAvgGYesterday");
    var a3 = document.getElementById("MovingAvgGTwoDaysAgo");
    var b1 = document.getElementById("VolatilityGToday");
    // var b2 = document.getElementById("VolatilityGYesterday");
    // var b3 = document.getElementById("VolatilityGTwoDaysAgo");
    var c1 = document.getElementById("CurrentPriceToday");
    var c2 = document.getElementById("CurrentPriceYesterday");
    var c3 = document.getElementById("CurrentPriceTwoDaysAgo");
    if (a3.style.display === "none"){
        a1.style.display = "none";
        a2.style.display = "none";
        a3.style.display = "block";
        b1.style.display = "none";
        // b2.style.display = "none";
        // b3.style.display = "none";
        c1.style.display = "none";
        c2.style.display = "none";
        c3.style.display = "none";
    }
}

export function toggleVolatilityGToday() {
    var a1 = document.getElementById("MovingAvgGToday");
    var a2 = document.getElementById("MovingAvgGYesterday");
    var a3 = document.getElementById("MovingAvgGTwoDaysAgo");
    var b1 = document.getElementById("VolatilityGToday");
    // var b2 = document.getElementById("VolatilityGYesterday");
    // var b3 = document.getElementById("VolatilityGTwoDaysAgo");
    var c1 = document.getElementById("CurrentPriceToday");
    var c2 = document.getElementById("CurrentPriceYesterday");
    var c3 = document.getElementById("CurrentPriceTwoDaysAgo");
    if (b1.style.display === "none"){
        a1.style.display = "none";
        a2.style.display = "none";
        a3.style.display = "none";
        b1.style.display = "block";
        // b2.style.display = "none";
        // b3.style.display = "none";
        c1.style.display = "none";
        c2.style.display = "none";
        c3.style.display = "none";
    }
}
// export function toggleVolatilityGYesterday() {
//     var a1 = document.getElementById("MovingAvgGToday");
//     var a2 = document.getElementById("MovingAvgGYesterday");
//     var a3 = document.getElementById("MovingAvgGTwoDaysAgo");
//     var b1 = document.getElementById("VolatilityGToday");
//     var b2 = document.getElementById("VolatilityGYesterday");
//     var b3 = document.getElementById("VolatilityGTwoDaysAgo");
//     var c1 = document.getElementById("CurrentPriceToday");
//     var c2 = document.getElementById("CurrentPriceYesterday");
//     var c3 = document.getElementById("CurrentPriceTwoDaysAgo");
//     if (b2.style.display === "none"){
//         a1.style.display = "none";
//         a2.style.display = "none";
//         a3.style.display = "none";
//         b1.style.display = "none";
//         b2.style.display = "block";
//         b3.style.display = "none";
//         c1.style.display = "none";
//         c2.style.display = "none";
//         c3.style.display = "none";
//     }
// }
// export function toggleVolatilityGTwoDaysAgo() {
//     var a1 = document.getElementById("MovingAvgGToday");
//     var a2 = document.getElementById("MovingAvgGYesterday");
//     var a3 = document.getElementById("MovingAvgGTwoDaysAgo");
//     var b1 = document.getElementById("VolatilityGToday");
//     var b2 = document.getElementById("VolatilityGYesterday");
//     var b3 = document.getElementById("VolatilityGTwoDaysAgo");
//     var c1 = document.getElementById("CurrentPriceToday");
//     var c2 = document.getElementById("CurrentPriceYesterday");
//     var c3 = document.getElementById("CurrentPriceTwoDaysAgo");
//     if (b3.style.display === "none"){
//         a1.style.display = "none";
//         a2.style.display = "none";
//         a3.style.display = "none";
//         b1.style.display = "none";
//         b2.style.display = "none";
//         b3.style.display = "block";
//         c1.style.display = "none";
//         c2.style.display = "none";
//         c3.style.display = "none";
//     }
// }

export function toggleCurrentPriceToday() {
    var a1 = document.getElementById("MovingAvgGToday");
    var a2 = document.getElementById("MovingAvgGYesterday");
    var a3 = document.getElementById("MovingAvgGTwoDaysAgo");
    var b1 = document.getElementById("VolatilityGToday");
    // var b2 = document.getElementById("VolatilityGYesterday");
    // var b3 = document.getElementById("VolatilityGTwoDaysAgo");
    var c1 = document.getElementById("CurrentPriceToday");
    var c2 = document.getElementById("CurrentPriceYesterday");
    var c3 = document.getElementById("CurrentPriceTwoDaysAgo");
    if (c1.style.display === "none"){
        a1.style.display = "none";
        a2.style.display = "none";
        a3.style.display = "none";
        b1.style.display = "none";
        // b2.style.display = "none";
        // b3.style.display = "none";
        c1.style.display = "block";
        c2.style.display = "none";
        c3.style.display = "none";
    }
}
export function toggleCurrentPriceYesterday() {
    var a1 = document.getElementById("MovingAvgGToday");
    var a2 = document.getElementById("MovingAvgGYesterday");
    var a3 = document.getElementById("MovingAvgGTwoDaysAgo");
    var b1 = document.getElementById("VolatilityGToday");
    // var b2 = document.getElementById("VolatilityGYesterday");
    // var b3 = document.getElementById("VolatilityGTwoDaysAgo");
    var c1 = document.getElementById("CurrentPriceToday");
    var c2 = document.getElementById("CurrentPriceYesterday");
    var c3 = document.getElementById("CurrentPriceTwoDaysAgo");
    if (c2.style.display === "none"){
        a1.style.display = "none";
        a2.style.display = "none";
        a3.style.display = "none";
        b1.style.display = "none";
        // b2.style.display = "none";
        // b3.style.display = "none";
        c1.style.display = "none";
        c2.style.display = "block";
        c3.style.display = "none";
    }
}
export function toggleCurrentPriceTwoDaysAgo() {
    var a1 = document.getElementById("MovingAvgGToday");
    var a2 = document.getElementById("MovingAvgGYesterday");
    var a3 = document.getElementById("MovingAvgGTwoDaysAgo");
    var b1 = document.getElementById("VolatilityGToday");
    // var b2 = document.getElementById("VolatilityGYesterday");
    // var b3 = document.getElementById("VolatilityGTwoDaysAgo");
    var c1 = document.getElementById("CurrentPriceToday");
    var c2 = document.getElementById("CurrentPriceYesterday");
    var c3 = document.getElementById("CurrentPriceTwoDaysAgo");
    if (c3.style.display === "none"){
        a1.style.display = "none";
        a2.style.display = "none";
        a3.style.display = "none";
        b1.style.display = "none";
        // b2.style.display = "none";
        // b3.style.display = "none";
        c1.style.display = "none";
        c2.style.display = "none";
        c3.style.display = "block";
    }
}