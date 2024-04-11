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



