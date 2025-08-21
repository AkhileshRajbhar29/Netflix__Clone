let button_left=document.querySelector(".hidden_left");
let button_right=document.querySelector(".hidden_right");
let card_container=document.querySelector(".card_container");

button_left.style.display="none";

button_right.addEventListener("click", function() {
    card_container.style.justifyContent="end";
    // card_container.style.transforn="translateX(-100px)";
    button_right.style.display="none";
    button_left.style.display="block";
});

button_left.addEventListener("click", function() {
    card_container.style.justifyContent="start";
    // card_container.style.transform = "translateX(0)";
    button_left.style.display="none";
    button_right.style.display="block";
});







