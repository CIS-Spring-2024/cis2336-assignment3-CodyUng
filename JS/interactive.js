let scrollContainer = document.querySelector(".imggallery");
let rightarrw = document.getElementById("rightarrw");
let leftarrw = document.getElementById("leftarrw");
scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

leftarrw.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -=900;
});

rightarrw.addEventListener("click", ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft +=900;
});

// Number Interval Validation Check on Orders

// Validation of smoothie bowls
function ordervali1() {
    var a = document.getElementById("i1").value;
    if (a <= 0 || a >= 6) {
        alert("Smoothie Bowl: Please order between 1-5 items");
    }
    else {
        alert("You have ordered " + a + " " + "smoothie bowls."); ;
    }
};

// Validation of tuna bowls
function ordervali2() {
    var b = document.getElementById("i2").value;
    if (b <= 0 || b >= 6) {
        alert("Seared Tuna Bowl: Please order between 1-5 items");
    }
    else {
        alert("You have ordered " + b + " " + "seared tuna bowls."); ;
    }
};

// Validation of healthy bowls

function ordervali3() {
    var c = document.getElementById("i3").value;
    if (c <= 0 || c >= 6) {
        alert("Healthy Lunch Bowl: Please order between 1-5 items");
    }
    else {
        alert("You have ordered " + c + " " + "healthy lunch bowls."); ;
    }
};

// Validation of casseroles

function ordervali4() {
    var d = document.getElementById("i4").value;
    if (d <= 0 || d >= 6) {
        alert("Cowboy Casserole: Please order between 1-5 items");
    }
    else {
        alert("You have ordered " + d + " " + "cowbow casseroles."); ;
    }
};

// Validation of fried chickens

function ordervali5() {
    var e = document.getElementById("i5").value;
    if (e <= 0 || e >= 6) {
        alert("Fried Chicken: Please order between 1-5 items");
    }
    else {
        alert("You have ordered " + e + " " + "fried chickens."); ;
    }
};

// Validation of buttered chicken

function ordervali6() {
    var f = document.getElementById("i6").value;
    if (f <= 0 || f >= 6) {
        alert("Buttered Chicken: Please order between 1-5 items");
    }
    else {
        alert("You have ordered " + f + " " + "buttered chickens."); ;
    }
};




