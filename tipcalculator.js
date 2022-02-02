function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numofpeople = document.getElementById("peopleamt").value;
    if (billAmt === "" || serviceQual == 0) {
        alert("please enter values");
        return;
    }
    if (numofpeople === "" || numofpeople <= 1) {
        numofpeople = 1;
        document.getElementById("each").style.display = "none";
    }
    else {
        document.getElementById("each").style.display = "block";
    }

    //cvalculation of the tip
    var total = (billAmt * serviceQual) / numofpeople;
    //round to two decimal places
    total = Math.round(total * 100) / 100;
    //next line allows us to alwas have two digits after the decimal points
    total = total.toFixed(2);
    //Display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;


}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
//click to call function
document.getElementById("calculate").onclick = function () {
    calculateTip();
}